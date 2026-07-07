// 우리집 영어 스테이지 — 오프라인 지원 서비스워커
// 전략: 네트워크 우선 → 실패 시 캐시 (항상 최신 코드, 오프라인에서도 앱 셸 동작)
const CACHE = 'english-stage-v4';
const ASSETS = ['./', './index.html', './data_kid.js', './data_adult.js', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  // cache:'reload' — 브라우저 HTTP 캐시를 우회해 새 버전 설치 시 구버전 파일 혼입 방지
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // 같은 출처 GET만 처리 — Gemini API·폰트 등 외부 요청은 건드리지 않음
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    // 5초 네트워크 타임아웃: 신호가 약해도 캐시로 빠르게 폴백 (흰 화면 방지)
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 5000);
    try {
      const r = await fetch(e.request, { signal: ctl.signal });
      if (r.ok) { // 404 등 에러 응답은 캐시하지 않음
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    } catch (err) {
      const m = await caches.match(e.request, { ignoreSearch: true });
      return m || caches.match('./index.html');
    } finally {
      clearTimeout(t);
    }
  })());
});

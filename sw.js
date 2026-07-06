// 우리집 영어 스테이지 — 오프라인 지원 서비스워커
// 전략: 네트워크 우선 → 실패 시 캐시 (항상 최신 코드, 오프라인에서도 앱 셸 동작)
const CACHE = 'english-stage-v1';
const ASSETS = ['./', './index.html', './data_kid.js', './data_adult.js', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
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
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true })
          .then(m => m || caches.match('./index.html'))
      )
  );
});

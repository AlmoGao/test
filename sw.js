// service-worker.js

// 注册 Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker 安装');
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker 激活');
});

// 监听 fetch 事件
self.addEventListener('fetch', (event) => {
  // 不进行任何缓存操作，直接发起网络请求
  console.log('Fetch 事件发生：', event.request.url);
  event.respondWith(fetch(event.request));
});
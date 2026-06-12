import { defineMiddleware } from 'astro:middleware';

const redirects: Record<string, string> = {
  '/blog/ストレスでボロボロになる理由':    '/blog/stress-body-article',
  '/blog/だらだらしたいのは正常　運動について': '/blog/lazy-exercise-article',
  '/blog/なぜ宗教を信じてしまうのか':      '/blog/why-religion-article',
  '/blog/なぜ人はすれ違ってしまうのか':    '/blog/human-misunderstanding-article',
  '/blog/なぜ満たされないのか':           '/blog/why-unsatisfied-article',
  '/blog/何度も失敗を繰り返してしまう理由': '/blog/repeat-failure-article',
  '/blog/甘いものが止まらない理由':        '/blog/sugar-craving-article',
  '/blog/見た目を気にしてしまうのはなぜか': '/blog/appearance-concern-article',
  '/blog/資本主義でカモられないためには':   '/blog/anti-capitalism-trap-article',
  '/blog/人生がつまらない理由（フロー）':   '/blog/boredom-flow-article',
  '/blog/人類進化の時間スケール':          '/blog/evolution-timescale-article',
  '/blog/睡眠':                          '/blog/sleep-article',
  '/blog/脳と意識のタイムラグ':           '/blog/brain-consciousness-lag-article',
  '/blog/不公平に怒るのはなぜか':         '/blog/unfairness-anger-article',
};

export const onRequest = defineMiddleware(({ request }, next) => {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname).replace(/\/$/, '');

  const destination = redirects[pathname];
  if (destination) {
    return Response.redirect(new URL(destination, url.origin), 301);
  }

  return next();
});

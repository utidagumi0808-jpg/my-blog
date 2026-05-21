// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hitono-torisetu.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/ストレスでボロボロになる理由':        '/stress-body-article',
    '/だらだらしたいのは正常　運動について': '/lazy-exercise-article',
    '/なぜ宗教を信じてしまうのか':          '/why-religion-article',
    '/なぜ人はすれ違ってしまうのか':        '/human-misunderstanding-article',
    '/なぜ満たされないのか':               '/why-unsatisfied-article',
    '/何度も失敗を繰り返してしまう理由':    '/repeat-failure-article',
    '/甘いものが止まらない理由':            '/sugar-craving-article',
    '/見た目を気にしてしまうのはなぜか':    '/appearance-concern-article',
    '/資本主義でカモられないためには':      '/anti-capitalism-trap-article',
    '/人生がつまらない理由（フロー）':      '/boredom-flow-article',
    '/人類進化の時間スケール':             '/evolution-timescale-article',
    '/睡眠':                             '/sleep-article',
    '/脳と意識のタイムラグ':              '/brain-consciousness-lag-article',
    '/不公平に怒るのはなぜか':            '/unfairness-anger-article',
  },
});

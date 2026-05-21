// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// ヒトのトリセツ デザイン改善 2025-05 - Atkinsonフォントを M PLUS Rounded 1c に置き換えたため fontProviders 不要
// import { defineConfig, fontProviders } from 'astro/config';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hitono-torisetu.com',

  integrations: [mdx(), sitemap()]
  /* ヒトのトリセツ デザイン改善 2025-05 - Atkinsonフォント設定を無効化
	fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],
	*/,

  adapter: cloudflare()
});
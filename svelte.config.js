import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    }),
  ]
};

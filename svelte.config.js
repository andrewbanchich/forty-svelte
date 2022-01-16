// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      assets: dev ? '' : '/forty-svelte'
    },
    target: '#svelte'
  }
};

export default config;

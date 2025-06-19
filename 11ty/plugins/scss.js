import eleventySass from 'eleventy-sass'

import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import mergeRules from 'postcss-merge-rules'
import sortMediaQueries from 'postcss-sort-media-queries'
import cssnano from 'cssnano'

export function scss(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, {
    postcss: postcss([cssnano, autoprefixer, mergeRules, sortMediaQueries]),
    rev: true,
  })
}

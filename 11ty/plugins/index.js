import eleventyRev from 'eleventy-plugin-rev'

import { scss } from './scss.js'
import { images } from './images.js'
import { htmlPrettier } from './htmlPrettier.js'

export function plugins(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRev)

  scss(eleventyConfig)
  images(eleventyConfig)
  htmlPrettier(eleventyConfig)
}


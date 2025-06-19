import { plugins } from './11ty/plugins/index.js'
import eleventyNavigationPlugin from '@11ty/eleventy-navigation'

export default function (eleventyConfig) {
  plugins(eleventyConfig)

  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addFilter('isArray', function (value) {
    return Array.isArray(value)
  })

  eleventyConfig.addFilter('concat', function (arr, item) {
    return arr.concat(item)
  })

  // Static files
  eleventyConfig.addPassthroughCopy('src/assets/fonts')
  eleventyConfig.addPassthroughCopy('src/assets/images/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/assets/images/pin.svg')
  eleventyConfig.addPassthroughCopy('src/assets/images/services/bg.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/form/bg.png')
  eleventyConfig.addPassthroughCopy('src/assets/images/form/edge.svg')

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    watch: ['./dist/**/*'],
  })

  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      htmlTemplateEngine: ['njk', 'html'],
      includes: 'includes',
      data: 'data',
      input: 'src',
      output: 'dist',
      layouts: 'includes/layouts',
    },
    pathPrefix: '/',
  }
}

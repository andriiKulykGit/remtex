import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

export function images(eleventyConfig) {
  return eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    alt: '',
    input: 'src/assets/images',
    outputDir: 'dist/assets/images',
    urlPath: '/assets/images/',
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
    },
  })
}
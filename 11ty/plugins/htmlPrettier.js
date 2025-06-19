import prettier from 'prettier'

export function htmlPrettier(eleventyConfig) {
  eleventyConfig.addTransform('htmlprettier', function (content) {
    if ((this.page.outputPath || '').endsWith('.html')) {
      let formatted = prettier.format(content, {
        parser: 'html',
        semi: false
      })

      return formatted
    }

    return content
  })
}

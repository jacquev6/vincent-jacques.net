'use strict'

const fs = require('fs-extra')
const htmlMinifier = require('html-minifier')
const markdownIt = require('markdown-it')
const matter = require('gray-matter')
const mustache = require('mustache')
const path = require('path')
const sass = require('node-sass')

website({sourceDirName: 'src', skeletonDirName: 'skel'}).generate({outputDirName: 'docs'})

function website ({sourceDirName, skeletonDirName}) {
  return {generate}

  function generate ({outputDirName}) {
    fs.emptyDirSync(outputDirName)

    fs.copy(skeletonDirName, outputDirName)

    fs.outputFileSync(path.join(outputDirName, 'index.html'), minifyHtml(makeIndexHtml()))

    fs.outputFileSync(path.join(outputDirName, 'index.css'), makeIndexCss())
  }

  function makeIndexHtml () {
    const tags = fs.readJsonSync(path.join(sourceDirName, 'tags.json'))
    const tagsBySlug = {}
    for (var tag of tags) {
      tagsBySlug[tag.slug] = tag
    }

    const markdown = markdownIt({
      html: true,
      typographer: true
    })

    const projects = fs.readdirSync(path.join(sourceDirName, 'projects')).map(fileName => {
      const name = fileName.slice(5, -3)
      const {data: {tags}, content} = matter(fs.readFileSync(path.join(sourceDirName, 'projects', fileName)))
      return {
        name,
        tags: tags.map((tag, index) => Object.assign({first: index === 0}, tagsBySlug[tag])),
        content: markdown.render(content)
      }
    })

    return mustache.render(fs.readFileSync(path.join(sourceDirName, 'index.html'), 'utf8'), {tags, projects})
  }

  function makeIndexCss () {
    return sass.renderSync({
      file: path.join(sourceDirName, 'index.scss'),
      outputStyle: 'compact'
    }).css
  }
}

function minifyHtml (input) {
  return htmlMinifier.minify(
    input, 
    {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeTagWhitespace: true,
      sortAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
    }
  )
}

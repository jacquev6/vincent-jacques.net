'use strict'

const chokidar = require('chokidar')
const express = require('express')
const fs = require('fs-extra')
const htmlMinifier = require('html-minifier')
const markdownIt = require('markdown-it')
const matter = require('gray-matter')
const mustache = require('mustache')
const path = require('path')
const reload = require('reload')
const sass = require('node-sass')

const command = process.argv[2]

const site = website({sourceDirName: 'src', skeletonDirName: 'skel'})

if (command === 'generate') {
  site.generate({outputDirName: 'docs'})
} else if (command === 'serve') {
  site.serve({port: 8000})
}

function website ({sourceDirName, skeletonDirName}) {
  return {generate, serve}

  function generate ({outputDirName}) {
    fs.emptyDirSync(outputDirName)

    fs.copy(skeletonDirName, outputDirName)

    fs.outputFileSync(path.join(outputDirName, 'index.html'), minifyHtml(makeIndexHtml()))

    fs.outputFileSync(path.join(outputDirName, 'index.css'), makeIndexCss())
  }

  function serve ({port}) {
    const app = express()

    app.use(express.static(skeletonDirName))

    const reloadServer = reload(app)

    chokidar.watch(sourceDirName).on('all', () => reloadServer.reload())

    app.get('/', (req, res) => {
      res.type('.html')
      res.send(makeIndexHtml({scripts: ['/reload/reload.js']}))
    })

    app.get('/index.css', (req, res) => {
      res.type('.css')
      res.send(makeIndexCss())
    })

    app.listen(port, () => console.log(`Website live at http://localhost:${port}/`))
  }

  function makeIndexHtml ({scripts}) {
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

    return mustache.render(
      fs.readFileSync(path.join(sourceDirName, 'index.html'), 'utf8'),
      {scripts, tags, projects}
    )
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
      useShortDoctype: true
    }
  )
}

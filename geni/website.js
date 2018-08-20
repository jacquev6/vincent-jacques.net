'use strict'

const browserify = require('browserify')
const chokidar = require('chokidar')
const dedent = require('dedent')
const express = require('express')
const fs = require('fs-extra')
const htmlMinifier = require('html-minifier')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItDeflist = require('markdown-it-deflist')
const matter = require('gray-matter')
const modernizr = require('modernizr')
const mustache = require('mustache')
const path = require('path')
const reload = require('reload')
const sass = require('node-sass')

function website ({sourceDirName, skeletonDirName, outputDirName}) {
  return {generate, serve}

  async function generate () {
    fs.emptyDirSync(outputDirName)

    fs.copySync(skeletonDirName, outputDirName)

    fs.outputFileSync(path.join(outputDirName, 'index.html'), minifyHtml(makeIndexHtml({scripts: []})))

    fs.outputFileSync(path.join(outputDirName, 'index.css'), makeIndexCss())

    fs.outputFileSync(path.join(outputDirName, 'index.js'), await makeIndexJs())

    fs.outputFileSync(path.join(outputDirName, 'modernizr.js'), await makeModernizrJs())
  }

  function serve ({port}) {
    generate()

    const app = express()

    app.get('/', (req, res) => {
      res.type('.html')
      res.send(makeIndexHtml({scripts: ['/reload/reload.js']}))
    })

    app.use(express.static(outputDirName))

    // Reload strategy:
    // - files in sourceDirName are watched here to trigger a reload without restarting the server
    // - generator source files (including the current file) are monitored using nodemon to restart the server
    const reloadServer = reload(app)

    chokidar.watch(sourceDirName, {ignoreInitial: true}).on('all', async (event, path) => {
      await generate()
      console.log('Website regenerated due to', event, 'on', path)
      reloadServer.reload()
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
    markdown.use(markdownItAttrs)
    markdown.use(markdownItAnchor, {permalink: true})
    markdown.use(markdownItDeflist)

    const projects = fs.readdirSync(path.join(sourceDirName, 'projects')).map(fileName => {
      const name = fileName.slice(5, -3)
      const {data: {tags}, content} = matter(fs.readFileSync(path.join(sourceDirName, 'projects', fileName)))
      return {
        slug: name,
        name,
        tags: tags.map((tag, index) => Object.assign({first: index === 0}, tagsBySlug[tag])),
        content: markdown.render(content)
      }
    })

    return mustache.render(
      fs.readFileSync(path.join(sourceDirName, 'index.html'), 'utf8'),
      {
        scripts,
        tags,
        projects,
        md: function () { return function (text, render) { return markdown.render(render(dedent(text))) } }
      }
    )
  }

  function makeIndexCss () {
    return sass.renderSync({
      file: path.join(sourceDirName, 'index.scss'),
      outputStyle: 'compact'
    }).css
  }

  function makeIndexJs () {
    // When this becomes too long, have a look at https://www.npmjs.com/package/watchify
    return new Promise((resolve, reject) =>
      browserify(path.join(sourceDirName, 'index.js'))
        .bundle(function (error, result) {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        })
    )
  }

  function makeModernizrJs () {
    const config = fs.readJsonSync(path.join(sourceDirName, 'modernizr.json'))
    return new Promise((resolve, reject) =>
      modernizr.build(
        config,
        function (result) {
          resolve(result)
        }
      )
    )
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

Object.assign(exports, website({sourceDirName: 'src', skeletonDirName: 'skel', outputDirName: 'docs'}))

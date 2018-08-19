'use strict'

const fs = require('fs-extra')
const matter = require('gray-matter')
const path = require('path')
const markdownIt = require('markdown-it')

const tags = fs.readJsonSync('src/tags.json')
const tagsBySlug = {}
for (var tag of tags) {
  tagsBySlug[tag.slug] = tag
}

const markdown = markdownIt({
  html: true,
  typographer: true
})

const projects = fs.readdirSync(path.join('src', 'projects')).map(fileName => {
  const name = fileName.slice(5, -3)
  const {data: {tags}, content} = matter(fs.readFileSync(path.join('src', 'projects', fileName)))
  return {
    name,
    tags: tags.map((tag, index) => Object.assign({first: index === 0}, tagsBySlug[tag])),
    content: markdown.render(content)
  }
})

console.log(JSON.stringify({tags, projects}))

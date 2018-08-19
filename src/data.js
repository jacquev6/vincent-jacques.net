'use strict'

const fs = require('fs-extra')
const matter = require('gray-matter')
const path = require('path')
const markdownIt = require('markdown-it')

const tags = [
  {slug: 'python', title: 'Python'},
  {slug: 'cpp', title: 'C++'},
  {slug: 'ocaml', title: 'OCaml'},
  {slug: 'javascript', title: 'JavaScript'},

  {slug: 'library', title: 'Library'},
  {slug: 'program', title: 'Program'},
  {slug: 'mobile', title: 'Mobile'},
  {slug: 'web', title: 'Web'},

  {slug: 'visual', title: 'Visual'}
]

const tagsBySlug = {}
for (var tag of tags) {
  tagsBySlug[tag.slug] = tag
}

const markdown = markdownIt({
  html: true,
  typographer: true
})

const projects = [
  'PyGithub',
  'DrawTurksHead',
  'DrawGrammar',
  'Collide',
  'IpMap',
  'ActionTree',
  'variadic',
  'JsOfOCairo',
  'hashids-ocaml',
  'vincent-jacques.net'
].map(name => {
  const {data: {tags: projectTags}, content} = matter(fs.readFileSync(path.join('src', 'projects', name + '.md')))
  return {
    name,
    tags: projectTags.map((tag, index) => Object.assign({first: index === 0}, tagsBySlug[tag])),
    content: markdown.render(content)
  }
})

console.log(JSON.stringify({tags, projects}))

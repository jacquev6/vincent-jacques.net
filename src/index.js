'use strict'

/* global Modernizr */

require('bootstrap')
const $ = require('jquery')

$(function () {
  initializeTagsFilter()

  if (Modernizr.hashchange) {
    highlightProject()
    $(window).on('hashchange', highlightProject)
  }
})

function highlightProject () {
  const fragment = window.location.hash
  console.log(fragment)
  $('h1, h2, h3, h4, h5, h6').removeClass('highlighted')
  if (fragment.startsWith('#')) {
    $(fragment).addClass('highlighted')
  }
}

function initializeTagsFilter () {
  var tagFilters = $('button.tag-filter')
  tagFilters.tooltip()
  tagFilters.on('click', function () {
    if (tagFilters.filter('.active').length === tagFilters.length) {
      tagFilters.removeClass('active')
    }

    $(this).button('toggle')

    if (tagFilters.filter('.active').length === 0 || tagFilters.filter('.active').length === tagFilters.length) {
      tagFilters.addClass('active')
    }

    $('.project').hide()
    tagFilters.filter('.active').each(function () {
      $('.tag-' + $(this).data('tag')).show()
    })
  })
}

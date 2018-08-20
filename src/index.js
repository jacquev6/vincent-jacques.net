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
  $('h1, h2, h3, h4, h5, h6').removeClass('highlighted')
  if (fragment.startsWith('#')) {
    $(document.getElementById(fragment.slice(1))).addClass('highlighted')
  }
}

function initializeTagsFilter () {
  var tagFilters = $('button.tag-filter')
  tagFilters.tooltip({trigger: 'hover'})
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

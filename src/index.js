'use strict'

require('bootstrap')
const $ = require('jquery')

$(function () {
  var tagFilters = $('button.tag-filter')
  tagFilters.on('click', function () {
    if (tagFilters.filter('.active').length === tagFilters.length) {
      tagFilters.removeClass('active')
    }

    $(this).button('toggle')

    if (tagFilters.filter('.active').length === 0 || tagFilters.filter('.active').length === tagFilters.length) {
      tagFilters.addClass('active')
    }

    $(".project").hide()
    tagFilters.filter('.active').each(function () {
      $('.tag-' + $(this).data('tag')).show()
    })
  })
})

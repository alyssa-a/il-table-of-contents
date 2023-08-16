/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
jQuery(document).ready(function ($) {
  let currentDepth = 2;
  let list = '';
  $('#primary .wp-block-heading').each(function () {
    let id = $(this).attr('id');
    let text = $(this).text().trim();
    if (id == undefined) {
      id = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      $(this).attr('id', id);
    }
    let li = '<li><a href="#' + id + '">' + text + '</a></li>';
    let depth = parseInt(this.tagName.substring(1));
    if (depth > currentDepth) {
      // going into nested headings
      list = list.slice(0, -5);
      list += '<ol>' + li;
    } else if (depth < currentDepth) {
      // coming out of nested headings
      let diff = currentDepth - depth;
      for (let i = 0; i < diff; i++) {
        list += '</ol></li>';
      }
      list += li;
    } else {
      list += li;
    }
    currentDepth = depth;
  });
  $('#toc-list').append(list);
  $('#toc-list li');
  $('#toc-list a').click(function () {
    let id = $(this).attr('href');
    $('#toc-modal').modal('hide');
    $('#toc-btn').blur();
    $('html, body').animate({
      scrollTop: $(id).offset().top - 20
    }, 500);
  });
  $('#toc-modal').on('shown.bs.modal', function (e) {
    $('#toc-btn').one('focus', function (e) {
      $(this).blur();
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
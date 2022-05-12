'use strict'
$(function() {
  // 상단바 open class 추가
  // mouseover 이벤트
  $('.gnb1').mouseover(function() {
    $('#top-gnb').addClass('open');
    colorChangeFunc('#top-gnb', 'open');
  })
  $('.gnb1').mouseout(function() {
    $('#top-gnb').removeClass('open');
    colorChangeFunc('#top-gnb', 'open');
  });

  $('.gnb1 li').each(function() {
    $(this).mouseover(function() {
      $(this).addClass('on');
    });
    $(this).mouseout(function() {
      $(this).removeClass('on');
    });
  });
  // 사이드메뉴
  // open class 추가
  $('.sideBtn').click(function() {
    $('.sideGnb').addClass('open');
  });
  $('.closeBtn').click(function() {
    $('.sideGnb').removeClass('open');
  })
  // .inner mouseover
  let downloadEl = $('.sideGnb .sideinner .inner .sideGnb1 li:last-child .inner a');
  downloadEl.mouseover(function() {
    $(this).css('background', '#3268bf');
    $('span', this).css('color', '#fff');
    $('img', this).css('filter', 'invert(1)');
  }).mouseout(function() {
    $(this).css('background', 'none');
    $('span', this).css('color', '#000');
    $('img', this).css('filter', 'invert(0)');
  });
  // 검색창 클릭 이벤트
  $('.openSearch').click(function() {
    $('.searchBox').toggleClass('open');
    colorChangeFunc('.searchBox', 'open');
  });
  function colorChangeFunc(el, name) {
    if($(el).hasClass(name)) {
      $('.header-wrap').css('background', '#fff');
      $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#000');
      $('.search-icon img').css('filter', 'invert(0)');
      $('.sideBtn span').css('background', '#000');
    } else {
      $('.header-wrap').css('background', 'none');
      $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#fff');
      $('.search-icon img').css('filter', 'invert(1)');
      $('.sideBtn span').css('background', '#fff');
    }
  }

  // 상단바 langList click 이벤트 slide 적용
  $('.langBtn').click(function() {
    $('.langList').slideToggle();
  })

  // 메인화면 유투브 영상을 배경으로 사용(JQuery.mb.YTPlayer 사용)
  // https://urliveblogger.blogspot.com/2021/01/jquery-mb-YTplayer.html 참고
  $('#bg-video').YTPlayer();

  // 메인화면 rotate-icon circle의 strock-dashoffset 줄이기
  let strDashOffset = parseInt($('circle').css('stroke-dashoffset'));
  setInterval(strDashOffset);
  setInterval(function(num) {
    if(strDashOffset == 0) {
      strDashOffset = 339;
      setTimeout(function() {}, 1000);
    } else {
      strDashOffset--;
      $('circle').css('stroke-dashoffset', `${strDashOffset}px`);
    }
  }, 50);
});

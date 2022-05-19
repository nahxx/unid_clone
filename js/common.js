'use strict'
$(function() {
  // 상단바 open class 추가
  // mouseover 이벤트
  $('.gnb1').mouseover(function() {
    $('#top-gnb').addClass('open');
    $('.searchBox').removeClass('open');
    $('.langList').slideUp();
    colorChangeFunc('#top-gnb', 'open');
    // $('.gnb2').css('display', 'inline-block');
  })
  $('.gnb1').mouseout(function() {
    $('#top-gnb').removeClass('open');
    colorChangeFunc('#top-gnb', 'open');
    // $('.gnb2').css('display', 'none');
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
    $('.right-box').css('visibility', 'hidden');
    setTimeout(function() {
      $('.langList').slideUp();
      $('.searchBox').removeClass('open');
    }, 500);
  });
  $('.closeBtn').click(function() {
    $('.sideGnb').removeClass('open');
    $('.right-box').css('visibility', 'visible');
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
  $('.openSearch').on('click', function() {
    $('.searchBox').toggleClass('open');
    $('.langList').slideUp();
    $('.langList').css('z-index', 99);
    colorChangeFunc('.searchBox', 'open');
  });
  function colorChangeFunc(el, name) {
    if($(el).hasClass(name)) {
      $('.header-box').css('background', '#fff');
      $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#000');
      $('.search-icon img').css('filter', 'invert(0)');
      $('.sideBtn span').css('background', '#000');
    } else {
      if($('.header-wrap').hasClass('fixed') == false) {
        $('.header-box').css('background', 'none');
        $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#fff');
        $('.search-icon img').css('filter', 'invert(1)');
        $('.sideBtn span').css('background', '#fff');
      }
    }
  }

  // 상단바 langList click 이벤트 slide 적용
  $('.langBtn').click(function() {
    $('.langList').slideToggle();
  })

  // 스크롤 한번 내려가면 상단바 흰색으로 고정
  let wHeight = $(window).height();
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('.header-wrap').addClass('fixed');
      colorChangeFunc('.header-wrap', 'fixed');
      $('.header-box').css('background', 'none');
    } else {
      $('.header-wrap').removeClass('fixed');
      colorChangeFunc('.header-wrap', 'fixed');
      $('.header-box').css('background', 'none');
    }
  });

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

  // span.word 인덱스붙이고 delay 넣기
  wordDelayFunc('.txt-box', 1); // 메인
  wordDelayFunc('.business .inner', 0); // 섹션1
  wordDelayFunc('.about .inner', 0); // 섹션2
  wordDelayFunc('.global .inner', 0); // 섹션3
  wordDelayFunc('.news .inner', 0); // 섹션4

  // word의 span에 delay 적용하기
  function wordDelayFunc(el, num) {
    let wordIdx = 0;
    $(el).find('.word').find('span').each(function() {
      $(this).css('--char-index', wordIdx).css('animation-delay', `${num + (0.03 * wordIdx)}s`);
      wordIdx++;
    });
  }

  // 섹션1 business에 동영상 넣기
  $('#sec1-video1').YTPlayer();
  $('#sec1-video2').YTPlayer();

  // 섹션4 news 영역 .news-bottom p의 글자수 체크 영역(ellipsis)
  $('.news-bottom p').each(function() {
    let elem = $(this);
    let content = elem.text();
    const showTextLeng = 80;
    let lessText = content.substr(0, showTextLeng);
    if(content.length > showTextLeng) {
      elem.text(`${lessText}…`);
    }
  });

  // 푸터영역 왼쪽박스 family-box 서브리스트 on 클래스 toggle
  $('.family-open').click(function() {
    $(this).toggleClass('on');
    $('.family-list').slideToggle();
  });

  // 스크롤이벤트 move 클래스 추가

});

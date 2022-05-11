$(function() {

  // 상단바 open class 추가
  // mouseover 이벤트
  $('.gnb1').mouseover(function() {
    $('#top-gnb').addClass('open');
  })
  $('.gnb1').mouseout(function() {
    $('#top-gnb').removeClass('open');
  });

  $('.gnb1 li').each(function() {
    $(this).mouseover(function() {
      $(this).addClass('on');
    });
    $(this).mouseout(function() {
      $(this).removeClass('on');
    });
  });
  // 검색창 클릭 이벤트
  $('.openSearch').click(function() {
    $('.searchBox').toggleClass('open');
  })

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

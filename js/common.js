$(function() {

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
      console.log(strDashOffset)
      $('circle').css('stroke-dashoffset', `${strDashOffset}px`);
    }
  }, 50);
  
});

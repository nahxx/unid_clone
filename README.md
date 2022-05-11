# unid_clone
<h4>수업 중 포트폴리오용 클론코딩 작업2</h4>
<ol>
  <li>22/05/10 => 사이트 선택 후 html, css 작업 시작 </li>
</ol><br>
<h4>작업 중 느낀점</h4>
<ul>
  <li>22/05/10 메인화면 구현
    <ol>
      <li>메인화면의 배경에 들어갈 동영상이 파일이 아닌 유튜브 링크를 통해 동영상을 가져오는 방식이었다. 기존 홈페이지를 분석한 다음 구글링을 해보니 여러 방법이 나왔다. 처음에는 유투브 링크를 가져와서 iframe으로 나타내는 방법을 사용했으나 여러 아이콘등이 나타나서 지저분해보였다. 좀더 찾아보니 jquery.mb.YTPlayer를 이용하는 방법을 발견했다. jquery.mb.YTPlayer의 css와 스크립트를 불러온 다음 설명을 따라 적용하니 제대로 배경에 적용이 되었다.</li>
      <li>h2의 위치를 지정할 때 css에서 table태그를 사용했는데 자주 쓰던 방식이 아니라서 많이 헤맸다. 그리고 margin: 0 auto를 주려면 width값을 줘야한다는 사실을 다시금 깨달았다.</li>
      <li>h2도 그렇고 특이하게도 대부분의 title 텍스트는 span을 사용해 한글자씩 따로 입력이 되었는데, 아무래도 애니메이션 때문인 것같다. 때문에 배치하는 데에 다소 어려움이 있었다.
      <li>rotate-icon의 경우 before 가상요소의 애니메이션은 이전에 해본 애니메이션과 동일한 방식이어서 적용하는데에 어렵지 않았다.</li>
      <li>svg, circle의 경우 처음에는 손도 대지 못했다. svg의 경우 생소한 태그였는데 구글링을 해보니 svg의 circle 태그를 이용하여 원형을 그릴 수 있다는 걸 알았다. 주로 이번에 구현한 progress bar를 구현할 때 사용하는 것 같았다. progress bar의 경우 circle의 strock-dasharray(점선을 만들어줌), strock-dashoffset(어디서부터 시작할지 지정)을 이용하여 구현하는데, 애니메이션을 사용하는 방법도 있지만 나는 jquery를 이용하여 구현해 보았다. 기존 css에 strock-dashoffset값을 원둘레만큼 지정해 준 다음(strock-dasharray도 반드시 원둘레값으로 지정해주어야한다.) 값이 점점 줄어들도록 setInterval을 사용하여 구현했다. 그리고 0이 되었을 때는 다시 원둘레값으로 지정해주어 setInterval이 계속 지속되도록 만들었다.</li>
      <li>오른쪽의 btn-box의 text와 scroll-icon의 text의 경우 글자가 세로로 나왔기 때문에 rotate를 해서 돌려주었다. scroll-icon의 경우 애니메이션을 지정해주어 움직이도록 구현했다.</li>
    </ol>
  </li>
  <li> 22/05/11 상단바 구현
    <ol>
      <li>상단바 구현을 위해 html입력후 제일 먼저 top-gnb부터 구현했다. css를 주는데 각 박스별로 z-index값이 달라서 이벤트 적용을 해도 클릭이나 hover가 되지않아 애를 먹었다. z-index값을 고치고 header-box를 한번더 div로 감싸주니 해결되었다.</li>
      <li>top-gnb에 마우스를 올리면 가상요소와 서브메뉴가 나타나고 배경이 바뀌도록 구현했다. jquery를 이용하여 mouseover/mouseout과 click이벤트를 사용했다</li>
      <li>언어 박스의 경우 slideToggle을 사용하여 클릭할 때마다 나타났다 사라지도록 구현했다.</li>
    </ol>
  </li>
</ul>

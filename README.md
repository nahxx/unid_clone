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
  <li> 22/05/12 검색창, 사이드메뉴 구현
    <ol>
      <li>검색버튼을 눌렀을 때 뜨는 검색창의 css를 작업했다. 검색버튼을 눌렀을 때 class를 넣어주면서 visibility:visible이 되는데 클래스가 없을때 visibility:hidden을 넣어주지 않아 검색창의 모습이 보이지 않음에도 마우스가 있다고 인식해서 상단바 위치와 섞여서 상단바 리스트의 hover기능이 작동되지 않았다. visibility:hidden때문인 걸 알고 넣어주니 제대로 작동되었다.</li>
      <li>사이드메뉴 버튼을 눌렀을 때 나타는 사이드메뉴창의 css를 작업했다. 한 섹션의 디자인을 하는 것이나 다름없었기 때문에 시간이 꽤나 소요됐다. 주로 정렬이 제대로 되지 않아 애를 먹었다. 결국 좌우 마진값을 줘서 가운데 정렬을 맞췄다.</li>
      <li>원 사이트에서 아이콘을 폰트로 사용해서 나는 비슷한 이미지를 다운받아 대체해서 사용했다. png파일이 검은색이거나 흰색 둘 중 한 색이 기본이어서 css에서 filter 속성을 사용해서 색상을 반전시키거나 다른 색을 입혀주었다.</li>
      <li>transition을 줘서 사이드메뉴를 눌렀을 때 창이 뜨는 움직임과 닫힘버튼을 눌렀을 때 창이 닫히는 움직임에 변화를 주었다. 창이 뜰 때의 움직임은 제대로 구현이 되었지만, 창이 닫힐 때는 transition이 적용되지 않았다. 내일 강사님에게 어쭤볼 예정이다.</li>
      <li>사이드메뉴창 우측상단의 닫힘버튼의 X가 원사이트에는 폰트로 되어있었다. 이번에는 아이콘이미지 대신 가상요소를 사용하여 만들어보았다.</li>
    </ol>
  </li>
  <li> 22/05/13
    <ol>
      <li>사이드메뉴가 닫힐 때 transition이 작동되지 않은 이유를 알았다. 사이드메뉴 section 자체에 transition을 주지 않아서였다. transition을 주었더니 제대로 작동되었다.</li>
      <li>상단바의 자잘한 css 오류를 수정했다. html 태그에도 제대로 짝이 맞지 않은 부분이 있어서 수정해주었다.</li>
      <li>메인 화면의 transition과 애니메이션을 적용했다. 메인의 타이틀같은 경우 transform이 제대로 작동하지 않아서 확인하다가 상위 요소에 display: block을 주었더니 제대로 작동했다.</li>
      <li>맨 위 화면에서 스크롤이 내려왔을 때 상단바의 배경이 하얘지도록 구현했다.</li>
      <li>섹션1 구현시작. title 부분 공동 ui로 디자인해준 다음 박스를 만들어서 동영상을 넣었다. 동영상이 박스에 꽉 차도록 만들고 싶었는데 잘 되지 않았다. 강사님께 물어볼 예정.</li>
    </ol>
  </li>
  <li> 22/05/14
    <ol>
      <li>섹션2, 3, 서브섹션 css 적용. 섹션4의 각 아이콘 위치는 원 사이트를 참고했다. 이미지 위치잡고 정렬하는 게 어려웠다. html에서 왜 요소를 박스로 여러번 감싸는지 알겠다.</li>
      <li>gnb2가 열릴 때 딜레이되지 않고 바로 나타났다가 사라져서 보기 불편했다. 찾아보니 자바스크립트에서 dispaly를 none으로 줬다가 block으로 바꾸도록 구현했기 때문이었다. diplay대신
      visibility로 조절해주니 제대로 delay가 적용되었다.</li>
    </ol>
  </li>
  <li>
    <ol>
     <li>섹션4 css 적용. swiper 코드를 가져와서 적용했다. 사이트에서 가져온 코드에서 몇가지 옵션을 추가해주었다. loop(무한루프), slidesPerView(화면에 보이는 슬라이드 수),</li>
    </ol>
  </li>
</ul>

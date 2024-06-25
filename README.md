word break와 text-wrap 차이

item의 모달 컨텐트는 z-10
header은 z-20
modal을 위한 curtain은 z-30을 주자
modal은 z-40을 주기로

new window.ScrollTimeline()
currenttime을 이용해서 스크롤바 존재여부 확인

처음에 currenttime을 이용해 체크해주고, 높이를 자꾸 바꾸게 만드는 item들의 변화가 있으면(onclick이벤트) currentTime을 체크, 패딩(1rem)을 주거나 빼앗자.

/*
html 태그 class에 "close"를 넣어야 작동합니다.
<span class="close">x</span>
*/
/* class="close"인 모든 요소 가져오기 */
var closebtns = document.getElementsByClassName("close");
var i;

/* 클릭하면 숨김 (close 클래스가 들어있는 엘리먼트보다 한단계 위인 엘리먼트만을 지움) */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

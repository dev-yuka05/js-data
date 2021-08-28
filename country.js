// 아래 코드로 사이트에 접속하면 국가별로 다른페이지를 보이게 할 수 있다.
var type=navigator.appName
if (type=="Netscape")
var lang = navigator.language
else
var lang = navigator.userLanguage

var lang = lang.substr(0,2)

// 한국어
if (lang == "ko")
window.location.replace('https://brazens.studio/ko-KR')

// 일본어
else if (lang == "ja")
window.location.replace('https://brazens.studio/ja-JP')

// 그외 지역은 영어로 연결
else
window.location.replace('https://brazens.studio/en')

class docsh1 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="32px";
    this.style.display="block";
    this.style.borderBottom="solid 3px #2e2e2e";
  }
}
customElements.define('docs-h1',docsh1)

/*
  body 안에 넣으면 됩니다.
  -
  <docs-h1>안녕하세요</docs-h1>
  <script src="./CustomElements.js"></script>
*/ 

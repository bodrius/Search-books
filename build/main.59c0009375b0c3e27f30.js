(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2XI+":function(t,e,n){var o=n("mp5j");t.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,o,i){return'<li class="book-item">'+t.escapeExpression(t.lambda(e,e))+"</li>\n\n"},useData:!0})},L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("8cZI"),n("lmye"),n("L1EO"),n("JBxO"),n("FdtR");var o=function(t,e){var n={},o="SEARCH QUERY";localStorage.getItem(o)?n=JSON.parse(localStorage.getItem(o)):localStorage.setItem(o,JSON.stringify(n)),n[t]?e(n[t]):fetch("https://www.googleapis.com/books/v1/volumes?q="+t).then((function(t){return t.json()})).then((function(i){n[t]=i,localStorage.setItem(o,JSON.stringify(n)),e(i)})).catch((function(t){console.log(t)}))},i=n("2XI+"),a=n.n(i),c=n("jffb"),r=document.querySelector("input"),l=document.getElementById("books-list");function s(t){var e=t.items.map((function(t){return a()(t.volumeInfo.title)})).join("");l.insertAdjacentHTML("beforeend",e)}r.addEventListener("input",c((function(t){void(l.innerHTML=""),t.target.value.length>3&&o(t.target.value,s)}),3e3))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.59c0009375b0c3e27f30.js.map
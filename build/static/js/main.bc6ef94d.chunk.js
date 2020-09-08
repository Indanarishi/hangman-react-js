(this["webpackJsonphangman-react-js"]=this["webpackJsonphangman-react-js"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=n(4),i=n(2),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hangman"),r.a.createElement("p",null,"Find the hidden word - Enter a letter"))},s=function(e){var t=e.wrongLetters.length;return r.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},r.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),r.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),r.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),r.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&r.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),t>1&&r.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&r.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&r.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&r.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&r.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))},m=function(e){var t=e.wrongLetters;return r.a.createElement("div",{className:"wrong-letters-container"},r.a.createElement("div",null,t.length>0&&r.a.createElement("p",null,"Wrong"),t.map((function(e,t){return r.a.createElement("span",{key:t},e)})).reduce((function(e,t){return null===e?[t]:[e,", ",t]}),null)))};var d=function(e){var t=e.selectedWord,n=e.correctLetters;return r.a.createElement("div",{className:"word"},t.split("").map((function(e,t){return r.a.createElement("span",{className:"letter",key:t},n.includes(e)?e:"")})))},E=function(e){var t=e.showNotification;return r.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},r.a.createElement("p",null,"You have already entered this letter"))};function f(e){e(!0),setTimeout((function(){e(!1)}),2e3)}function y(e,t,n){var a="win";return n.split("").forEach((function(t){e.includes(t)||(a="")})),6===t.length&&(a="lose"),a}var g=function(e){var t=e.correctLetters,n=e.wrongLetters,c=e.selectedWord,l=e.setPlayable,o=e.playAgain,i="",u="",s=!0;return"win"===y(t,n,c)?(i="Congratulations! You Won!",s=!1):"lose"===y(t,n,c)&&(i="Unfortunately you lost.",u="... the word was: ".concat(c),s=!1),Object(a.useEffect)((function(){return l(s)})),r.a.createElement("div",{className:"popup-container",style:""!==i?{display:"flex"}:{}},r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,i),r.a.createElement("h3",null,u),r.a.createElement("button",{onClick:o},"Play Again")))},h=(n(12),["application","programming","interface","wizard"]),p=h[Math.floor(Math.random()*h.length)];var v=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),y=Object(i.a)(l,2),v=y[0],w=y[1],x=Object(a.useState)([]),b=Object(i.a)(x,2),j=b[0],L=b[1],O=Object(a.useState)(!1),N=Object(i.a)(O,2),k=N[0],W=N[1];return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var r=t.toLowerCase();p.includes(r)?v.includes(r)?f(W):w((function(e){return[].concat(Object(o.a)(e),[r])})):j.includes(r)?f(W):L((function(e){return[].concat(Object(o.a)(e),[r])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[v,j,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"game-container"},r.a.createElement(s,{wrongLetters:j}),r.a.createElement(m,{wrongLetters:j}),r.a.createElement(d,{selectedWord:p,correctLetters:v})),r.a.createElement(g,{correctLetters:v,wrongLetters:j,selectedWord:p,setPlayable:c,playAgain:function(){c(!0),w([]),L([]);var e=Math.floor(Math.random()*h.length);p=h[e]}}),r.a.createElement(E,{showNotification:k}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.bc6ef94d.chunk.js.map
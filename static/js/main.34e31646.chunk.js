(this["webpackJsonpcolour-grid"]=this["webpackJsonpcolour-grid"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(5),c=t.n(a),i=t(1),l=function(e){return o.a.createElement("button",Object.assign({style:{padding:".5rem .75rem",display:"inline-block",cursor:"pointer",marginRight:".5rem",marginBottom:".5rem",fontSize:".875rem",backgroundColor:"#1c54b9",color:"#fff",border:0}},e))},u=function(e){var n=e.colors,t=e.rectSize,r=e.itemsPerRow,a=e.itemsPerColumn,c=o.a.useRef(null),l=o.a.useCallback((function(e){var n=e.x,r=e.y,o=Object(i.a)(e.color,3),a=o[0],l=o[1],u=o[2];if(c.current){var s=c.current.getContext("2d");s&&(s.fillStyle="rgb(".concat(a,",").concat(l,",").concat(u,")"),s.fillRect(n,r,t,t))}}),[t]),u=o.a.useCallback((function(){for(var e=0,o=0;o<r;o++)for(var c=0;c<a;c++)l({x:o*t,y:c*t,color:n[e]}),e++}),[n,l,a,r,t]);return o.a.useEffect((function(){n.length&&u()}),[n,u]),o.a.createElement("canvas",{ref:c,width:r*t,height:a*t,style:{width:"100%",display:"block",marginBottom:"2rem"}})},s=t(6);function f(e){var n=e.map((function(e){return e/256})),t=Object(i.a)(n,3),r=t[0],o=t[1],a=t[2],c=Math.max(r,o,a),l=Math.min(r,o,a),u=Array(3).fill((c+l)/2),s=Object(i.a)(u,3),f=s[0],m=s[1],h=s[2];if(c===l)f=m=0;else{var d=c-l;switch(m=h>.5?d/(2-c-l):d/(c+l),c){case r:f=(o-a)/d+(o<a?6:0);break;case o:f=(a-r)/d+2;break;case a:f=(r-o)/d+4}f/=6}return[f,m,h]}function m(e){var n=Object(i.a)(e,3),t=n[0],r=n[1],o=n[2];return Math.sqrt(.299*Math.pow(t,2)+.587*Math.pow(r,2)+.114*Math.pow(o,2))}var h={shuffle:function(){return Math.random()-.5},luminance:function(e,n){return m(e)-m(n)}},d={hue:function(e,n){return e.color[0]>n.color[0]?1:e.color[0]<n.color[0]?-1:0},sat:function(e,n){return e.color[1]>n.color[1]?1:e.color[1]<n.color[1]?-1:0},lightness:function(e,n){return e.color[2]>n.color[2]?1:e.color[2]<n.color[2]?-1:0}};t(12);var g=function(){var e=o.a.useState([]),n=Object(i.a)(e,2),t=n[0],r=n[1];function a(e){var n=function(e,n){switch(e){case"luminance":case"shuffle":return Object(s.a)(n).sort(h[e]);case"hue":case"sat":case"lightness":return n.map((function(e,n){return{color:f(e),index:n}})).sort(d[e]).map((function(e){return n[e.index]}));default:return n}}(e,t);r(n)}function c(){r(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:256,r=[],o=e;o<=t;o+=n)for(var a=e;a<=t;a+=n)for(var c=e;c<=t;c+=n){var i=[o,c,a];r.push(i)}return r}())}return o.a.useEffect((function(){c()}),[]),t.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{colors:t,rectSize:5,itemsPerColumn:128,itemsPerRow:256}),o.a.createElement("h2",null,"Sort colours"),o.a.createElement(l,{onClick:function(){return c()}},"Reset"),o.a.createElement(l,{onClick:function(){return a("shuffle")}},"Shuffle"),o.a.createElement(l,{onClick:function(){return a("luminance")}},"Luminance"),o.a.createElement(l,{onClick:function(){return a("hue")}},"Hue"),o.a.createElement(l,{onClick:function(){return a("sat")}},"Sat"),o.a.createElement(l,{onClick:function(){return a("lightness")}},"Lightness")):o.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.34e31646.chunk.js.map
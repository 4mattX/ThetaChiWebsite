import{S as T,i as B,s as D,e as m,t as F,k as y,c as v,a as w,h as I,d as c,m as E,f as P,b as h,W as g,g as Y,J as d,O as C,j as L,n as z,X as M}from"../chunks/index-780ad2c9.js";function O(t){let e,l,r,o=t[0].value+"",n,f,u,b,i,p,j,x;return{c(){e=m("article"),l=m("div"),r=m("h1"),n=F(o),f=y(),u=m("div"),b=y(),i=m("button"),this.h()},l(a){e=v(a,"ARTICLE",{class:!0});var s=w(e);l=v(s,"DIV",{class:!0});var k=w(l);r=v(k,"H1",{style:!0,class:!0});var _=w(r);n=I(_,o),_.forEach(c),k.forEach(c),f=E(s),u=v(s,"DIV",{class:!0}),w(u).forEach(c),b=E(s),i=v(s,"BUTTON",{"aria-label":!0,class:!0}),w(i).forEach(c),s.forEach(c),this.h()},h(){P(r,"color",t[0].value.includes("\u2665")||t[0].value.includes("\u2666")?"hsl(0, 70%, 50%)":"hsl(0, 50%, 5%)"),h(r,"class","svelte-jmwxwj"),h(l,"class","face front svelte-jmwxwj"),h(u,"class","face back svelte-jmwxwj"),i.disabled=p=t[0].isPaired,h(i,"aria-label","Flip card"),h(i,"class","svelte-jmwxwj"),h(e,"class","svelte-jmwxwj"),g(e,"flip",t[0].isFlipped&&!t[0].isPaired),g(e,"paired",t[0].isPaired)},m(a,s){Y(a,e,s),d(e,l),d(l,r),d(r,n),d(e,f),d(e,u),d(e,b),d(e,i),j||(x=C(i,"click",t[1]),j=!0)},p(a,[s]){s&1&&o!==(o=a[0].value+"")&&L(n,o),s&1&&P(r,"color",a[0].value.includes("\u2665")||a[0].value.includes("\u2666")?"hsl(0, 70%, 50%)":"hsl(0, 50%, 5%)"),s&1&&p!==(p=a[0].isPaired)&&(i.disabled=p),s&1&&g(e,"flip",a[0].isFlipped&&!a[0].isPaired),s&1&&g(e,"paired",a[0].isPaired)},i:z,o:z,d(a){a&&c(e),j=!1,x()}}}function S(t,e,l){const r=M();function o(){r("flip",n)}let{card:n}=e;return t.$$set=f=>{"card"in f&&l(0,n=f.card)},[n,o]}class q extends T{constructor(e){super(),B(this,e,S,O,D,{card:0})}}export{q as default};

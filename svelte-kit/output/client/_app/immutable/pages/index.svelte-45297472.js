import{S as C,i as j,s as S,e as p,t as k,k as M,c as l,a as c,h as z,d as a,m as E,b as m,g as _,J as s,n as f}from"../chunks/index-9337fb22.js";function N(i){let e,o,r;return{c(){e=p("a"),o=p("button"),r=k("Login Through NetSuite"),this.h()},l(t){e=l(t,"A",{href:!0});var n=c(e);o=l(n,"BUTTON",{class:!0});var b=c(o);r=z(b,"Login Through NetSuite"),b.forEach(a),n.forEach(a),this.h()},h(){m(o,"class","btn btn-primary my-20"),m(e,"href","/login")},m(t,n){_(t,e,n),s(e,o),s(o,r)},d(t){t&&a(e)}}}function I(i){let e,o,r,t,n,b,g;function q(d,h){return N}let w=q()(i);return{c(){e=p("main"),o=p("form"),r=p("div"),t=p("div"),n=p("h1"),b=k("Fiber Track"),g=M(),w.c(),this.h()},l(d){e=l(d,"MAIN",{class:!0});var h=c(e);o=l(h,"FORM",{});var x=c(o);r=l(x,"DIV",{class:!0});var u=c(r);t=l(u,"DIV",{class:!0});var y=c(t);n=l(y,"H1",{});var v=c(n);b=z(v,"Fiber Track"),v.forEach(a),y.forEach(a),g=E(u),w.l(u),u.forEach(a),x.forEach(a),h.forEach(a),this.h()},h(){m(t,"class","prose"),m(r,"class","flex flex-col min-h-screen justify-center items-center"),m(e,"class","box")},m(d,h){_(d,e,h),s(e,o),s(o,r),s(r,t),s(t,n),s(n,b),s(r,g),w.m(r,null)},p:f,i:f,o:f,d(d){d&&a(e),w.d()}}}async function Y({session:i}){return{props:{token_expiration:i.token_expiration}}}function A(i,e,o){let{token_expiration:r}=e;return i.$$set=t=>{"token_expiration"in t&&o(0,r=t.token_expiration)},[r]}class R extends C{constructor(e){super(),j(this,e,A,I,S,{token_expiration:0})}}export{R as default,Y as load};

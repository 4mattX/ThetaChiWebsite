import{S as m,i as k,s as b,N as g,e as i,c as p,a as u,d as r,g as h,O as y,n as o,t as _,h as d,J as f}from"../chunks/index-9337fb22.js";function v(c){return{c:o,l:o,m:o,p:o,d:o}}function w(c){let e,n=c[1]+"",t;return{c(){e=i("p"),t=_(n)},l(a){e=p(a,"P",{});var s=u(e);t=d(s,n),s.forEach(r)},m(a,s){h(a,e,s),f(e,t)},p:o,d(a){a&&r(e)}}}function x(c){let e,n;return{c(){e=i("h2"),n=_("Loading...")},l(t){e=p(t,"H2",{});var a=u(e);n=d(a,"Loading..."),a.forEach(r)},m(t,a){h(t,e,a),f(e,n)},p:o,d(t){t&&r(e)}}}function A(c){let e,n={ctx:c,current:null,token:null,hasCatch:!1,pending:x,then:w,catch:v,value:1};return g(c[0](),n),{c(){e=i("main"),n.block.c()},l(t){e=p(t,"MAIN",{});var a=u(e);n.block.l(a),a.forEach(r)},m(t,a){h(t,e,a),n.block.m(e,n.anchor=null),n.mount=()=>e,n.anchor=null},p(t,[a]){c=t,y(n,c,a)},i:o,o,d(t){t&&r(e),n.block.d(),n.token=null,n=null}}}async function j({session:c}){return{props:{access_token:c.access_token}}}const E="https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=755&deploy=1&record_type=employee&record_id=-5";function N(c,e,n){let{access_token:t}=e,a;async function s(){return JSON.stringify(await fetch(E,{headers:{Accept:"application/json",Authorization:`Bearer ${t}`}}).then(l=>l.json()))}return c.$$set=l=>{"access_token"in l&&n(2,t=l.access_token)},[s,a,t]}class C extends m{constructor(e){super(),k(this,e,N,A,b,{access_token:2})}}export{C as default,j as load};

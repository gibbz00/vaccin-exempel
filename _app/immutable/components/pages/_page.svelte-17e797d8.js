import{S as $,i as ee,s as te,I as pe,J as ke,m as O,h as k,n as b,b as B,G as v,B as P,k as H,l as S,K as M,f as j,g as Ae,d as Re,t as G,L as ue,M as re,N as de,C as he,a as q,c as F,D as me,E as _e,F as ge,O as x,q as Z,r as N,u as le,w as ie,x as ae,P as ve,y as oe,z as ce,o as Ue,j as Be,Q as Le,R as qe,e as be,T as Fe,U as Me,V as we}from"../../chunks/index-1f4473eb.js";const Ze=[{landskod:"SE",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies","TBE"]},{landskod:"CN",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies","Tyfus","TBE"]},{landskod:"AU",vaccin:["COVID-19","Hepatit B","Rabies"]},{landskod:"IT",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies","TBE"]},{landskod:"GR",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies"]},{landskod:"YE",vaccin:["COVID-19","Hepatit A","Hepatit B","Kolera","Malaria","Polio","Rabies","Tyfus"]},{landskod:"VN",vaccin:["COVID-19","Hepatit A","Hepatit B","Japansk encefalit","Malaria","Rabies","Tyfus"]},{landskod:"RU",vaccin:["COVID-19","Hepatit A","Hepatit B","Japansk encefalit","Malaria","Rabies","TBE"]},{landskod:"PT",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies"]},{landskod:"SG",vaccin:["COVID-19","Hepatit A","Hepatit B","Rabies","Tyfus"]},{landskod:"ZA",vaccin:["COVID-19","Hepatit A","Hepatit B","Malaria","Rabies","Tyfus"]},{landskod:"EG",vaccin:["COVID-19","Hepatit A","Hepatit B","Polio","Rabies","Tyfus"]}];let Ne=(l,e)=>{let t=e;for(let n=0;n<l.length;n++)t=t.filter(s=>{if(s.charAt(n)==l.charAt(n))return s});return t};function Pe(l){let e,t,n,s;return{c(){e=pe("svg"),t=pe("path"),this.h()},l(a){e=ke(a,"svg",{xmlns:!0,class:!0,viewBox:!0});var i=O(e);t=ke(i,"path",{d:!0}),O(t).forEach(k),i.forEach(k),this.h()},h(){b(t,"d",n=l[2][l[0]]),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class",s=`w-7 h-full my-auto ${l[1]}`),b(e,"viewBox","0 0 48 48")},m(a,i){B(a,e,i),v(e,t)},p(a,[i]){i&1&&n!==(n=a[2][a[0]])&&b(t,"d",n),i&2&&s!==(s=`w-7 h-full my-auto ${a[1]}`)&&b(e,"class",s)},i:P,o:P,d(a){a&&k(e)}}}function We(l,e,t){let{type:n}=e,{class:s=""}=e;const a={arrowRightAlt:"m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z",delete:"M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z",edit:"M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z",more_vert:"M24 40q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7T24 40Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7T24 8q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Z",arrowRight:"M20 34V14l10 10Z",expand_more:"m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"};return l.$$set=i=>{"type"in i&&t(0,n=i.type),"class"in i&&t(1,s=i.class)},[n,s,a]}class je extends ${constructor(e){super(),ee(this,e,We,Pe,te,{type:0,class:1})}}function Ie(l,e,t){const n=l.slice();return n[20]=e[t],n[22]=t,n}const Ge=l=>({listItemString:l&4}),ye=l=>({listItemString:l[20]});function ze(l){let e=l[20]+"",t;return{c(){t=Z(e)},l(n){t=N(n,e)},m(n,s){B(n,t,s)},p(n,s){s&4&&e!==(e=n[20]+"")&&le(t,e)},d(n){n&&k(t)}}}function He(l){let e,t,n,s,a,i;const o=l[13].default,d=he(o,l,l[12],ye),c=d||ze(l);function r(){return l[14](l[20])}function f(){return l[15](l[22])}return{c(){e=H("li"),c&&c.c(),t=q(),this.h()},l(p){e=S(p,"LI",{class:!0});var _=O(e);c&&c.l(_),t=F(_),_.forEach(k),this.h()},h(){b(e,"class",n=`cursor-pointer hover:bg-gray-200 px-3 py-2 ${l[3]==l[22]?"bg-gray-100":""}`)},m(p,_){B(p,e,_),c&&c.m(e,null),v(e,t),s=!0,a||(i=[M(e,"click",r),M(e,"mouseenter",f)],a=!0)},p(p,_){l=p,d?d.p&&(!s||_&4100)&&me(d,o,l,l[12],s?ge(o,l[12],_,Ge):_e(l[12]),ye):c&&c.p&&(!s||_&4)&&c.p(l,s?_:-1),(!s||_&8&&n!==(n=`cursor-pointer hover:bg-gray-200 px-3 py-2 ${l[3]==l[22]?"bg-gray-100":""}`))&&b(e,"class",n)},i(p){s||(j(c,p),s=!0)},o(p){G(c,p),s=!1},d(p){p&&k(e),c&&c.d(p),a=!1,re(i)}}}function Je(l){let e,t,n,s,a,i=l[2],o=[];for(let c=0;c<i.length;c+=1)o[c]=He(Ie(l,i,c));const d=c=>G(o[c],1,1,()=>{o[c]=null});return{c(){e=H("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=S(c,"UL",{autofocus:!0,tabindex:!0,class:!0});var r=O(e);for(let f=0;f<o.length;f+=1)o[f].l(r);r.forEach(k),this.h()},h(){b(e,"autofocus",l[1]),b(e,"tabindex","0"),b(e,"class",t=`
				${l[2].length==0?"hidden":""}
				min-w-max 
				text-left 
				text-black
				bg-white 
				border-2 
				rounded-sm 
				shadow-sm 
				border-gray 
				divide-y-2 
				divide-slate-100
			${l[0]}`)},m(c,r){B(c,e,r);for(let f=0;f<o.length;f+=1)o[f].m(e,null);l[16](e),n=!0,l[1]&&e.focus(),s||(a=[M(window,"keydown",l[6]),M(e,"mouseenter",l[17])],s=!0)},p(c,[r]){if(r&4140){i=c[2];let f;for(f=0;f<i.length;f+=1){const p=Ie(c,i,f);o[f]?(o[f].p(p,r),j(o[f],1)):(o[f]=He(p),o[f].c(),j(o[f],1),o[f].m(e,null))}for(Ae(),f=i.length;f<o.length;f+=1)d(f);Re()}(!n||r&2)&&b(e,"autofocus",c[1]),(!n||r&5&&t!==(t=`
				${c[2].length==0?"hidden":""}
				min-w-max 
				text-left 
				text-black
				bg-white 
				border-2 
				rounded-sm 
				shadow-sm 
				border-gray 
				divide-y-2 
				divide-slate-100
			${c[0]}`))&&b(e,"class",t)},i(c){if(!n){for(let r=0;r<i.length;r+=1)j(o[r]);n=!0}},o(c){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)G(o[r]);n=!1},d(c){c&&k(e),ue(o,c),l[16](null),s=!1,re(a)}}}function Ke(l,e,t){let{$$slots:n={},$$scope:s}=e,{listOptions:a}=e,{class:i=""}=e,{keyHandlingActivated:o=!1}=e,{autofocus:d=!1}=e,{itemsInitiallyHidden:c=!1}=e,{selectOnTraverse:r=!1}=e,f=[],{itemsShown:p=!c}=e,_,m=de();function w(g){m("selected",{selected:g,method:"selection"}),t(7,p=!1)}let y;function I(g){if(o||document.activeElement==y){if(g.key=="Enter"&&_!=null&&!r)w(f[_]);else if(a.items.length>0){let C=!1;switch(g.key){case"ArrowDown":_==null&&f.length>0||_+1==f.length?t(3,_=0):t(3,_++,_),C=!0;break;case"ArrowUp":g.preventDefault(),_==null&&f.length>0||_==0?t(3,_=f.length-1):t(3,_--,_),C=!0;break}C&&r&&m("selected",{selected:f[_],method:"traversal"})}}}function A(g){let C=a.items;return a.omit!=null&&a.omit.forEach(T=>{let E=C.indexOf(T);E>-1&&C.splice(E,1)}),a.filter!=null&&(C=a.filter.func(g,C)),t(3,_=void 0),C}const W=g=>w(g),R=g=>t(3,_=g);function V(g){x[g?"unshift":"push"](()=>{y=g,t(4,y)})}const z=()=>y.focus();return l.$$set=g=>{"listOptions"in g&&t(8,a=g.listOptions),"class"in g&&t(0,i=g.class),"keyHandlingActivated"in g&&t(9,o=g.keyHandlingActivated),"autofocus"in g&&t(1,d=g.autofocus),"itemsInitiallyHidden"in g&&t(10,c=g.itemsInitiallyHidden),"selectOnTraverse"in g&&t(11,r=g.selectOnTraverse),"itemsShown"in g&&t(7,p=g.itemsShown),"$$scope"in g&&t(12,s=g.$$scope)},l.$$.update=()=>{l.$$.dirty&384&&t(2,f=(()=>{var g;return p?A((g=a.filter)==null?void 0:g.key):[]})())},[i,d,f,_,y,w,I,p,a,o,c,r,s,n,W,R,V,z]}class Xe extends ${constructor(e){super(),ee(this,e,Ke,Je,te,{listOptions:8,class:0,keyHandlingActivated:9,autofocus:1,itemsInitiallyHidden:10,selectOnTraverse:11,itemsShown:7})}}function Ye(l){const{font:e,borderLeftWidth:t,borderRightWidth:n,paddingLeft:s,paddingRight:a}=window.getComputedStyle(l),i=document.createElement("canvas").getContext("2d");return i.font=e,`${parseFloat(t)+parseFloat(n)+parseFloat(s)+parseFloat(a)+i.measureText(l.value==""?l.placeholder:l.value).width}px`}const Qe=l=>({listItemString:l[1]&8}),Se=l=>({listItemString:l[34]});function xe(l){let e=l[34]+"",t;return{c(){t=Z(e)},l(n){t=N(n,e)},m(n,s){B(n,t,s)},p(n,s){s[1]&8&&e!==(e=n[34]+"")&&le(t,e)},d(n){n&&k(t)}}}function $e(l){let e;const t=l[23].default,n=he(t,l,l[32],Se),s=n||xe(l);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),e=!0},p(a,i){n?n.p&&(!e||i[1]&10)&&me(n,t,a,a[32],e?ge(t,a[32],i,Qe):_e(a[32]),Se):s&&s.p&&(!e||i[1]&8)&&s.p(a,e?i:[-1,-1])},i(a){e||(j(s,a),e=!0)},o(a){G(s,a),e=!1},d(a){s&&s.d(a)}}}function et(l){let e,t,n,s,a,i,o,d,c,r,f,p,_;return o=new je({props:{class:l[5].icon,type:l[6]}}),r=new Xe({props:{selectOnTraverse:l[3],itemsInitiallyHidden:l[2],itemsShown:l[4],listOptions:l[9],class:l[5].list,keyHandlingActivated:l[11],$$slots:{default:[$e,({listItemString:m})=>({34:m}),({listItemString:m})=>[0,m?8:0]]},$$scope:{ctx:l}}}),r.$on("selected",l[29]),{c(){e=H("div"),t=H("div"),n=H("input"),a=q(),i=H("button"),ie(o.$$.fragment),d=q(),c=H("div"),ie(r.$$.fragment),this.h()},l(m){e=S(m,"DIV",{class:!0});var w=O(e);t=S(w,"DIV",{class:!0});var y=O(t);n=S(y,"INPUT",{class:!0,type:!0,placeholder:!0}),a=F(y),i=S(y,"BUTTON",{class:!0});var I=O(i);ae(o.$$.fragment,I),I.forEach(k),y.forEach(k),d=F(w),c=S(w,"DIV",{class:!0});var A=O(c);ae(r.$$.fragment,A),A.forEach(k),w.forEach(k),this.h()},h(){b(n,"class",s=`w-full bg-inherit focus-visible:outline-none ${l[5].input}`),b(n,"type","text"),n.autofocus=l[1],b(n,"placeholder",l[0]),b(i,"class","max-w-min"),b(t,"class","flex h-full"),b(c,"class","absolute inset-x-0"),b(e,"class","relative h-full")},m(m,w){B(m,e,w),v(e,t),v(t,n),ve(n,l[8]),l[27](n),v(t,a),v(t,i),oe(o,i,null),v(e,d),v(e,c),oe(r,c,null),l[30](c),l[31](e),f=!0,l[1]&&n.focus(),p||(_=[M(n,"keydown",l[24]),M(n,"input",l[25]),M(n,"input",l[26]),M(i,"click",l[28])],p=!0)},p(m,w){(!f||w[0]&32&&s!==(s=`w-full bg-inherit focus-visible:outline-none ${m[5].input}`))&&b(n,"class",s),(!f||w[0]&2)&&(n.autofocus=m[1]),(!f||w[0]&1)&&b(n,"placeholder",m[0]),w[0]&256&&n.value!==m[8]&&ve(n,m[8]);const y={};w[0]&32&&(y.class=m[5].icon),w[0]&64&&(y.type=m[6]),o.$set(y);const I={};w[0]&8&&(I.selectOnTraverse=m[3]),w[0]&4&&(I.itemsInitiallyHidden=m[2]),w[0]&16&&(I.itemsShown=m[4]),w[0]&512&&(I.listOptions=m[9]),w[0]&32&&(I.class=m[5].list),w[0]&2048&&(I.keyHandlingActivated=m[11]),w[1]&10&&(I.$$scope={dirty:w,ctx:m}),r.$set(I)},i(m){f||(j(o.$$.fragment,m),j(r.$$.fragment,m),f=!0)},o(m){G(o.$$.fragment,m),G(r.$$.fragment,m),f=!1},d(m){m&&k(e),l[27](null),ce(o),ce(r),l[30](null),l[31](null),p=!1,re(_)}}}function tt(l,e,t){let{$$slots:n={},$$scope:s}=e,{placeholderText:a=""}=e,{autofocus:i=!1}=e,{dynamicWidth:o=!1}=e,{itemsInitiallyHidden:d=!0}=e,{resetInputUponSelect:c=!0}=e,{selectUponClick:r=!1}=e,{selectOnTraverse:f}=e,{itemsShown:p}=e,{elementClasses:_={input:"w-full"}}=e,{iconType:m="arrowRightAlt"}=e,{listItems:w=[]}=e,{listOmit:y=void 0}=e,{listFilter:I=void 0}=e,A="",W,R=A,V,z=de(),g=!1,C,T;Ue(()=>{t(13,T.style.top=`${C.getBoundingClientRect().height}px`,T)}),Be(()=>{o&&V!=null&&t(10,V.style.width=Ye(V),V)});function E(h){t(8,A=h.selected),h.method=="selection"&&t(11,g=!1),r&&u(h.method)}function u(h){A!=""&&(z("selected",{selected:A,method:h}),c&&t(8,A=""))}function D(h){let J=h.key;J=="Enter"?(u("selection"),V.blur()):(J=="ArrowDown"||J=="ArrowUp")&&t(11,g=!0)}const L=h=>D(h);function U(){A=this.value,t(8,A)}const K=()=>t(7,R=A);function X(h){x[h?"unshift":"push"](()=>{V=h,t(10,V)})}const Y=()=>{u("selection")},ne=h=>E(h.detail);function se(h){x[h?"unshift":"push"](()=>{T=h,t(13,T)})}function Q(h){x[h?"unshift":"push"](()=>{C=h,t(12,C)})}return l.$$set=h=>{"placeholderText"in h&&t(0,a=h.placeholderText),"autofocus"in h&&t(1,i=h.autofocus),"dynamicWidth"in h&&t(17,o=h.dynamicWidth),"itemsInitiallyHidden"in h&&t(2,d=h.itemsInitiallyHidden),"resetInputUponSelect"in h&&t(18,c=h.resetInputUponSelect),"selectUponClick"in h&&t(19,r=h.selectUponClick),"selectOnTraverse"in h&&t(3,f=h.selectOnTraverse),"itemsShown"in h&&t(4,p=h.itemsShown),"elementClasses"in h&&t(5,_=h.elementClasses),"iconType"in h&&t(6,m=h.iconType),"listItems"in h&&t(20,w=h.listItems),"listOmit"in h&&t(21,y=h.listOmit),"listFilter"in h&&t(22,I=h.listFilter),"$$scope"in h&&t(32,s=h.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&7340160&&t(9,W={items:w,omit:y,filter:I!=null?{key:R,func:I}:void 0})},[a,i,d,f,p,_,m,R,A,W,V,g,C,T,E,u,D,o,c,r,w,y,I,n,L,U,K,X,Y,ne,se,Q,s]}class lt extends ${constructor(e){super(),ee(this,e,tt,et,te,{placeholderText:0,autofocus:1,dynamicWidth:17,itemsInitiallyHidden:2,resetInputUponSelect:18,selectUponClick:19,selectOnTraverse:3,itemsShown:4,elementClasses:5,iconType:6,listItems:20,listOmit:21,listFilter:22},null,[-1,-1])}}const nt=l=>({option:l&16777216}),Te=l=>({option:l[24]});function st(l){let e=l[24]+"",t;return{c(){t=Z(e)},l(n){t=N(n,e)},m(n,s){B(n,t,s)},p(n,s){s&16777216&&e!==(e=n[24]+"")&&le(t,e)},d(n){n&&k(t)}}}function it(l){let e;const t=l[15].default,n=he(t,l,l[22],Te),s=n||st(l);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),e=!0},p(a,i){n?n.p&&(!e||i&20971520)&&me(n,t,a,a[22],e?ge(t,a[22],i,nt):_e(a[22]),Te):s&&s.p&&(!e||i&16777216)&&s.p(a,e?i:-1)},i(a){e||(j(s,a),e=!0)},o(a){G(s,a),e=!1},d(a){s&&s.d(a)}}}function at(l){let e,t,n,s,a;return t=new lt({props:{placeholderText:l[2],elementClasses:l[7],iconType:l[3],itemsShown:l[4],resetInputUponSelect:!1,selectUponClick:!0,itemsInitiallyHidden:!0,selectOnTraverse:!0,listItems:l[0],listFilter:l[1],$$slots:{default:[it,({listItemString:i})=>({24:i}),({listItemString:i})=>i?16777216:0]},$$scope:{ctx:l}}}),t.$on("selected",l[18]),{c(){e=H("div"),ie(t.$$.fragment),this.h()},l(i){e=S(i,"DIV",{class:!0});var o=O(e);ae(t.$$.fragment,o),o.forEach(k),this.h()},h(){b(e,"class","group rounded-md hover:bg-zinc-300/20")},m(i,o){B(i,e,o),oe(t,e,null),l[21](e),n=!0,s||(a=[M(window,"click",l[16],!0),M(window,"keydown",l[17],!0),M(e,"mouseenter",l[19]),M(e,"mouseleave",l[20])],s=!0)},p(i,[o]){const d={};o&4&&(d.placeholderText=i[2]),o&128&&(d.elementClasses=i[7]),o&8&&(d.iconType=i[3]),o&16&&(d.itemsShown=i[4]),o&1&&(d.listItems=i[0]),o&2&&(d.listFilter=i[1]),o&20971520&&(d.$$scope={dirty:o,ctx:i}),t.$set(d)},i(i){n||(j(t.$$.fragment,i),n=!0)},o(i){G(t.$$.fragment,i),n=!1},d(i){i&&k(e),ce(t),l[21](null),s=!1,re(a)}}}function ot(l,e,t){let{$$slots:n={},$$scope:s}=e,{disallowNonOptionSelection:a=!0}=e,{optionStringItems:i=[]}=e,{optionStringFilter:o}=e,{placeholderText:d}=e,{iconType:c="expand_more"}=e,{iconClass:r={}}=e,{defaultIconClass:f={default:"fill-gray-400 w-8 transition",opened:"-rotate-90",enabled:"fill-black",disabled:"fill-gray-400",groupHover:"group-hover:fill-black"}}=e;Object.keys(f).forEach(u=>{let D=u;if(r[D]==null)t(12,r[D]=f[D],r);else{if(r[D].includes("fill-"))return;D!="groupHover"&&t(12,r[D]=`${f[D]} ${r[D]}`,r)}});let p,_=!1,m,w={input:"p-2"};I(),Le(()=>{I()});let y=de();function I(){let u=`${r.default} ${r.groupHover}`;p&&(u+=` ${r.opened}`),_?u+=` ${r.enabled}`:u+=` ${r.disabled}`,t(7,w.icon=u,w)}function A(u){if(!p&&m.contains(u.target)){t(4,p=!0);return}p&&(m.contains(u.target)||t(4,p=!1))}function W(u){p==!0&&u.key=="Escape"&&t(4,p=!1)}function R(u){if(a&&!i.includes(u.selected))throw new Error(`disallowNonOptionSelection: ${u.selected} not present in option list`);u.method=="selection"&&(t(4,p=!1),I()),y("selected",u)}const V=u=>A(u),z=u=>W(u),g=u=>R(u.detail),C=()=>{t(5,_=!0),I()},T=()=>{t(5,_=!1),I()};function E(u){x[u?"unshift":"push"](()=>{m=u,t(6,m)})}return l.$$set=u=>{"disallowNonOptionSelection"in u&&t(13,a=u.disallowNonOptionSelection),"optionStringItems"in u&&t(0,i=u.optionStringItems),"optionStringFilter"in u&&t(1,o=u.optionStringFilter),"placeholderText"in u&&t(2,d=u.placeholderText),"iconType"in u&&t(3,c=u.iconType),"iconClass"in u&&t(12,r=u.iconClass),"defaultIconClass"in u&&t(14,f=u.defaultIconClass),"$$scope"in u&&t(22,s=u.$$scope)},[i,o,d,c,p,_,m,w,I,A,W,R,r,a,f,n,V,z,g,C,T,E,s]}class ct extends ${constructor(e){super(),ee(this,e,ot,at,te,{disallowNonOptionSelection:13,optionStringItems:0,optionStringFilter:1,placeholderText:2,iconType:3,iconClass:12,defaultIconClass:14})}}function Oe(l,e,t){const n=l.slice();return n[8]=e[t],n}function Ee(l,e,t){const n=l.slice();return n[8]=e[t],n}function rt(l){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function ft(l){let e,t,n,s,a,i,o,d,c,r,f,p,_,m,w,y,I,A,W,R,V,z,g,C=[...l[3]],T=[];for(let u=0;u<C.length;u+=1)T[u]=Ce(Ee(l,C,u));V=new ct({props:{placeholderText:"Välj land!",optionStringItems:[...l[2].keys()],optionStringFilter:Ne,$$slots:{default:[ut,({option:u})=>({11:u}),({option:u})=>u?2048:0]},$$scope:{ctx:l}}}),V.$on("selected",l[7]);let E=l[0]!=""&&Ve(l);return{c(){e=H("body"),t=H("div"),n=H("h1"),s=Z("Vaccinkollen"),a=q(),i=H("h2"),o=Z(`Registrera vilka vaccin du har tagit, samt vilket land du vill resa till
                för att se om du kan åka dit eller behöver vaccinera dig först!`),d=q(),c=H("div"),r=H("div"),f=H("h3"),p=Z("Möjliga vaccin:"),_=q(),m=H("ul");for(let u=0;u<T.length;u+=1)T[u].c();w=q(),y=H("div"),I=H("h3"),A=Z("Rekommenderade  vaccin:"),W=q(),R=H("div"),ie(V.$$.fragment),z=q(),E&&E.c(),this.h()},l(u){e=S(u,"BODY",{class:!0});var D=O(e);t=S(D,"DIV",{class:!0});var L=O(t);n=S(L,"H1",{class:!0});var U=O(n);s=N(U,"Vaccinkollen"),U.forEach(k),a=F(L),i=S(L,"H2",{class:!0});var K=O(i);o=N(K,`Registrera vilka vaccin du har tagit, samt vilket land du vill resa till
                för att se om du kan åka dit eller behöver vaccinera dig först!`),K.forEach(k),d=F(L),c=S(L,"DIV",{class:!0});var X=O(c);r=S(X,"DIV",{class:!0});var Y=O(r);f=S(Y,"H3",{class:!0});var ne=O(f);p=N(ne,"Möjliga vaccin:"),ne.forEach(k),_=F(Y),m=S(Y,"UL",{});var se=O(m);for(let fe=0;fe<T.length;fe+=1)T[fe].l(se);se.forEach(k),Y.forEach(k),w=F(X),y=S(X,"DIV",{class:!0});var Q=O(y);I=S(Q,"H3",{class:!0});var h=O(I);A=N(h,"Rekommenderade  vaccin:"),h.forEach(k),W=F(Q),R=S(Q,"DIV",{class:!0});var J=O(R);ae(V.$$.fragment,J),z=F(J),E&&E.l(J),J.forEach(k),Q.forEach(k),X.forEach(k),L.forEach(k),D.forEach(k),this.h()},h(){b(n,"class","text-5xl font-mono font-normal mb-6 place-self-center"),b(i,"class","text-xl font-sans text-zinc-700 max-w-md"),b(f,"class","mb-3 font-sans font-bold"),b(r,"class","bg-white p-8 rounded-xl "),b(I,"class","mb-3 font-sans font-bold"),b(R,"class","flex flex-col"),b(y,"class","bg-white p-8 font-sans rounded-xl"),b(c,"class","grid sm:grid-flow-col sm:space-x-3 space-y-3 sm:space-y-0"),b(t,"class","bg-[#fecaca] p-20 space-y-3 rounded-xl"),b(e,"class","bg-[#e7e5e4] grid place-content-center w-screen h-screen")},m(u,D){B(u,e,D),v(e,t),v(t,n),v(n,s),v(t,a),v(t,i),v(i,o),v(t,d),v(t,c),v(c,r),v(r,f),v(f,p),v(r,_),v(r,m);for(let L=0;L<T.length;L+=1)T[L].m(m,null);v(c,w),v(c,y),v(y,I),v(I,A),v(y,W),v(y,R),oe(V,R,null),v(R,z),E&&E.m(R,null),g=!0},p(u,D){if(D&10){C=[...u[3]];let U;for(U=0;U<C.length;U+=1){const K=Ee(u,C,U);T[U]?T[U].p(K,D):(T[U]=Ce(K),T[U].c(),T[U].m(m,null))}for(;U<T.length;U+=1)T[U].d(1);T.length=C.length}const L={};D&18432&&(L.$$scope={dirty:D,ctx:u}),V.$set(L),u[0]!=""?E?E.p(u,D):(E=Ve(u),E.c(),E.m(R,null)):E&&(E.d(1),E=null)},i(u){g||(j(V.$$.fragment,u),g=!0)},o(u){G(V.$$.fragment,u),g=!1},d(u){u&&k(e),ue(T,u),ce(V),E&&E.d()}}}function Ce(l){let e,t,n,s=l[8]+"",a,i,o,d;return{c(){e=H("li"),t=H("input"),n=q(),a=Z(s),i=q(),this.h()},l(c){e=S(c,"LI",{});var r=O(e);t=S(r,"INPUT",{type:!0}),n=F(r),a=N(r,s),i=F(r),r.forEach(k),this.h()},h(){b(t,"type","checkbox"),t.__value=l[8],t.value=t.__value,l[6][0].push(t)},m(c,r){B(c,e,r),v(e,t),t.checked=~l[1].indexOf(t.__value),v(e,n),v(e,a),v(e,i),o||(d=M(t,"change",l[5]),o=!0)},p(c,r){r&2&&(t.checked=~c[1].indexOf(t.__value))},d(c){c&&k(e),l[6][0].splice(l[6][0].indexOf(t),1),o=!1,d()}}}function ut(l){let e,t,n,s,a=l[11]+"",i;return{c(){e=H("div"),t=H("img"),s=q(),i=Z(a),this.h()},l(o){e=S(o,"DIV",{class:!0});var d=O(e);t=S(d,"IMG",{class:!0,src:!0}),s=F(d),i=N(d,a),d.forEach(k),this.h()},h(){b(t,"class","mr-2 w-8 h-8"),we(t.src,n=`https://flagcdn.com/${l[2].get(l[11]).landskod.toLowerCase()}.svg`)||b(t,"src",n),b(e,"class","flex items-center")},m(o,d){B(o,e,d),v(e,t),v(e,s),v(e,i)},p(o,d){d&2048&&!we(t.src,n=`https://flagcdn.com/${o[2].get(o[11]).landskod.toLowerCase()}.svg`)&&b(t,"src",n),d&2048&&a!==(a=o[11]+"")&&le(i,a)},d(o){o&&k(e)}}}function Ve(l){let e,t=[...l[2].get(l[0]).vaccin],n=[];for(let s=0;s<t.length;s+=1)n[s]=De(Oe(l,t,s));return{c(){e=H("ul");for(let s=0;s<n.length;s+=1)n[s].c()},l(s){e=S(s,"UL",{});var a=O(e);for(let i=0;i<n.length;i+=1)n[i].l(a);a.forEach(k)},m(s,a){B(s,e,a);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(s,a){if(a&7){t=[...s[2].get(s[0]).vaccin];let i;for(i=0;i<t.length;i+=1){const o=Oe(s,t,i);n[i]?n[i].p(o,a):(n[i]=De(o),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(s){s&&k(e),ue(n,s)}}}function dt(l){let e,t;return{c(){e=H("span"),t=Z("X"),this.h()},l(n){e=S(n,"SPAN",{class:!0});var s=O(e);t=N(s,"X"),s.forEach(k),this.h()},h(){b(e,"class","text-red-500")},m(n,s){B(n,e,s),v(e,t)},d(n){n&&k(e)}}}function ht(l){let e,t;return{c(){e=H("span"),t=Z("✓"),this.h()},l(n){e=S(n,"SPAN",{class:!0});var s=O(e);t=N(s,"✓"),s.forEach(k),this.h()},h(){b(e,"class","text-green-500")},m(n,s){B(n,e,s),v(e,t)},d(n){n&&k(e)}}}function De(l){let e,t,n,s=l[8]+"",a,i;function o(r,f){return f&3&&(t=null),t==null&&(t=!!r[1].includes(r[8])),t?ht:dt}let d=o(l,-1),c=d(l);return{c(){e=H("li"),c.c(),n=q(),a=Z(s),i=q()},l(r){e=S(r,"LI",{});var f=O(e);c.l(f),n=F(f),a=N(f,s),i=F(f),f.forEach(k)},m(r,f){B(r,e,f),c.m(e,null),v(e,n),v(e,a),v(e,i)},p(r,f){d!==(d=o(r,f))&&(c.d(1),c=d(r),c&&(c.c(),c.m(e,n))),f&1&&s!==(s=r[8]+"")&&le(a,s)},d(r){r&&k(e),c.d()}}}function mt(l){let e;return{c(){e=Z("...laddar data")},l(t){e=N(t,"...laddar data")},m(t,n){B(t,e,n)},p:P,i:P,o:P,d(t){t&&k(e)}}}function _t(l){let e,t,n={ctx:l,current:null,token:null,hasCatch:!1,pending:mt,then:ft,catch:rt,blocks:[,,,]};return qe(l[4](),n),{c(){e=be(),n.block.c()},l(s){e=be(),n.block.l(s)},m(s,a){B(s,e,a),n.block.m(s,n.anchor=a),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(s,[a]){l=s,Fe(n,l,a)},i(s){t||(j(n.block),t=!0)},o(s){for(let a=0;a<3;a+=1){const i=n.blocks[a];G(i)}t=!1},d(s){s&&k(e),n.block.d(s),n.token=null,n=null}}}async function gt(l){const e=`https://restcountries.com/v3.1/alpha/${l}`;return(await(await fetch(e)).json())[0].translations.swe.common}function pt(l,e,t){let n=new Map,s=new Set;async function a(){for(let f of Ze)await n.set(await gt(f.landskod),{vaccin:f.vaccin,landskod:f.landskod});for(let f of n.values())for(let p of f.vaccin)s.add(p)}let i="",o=[];const d=[[]];function c(){o=Me(d[0],this.__value,this.checked),t(1,o)}return[i,o,n,s,a,c,d,f=>t(0,i=f.detail.selected)]}class vt extends ${constructor(e){super(),ee(this,e,pt,_t,te,{})}}export{vt as default};

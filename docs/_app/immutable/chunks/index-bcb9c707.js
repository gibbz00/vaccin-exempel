function q(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t&&typeof t=="object"&&typeof t.then=="function"}function B(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(B)}function W(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function dt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function _t(t,e,n,r){if(t){const c=L(t,e,n,r);return t[0](c)}}function L(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function ht(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(e.dirty.length,c.length);for(let s=0;s<l;s+=1)u[s]=e.dirty[s]|c[s];return u}return e.dirty|c}return e.dirty}function mt(t,e,n,r,c,u){if(c){const l=L(e,n,r,u);t.p(l,c)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let $=!1;function J(){$=!0}function K(){$=!1}function Q(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const o=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:Q(1,c,_=>e[n[_]].claim_order,o))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const u=[],l=[];let s=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(u.push(e[i-1]);s>=i;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);u.reverse(),l.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<l.length;i++){for(;o<u.length&&l[i].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(l[i],f)}}function V(t,e){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){$&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function bt(){return N(" ")}function xt(){return N("")}function vt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t,e,n){const r=new Set;for(let c=0;c<t.length;c+=1)t[c].checked&&r.add(t[c].__value);return n||r.delete(e),Array.from(r)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,c=!1){et(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function D(t,e,n,r){return O(t,c=>c.nodeName===e,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];n[s.name]||u.push(s.name)}u.forEach(l=>c.removeAttribute(l))},()=>r(e))}function wt(t,e,n){return D(t,e,n,Y)}function Et(t,e,n){return D(t,e,n,Z)}function nt(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function jt(t){return nt(t," ")}function Nt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e){t.value=e==null?"":e}function At(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}let y;function d(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){m().$$.before_update.push(t)}function Mt(t){m().$$.on_mount.push(t)}function Pt(t){m().$$.after_update.push(t)}function Tt(){const t=m();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=rt(e,n,{cancelable:r});return c.slice().forEach(l=>{l.call(t,u)}),!u.defaultPrevented}return!0}}function qt(t,e){return m().$$.context.set(t,e),e}const p=[],P=[],v=[],T=[],z=Promise.resolve();let E=!1;function F(){E||(E=!0,z.then(S))}function Bt(){return F(),z}function j(t){v.push(t)}const w=new Set;let x=0;function S(){const t=y;do{for(;x<p.length;){const e=p[x];x++,d(e),ct(e.$$)}for(d(null),p.length=0,x=0;P.length;)P.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];w.has(n)||(w.add(n),n())}v.length=0}while(p.length);for(;T.length;)T.pop()();E=!1,w.clear(),d(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const k=new Set;let h;function it(){h={r:0,c:[],p:h}}function lt(){h.r||g(h.c),h=h.p}function H(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Lt(t,e){const n=e.token={};function r(c,u,l,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=s);const o=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==u&&a&&(it(),ut(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),lt())}):e.block.d(1),o.c(),H(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[u]=o),f&&S()}if(U(t)){const c=m();if(t.then(u=>{d(c),r(e.then,1,e.value,u),d(null)},u=>{if(d(c),r(e.catch,2,e.error,u),d(null),!e.hasCatch)throw u}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ot(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Dt(t,e){const n={},r={},c={$$scope:1};let u=t.length;for(;u--;){const l=t[u],s=e[u];if(s){for(const i in l)i in s||(r[i]=1);for(const i in s)c[i]||(n[i]=s[i],c[i]=1);t[u]=s}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function zt(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function st(t,e,n,r){const{fragment:c,on_mount:u,on_destroy:l,after_update:s}=t.$$;c&&c.m(e,n),r||j(()=>{const i=u.map(B).filter(W);l?l.push(...i):g(i),t.$$.on_mount=[]}),s.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,r,c,u,l,s=[-1]){const i=y;d(t);const o=t.$$={fragment:null,ctx:null,props:u,update:q,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...A)=>{const C=A.length?A[0]:_;return o.ctx&&c(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&at(t,a)),_}):[],o.update(),f=!0,g(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){J();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&H(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),K(),S()}d(i)}class Ut{$destroy(){ot(this,1),this.$destroy=q}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as A,zt as B,ot as C,I as D,Bt as E,_t as F,mt as G,pt as H,ht as I,V as J,Z as K,Et as L,vt as M,gt as N,g as O,Tt as P,P as Q,St as R,Ut as S,Ct as T,Lt as U,Ot as V,$t as W,dt as X,bt as a,yt as b,jt as c,lt as d,xt as e,H as f,it as g,X as h,It as i,qt as j,Pt as k,Y as l,wt as m,q as n,Mt as o,tt as p,kt as q,At as r,ft as s,ut as t,N as u,nt as v,Nt as w,Ft as x,Ht as y,st as z};
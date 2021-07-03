var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e}let i,a=!1;function s(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function l(t,e){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=s(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const c=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);c.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<c.length&&i[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){a&&!n?l(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(t){const e={};for(const n of t)e[n.name]=n.value;return e}function p(t){i=t}const $=[],g=[],_=[],x=[],b=Promise.resolve();let y=!1;function w(t){_.push(t)}let k=!1;const E=new Set;function v(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];p(e),C(e.$$)}for(p(null),$.length=0;g.length;)g.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];E.has(e)||(E.add(e),e())}_.length=0}while($.length);for(;x.length;)x.pop()();y=!1,k=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const N=new Set;function M(t,e){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,b.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(c,s,l,u,f,h,m=[-1]){const $=i;p(c);const g=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:s.context||[]),callbacks:n(),dirty:m,skip_bound:!1};let _=!1;if(g.ctx=l?l(c,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),_&&M(c,t)),e})):[],g.update(),_=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();s.intro&&((x=c.$$.fragment)&&x.i&&(N.delete(x),x.i(b))),function(t,n,c,i){const{fragment:a,on_mount:s,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,c),i||w((()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(w)}(c,s.target,s.anchor,s.customElement),a=!1,v()}var x,b;p($)}let T;function A(e){let n,o,r,c,i;return{c(){n=f("main"),o=f("h1"),r=h("Hello "),c=h(e[0]),i=h("!"),this.c=t},m(t,e){u(t,n,e),l(n,o),l(o,r),l(o,c),l(o,i)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&d(n)}}}function H(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class B extends T{constructor(t){super(),this.shadowRoot.innerHTML="<style>main{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}@media(min-width: 640px){main{max-width:none}}</style>",S(this,{target:this.shadowRoot,props:m(this.attributes),customElement:!0},H,A,c,{name:0}),t&&(t.target&&u(t.target,this,t.anchor),t.props&&(this.$set(t.props),v()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[0]}set name(t){this.$set({name:t}),v()}}customElements.define("gordian-widget",B);return new B({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
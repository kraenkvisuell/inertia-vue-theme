(()=>{var e,t,r={372:(e,t,r)=>{"use strict";var s=r(734);const n=require("@vue/server-renderer");var o=r(640);const a=require("@inertiajs/server");var i=r.n(a),c=r(259);const l={components:{Link:o.Link}};var u=r(744);const d={components:{MainNav:(0,u.Z)(l,[["ssrRender",function(e,t,r,n,o,a,i,l){var u=(0,s.resolveComponent)("Link");t("<nav".concat((0,c.ssrRenderAttrs)((0,s.mergeProps)({class:"bg-slate-200 p-2"},n)),'><ul class="flex gap-4 flex-wrap">\x3c!--[--\x3e')),(0,c.ssrRenderList)(e.$page.props.mainNav,(function(e){t("<li>"),t((0,c.ssrRenderComponent)(u,{href:e.url,class:{underline:!e.is_current,"text-pink-500":e.is_current}},{default:(0,s.withCtx)((function(t,r,n,o){if(!r)return[(0,s.createTextVNode)((0,s.toDisplayString)(e.title),1)];r("".concat((0,c.ssrInterpolate)(e.title)))})),_:2},r)),t("</li>")})),t("\x3c!--]--\x3e</ul></nav>")}]])}},p=(0,u.Z)(d,[["ssrRender",function(e,t,r,n,o,a,i,l){var u=(0,s.resolveComponent)("MainNav");t("<div".concat((0,c.ssrRenderAttrs)((0,s.mergeProps)({class:"flex flex-col w-full h-full p-4 text-slate-800"},n)),">")),t((0,c.ssrRenderComponent)(u,{class:"mb-8"},null,r)),t('<main class="w-full">'),(0,c.ssrRenderSlot)(e.$slots,"default",{},null,t,r),t("</main></div>")}]]);i()((function(e){return(0,o.createInertiaApp)({page:e,render:n.renderToString,resolve:function(e){var t=r(957)("./".concat(e)).default;return t.layout=t.layout||p,t},setup:function(e){var t=e.app,r=e.props,n=e.plugin;return(0,s.createSSRApp)({render:function(){return(0,s.h)(t,r)}}).use(n)}})}))},584:()=>{},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,s]of t)r[e]=s;return r}},814:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(734),n=r(259);var o=r(640);const a=require("lodash");const i={props:{set:Object}};var c=r(744);const l={props:{set:Object},mounted:function(){console.log(this.set)}};const u={props:{set:Object}};const d={props:{set:Object}},p={components:{Text:(0,c.Z)(i,[["ssrRender",function(e,t,r,o,a,i,c,l){t("<div".concat((0,n.ssrRenderAttrs)((0,s.mergeProps)({class:"bg-slate-200 my-4 p-2"},o)),">").concat(a.set.text,"</div>"))}]]),Image:(0,c.Z)(l,[["ssrRender",function(e,t,r,o,a,i,c,l){t("<div".concat((0,n.ssrRenderAttrs)((0,s.mergeProps)({class:"bg-slate-200 my-4 p-2 flex justify-start"},o)),"><figure>")),a.set.file.is_image?t("<img".concat((0,n.ssrRenderAttr)("src",a.set.file.url)).concat((0,n.ssrRenderAttr)("alt",a.set.file.alt),' loading="lazy" class="max-w-full max-h-64">')):t("\x3c!----\x3e"),a.set.file.is_video?t('<video autoplay muted loop playsinline loading="lazy" class="max-w-full max-h-64"><source'.concat((0,n.ssrRenderAttr)("src",a.set.file.url)).concat((0,n.ssrRenderAttr)("type","video/"+a.set.file.extension),"></video>")):t("\x3c!----\x3e"),t('<figcaption class="flex justify-between text-sm"><span>'.concat((0,n.ssrInterpolate)(a.set.caption),"</span>")),a.set.credits?t("<span>".concat((0,n.ssrInterpolate)("© "+a.set.credits),"</span>")):t("\x3c!----\x3e"),t("</figcaption></figure></div>")}]]),Video:(0,c.Z)(u,[["ssrRender",function(e,t,r,o,a,i,c,l){t("<div".concat((0,n.ssrRenderAttrs)((0,s.mergeProps)({class:"bg-slate-200 my-4 p-2 flex justify-start"},o)),"><div><div>").concat(a.set.embed_code.value,'</div><div class="flex justify-between text-sm"><span>').concat((0,n.ssrInterpolate)(a.set.caption),"</span>")),a.set.credits?t("<span>".concat((0,n.ssrInterpolate)("© "+a.set.credits),"</span>")):t("\x3c!----\x3e"),t("</div></div></div>")}]]),ImageOverview:(0,c.Z)(d,[["ssrRender",function(e,t,r,o,a,i,c,l){t("<div".concat((0,n.ssrRenderAttrs)((0,s.mergeProps)({class:"bg-slate-200 my-4 p-2 flex flex-wrap gap-4"},o)),">\x3c!--[--\x3e")),(0,n.ssrRenderList)(a.set.images,(function(e){t('<div><div class="flex justify-start"><figure><img'.concat((0,n.ssrRenderAttr)("src",e.file.url)).concat((0,n.ssrRenderAttr)("alt",e.file.alt),' class="max-w-full max-h-32"></figure></div></div>'))})),t("\x3c!--]--\x3e</div>")}]])},props:{sets:Array},methods:{studly:function(e){return(0,a.upperFirst)((0,a.camelCase)(e))}}},f=(0,c.Z)(p,[["ssrRender",function(e,t,r,o,a,i,c,l){t("\x3c!--[--\x3e"),(0,n.ssrRenderList)(a.sets,(function(e){(0,n.ssrRenderVNode)(t,(0,s.createVNode)((0,s.resolveDynamicComponent)(l.studly(e.type)),{set:e},null),r)})),t("\x3c!--]--\x3e")}]]),v={components:{Head:o.Head,ContentSets:f},data:function(){return{entry:this.$page.props.entry}}},x=(0,c.Z)(v,[["ssrRender",function(e,t,r,o,a,i,c,l){var u=(0,s.resolveComponent)("Head"),d=(0,s.resolveComponent)("ContentSets");t("<div".concat((0,n.ssrRenderAttrs)(o),">")),t((0,n.ssrRenderComponent)(u,{title:c.entry.title},null,r)),t('<h1 class="text-2xl">Hallo Welt!</h1>'),t((0,n.ssrRenderComponent)(d,{sets:c.entry.content},null,r)),t("</div>")}]])},957:(e,t,r)=>{var s={"./Page":814,"./Page.vue":814};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id=957},640:e=>{"use strict";e.exports=require("@inertiajs/inertia-vue3")},734:e=>{"use strict";e.exports=require("vue")},259:e=>{"use strict";e.exports=require("vue/server-renderer")}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,n),o.exports}n.m=r,n.x=()=>{n.O(void 0,[170],(()=>n(372)));var e=n.O(void 0,[170],(()=>n(584)));return e=n.O(e)},e=[],n.O=(t,r,s,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,s,o]=e[u],i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"css/app.js",n.miniCssF=e=>"css/app.css",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={331:1,170:1};n.O.require=t=>e[t];n.f.require=(t,r)=>{e[t]||(331==t?(t=>{var r=t.modules,s=t.ids,o=t.runtime;for(var a in r)n.o(r,a)&&(n.m[a]=r[a]);o&&o(n);for(var i=0;i<s.length;i++)e[s[i]]=1;n.O()})(require("../../"+n.u(t))):e[t]=1)}})(),t=n.x,n.x=()=>(n.e(170),t());n.x()})();
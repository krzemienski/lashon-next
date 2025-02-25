(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7140:function(e,t,n){Promise.resolve().then(n.bind(n,4056)),Promise.resolve().then(n.bind(n,3900))},4056:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(3827),i=n(4090),s=n(2685),l=n(7646);function o(){let[e,t]=(0,i.useState)({name:"",email:"",message:""}),{ref:n,inView:o}=(0,s.YD)({triggerOnce:!0,threshold:.1}),a=async n=>{n.preventDefault(),console.log("Form submitted:",e),t({name:"",email:"",message:""})},c=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,r.jsx)("section",{ref:n,className:"section-padding bg-black",children:(0,r.jsxs)("div",{className:"container-width max-w-3xl",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-4xl font-bold text-gold mb-4",children:"Get in Touch"}),(0,r.jsx)("p",{className:"text-gray-300",children:"For bookings, collaborations, or just to say hello, fill out the form below."})]}),(0,r.jsx)(l.E.div,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{duration:.8},className:"max-w-2xl mx-auto",children:(0,r.jsxs)("form",{onSubmit:a,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-gold mb-2",children:"Name"}),(0,r.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,required:!0,className:"w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gold text-white"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-gold mb-2",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:c,required:!0,className:"w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gold text-white"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"message",className:"block text-gold mb-2",children:"Message"}),(0,r.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:c,rows:6,required:!0,className:"w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gold text-white resize-none"})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{type:"submit",className:"w-full bg-gold text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gold-600 transition-colors duration-200",children:"Send Message"})})]})})]})})}},3900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),i=n(2685),s=n(7646);function l(e){let{title:t,description:n,imageSrc:l}=e,{ref:o,inView:a}=(0,i.YD)({triggerOnce:!0,threshold:.1});return(0,r.jsxs)("section",{ref:o,className:"relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black",children:[(0,r.jsxs)("div",{className:"absolute inset-0",children:[(0,r.jsx)("img",{src:l,alt:t,className:"w-full h-full object-cover"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-black/50"})]}),(0,r.jsxs)(s.E.div,{className:"container-width relative z-10 text-center",initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8},children:[(0,r.jsx)("h1",{className:"text-6xl font-amsterdam text-gold mb-4",children:t}),(0,r.jsx)("p",{className:"text-xl text-white/90",children:n})]})]})}},2685:function(e,t,n){"use strict";n.d(t,{YD:function(){return c}});var r=n(4090),i=Object.defineProperty,s=new Map,l=new WeakMap,o=0,a=void 0;function c(){var e;let{threshold:t,delay:n,trackVisibility:i,rootMargin:c,root:d,triggerOnce:u,skip:m,initialInView:h,fallbackInView:g,onChange:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[b,f]=r.useState(null),v=r.useRef(x),[y,p]=r.useState({inView:!!h,entry:void 0});v.current=x,r.useEffect(()=>{let e;if(!m&&b)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;if(void 0===window.IntersectionObserver&&void 0!==r){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(l.has(n)||(o+=1,l.set(n,o.toString())),l.get(n)):"0":e[t])}).toString(),n=s.get(t);if(!n){let r;let i=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var n;let s=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach(e=>{e(s,t)})})},e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:i},s.set(t,n)}return n}(n),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),c.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),s.delete(i))}}(b,(t,n)=>{p({inView:t,entry:n}),v.current&&v.current(t,n),n.isIntersecting&&u&&e&&(e(),e=void 0)},{root:d,rootMargin:c,threshold:t,trackVisibility:i,delay:n},g),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,b,d,c,u,m,i,g,n]);let j=null==(e=y.entry)?void 0:e.target,w=r.useRef(void 0);b||!j||u||m||w.current===j||(w.current=j,p({inView:!!h,entry:void 0}));let N=[f,y.inView,y.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}r.Component}},function(e){e.O(0,[646,971,69,744],function(){return e(e.s=7140)}),_N_E=e.O()}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6798],{86798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a={};n.r(a);var r=n(10833),l=n(47063),o=n(67294);const c="not-found-content_BtrZ",s="not-found-title_K9jB",u="not-found-text_yyzJ",i="not-found-img__KqI",m="search-button-wrapper_Mh6v";var h=n(87462),d=n(73935),f=n(57052),b=n(68382),p=n(39960),g=n(16550),C=n(98022),E=n(239),k=n(37006),v=n(95999),y=n(52263),P=n(28364),Z=n(45697),S=n.n(Z);const w="button_IjDh",N=(0,o.forwardRef)(((e,t)=>{let{children:n,ariaLabel:a,onClick:r}=e;return o.createElement("button",{type:"button","aria-label":a,onClick:r,className:w,ref:t},n)}));N.propTypes={children:S().node,ariaLabel:S().string,onClick:S().func},N.defaultProps={children:null,ariaLabel:"",onClick:()=>{}};const _={"search-icon":"search-icon_u_mf"};function F(e){let{hit:t,children:n}=e;return o.createElement(p.Z,{to:t.url},n)}function R(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:r}=(0,a.useSearchPage)();return o.createElement(p.Z,{to:r(t.query),onClick:n},o.createElement(v.Z,{id:"theme.SearchBar.seeAll",values:{count:t.context.nbHits}},"See all {count} results"))}function x(){const{siteConfig:e}=(0,y.Z)(),t=e.themeConfig.algolia,{siteMetadata:n}=(0,y.Z)(),a=(0,E.l)(),r=(0,k.r)(),l=t.searchParameters?.facetFilters??[],c=t.contextualSearch?function(e,t){const n=e=>"string"==typeof e?[e]:e;return[...n(e),...n(t)]}(r,l):l,s={...t.searchParameters,facetFilters:c},u=(0,g.k6)(),i=(0,o.useRef)(null),m=(0,o.useRef)(null),[p,v]=(0,o.useState)(!1),[Z,S]=(0,o.useState)(void 0),w=(0,o.useCallback)((()=>{v(!0)}),[v]),x=(0,o.useCallback)((()=>{v(!1),i.current?.remove()}),[v]),I=(0,o.useCallback)((e=>{v(!0),S(e.key)}),[v,S]),L=(0,o.useRef)({navigate(e){let{itemUrl:n}=e;(0,C.F)(t.externalUrlRegex,n)?window.location.href=n:u.push(n)}}).current,B=(0,o.useRef)((e=>t.transformItems?t.transformItems(e):e.map((e=>({...e,url:a(e.url)}))))).current,A=(0,o.useMemo)((()=>function(e){return o.createElement(R,(0,h.Z)({},e,{onClose:x}))}),[x]),M=(0,o.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",n.docusaurusVersion),e)),[n.docusaurusVersion]);(0,f.D)({isOpen:p,onOpen:w,onClose:x,onInput:I,searchButtonRef:m});const{buttonText:Y="Search",buttonAriaLabel:j="Search"}=P.Z.button;return o.createElement(o.Fragment,null,o.createElement(N,{ref:m,onClick:w,ariaLabel:j},o.createElement("i",{className:_["search-icon"]}),Y),p&&(0,d.createPortal)(o.createElement(b.H,(0,h.Z)({onClose:x,initialScrollY:window.scrollY,initialQuery:Z,navigator:L,transformItems:B,hitComponent:F,transformSearchClient:M},t.searchPagePath&&{resultsFooterComponent:A},t,{searchParameters:s,placeholder:P.Z.placeholder,translations:P.Z.modal})),document.body))}const I=function(){return o.createElement(o.Fragment,null,o.createElement(r.d,{title:"Page Not Found"}),o.createElement(l.Z,null,o.createElement("div",{className:c},o.createElement("div",{className:i}),o.createElement("h1",{className:s},"Page Not Found"),o.createElement("p",{className:u},"You may have used an outdated link as there have been some changes in the structure of the documentation."),o.createElement("p",{className:u},"But it/'s clearly here somewhere! ",o.createElement("br",null),"Please, use the ",o.createElement("strong",null,"keyword search")," to find it!"),o.createElement("div",{className:m},o.createElement(x,null)))))}}}]);
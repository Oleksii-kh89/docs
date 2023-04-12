"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),y=o,f=d["".concat(p,".").concat(y)]||d[y]||c[y]||n;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},25197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:4,sidebar_label:"Upload Quality Gate to ReportPortal"},l="Upload Quality Gate to ReportPortal",i={unversionedId:"quality-gates/UploadQualityGateToReportPortal",id:"quality-gates/UploadQualityGateToReportPortal",title:"Upload Quality Gate to ReportPortal",description:"The default configuration of ReportPortal doesn't contain Quality Gate. For adding this feature, you need to receive a link to the .jar file from ReportPortal.",source:"@site/docs/quality-gates/UploadQualityGateToReportPortal.mdx",sourceDirName:"quality-gates",slug:"/quality-gates/UploadQualityGateToReportPortal",permalink:"/docs/quality-gates/UploadQualityGateToReportPortal",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/quality-gates/UploadQualityGateToReportPortal.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upload Quality Gate to ReportPortal"},sidebar:"defaultSidebar",previous:{title:"Feature overview",permalink:"/docs/quality-gates/FeatureOverview"},next:{title:"Quality Rules Configuration",permalink:"/docs/quality-gates/QualityRulesConfiguration"}},p={},u=[],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-quality-gate-to-reportportal"},"Upload Quality Gate to ReportPortal"),(0,o.kt)("p",null,"The default configuration of ReportPortal doesn't contain Quality Gate. For adding this feature, you need to ",(0,o.kt)("a",{parentName:"p",href:"/quality-gates/HowToInstallQualityGates"},"receive a link to the .jar file from ReportPortal"),"."),(0,o.kt)("p",null,"Download the .jar file and upload it to ReportPortal. Fo that pleases perform, following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login ReportPortal as an Admin"),(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"Admin Page > Plugins")),(0,o.kt)("li",{parentName:"ul"},"Click on the button ",(0,o.kt)("inlineCode",{parentName:"li"},"Upload")),(0,o.kt)("li",{parentName:"ul"},"Add .jar file to the modal ",(0,o.kt)("inlineCode",{parentName:"li"},"Upload plugin")),(0,o.kt)("li",{parentName:"ul"},"And click the button ",(0,o.kt)("inlineCode",{parentName:"li"},"Upload")),(0,o.kt)("li",{parentName:"ul"},"Reload page")),(0,o.kt)("p",null,"As soon as the plugin has been added to the ReportPortal, a new ",(0,o.kt)("inlineCode",{parentName:"p"}," Quality Gates tab")," will be added to the Project Settings."),(0,o.kt)("media-view",{src:a(14876),alt:"No Quality Gates View"}),(0,o.kt)("p",null,'On the All launches page, the system adds a label "N/A" to each launch.\n',(0,o.kt)("inlineCode",{parentName:"p"},'A label "N/A"')," means that the Quality Gates has not been run for a launch yet."),(0,o.kt)("media-view",{src:a(5602),alt:"NA Quality Gate Label"}))}c.isMDXComponent=!0},5602:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/NAQualityGateLabel-8dee858be8a6d15b5e6a091db4055868.png"},14876:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/NoQualityGatesView-869a8257accb97239846414d8ad6daac.png"}}]);
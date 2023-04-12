"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,g=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,sidebar_label:"Investigation of failure"},i="Investigation of failure",s={unversionedId:"work-with-reports/InvestigationOfFailure",id:"work-with-reports/InvestigationOfFailure",title:"Investigation of failure",description:"Set defect type",source:"@site/docs/work-with-reports/InvestigationOfFailure.md",sourceDirName:"work-with-reports",slug:"/work-with-reports/InvestigationOfFailure",permalink:"/docs/work-with-reports/InvestigationOfFailure",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/InvestigationOfFailure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Investigation of failure"},sidebar:"defaultSidebar",previous:{title:"Filtering launches",permalink:"/docs/work-with-reports/FilteringLaunches"},next:{title:"History of launches",permalink:"/docs/work-with-reports/HistoryOfLaunches"}},l={},u=[{value:"Set defect type",id:"set-defect-type",level:2},{value:"Post bug to Bug Tracking System",id:"post-bug-to-bug-tracking-system",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"investigation-of-failure"},"Investigation of failure"),(0,a.kt)("h2",{id:"set-defect-type"},"Set defect type"),(0,a.kt)("p",null,"ReportPortal provides the possibility to investigate the results of your runs. The investigation includes setting the appropriate defect type of failed items, posting a defect for them or linking the ID of a defect that is already created in the bug tracking system."),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/analysis/ManualAnalysis#make-decision-modal-redesign"},"\u201cMake decision\u201d modal"),", you can choose the real reason of your failure and provide a comment for this fail."),(0,a.kt)("p",null,"When a defect is found in a test, it should be investigated and proper defect type should be assigned to it, in order to have accurate test runs statistics. You will be able to change a defect type for a test and mark it as a Product Bug/Automation Bug/System Issue/No Defect at any time."),(0,a.kt)("p",null,"The available defect types are described below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cTo investigate\u201d"))," means that no investigation has been made on this defect yet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cProduct bug\u201d"))," means that the defect was investigated and a production bug found as the reason for the failure of this test."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cAutomation bug\u201d"))," means that the defect was investigated and the automation test is not correct."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cSystem issue\u201d"))," means that the defect was investigated and it turns out that a system-level issue, like an app crash, caused the test to fail."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u201cNo defect\u201d"))," means that the defect was investigated and was defined to be not a defect."),(0,a.kt)("h2",{id:"post-bug-to-bug-tracking-system"},"Post bug to Bug Tracking System"),(0,a.kt)("p",null,"ReportPortal allows us to connect some popular bug tracking systems and post a bug to them or link the ticket ID of the already posted defect to the test item in ReportPortal."),(0,a.kt)("p",null,"Before posting/linking a bug, make sure that the bug tracking systems are connected to the project on the project settings page. To check it, please, find the user guides below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/plugins/JiraServer"},"Jira Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/plugins/JiraCloud"},"Jira Cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/plugins/AzureDevOpsBTS"},"Azure DevOps BTS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/plugins/Rally"},"Rally"))))}d.isMDXComponent=!0}}]);
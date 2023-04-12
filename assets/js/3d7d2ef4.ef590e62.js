"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=s,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,n[1]=i;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const o={sidebar_position:6,sidebar_label:"Test case ID"},n="Test case ID",i={unversionedId:"work-with-reports/TestCaseId",id:"work-with-reports/TestCaseId",title:"Test case ID",description:"What is it: Test case ID",source:"@site/docs/work-with-reports/TestCaseId.md",sourceDirName:"work-with-reports",slug:"/work-with-reports/TestCaseId",permalink:"/docs/work-with-reports/TestCaseId",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/TestCaseId.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Test case ID"},sidebar:"defaultSidebar",previous:{title:"History of launches",permalink:"/docs/work-with-reports/HistoryOfLaunches"},next:{title:"Unique ID",permalink:"/docs/work-with-reports/UniqueId"}},l={},c=[{value:"What is it: Test case ID",id:"what-is-it-test-case-id",level:2},{value:"Where Test Case ID is using?",id:"where-test-case-id-is-using",level:2},{value:"How you can report items with Test case ID?",id:"how-you-can-report-items-with-test-case-id",level:2},{value:"What does happen if you do not report items with Test case ID?",id:"what-does-happen-if-you-do-not-report-items-with-test-case-id",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-case-id"},"Test case ID"),(0,s.kt)("h2",{id:"what-is-it-test-case-id"},"What is it: Test case ID"),(0,s.kt)("p",null,"If you are using any of the Test Management System (such as TestRail, Jira, ALM, and any others), you have a unique identification of test cases in it."),(0,s.kt)("p",null,"Starts from version 5.1 you can report test cases with TestCase ID from your TMS. That gives you an ability to link a source of the test case in TMS and its executions in ReportPortal. "),(0,s.kt)("p",null,"The benefit of this feature is that you will be able to see ",(0,s.kt)("strong",{parentName:"p"},"the real history of your test cases"),". "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Definition:")," Test Case ID:\nIt is a unique identifier from your source test management system which help ReportPortal.io to identify the uniqueness of a test case")),(0,s.kt)("h2",{id:"where-test-case-id-is-using"},"Where Test Case ID is using?"),(0,s.kt)("p",null,"Test case id is using for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The history line "),(0,s.kt)("li",{parentName:"ul"},"The history table ")),(0,s.kt)("p",null,"You can find a test case ID in the 'Edit' modal."),(0,s.kt)("h2",{id:"how-you-can-report-items-with-test-case-id"},"How you can report items with Test case ID?"),(0,s.kt)("p",null,"You can report test case id via agents. All details you can find in the dev guide ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-java/wiki/Test-case-ID"},"https://github.com/reportportal/client-java/wiki/Test-case-ID")),(0,s.kt)("p",null,"If the test execution has test parameters, a test case ID will be generated on the base of:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Test case id in ReportPortal = reported 'TestCaseID + all test parameters")),(0,s.kt)("h2",{id:"what-does-happen-if-you-do-not-report-items-with-test-case-id"},"What does happen if you do not report items with Test case ID?"),(0,s.kt)("p",null,"In case a user doesn't report tests with Test Case ID, the system generates it automatically:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Auto-generation based on 'Code reference' and 'Parameters'\nIf users do not report test case ID, it is generated automatically on the base of:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Test case id in ReportPortal = 'Code reference' + all test parameters")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Automatically based on Test Execution name, All parents name, Parameters\nIf users do not report Test Case ID and Code reference, then test case ID is generated on the base of:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Test case id in ReportPortal = Test Case Name + All parents Name (except Launch name) + All parameters")))}d.isMDXComponent=!0}}]);
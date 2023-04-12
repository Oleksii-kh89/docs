"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),d=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?s.createElement(g,i(i({ref:t},c),{},{components:a})):s.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=a(87462),n=(a(67294),a(3905));const r={sidebar_position:19,sidebar_label:"Passing rate summary"},i="Passing rate summary",o={unversionedId:"dashboards-and-widgets/PassingRateSummary",id:"dashboards-and-widgets/PassingRateSummary",title:"Passing rate summary",description:"Shows the percentage ratio of Passed test cases to Total test cases for set of launches.",source:"@site/docs/dashboards-and-widgets/PassingRateSummary.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/PassingRateSummary",permalink:"/docs/dashboards-and-widgets/PassingRateSummary",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/PassingRateSummary.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,sidebar_label:"Passing rate summary"},sidebar:"defaultSidebar",previous:{title:"Passing rate per launch",permalink:"/docs/dashboards-and-widgets/PassingRatePerLaunch"},next:{title:"Flaky test cases table (TOP-20)",permalink:"/docs/dashboards-and-widgets/FlakyTestCasesTableTop20"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"passing-rate-summary"},"Passing rate summary"),(0,n.kt)("p",null,"Shows the percentage ratio of Passed test cases to Total test cases for set of launches."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nTotal test cases = Passed + Not Passed, while Not Passed = Failed + Skipped + Interrupted"),(0,n.kt)("p",{parentName:"blockquote"},"Thus, Passing rate = Passed / (Passed + Failed + Skipped + Interrupted)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Widget's parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Filter: At least one filter is required")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Items: 1-600. The default meaning is 50.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mode: Bar View/Pie View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Widget name: any text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Description: any text"))),(0,n.kt)("p",null,"Please find below an example of configuration:"),(0,n.kt)("media-view",{src:a(2275),alt:"Add Passing Rate Summary Widget"}),(0,n.kt)("media-view",{src:a(10567),alt:"Passing Rate Summary Widget Configuration"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Widget view")),(0,n.kt)("p",null,"The widget can be displayed in two options as shown on the pictures below:"),(0,n.kt)("p",null,"Bar View"),(0,n.kt)("media-view",{src:a(81877),alt:"Passing Rate Summary Bar View"}),(0,n.kt)("p",null,"Pie view"),(0,n.kt)("media-view",{src:a(61229),alt:"Passing Rate Summary Pie view"}),(0,n.kt)("p",null,"As you can see, this widget was built based on the \u201cregression\u201d filter."),(0,n.kt)("media-view",{src:a(97678),alt:"Regression filter"}),(0,n.kt)("p",null,"The tooltip on mouse hover over chart area shows the quantity of Passed/Not passed test cases and percentage ratio of Passed/Not passed test cases to Total test cases for the specified set of launches."),(0,n.kt)("media-view",{src:a(44658),alt:"Percentage ratio for the specified set of launches"}),(0,n.kt)("p",null,"The widget has clickable sections. When you click on a specific section in the widget, the system forwards you to the launches view for the appropriate selection."),(0,n.kt)("p",null,"Thanks to \u201cPassing rate summary\u201d widget, it is no longer needed to spend time on calculating Passing rate of the specified set of launches. ReportPortal provides these statistics as a visualization \u2013 it is a quick and convenient decision. You can take the screenshot of widget and use it in the Test results report."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nThe widget doesn't contain 'IN PROGRESS\" launches.")))}u.isMDXComponent=!0},2275:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary1-02f832c7b21dc0db76ca08fdb4731927.png"},10567:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary2-3972850094813272201a3c21592fe874.png"},81877:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary3-4e0a32a52d6469ae7dd524390f028471.png"},61229:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary4-f137c47a232eeeaaac19e4bf3793c4b6.png"},97678:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary5-4791b2a94e7d3cd530d65bd33a1b65fb.png"},44658:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/PassingRateSummary6-c0ef0191a05f2c12ec239627fb1ef43f.png"}}]);
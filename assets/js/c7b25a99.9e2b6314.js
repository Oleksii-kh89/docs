"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=l,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const o={sidebar_position:2,sidebar_label:"Operations under launches"},r="Operations under launches",i={unversionedId:"work-with-reports/OperationsUnderLaunches",id:"work-with-reports/OperationsUnderLaunches",title:"Operations under launches",description:"There are several ways of how launches could be modified and managed.",source:"@site/docs/work-with-reports/OperationsUnderLaunches.mdx",sourceDirName:"work-with-reports",slug:"/work-with-reports/OperationsUnderLaunches",permalink:"/docs/work-with-reports/OperationsUnderLaunches",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/OperationsUnderLaunches.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Operations under launches"},sidebar:"defaultSidebar",previous:{title:"View launches",permalink:"/docs/work-with-reports/ViewLaunches"},next:{title:"Filtering launches",permalink:"/docs/work-with-reports/FilteringLaunches"}},s={},p=[{value:"Edit launch tags and description",id:"edit-launch-tags-and-description",level:2},{value:"Edit test item tags and description",id:"edit-test-item-tags-and-description",level:2},{value:"Merge launches",id:"merge-launches",level:2},{value:"Compare launches",id:"compare-launches",level:2},{value:"Move launches to Debug",id:"move-launches-to-debug",level:2},{value:"Force finish launches",id:"force-finish-launches",level:2},{value:"Export launches reports",id:"export-launches-reports",level:2},{value:"Delete launches",id:"delete-launches",level:2},{value:"Delete test item",id:"delete-test-item",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...o}=e;return(0,l.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"operations-under-launches"},"Operations under launches"),(0,l.kt)("p",null,"There are several ways of how launches could be modified and managed."),(0,l.kt)("h2",{id:"edit-launch-tags-and-description"},"Edit launch tags and description"),(0,l.kt)("p",null,'The system allows editing tags and descriptions for the launch on the "Launches" and "Debug" modes.'),(0,l.kt)("p",null,"Permission: next users are able to modify launches:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"In order to edit a launch, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select \"Edit\" option ('pencil' icon) to the selected launch.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The launch editor will be opened with the following options.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Make the required changes and click the "Save" button.'))),(0,l.kt)("media-view",{thumbnail:a(24216),src:"https://youtu.be/87dTCdsFD-I",alt:"Edit Launch",type:"video"}),(0,l.kt)("h2",{id:"edit-test-item-tags-and-description"},"Edit test item tags and description"),(0,l.kt)("p",null,'The system allows to edit tags and description for the test items on the "Launches" and "Debug" pages.'),(0,l.kt)("p",null,"Permission: next users are able to modify test items:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"In order to edit a test item, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Drill down to the test level of any item.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the \"Edit\" option ('pencil' icon) to the selected test item.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The test item editor will be opened with the following options.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Make the required changes and click the "Save" button.'))),(0,l.kt)("media-view",{thumbnail:a(64312),src:"https://youtu.be/7PZIowd9III",alt:"Edit Item",type:"video"}),(0,l.kt)("h2",{id:"merge-launches"},"Merge launches"),(0,l.kt)("p",null,"Merge launches feature can help you to merge the existing launches into one.\nIf your project has a really huge number of regression suites and they cannot be in one particular launch, so, they divided into parts.\nAs soon as they completed, they could be merged in one separate launch to represent this data on dashboards and create reports."),(0,l.kt)("p",null,"ReportPortal provides two options for merge: Linear and Deep. The difference in merge options is described below."),(0,l.kt)("p",null,"Basically, the merge models distinguished by the way of how the launches elements are collected in a resulting launch as shown on a picture:"),(0,l.kt)("media-view",{src:a(73218),alt:"Merge Basic Model"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Linear merge")),(0,l.kt)("p",null,'In case the user selects the "Linear merge" option, the new launch is created. The new launch contains elements of merging launches.\nLevels of elements stay the same as in origin launches. Status and issues statistics are calculated as the sum of statistics of all merged launches. The origin launches are deleted from the system.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Deep merge")),(0,l.kt)("p",null,'In case the user selects the "Deep merge" option, the system creates a new launch and check items with the following conditions simultaneously:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"test items with the same names"),(0,l.kt)("li",{parentName:"ul"},"test items have the same type (SUITE or TEST) "),(0,l.kt)("li",{parentName:"ul"},"test items are on the same path (number of parents) "),(0,l.kt)("li",{parentName:"ul"},"test items with descendants.\nIf such elements are found only the earliest one is added to the new launch. All descendants are collected on their levels as in the original launches. The merge is started from the upper levels to the lower levels.\nIn case the upper level is not merged, the lower levels will not be merged as well. Items without descendants are not merged despite their level.\nStatus and issues statistics are calculated for a new launch.\nThe original launches are deleted from the system.")),(0,l.kt)("p",null,"The Linear and Deep Merge algorithm, as described above, is shown on a scheme:"),(0,l.kt)("media-view",{src:a(56258),alt:"Merge Scheme"}),(0,l.kt)("p",null,"For instance, we have Launch-1 and Launch-2 to be merged. If system founds that Suite_A in Launch-1 and Suite_A in Launch-2\nhave the same names and the same types and the same path and have descendants, so only the earliest Suite_A (according to start time) is added to the new launch. All descendants of merged suites are combined under the Suite_A. Then the system searches for the same matches on the next level (Test level)."),(0,l.kt)("p",null,'If items are not met the conditions described for the "Deep Merge" option then they are collected the same\nway as described for the "Linear merge" option.'),(0,l.kt)("p",null,"Permission: Next users are able to merge launches:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"In order to merge launches, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required launches by click on their checkboxes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open 'Actions' list")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Click the "Merge" button.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Merge launches popup will be opened. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the merge type 'Linear Merge' or 'Deep Merge'")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Parameters fields become active. Merge popup contains:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"                      Launch name: (editable)\n                            Owner: The field is filled in with the current user.\n                      Description: collect data from all launches \n                             Tags: collect unique tags from all launches\n                   Time Start/End: filled in and disabled.\nCheckbox 'Extend child suites description with original launches names': Unchecked by default\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},'Make changes and click the "Merge" button on the "Merge Launches" window.\nAfter the merge, a new run will be shown on the common launches list.')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nThe following launches cannot be merged:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Launches in progress"),(0,l.kt)("li",{parentName:"ul"},'Launches with active "Analysis" process'),(0,l.kt)("li",{parentName:"ul"},'Launches with active "Match issues in launch" process'))),(0,l.kt)("media-view",{thumbnail:a(26255),src:"https://youtu.be/tGTGFO0cGCM",alt:"Merge Launches",type:"video"}),(0,l.kt)("h2",{id:"compare-launches"},"Compare launches"),(0,l.kt)("p",null,"Compare launches feature can help you to compare launches side by side to define differences between them."),(0,l.kt)("p",null,"Permissions: All users on the project"),(0,l.kt)("p",null,"In order to compare launches, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required launches by click on their checkboxes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Expand the 'Actions' list")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the "Compare" option.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The system shows a window where a widget with bars is displayed, reflecting the\nPassed/Failed/Skipped and Product Bug/Automation Bug/System Issue/To\nInvestigate test items."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nLaunches can be compared on the 'Launches' page and not on the 'Debug' page.")),(0,l.kt)("media-view",{thumbnail:a(27858),src:"https://youtu.be/1MjgTxbRH5c",alt:"Compare Launches",type:"video"}),(0,l.kt)("h2",{id:"move-launches-to-debug"},"Move launches to Debug"),(0,l.kt)("p",null,'The "Debug" section is used to hide incorrect launches from the CUSTOMER view.'),(0,l.kt)("p",null,'Permission: Next users are able to move launches to "Debug"/"Launches" mode:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with {MEMBER} Project Role  - Launch Owner"))),(0,l.kt)("p",null,'In order to move a launch to the "Debug" section, perform the following steps:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page ')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the "Move to Debug" option from the context menu on the left hand of the launch name.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the 'Move' button ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'The launch gets to "Debug" page and removed from "Launches" page'))),(0,l.kt)("p",null,'To return the launch to the "Launches" section, navigate to the "Debug" section and select the\n"Move to All Launches" from the context menu.'),(0,l.kt)("p",null,'In order to move some launches to the "Debug" section simultaneously, perform the following steps:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required launches by click on their checkboxes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open 'Actions' list ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select "Move to Debug" from the list ')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the action")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'The launches get to the "Debug" page and removed from the "Launches" page.'))),(0,l.kt)("p",null,'To return the launches to the "Launches" section, navigate to the "Debug" section, select them\nand select "Move to All Launches" from the \'Actions\' list.'),(0,l.kt)("media-view",{thumbnail:a(2366),src:"https://youtu.be/UW1oMNy1-qo",alt:"Move launches to Debug",type:"video"}),(0,l.kt)("h2",{id:"force-finish-launches"},"Force finish launches"),(0,l.kt)("p",null,'The system allows finishing launches on the "Launches" and the "Debug" pages manually.'),(0,l.kt)("p",null,"Permission: Next users are able to stop launches:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"In order to finish a launch that is in progress now, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the "Force Finish" option in the context menu on the left hand of the launch name.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Click the "Finish" button.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'The launch will be stopped and shown in the launches table with the "stopped" tag and the ',(0,l.kt)("em",{parentName:"p"},'"stopped"')," description. All the statistics collected by this time will be displayed."))),(0,l.kt)("media-view",{thumbnail:a(27838),src:"https://youtu.be/nI1u4ZvKX1Y",alt:"Force finish",type:"video"}),(0,l.kt)("p",null,"In order to finish some launches simultaneously those are in progress now, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required launches that are in progress by click on their checkboxes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open 'Actions' list ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select "Force Finish" from the list')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the action")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'All selected launches will be stopped and shown in the launches table with the "stopped" tag and\nthe ',(0,l.kt)("em",{parentName:"p"},'"stopped"')," description. All the statistics collected by this time will be displayed."))),(0,l.kt)("h2",{id:"export-launches-reports"},"Export launches reports"),(0,l.kt)("p",null,'The system allows exporting launches reports on the "Launches" and the "Debug"\nmodes. You can export the launch report in the following formats: PDF, XML, HTML.'),(0,l.kt)("p",null,"In order to export a launch, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the required format from the "Export" option in the context menu on the left hand of the launch name.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The launch report in the selected format will be opened."))),(0,l.kt)("media-view",{thumbnail:a(68974),src:"https://youtu.be/NZIolEFI7zc",alt:"Export Launch",type:"video"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nThe export operation works for a separate launch only. No multiple actions for the export of launches.")),(0,l.kt)("h2",{id:"delete-launches"},"Delete launches"),(0,l.kt)("p",null,'The system allows deleting launches on the "Launches" and "Debug" pages.'),(0,l.kt)("p",null,"Permission: next users are able to delete launches:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"There are two ways how the launch/es can be deleted"),(0,l.kt)("p",null,"In order to delete a launch, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the "Delete" option in the context menu on the left hand of the launch name.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Click the "Delete" button.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The launch will be deleted from ReportPortal. All related content will be deleted: test items, logs, screenshots."))),(0,l.kt)("media-view",{thumbnail:a(45007),src:"https://youtu.be/DNy9aqPz3NQ",alt:"Delete launch",type:"video"}),(0,l.kt)("p",null,"In order to delete more than one launch simultaneously, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required launches by click on their checkboxes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open 'Actions' list")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click 'Delete' option")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the action")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The launches will be deleted from ReportPortal. All related content will be deleted: test items, logs, screenshots."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),'\nIt is impossible to delete launches IN PROGRESS - "Delete" launch option will be disabled.')),(0,l.kt)("h2",{id:"delete-test-item"},"Delete test item"),(0,l.kt)("p",null,'The system allows deleting test items in all levels of launch in the "Launches" and "Debug" pages.'),(0,l.kt)("p",null,"Permission: Next users are able to delete the test item:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {PROJECT MANAGER, LEAD} on the project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner"))),(0,l.kt)("p",null,"In order to delete a test item, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Drill down to the test level of any item")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Select the "Delete" option in the context menu next to the selected test item.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Click the "Delete" button.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The test item will be deleted from ReportPortal with all related content (logs, screenshots)."))),(0,l.kt)("media-view",{thumbnail:a(34674),src:"https://youtu.be/r2r5OHwVt-U",alt:"Delete Items",type:"video"}),(0,l.kt)("p",null,"In order to delete some test items simultaneously, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Navigate to the "Launches" page')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Drill down to the test level of any item")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select required test items by click on their checkboxes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you are on SUITE or TEST view, click 'Delete' button from the header"),(0,l.kt)("p",{parentName:"li"},"If you are on STEP view, open 'Actions' list and select \"Delete\" option")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The warning popup will be opened.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the action")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Test items will be deleted from ReportPortal with all related content (logs, screenshots)."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),'\nIt is impossible to delete test items in launches IN PROGRESS - "Delete" test item option is disabled for test items in launches IN PROGRESS.')))}u.isMDXComponent=!0},27858:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/CompareLaunches-428ca7dd0f70b36b73554b25471a3946.png"},34674:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/DeleteItems-3d11cafc9ea9424a5c7e08d955bef142.png"},45007:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/DeleteLaunch-df6b32ee84e8ecf4c4e0d2a18ffb4c56.png"},64312:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/EditItem-c21e7a8b9182f206ac31990635f3550d.png"},24216:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/EditLaunch-870b19dbe489650dadda96637843a7a0.png"},68974:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ExportLaunch-3c80e08bd0f18b9dd3fd01b7c0057967.png"},27838:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ForceFinish-fab143fd0ad48ee8b2e36ab5762db735.png"},26255:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/Merge-767ae440c69932d59d24d1a6defa7d0a.png"},73218:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MergeBasicModel-60429b6010f82fdde29b7e011217fc34.png"},56258:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MergeScheme-ee76919464b7a95fc451bcaf692a824e.png"},2366:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MoveToDebugLaunches-73024f28d3a71e6b200e8b942cebe234.png"}}]);
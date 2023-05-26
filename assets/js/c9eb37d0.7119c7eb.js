"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[376],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,l=t.originalType,u=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),p=o(a),y=s,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||l;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function m(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=a.length,i=new Array(l);i[0]=y;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r[p]="string"==typeof t?t:s,i[1]=r;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},11223:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var n=a(87462),s=(a(67294),a(3905));const l={sidebar_position:8,sidebar_label:"Assessment of test results using Quality Gates"},i="Assessment of test results using Quality Gates",r={unversionedId:"quality-gates/AssessmentOfTestResultsUsingQualityGates",id:"quality-gates/AssessmentOfTestResultsUsingQualityGates",title:"Assessment of test results using Quality Gates",description:"Now the system is preconfigured, and you can start using Quality Gates Analysis.",source:"@site/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates.mdx",sourceDirName:"quality-gates",slug:"/quality-gates/AssessmentOfTestResultsUsingQualityGates",permalink:"/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Assessment of test results using Quality Gates"},sidebar:"defaultSidebar",previous:{title:"Delete Quality Gates",permalink:"/docs/quality-gates/DeleteQualityGates"},next:{title:"Integration with CI/CD",permalink:"/docs/quality-gates/IntegrationWithCICD"}},u={},o=[{value:"Quality Gate Analysis",id:"quality-gate-analysis",level:2},{value:"How to run Quality Gates Manually",id:"how-to-run-quality-gates-manually",level:2},{value:"How to recalculate Quality Gates",id:"how-to-recalculate-quality-gates",level:2},{value:"How to run Quality Gates Automatically",id:"how-to-run-quality-gates-automatically",level:2},{value:"Quality Gate Status and Timeout",id:"quality-gate-status-and-timeout",level:2},{value:"Timeout",id:"timeout",level:3},{value:"Quality Gate Report",id:"quality-gate-report",level:2}],c={toc:o},p="wrapper";function d(t){let{components:e,...l}=t;return(0,s.kt)(p,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assessment-of-test-results-using-quality-gates"},"Assessment of test results using Quality Gates"),(0,s.kt)("p",null,"Now the system is preconfigured, and you can start using Quality Gates Analysis."),(0,s.kt)("p",null,"Quality Gates plugin can be used with CI/CD tools - in this case, and Quality Gate status will be sent to CI/CD pipeline.\nBut also, Quality Gates can be used just as a way of test results analysis."),(0,s.kt)("p",null,"First, let's discuss how ReportPortal assesses a test run quality and provides a full report with real time test results.\nSecond, let's check how to send assessment results to CI/CD."),(0,s.kt)("h2",{id:"quality-gate-analysis"},"Quality Gate Analysis"),(0,s.kt)("h2",{id:"how-to-run-quality-gates-manually"},"How to run Quality Gates Manually"),(0,s.kt)("p",null,'By default, all launches have "N\\A" status. It means that Quality Gate analysis has not been run for these launches.'),(0,s.kt)("p",null,'If you want to run Quality Gate analysis manually, click on the label "N/A" and click on the "Run Quality Gate" in the opened pop-up.'),(0,s.kt)("h2",{id:"how-to-recalculate-quality-gates"},"How to recalculate Quality Gates"),(0,s.kt)("p",null,"If you want to recalculate Quality Gate status for a launch, just perform next actions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"click on ",(0,s.kt)("inlineCode",{parentName:"li"},"the label with a status")," of a launch"),(0,s.kt)("li",{parentName:"ul"},"click on the ",(0,s.kt)("inlineCode",{parentName:"li"},'"Recalculate"')," in the opened pop-up")),(0,s.kt)("media-view",{src:a(67105),alt:"How to recalculate Quality Gates in our test automation dashboard"}),(0,s.kt)("p",null,"Quality Gates can not be run for launches in progress."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," If Quality Gate status has been already sent to CI/CD, a status can not be recalculated for a such launch.")),(0,s.kt)("media-view",{src:a(16978),alt:"Report That Is Already Sent"}),(0,s.kt)("h2",{id:"how-to-run-quality-gates-automatically"},"How to run Quality Gates Automatically"),(0,s.kt)("p",null,"You can configure Auto Quality Gate Analysis on the Project Settings. If you switch Quality Gate Analysis ON, the system will start QG analysis on the launch finish."),(0,s.kt)("media-view",{src:a(17975),alt:"Quality Gate Analysis ON"}),(0,s.kt)("h2",{id:"quality-gate-status-and-timeout"},"Quality Gate Status and Timeout"),(0,s.kt)("p",null,"When a launch finishes, the system starts Quality Gate Analysis."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"First,")," the system checks if there Quality Gate for a launch under analysis. If there is no, such Quality Gate, the system shows error message.\n",(0,s.kt)("strong",{parentName:"p"},"Second,")," if Quality Gates is found, the systems checks all rules in Quality Gate one by one and define a status for each rule\n",(0,s.kt)("strong",{parentName:"p"},"Third,")," if all rules are done, the system defines the status of a whole Quality Gate."),(0,s.kt)("p",null,"How is status calculated:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Calculation"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Passed"),(0,s.kt)("td",{parentName:"tr",align:"center"},"All rules in a Quality Gate have status PASSED"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Quality Assessment passed, a test run matches specified quality criteria")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:"center"},"If Quality Gate does not have FAILED, IN PROGRESS rules, but at least one rule has status Undefined"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Quality Assessment can not be finished \u2753")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"In Progress"),(0,s.kt)("td",{parentName:"tr",align:"center"},"If Quality Gate does not have FAILED rules, but at least one rule in a Quality Gate has status IN PROGRESS"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Quality Assessment is in progress")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Failed"),(0,s.kt)("td",{parentName:"tr",align:"center"},"At least one rule in a Quality Gate has status FAILED"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Quality Assessment failed, a test run does not match specified quality criteria")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Forth,")," if there is an integration with CI/CD, the system sends status to CI/CD tools to a pipeline."),(0,s.kt)("p",null,"\u2753 The reasons why Quality Gates can get a status ",(0,s.kt)("strong",{parentName:"p"},"Undefined"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'For "Amount of issues" rule: if a number of To Investigate issues in the analyzed launch is more than allowable To Investigate level'),(0,s.kt)("li",{parentName:"ul"},'For "New Failure": if a baseline is not found in the system')),(0,s.kt)("p",null,"If you get this status, you can proceed with launch analysis (or choose another baseline) and rerun Quality Gates. For that check the section ### How to recalculate Qulaity Gates."),(0,s.kt)("h3",{id:"timeout"},"Timeout"),(0,s.kt)("p",null,"Specially for integration with CI\\CD, Quality Gates has parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"Timeout"),". If a launch whose status should be sent to a pipeline, gets UNDEFINED status, the system uses a value from ",(0,s.kt)("inlineCode",{parentName:"p"},"Timeout"),". Default ",(0,s.kt)("inlineCode",{parentName:"p"},"Timeout")," equals to 2 hours. It means, that after 2 hours after launch finish, the system force recaluculats Quality Gate Status and defined status."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Jenkins Job Status"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Quality Gate Status"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"SUCCESS"),(0,s.kt)("td",{parentName:"tr",align:"center"},"PASSED"),(0,s.kt)("td",{parentName:"tr",align:"left"},"All Rulles Passed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"FAILED"),(0,s.kt)("td",{parentName:"tr",align:"center"},"FAILED"),(0,s.kt)("td",{parentName:"tr",align:"left"},"At least one rule does not pass")))),(0,s.kt)("p",null,"If you want to choose other options for a timeout, you can do it:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Login ReportPortal as Project Manager or Admin"),(0,s.kt)("li",{parentName:"ul"},"Open ",(0,s.kt)("inlineCode",{parentName:"li"},"Project Settings> Quality Gates")),(0,s.kt)("li",{parentName:"ul"},"Click on ",(0,s.kt)("inlineCode",{parentName:"li"},"the pencil")," on the Quality Gate rule"),(0,s.kt)("li",{parentName:"ul"},"Click on ",(0,s.kt)("inlineCode",{parentName:"li"},'"Edit Details."')),(0,s.kt)("li",{parentName:"ul"},"Choose needed option in a dropdown ",(0,s.kt)("inlineCode",{parentName:"li"},'"Timeout"')),(0,s.kt)("li",{parentName:"ul"},"Save a Quality Gate")),(0,s.kt)("p",null,"If there is no needed option in the dropdown, you can specify custom value via API."),(0,s.kt)("h2",{id:"quality-gate-report"},"Quality Gate Report"),(0,s.kt)("p",null,"A Quality Gate report is a full report that shows information on Quality gate results. This is a table that shows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"all rules in a Quality Gate"),(0,s.kt)("li",{parentName:"ul"},"rule status: ",(0,s.kt)("inlineCode",{parentName:"li"},"Passed/Failed/Skipped")),(0,s.kt)("li",{parentName:"ul"},"expected results"),(0,s.kt)("li",{parentName:"ul"},"actual results")),(0,s.kt)("media-view",{src:a(67105),alt:"Quality Gates Report"}),(0,s.kt)("p",null,"All actual results are clickable in the report except New Failure. A clickable area for New failure will be available in the version 5.7. So user can drill down and investigate items, that became a reason of build failure."))}d.isMDXComponent=!0},17975:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const n=a.p+"assets/images/QualityGatesAuto-69e0342c645671385d681f98f46d65f0.png"},67105:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const n=a.p+"assets/images/QualityGatesReport-dc809fd1e22481ecc66296cba213c5e5.png"},16978:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const n=a.p+"assets/images/ReportThatIsAlreadySent-2320cb3a4598c53376d2fce436432362.png"}}]);
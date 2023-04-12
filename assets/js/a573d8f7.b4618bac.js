"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?s.createElement(k,o(o({ref:t},u),{},{components:a})):s.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var s=a(87462),n=(a(67294),a(3905));const i={sidebar_position:4,sidebar_label:"Azure DevOps BTS"},o="Azure DevOps BTS",r={unversionedId:"plugins/AzureDevOpsBTS",id:"plugins/AzureDevOpsBTS",title:"Azure DevOps BTS",description:"Integration with ReportPortal can be helpful for projects which are already using Azure DevOps BTS (Bug Tracking System) as a tracking tool. This feature allows posting issues and linking/unlinking issues, getting updates on their statuses. For example, just a few clicks \u2013 and bug with detailed logs is created!",source:"@site/docs/plugins/AzureDevOpsBTS.mdx",sourceDirName:"plugins",slug:"/plugins/AzureDevOpsBTS",permalink:"/docs/plugins/AzureDevOpsBTS",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/AzureDevOpsBTS.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Azure DevOps BTS"},sidebar:"defaultSidebar",previous:{title:"Jira Cloud",permalink:"/docs/plugins/JiraCloud"},next:{title:"Rally",permalink:"/docs/plugins/Rally"}},l={},p=[{value:"Global Azure DevOps BTS integration",id:"global-azure-devops-bts-integration",level:2},{value:"Add new global Azure DevOps BTS integration",id:"add-new-global-azure-devops-bts-integration",level:3},{value:"Update global Azure DevOps BTS integration",id:"update-global-azure-devops-bts-integration",level:3},{value:"Remove global Azure DevOps BTS integration",id:"remove-global-azure-devops-bts-integration",level:3},{value:"Project Azure DevOps BTS integration",id:"project-azure-devops-bts-integration",level:2},{value:"Add new project Azure DevOps BTS integration",id:"add-new-project-azure-devops-bts-integration",level:3},{value:"Reset to project Azure DevOps BTS Integrations",id:"reset-to-project-azure-devops-bts-integrations",level:3},{value:"Post issue to Azure DevOps BTS",id:"post-issue-to-azure-devops-bts",level:2},{value:"Link an issue with an issue in Azure DevOps BTS",id:"link-an-issue-with-an-issue-in-azure-devops-bts",level:2},{value:"Unlink an issue in Azure DevOps BTS",id:"unlink-an-issue-in-azure-devops-bts",level:2},{value:"Custom issue type in Azure DevOps BTS",id:"custom-issue-type-in-azure-devops-bts",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-devops-bts"},"Azure DevOps BTS"),(0,n.kt)("p",null,"Integration with ReportPortal can be helpful for projects which are already using Azure DevOps BTS (Bug Tracking System) as a tracking tool. This feature allows posting issues and linking/unlinking issues, getting updates on their statuses. For example, just a few clicks \u2013 and bug with detailed logs is created!"),(0,n.kt)("p",null,"Azure DevOps BTS integration can be configured on the global level (for all projects on the instance) or on the project level (only for one project)."),(0,n.kt)("h2",{id:"global-azure-devops-bts-integration"},"Global Azure DevOps BTS integration"),(0,n.kt)("h3",{id:"add-new-global-azure-devops-bts-integration"},"Add new global Azure DevOps BTS integration"),(0,n.kt)("p",null,"You might want to configure ",(0,n.kt)("strong",{parentName:"p"},"global integrations")," which will be applied on all projects if all projects on your instance are using the same Azure DevOps BTS projects."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as ADMIN.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Administrate > Plugins.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Azure DevOps plugin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the \u201cAdd integration\u201d button."))),(0,n.kt)("media-view",{src:a(2165),alt:"Add global Azure DevOps BTS integration"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Fill and Save the authorization form.")),(0,n.kt)("media-view",{src:a(93375),alt:"Global Azure DevOps BTS integration"}),(0,n.kt)("p",null,"Please, follow the steps below to get a token for Azure DevOps integration:"),(0,n.kt)("media-view",{src:a(28284),alt:"Personal access tokens"}),(0,n.kt)("media-view",{src:a(96207),alt:"New token"}),(0,n.kt)("media-view",{src:a(42323),alt:"Create new personal access token"}),(0,n.kt)("media-view",{src:a(68167),alt:"Copy token"}),(0,n.kt)("p",null,"You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS."),(0,n.kt)("p",null,"This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS."),(0,n.kt)("p",null,"To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened ",(0,n.kt)("strong",{parentName:"p"},"Configuration")," form:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose issue type from the drop-down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"2.Check the fields needed and fill them in if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cSubmit\u201d button."))),(0,n.kt)("media-view",{src:a(49588),alt:"Select issue type"}),(0,n.kt)("p",null,"Now team members on all your projects will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated."),(0,n.kt)("p",null,"You can add more integrations by clicking on \u201cAdd integration\u201d."),(0,n.kt)("media-view",{src:a(77820),alt:"Add more integrations"}),(0,n.kt)("p",null,"User can add several integrations, but with a different name to the ",(0,n.kt)("strong",{parentName:"p"},"one Azure DevOps BTS project"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use case:")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Situation:")," User wants to post to Azure DevOps BTS issues with type ",(0,n.kt)("strong",{parentName:"p"},"Issue")," and ",(0,n.kt)("strong",{parentName:"p"},"Task")," to the project NNN-MMM in Azure DevOps BTS. Is it possible? Yes!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution:")," Add two integrations to the project NNN-MMM in Azure DevOps BTS with names e.g., \u201cProject -1\u201d and \u201cProject -2\u201d. Add to the \u201cProject -1\u201d issue type ",(0,n.kt)("strong",{parentName:"p"},"Issue")," and for \u201cProject -2\u201d - issue type ",(0,n.kt)("strong",{parentName:"p"},"Task"),". While posing issue procedure, choose integration with needed type."),(0,n.kt)("h3",{id:"update-global-azure-devops-bts-integration"},"Update global Azure DevOps BTS integration"),(0,n.kt)("p",null,"If you need to edit Azure DevOps BTS integration authorization parameters, please perform actions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as ADMIN.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Administrate > Plugins.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Azure DevOps plugin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on a tab with existing integration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cEdit authorization\u201d link."))),(0,n.kt)("media-view",{src:a(59932),alt:"Update global Azure DevOps BTS integration"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change \u201cIntegration name\u201d.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type your Azure DevOps credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit the form."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nYou can edit only \u201cIntegration name\u201d. If you need other changes, please submit new integration.")),(0,n.kt)("p",null,"If you need to edit fields which should be posted in Azure DevOps BTS, please perform actions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as ADMIN.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Administrate > Plugins.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Azure DevOps plugin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the tab with existing integration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cConfigure\u201d button."))),(0,n.kt)("media-view",{src:a(2888),alt:"Change issue type"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose issue type from the drop-down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the fields needed and fill them in if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cSubmit\u201d button."))),(0,n.kt)("h3",{id:"remove-global-azure-devops-bts-integration"},"Remove global Azure DevOps BTS integration"),(0,n.kt)("p",null,"If you need to remove Azure DevOps BTS integration, please perform actions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as ADMIN.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Administrate > Plugins.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Azure DevOps plugin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the tab with existing integration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cRemove integration\u201d."))),(0,n.kt)("media-view",{src:a(99173),alt:"Remove global Azure DevOps BTS integration"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Submit the action.")),(0,n.kt)("h2",{id:"project-azure-devops-bts-integration"},"Project Azure DevOps BTS integration"),(0,n.kt)("h3",{id:"add-new-project-azure-devops-bts-integration"},"Add new project Azure DevOps BTS integration"),(0,n.kt)("p",null,"If any project needs different Azure DevOps BTS configurations, you should unlink a project from Global configurations and add a Project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project."),(0,n.kt)("p",null,"For that,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as an ADMIN or Project Manager.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Project Settings > Integrations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the Azure DevOps integration panel.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cUnlink and setup manually\u201d button."))),(0,n.kt)("media-view",{src:a(8909),alt:"Add project Azure DevOps BTS integration"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Fill and confirm the authorization form.")),(0,n.kt)("media-view",{src:a(31246),alt:"Project Azure DevOps BTS integration"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nPlease, have a look at ",(0,n.kt)("strong",{parentName:"p"},"Global Azure DevOps BTS")," integration for detailed configuration steps.")),(0,n.kt)("p",null,"You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS."),(0,n.kt)("p",null,"This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS."),(0,n.kt)("p",null,"To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened ",(0,n.kt)("strong",{parentName:"p"},"Configuration")," form:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose issue type from the drop-down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the needed fields and fill them in if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cSubmit\u201d button."))),(0,n.kt)("p",null,"Now team members on this project will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated."),(0,n.kt)("p",null,"You can add more integrations by clicking on \u201cAdd integration\u201d button."),(0,n.kt)("h3",{id:"reset-to-project-azure-devops-bts-integrations"},"Reset to project Azure DevOps BTS Integrations"),(0,n.kt)("p",null,"If you want to delete project integrations with Azure DevOps BTS and link your project with global configurations, please perform actions described below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as an ADMIN or Project Manager.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Project Settings > Integrations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the Azure DevOps integration panel.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on \u201cReset to global settings\u201d button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm the action."))),(0,n.kt)("media-view",{src:a(45095),alt:"Reset to project Azure DevOps BTS Integrations"}),(0,n.kt)("h2",{id:"post-issue-to-azure-devops-bts"},"Post issue to Azure DevOps BTS"),(0,n.kt)("p",null,"Posting an issue to Azure DevOps BTS means creating a new issue in Azure DevOps BTS from ReportPortal and uploading logs and attachments from an execution."),(0,n.kt)("p",null,"If you want to post a new issue to Azure DevOps BTS, you need to have a project or global integration with Azure DevOps BTS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ReportPortal as Admin, PM, Member, Customer or Operator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Launches.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose a needed item."))),(0,n.kt)("media-view",{src:a(38653),alt:"Select item to post issue"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click on the pencil icon to open \u201cMake decision\u201d modal.")),(0,n.kt)("media-view",{src:a(26440),alt:"Open Make decision modal to post issue"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Choose \u201cPost issue\u201d option and then \u201cApply & Continue\u201d.")),(0,n.kt)("media-view",{src:a(38868),alt:"Post issue and Apply and Continue buttons"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Fill in the \u201cPost Issue\u201d form with valid data and submit the form.")),(0,n.kt)("media-view",{src:a(79357),alt:"Post issue to Azure DevOps BTS"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"A new issue will be posted in Azure DevOps BTS with information from ReportPortal.")),(0,n.kt)("media-view",{src:a(39906),alt:"Issue posted in Azure DevOps BTS"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"A label with issue ID will be added to the test item.")),(0,n.kt)("media-view",{src:a(97148),alt:"A label with posted issue ID"}),(0,n.kt)("h2",{id:"link-an-issue-with-an-issue-in-azure-devops-bts"},"Link an issue with an issue in Azure DevOps BTS"),(0,n.kt)("p",null,"Linking an issue with an issue in Azure DevOps BTS means adding a clickable link to an existing issue in Azure DevOps BTS from ReportPortal that will show a status of this issue."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ReportPortal as Admin, PM, Member, Customer or Operator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Launches.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose a needed item."))),(0,n.kt)("media-view",{src:a(83396),alt:"Select item to link an issue"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click on the pencil icon to open \u201cMake decision\u201d modal.")),(0,n.kt)("media-view",{src:a(21506),alt:"Open Make decision modal to link an issue"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Choose \u201cLink issue\u201d option and then \u201cApply & Continue\u201d.")),(0,n.kt)("media-view",{src:a(61970),alt:"Link issue and Apply and Continue buttons"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Fill in the \u201cLink issue\u201d form with valid data and submit the form.")),(0,n.kt)("media-view",{src:a(30084),alt:"Link an issue with an issue in Azure DevOps BTS"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"A label with issue ID will be added to the test item.")),(0,n.kt)("media-view",{src:a(25859),alt:"A label with linked issue ID"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Link is redirected to this issue in Azure DevOps BTS.")),(0,n.kt)("media-view",{src:a(65159),alt:"Redirect to this issue in Azure DevOps BTS"}),(0,n.kt)("h2",{id:"unlink-an-issue-in-azure-devops-bts"},"Unlink an issue in Azure DevOps BTS"),(0,n.kt)("p",null,"You can also unlink an issue."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the \u201cremove\u201d icon.")),(0,n.kt)("media-view",{src:a(53237),alt:"Select issue to remove"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click \u201cUnlink Issue\u201d.")),(0,n.kt)("media-view",{src:a(7730),alt:"Unlink an issue in Azure DevOps BTS"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Link to the issue in Azure DevOps BTS is removed.")),(0,n.kt)("h2",{id:"custom-issue-type-in-azure-devops-bts"},"Custom issue type in Azure DevOps BTS"),(0,n.kt)("p",null,"You can configure any custom issue type (e.g., Bug for Adam) in Azure DevOps BTS and then choose it as predefined Azure DevOps ticket field. So, developer Adam will see on the Azure DevOps BTS all issues from ReporPortal which assigned to him."),(0,n.kt)("p",null,"Follow the steps below to configure custom issue type:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ",(0,n.kt)("a",{parentName:"p",href:"https://dev.azure.com"},"Azure portal"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Organization settings."))),(0,n.kt)("media-view",{src:a(77154),alt:"Organization settings in Azure DevOps BTS"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click on the \u201cProcess\u201d menu item.")),(0,n.kt)("media-view",{src:a(41739),alt:"Process menu item in Azure DevOps BTS"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select three dots near the current process and create a new one.")),(0,n.kt)("media-view",{src:a(17185),alt:"Create new process"}),(0,n.kt)("media-view",{src:a(29855),alt:"Custom process"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click on the name of the just created process.")),(0,n.kt)("media-view",{src:a(45803),alt:"Name of the just created process"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Create custom issue type.")),(0,n.kt)("media-view",{src:a(14315),alt:"Create custom issue type in Azure DevOps BTS"}),(0,n.kt)("media-view",{src:a(92658),alt:"Name of custom issue type in Azure DevOps BTS"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Click on the project quantity and change the process for your project.")),(0,n.kt)("media-view",{src:a(55372),alt:"Project quantity"}),(0,n.kt)("media-view",{src:a(61457),alt:"Change the process for your project"}),(0,n.kt)("media-view",{src:a(14236),alt:"Select a target process"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Change Issue Type for Azure DevOps BTS integration on ReportPortal.")),(0,n.kt)("media-view",{src:a(64249),alt:"Change Issue Type for Azure DevOps BTS integration on ReportPortal"}),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Post issues to Azure DevOps BTS.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now you can see issues with custom issue type on Azure DevOps BTS."))),(0,n.kt)("media-view",{src:a(74626),alt:"Issues with custom issue type on Azure DevOps BTS"}))}c.isMDXComponent=!0},2165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps1-5225fcff0b852dbca8b660a5711fc788.png"},2888:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps10-106c43126b0dc7d1f05cb107b7d59011.png"},99173:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps11-e3d921df7d2a61184f759e5138150446.png"},8909:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps12-3c057674f37c1eba25ae5e7306dd7d6a.png"},31246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps13-e8be61acf93a1c65bdbc9448ea43765d.png"},45095:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps14-66db6f3915bf140003e7c447814cded9.png"},38653:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps15-49192a57e0c7d8bdc54ac44193ed5041.png"},26440:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps16-3d26b940fff21068dada4a77f2a4e140.png"},38868:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps17-d18d936b1dca567c81a622e1fc4466ec.png"},79357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps18-d94859f1104fe1b1b9dce8cafc8a4463.png"},39906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps19-267364a0286363e839094e7e0990fa52.png"},93375:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps2-c1a873d4f08f1d9e2d7ca6992a8fc719.png"},97148:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps20-0c4728da50217e7c67e5d66896e6ad28.png"},83396:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps21-07cdbad103782326975a1d510cb6b3d9.png"},21506:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps22-c6a4d611b5560ad2c9a5f0f577d5b9a5.png"},61970:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps23-62b14d994507796a0bb20d6cc2bff327.png"},30084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps24-d4c9b8a100cdb39be04fa4bc8f715ade.png"},25859:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps25-108d6cdbd505fe5d0fdb1ca60cfaf032.png"},65159:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps26-5ce503f614a8efe4fc24f183fc995f72.png"},53237:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps27-65ccaf022c7cba9c35fb1bd0c2b54ee2.png"},7730:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps28-09f8c69033eb5158f4f16ac7f7e6b1b0.png"},77154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps29-f15f74e6430625388107d0136041cab4.png"},28284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps3-cd83aebd387d938ff0c13767ed56aa17.png"},41739:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps30-cfe16e2c520fabe7646c7340511463fe.png"},17185:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps31-67822c75b92b9f8b997c91c67dfd3b94.png"},29855:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps32-2ee7e7fbdc13fe5dc27c72da1a3982e1.png"},45803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps33-f2f6b5d8007461b8fb8b1fe5b2a6253e.png"},14315:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps34-ab54e22bfb935e26cd23ab3f519a8694.png"},92658:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps35-641b1946fd1d0179685a16a29a06b703.png"},55372:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps36-1f43eb62741fbcb56e460fc59a7b2ce5.png"},61457:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps37-2ff5541c34af029300b8ea127516aa9d.png"},14236:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps38-79275042f9181f5559c9005387d751a5.png"},64249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps39-64e18fc0ebe781b4c131307be8bb7874.png"},96207:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps4-fcff7462fbeda37d5186dcbbdee02883.png"},74626:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps40-87095733a08d8d93110b72bc05d52c51.png"},42323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps5-f8309759cc189185be4037000309e3c1.png"},68167:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps6-8266a9623f1609559443f7584f7900d7.png"},49588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps7-b806a0e9b17356e800de3883ace83e1e.png"},77820:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps8-95b90b8adf9800435c8ed2e0eab274d4.png"},59932:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=a.p+"assets/images/AzureDevOps9-234bd41164d51cc0cb47455b16a5894a.png"}}]);
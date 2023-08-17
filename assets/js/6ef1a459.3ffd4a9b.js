"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6027],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30383:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Okta SAML"},i="Okta SAML",l={unversionedId:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",id:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",title:"Okta SAML",description:"SAML plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/OktaSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta SAML"},sidebar:"defaultSidebar",previous:{title:"Azure SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML"},next:{title:"User account",permalink:"/docs/category/user-account"}},p={},u=[],c={toc:u},s="wrapper";function d(t){let{components:e,...o}=t;return(0,a.kt)(s,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"okta-saml"},"Okta SAML"),(0,a.kt)("p",null,"SAML plugin is available in ReportPortal on the Plugins page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."))),(0,a.kt)("media-view",{thumbnail:r(23799),src:"https://youtu.be/ljXvCVWG4mQ",alt:"Okta SAML authorization in our open source test reporting tool",type:"video"}),(0,a.kt)("p",null,"To set up access with SAML:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the ReportPortal as an ADMIN user"),(0,a.kt)("li",{parentName:"ol"},"Then open the list on the right of the user's image."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Administrative' link"),(0,a.kt)("li",{parentName:"ol"},"Click the 'Plugins' from the left-hand sidebar"),(0,a.kt)("li",{parentName:"ol"},"Click on the'SAML' tab."),(0,a.kt)("li",{parentName:"ol"},"Click on Add new integration"),(0,a.kt)("li",{parentName:"ol"},"The next fields should be present:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'Identity provider name ID*': text\n'Provider name*': text\n'Metadata URL*': URL\n'RP callback URL': URL - RP host/uat\n'Email attribute*': text\n'Name attributes mode' : \n'Last name attribute' text\n'First name attribute' text\nor\n'Full name attribute' : text\n")),(0,a.kt)("p",null,"Mandatory fields are marked with red.\nClick the 'Submit' button.\nAll users of SAML will have access to the ReportPortal instance.",(0,a.kt)("br",{parentName:"p"}),"\n","Just click on the button 'Login with SAML' and choose a needed integration from the drop-down"),(0,a.kt)("p",null,"On Octa side you should to specify SSO url. The format for url is the next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"https://your domain adress/uat/saml/sp/SSO/alias/report-portal-sp\n")),(0,a.kt)("p",null,"\u201cRP callback URL\u201d field is an optional field to provide a redirect base path right in SAML integration settings. Fill in the field in format \u201cRP host/uat\u201d. The format for url is the next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://reportportal.com/uat\n")),(0,a.kt)("p",null,"Once you have submitted an integration with \u201cRP callback URL\u201d, the URL will be applied to all SAML integrations."))}d.isMDXComponent=!0},23799:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n=r.p+"assets/images/OktaSAML-a3676ee795f60d4b46db48703329889a.png"}}]);
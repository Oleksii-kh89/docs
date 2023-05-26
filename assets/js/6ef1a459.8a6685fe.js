"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6027],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30383:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Okta SAML"},i="Okta SAML",l={unversionedId:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",id:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",title:"Okta SAML",description:"SAML plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/OktaSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta SAML"},sidebar:"defaultSidebar",previous:{title:"Azure SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML"},next:{title:"User account",permalink:"/docs/category/user-account"}},p={},u=[],c={toc:u},s="wrapper";function d(t){let{components:e,...o}=t;return(0,n.kt)(s,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"okta-saml"},"Okta SAML"),(0,n.kt)("p",null,"SAML plugin is available in ReportPortal on the Plugins page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."))),(0,n.kt)("media-view",{thumbnail:r(23799),src:"https://youtu.be/ljXvCVWG4mQ",alt:"Okta SAML authorization in our open source test reporting tool",type:"video"}),(0,n.kt)("p",null,"To set up access with SAML:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to the ReportPortal as an ADMIN user")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then open the list on the right of the user's image.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the 'Administrative' link")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the 'Plugins' from the left-hand sidebar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the'SAML' tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Add new integration")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The next fields should be present:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"'Identity provider name ID*': text\n'Provider name*': text\n'Metadata URL*': URL\n'RP callback URL': URL - RP host/uat\n'Email attribute*': text\n'Name attributes mode' : \n'Last name attribute' text\n'First name attribute' text\nor\n'Full name attribute' : text\n")),(0,n.kt)("p",null,"Mandatory fields are marked with red.\nClick the 'Submit' button.\nAll users of SAML will have access to the ReportPortal instance.",(0,n.kt)("br",{parentName:"p"}),"\n","Just click on the button 'Login with SAML' and choose a needed integration from the drop-down"),(0,n.kt)("p",null,"On Octa side you should to specify SSO url. The format for url is the next:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"https://your domain adress/uat/saml/sp/SSO/alias/report-portal-sp\n")),(0,n.kt)("p",null,"\u201cRP callback URL\u201d field is an optional field to provide a redirect base path right in SAML integration settings. Fill in the field in format \u201cRP host/uat\u201d. The format for url is the next:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://reportportal.com/uat\n")),(0,n.kt)("p",null,"Once you have submitted an integration with \u201cRP callback URL\u201d, the URL will be applied to all SAML integrations."))}d.isMDXComponent=!0},23799:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});const a=r.p+"assets/images/OktaSAML-a3676ee795f60d4b46db48703329889a.png"}}]);
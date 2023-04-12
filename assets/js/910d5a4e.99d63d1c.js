"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:9,sidebar_label:"E-mail server"},l="E-mail server",i={unversionedId:"plugins/EmailServer",id:"plugins/EmailServer",title:"E-mail server",description:"Add E-mail server integrations",source:"@site/docs/plugins/EmailServer.mdx",sourceDirName:"plugins",slug:"/plugins/EmailServer",permalink:"/docs/plugins/EmailServer",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/EmailServer.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"E-mail server"},sidebar:"defaultSidebar",previous:{title:"Rally",permalink:"/docs/plugins/Rally"},next:{title:"Sauce Labs",permalink:"/docs/plugins/SauceLabs"}},s={},p=[{value:"Add E-mail server integrations",id:"add-e-mail-server-integrations",level:2},{value:"Global E-mail server integration",id:"global-e-mail-server-integration",level:2},{value:"Project E-mail integration",id:"project-e-mail-integration",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"e-mail-server"},"E-mail server"),(0,a.kt)("h2",{id:"add-e-mail-server-integrations"},"Add E-mail server integrations"),(0,a.kt)("p",null,"You can integrate the ReportPortal with an E-mail server. With this integration, you will be able to perform such functions as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"invite a new user to the project"),(0,a.kt)("li",{parentName:"ul"},"configure notification rules on launch finish")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions:")),(0,a.kt)("p",null,"user with account role ",(0,a.kt)("em",{parentName:"p"},"ADMINISTRATOR")," can configure E-mail integration for the whole instance or per project.\nUser with account role ",(0,a.kt)("em",{parentName:"p"},"PROJECT MANAGER")," can configure E-mail integration only on a project where he is assigned on as Project Manager."),(0,a.kt)("h2",{id:"global-e-mail-server-integration"},"Global E-mail server integration"),(0,a.kt)("p",null,"To configure the Email server for the whole instance:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to the ReportPortal as an ADMIN user")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then open the list on the right of the user's image.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the 'Administrative' link")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the 'Plugins' from the left-hand sidebar")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the 'Email Server' tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Add new integration")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The next fields should be present:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"`Host`: <host_name_of_email_server>\n`Protocol`: SMTP (predefined)\n`Default sender name`: (optional)\n`Port`: <port_number>\n`Authorization`: OFF/ON \n`Username`: <user_email_address>\n`Password`: <user_email_password>\n'TLS' or 'SSL': should be checked depends on the selected port.\n")),(0,a.kt)("p",null,"Example of email server configuration for Gmail email server (detailed info could be found ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/176600?hl=en"},"here"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"`Host`: smtp.gmail.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n")),(0,a.kt)("p",null,"Example of an email server configuration for a Yandex email server (detailed info can be found ",(0,a.kt)("a",{parentName:"p",href:"https://yandex.com/support/mail-new/mail-clients.html"},"here"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"`Host`: smtp.yandex.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Confirm data in the form")),(0,a.kt)("media-view",{thumbnail:r(73672),src:"https://youtu.be/FekmJRNedfU",alt:"E-mail server configuration",type:"video"}),(0,a.kt)("p",null,"After E-mail server integration adding, the configuration will be applied to all projects on the instance."),(0,a.kt)("h2",{id:"project-e-mail-integration"},"Project E-mail integration"),(0,a.kt)("p",null,"If E-mail integration has not to be added on the project, or if Project Manager or Admin want to specified special configurations for a special project, they can configure E-mail server in the project settings."),(0,a.kt)("p",null,"To configure Email server for one single project instance:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the ReportPortal as an ADMIN or PM user"),(0,a.kt)("li",{parentName:"ol"},"Then click on the Project settings icon."),(0,a.kt)("li",{parentName:"ol"},"Click on the Integrations tab."),(0,a.kt)("li",{parentName:"ol"},"Click on the 'E-mail Server' tab."),(0,a.kt)("li",{parentName:"ol"},'Click on the button "Unlink & Setup Manually"'),(0,a.kt)("li",{parentName:"ol"},"The next fields should be present:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"`Host`: <host_name_of_email_server>\n`Protocol`: SMTP (predefined)\n`Default sender name`: (optional)\n`Port`: <port_number>\n`Authorization`: OFF/ON \n`Username`: <user_email_address>\n`Password`: <user_email_password>\n'TLS' or 'SSL': should be checked depends on the selected port.\n")),(0,a.kt)("p",null,"Example of email server configuration for Gmail email server (detailed info could be found ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/176600?hl=en"},"here"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"`Host`: smtp.gmail.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n")),(0,a.kt)("p",null,"Example of an email server configuration for a Yandex email server (detailed info can be found ",(0,a.kt)("a",{parentName:"p",href:"https://yandex.com/support/mail-new/mail-clients.html"},"here"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Host: smtp.yandex.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Confirm data in the form")),(0,a.kt)("p",null,"After E-mail server integration adding, the configuration will be applied to all projects on the instance."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," In case you unlink your project settings from Global settings, for the chosen project")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A possibility to provide custom host in links")," (started from 5.4 version)"),(0,a.kt)("p",null,'You can make this operation via API.\nFor that just choose an API call Integration controller - Update project integration instance, and provide a link to your host in the field  \' "rpHost": "custom_link.com" \'\''),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'PUT/v1/integration/{projectName}/{integrationId}\n\n{\n "enabled": true,\n "integrationParameters": {\n "protocol": "smtp",\n "rpHost": "custom_link.com",\n "authEnabled": true,\n "port": "",\n "sslEnabled": false,\n "starTlsEnabled": true,\n "host": "smtp.com",\n "username": ""\n }\n}\n')))}u.isMDXComponent=!0},73672:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/EmailServer-8631d09bee8561dafb3920f60ca65e2a.png"}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_label:"Azure SAML"},o="Azure SAML",l={unversionedId:"reportportal-configuration/authorization/SAMLProvider/AzureSAML",id:"reportportal-configuration/authorization/SAMLProvider/AzureSAML",title:"Azure SAML",description:"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name).",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/AzureSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Azure SAML"},sidebar:"defaultSidebar",previous:{title:"SAML Provider",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/"},next:{title:"Okta SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML"}},s={},u=[{value:"Configure SAML on Azure side",id:"configure-saml-on-azure-side",level:2},{value:"Create organization in Azure",id:"create-organization-in-azure",level:3},{value:"Create your application in Azure",id:"create-your-application-in-azure",level:3},{value:"Assign users to the application in Azure",id:"assign-users-to-the-application-in-azure",level:3},{value:"Configure Single sign-on on Azure",id:"configure-single-sign-on-on-azure",level:3},{value:"Basic SAML Configuration",id:"basic-saml-configuration",level:3},{value:"Add Azure attributes",id:"add-azure-attributes",level:3},{value:"Configure SAML on ReportPortal side",id:"configure-saml-on-reportportal-side",level:2},{value:"Synchronize Azure SAML and ReportPortal",id:"synchronize-azure-saml-and-reportportal",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-saml"},"Azure SAML"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."))),(0,n.kt)("p",null,"Login to ReportPortal via Azure SAML is available starting from version 5.7 (SAML Okta was implemented in versions before 5.7)."),(0,n.kt)("p",null,"Azure SAML is a useful authorization method for big companies with 100+ employees, especially if this organization is already presented in Azure service. The main benefit here is no need for manual account creation. Users can log in to the ReportPortal using Azure SAML in an uncomplicated way: select login with SAML, then choose Azure, and upon login users\u2019 data is synchronized with ReportPortal automatically."),(0,n.kt)("p",null,"If your organization is using Azure SAML and some employees left, there is no need to remove their accounts from ReportPortal and from other Azure applications \u2013 just clearing their accounts in Azure will be enough."),(0,n.kt)("p",null,"To configure authorization via Azure SAML we need to synchronize Azure and ReportPortal."),(0,n.kt)("p",null,"Firstly, configure SAML on Azure side."),(0,n.kt)("h2",{id:"configure-saml-on-azure-side"},"Configure SAML on Azure side"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal")," using your organization creds.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"App Services"),"."))),(0,n.kt)("media-view",{src:a(86100),alt:"App Services button"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"View")," in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage Azure Active Directory")," section.")),(0,n.kt)("media-view",{src:a(12181),alt:"View button"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage Tenants"),".")),(0,n.kt)("media-view",{src:a(79949),alt:"Manage Tenants"}),(0,n.kt)("h3",{id:"create-organization-in-azure"},"Create organization in Azure"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"If you haven\u2019t configured organization in Azure yet, click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," if you have configured organization in Azure, please, go to step 9.")),(0,n.kt)("media-view",{src:a(29962),alt:"Configure organization"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Select a tenant type (",(0,n.kt)("inlineCode",{parentName:"li"},"Azure Active Directory"),") and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Next: Configuration >")," button.")),(0,n.kt)("media-view",{src:a(50747),alt:"Select a tenant type"}),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Fill in the necessary fields and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Next: Review + create >")," button.")),(0,n.kt)("media-view",{src:a(52365),alt:"Create a tenant"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Pass the Captcha verification and click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," button.")),(0,n.kt)("media-view",{src:a(54383),alt:"Captcha verification"}),(0,n.kt)("h3",{id:"create-your-application-in-azure"},"Create your application in Azure"),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"After the creation of an organization go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Enterprise Applications")," section.")),(0,n.kt)("media-view",{src:a(61512),alt:"Enterprise Applications section"}),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"New application"),".")),(0,n.kt)("media-view",{src:a(98621),alt:"New application button"}),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create your own application"),".")),(0,n.kt)("media-view",{src:a(67524),alt:"Create your own application"}),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Enter the name of your application, choose ",(0,n.kt)("inlineCode",{parentName:"li"},"Integrate any other application you don't find in the gallery (Non-gallery)")," bullet and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," button.")),(0,n.kt)("media-view",{src:a(57140),alt:"The name of your application"}),(0,n.kt)("h3",{id:"assign-users-to-the-application-in-azure"},"Assign users to the application in Azure"),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"Assign users (e.g., yourself) to this application. Please, follow the next screenshots:")),(0,n.kt)("media-view",{src:a(31005),alt:"Assign users to your application"}),(0,n.kt)("media-view",{src:a(94962),alt:"Add user/group"}),(0,n.kt)("media-view",{src:a(63431),alt:"Add assignment"}),(0,n.kt)("h3",{id:"configure-single-sign-on-on-azure"},"Configure Single sign-on on Azure"),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Single sign-on")," section.")),(0,n.kt)("media-view",{src:a(96260),alt:"Single sign-on section"}),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},"Choose SAML.")),(0,n.kt)("media-view",{src:a(73798),alt:"Select a Single sign-on method"}),(0,n.kt)("h3",{id:"basic-saml-configuration"},"Basic SAML Configuration"),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"Configure ",(0,n.kt)("inlineCode",{parentName:"li"},"Basic SAML Configuration")," settings as follows:")),(0,n.kt)("media-view",{src:a(15055),alt:"Basic SAML Configuration"}),(0,n.kt)("h3",{id:"add-azure-attributes"},"Add Azure attributes"),(0,n.kt)("ol",{start:17},(0,n.kt)("li",{parentName:"ol"},"Edit ",(0,n.kt)("inlineCode",{parentName:"li"},"Attributes & Claims")," settings and add ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"email")),", ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"firstName"))," and ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"lastName"))," attributes (default Azure attributes have ugly format). Please follow the next screenshots:")),(0,n.kt)("media-view",{src:a(27503),alt:"Edit Attributes & Claims settings"}),(0,n.kt)("media-view",{src:a(36619),alt:"Add new claim"}),(0,n.kt)("media-view",{src:a(90745),alt:"Manage claim"}),(0,n.kt)("p",null,"SAML configuration is completed on Azure side after adding these attributes."),(0,n.kt)("p",null,"Lastly, configure SAML on ReportPortal side."),(0,n.kt)("h2",{id:"configure-saml-on-reportportal-side"},"Configure SAML on ReportPortal side"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ",(0,n.kt)("strong",{parentName:"p"},"ReportPortal")," as Admin.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Menu at the bottom and choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Administrate")," section."))),(0,n.kt)("media-view",{src:a(84280),alt:"Administrate section to configure SAML on ReportPortal side"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"Plugins"),".")),(0,n.kt)("media-view",{src:a(67919),alt:"Plugins section"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"SAML"),".")),(0,n.kt)("media-view",{src:a(6991),alt:"SAML plugin"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Add integration")," button.")),(0,n.kt)("media-view",{src:a(62772),alt:"Add integration"}),(0,n.kt)("h2",{id:"synchronize-azure-saml-and-reportportal"},"Synchronize Azure SAML and ReportPortal"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Synchronize Azure SAML and ReportPortal as follows:")),(0,n.kt)("media-view",{src:a(57803),alt:"Configure SAML on ReportPortal side"}),(0,n.kt)("p",null,"Finally, you can log in to ReportPortal using Azure SAML."))}d.isMDXComponent=!0},86100:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML1-92b042929d4e97ced259a68ff9c48595.png"},67524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML10-6a23fd3b721c2602c55c7ed2a0be6bbc.png"},57140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML11-1004dc6e53af486ffca2d4e69c810f18.png"},31005:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML12-ef24287d428faf1c1225268f31276a06.png"},94962:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML13-527d6583c9f0fc9663ad826bf699054f.png"},63431:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML14-8f34adbfd9f99384a1170e5ad3c1650e.png"},96260:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML15-43590b9488a24255e9c31db9384c3604.png"},73798:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML16-7de84a049daded06d2efc5e1aae1c09c.png"},15055:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML17-31dc030807624856b9769c82af7ac7da.png"},27503:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML18-5d4186bafc7685bbdb9838a38ff96393.png"},36619:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML19-e424d1bd6e85298967bb1680c6713643.png"},12181:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML2-b88ab5331da6850050d3bdc2e29e0224.png"},90745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML20-78ea4fb5fe53ef4fb6c826517b218533.png"},84280:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML21-e96d50d6b9c587b71220461098459175.png"},67919:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML22-630e92e9c9422a3d516085766af00840.png"},6991:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML23-947d036a20b59253157372519c149f91.png"},62772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML24-2ebfa04dfad9edff564ed1af0a0f1090.png"},79949:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML3-980285de43e221c4754358f0d095c165.png"},29962:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML4-df61701732d7a04a632ae489776041de.png"},50747:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML5-e8e490ee53127d32e35266b27172df07.png"},52365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML6-787a5dba2a61ba981a2f78b4e84318f1.png"},54383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML7-93d6b3810967b1835920afcd3856c21a.png"},61512:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML8-798f0f507c461ecc20e7f40ec9825459.png"},98621:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AzureSAML9-5a79b3928b71f7c1acb8e81c7d8fe07d.png"},57803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/SAMLIntegration-ea71af4655807dc1ee2d23cdbef1ed6f.png"}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2516],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(i),h=n,p=u["".concat(s,".").concat(h)]||u[h]||g[h]||r;return i?a.createElement(p,o(o({ref:t},c),{},{components:i})):a.createElement(p,o({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:n,o[1]=d;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},66603:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_position:4,sidebar_label:"Manage Widgets"},o="Manage Widgets",d={unversionedId:"dashboards-and-widgets/ManageWidgets",id:"dashboards-and-widgets/ManageWidgets",title:"Manage Widgets",description:"Customize widget",source:"@site/docs/dashboards-and-widgets/ManageWidgets.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/ManageWidgets",permalink:"/docs/dashboards-and-widgets/ManageWidgets",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/ManageWidgets.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Manage Widgets"},sidebar:"defaultSidebar",previous:{title:"Widget Creation",permalink:"/docs/dashboards-and-widgets/WidgetCreation"},next:{title:"Launch statistics chart",permalink:"/docs/dashboards-and-widgets/LaunchStatisticsChart"}},s={},l=[{value:"Customize widget",id:"customize-widget",level:2},{value:"Edit widget",id:"edit-widget",level:2},{value:"View widgets in full-screen mode",id:"view-widgets-in-full-screen-mode",level:2},{value:"Delete widget",id:"delete-widget",level:2}],c={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manage-widgets"},"Manage Widgets"),(0,n.kt)("h2",{id:"customize-widget"},"Customize widget"),(0,n.kt)("p",null,"When you create a widget in our test automation dashboard, it has a basic size. Afterward, you may change the widget size."),(0,n.kt)("p",null,"To resize widget the user can hover the mouse cursor over the widget. The system will show resizing arrows."),(0,n.kt)("p",null,"Grab the arrow with the cursor and drag it to the desired width and height."),(0,n.kt)("p",null,"You can maintain the existing aspect ratio or set a new one when resizing the widget."),(0,n.kt)("p",null,"Note: Widgets have a minimum and maximum mean of width and height defined within the application."),(0,n.kt)("p",null,"Another way you can customize your dashboard is by changing the widgets' placement within the dashboard canvas area."),(0,n.kt)("p",null,"To change a widget placement on the dashboard, perform the following: grab a widget with the cursor by clicking and dragging it to the selected position, holding down the mouse button."),(0,n.kt)("p",null,"When you move the widget to the area with sufficient space, the system highlights this place.\nThe widgets located in this space, are moved to the relocatable widget place. Using this option the user can configure the desired location of the widgets on a dashboard."),(0,n.kt)("media-view",{thumbnail:i(69623),src:"https://youtu.be/6nPsNI2v_po",alt:"Customize widgets in our qa automation dashboard",type:"video"}),(0,n.kt)("h2",{id:"edit-widget"},"Edit widget"),(0,n.kt)("p",null,"To create a new widget for data visualization, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Edit" icon in the right corner of the widget header.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'After the "Edit Widget" window is opened, you can edit any widget settings except the template itself.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Make the necessary changes and click the "Save" button. The widget will be updated.'))),(0,n.kt)("media-view",{thumbnail:i(79608),src:"https://youtu.be/VlpvP7IIEoY",alt:"Edit Widget",type:"video"}),(0,n.kt)("h2",{id:"view-widgets-in-full-screen-mode"},"View widgets in full-screen mode"),(0,n.kt)("p",null,"To view widgets on the whole screen, click the 'Full Screen' button in the right top corner of the dashboard."),(0,n.kt)("p",null,"Widgets are shown in the same order as for standard view.",(0,n.kt)("br",{parentName:"p"}),"\n","Note: Clickable areas or elements are disabled for the full-screen mode selected, therefore it will not be possible to create a new widget, update, or delete available widgets in this mode."),(0,n.kt)("p",null,"The auto-refresh timeout for widgets in full-screen mode is 30 sec."),(0,n.kt)("h2",{id:"delete-widget"},"Delete widget"),(0,n.kt)("p",null,"To delete the widget: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Delete" icon (X) in the right corner of the widget header.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Delete" button on the confirmation popup.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The widget will be deleted from the system."))),(0,n.kt)("media-view",{thumbnail:i(86870),src:"https://youtu.be/BrY6BnW7aAE",alt:"Delete Widget",type:"video"}),(0,n.kt)("p",null,'If you delete a shared widget, the deleted widget will be displayed for other\nusers as "Widget not found".'))}g.isMDXComponent=!0},69623:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a=i.p+"assets/images/CustomizeWidget-372a06c18d9aa15b6c80bef0a03c0828.png"},86870:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a=i.p+"assets/images/DeleteWidget-14fae75ee085ca966504213d5ba8cb09.png"},79608:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a=i.p+"assets/images/EditWidget-df992198bf7499a6180883f83b489330.png"}}]);
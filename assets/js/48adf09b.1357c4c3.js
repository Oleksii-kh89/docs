"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(g,o(o({ref:t},m),{},{components:a})):r.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:2,sidebar_label:"All Users page"},o="All Users page",i={unversionedId:"management-board/AllUsersPage",id:"management-board/AllUsersPage",title:"All Users page",description:"All Users page in Management Board provide the access to see all available users in the system.",source:"@site/docs/management-board/AllUsersPage.mdx",sourceDirName:"management-board",slug:"/management-board/AllUsersPage",permalink:"/docs/management-board/AllUsersPage",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/management-board/AllUsersPage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"All Users page"},sidebar:"defaultSidebar",previous:{title:"All Projects page",permalink:"/docs/management-board/AllProjectsPage"},next:{title:"Plugins",permalink:"/docs/category/plugins"}},s={},p=[{value:"Add user on &quot;All Users&quot; page",id:"add-user-on-all-users-page",level:2},{value:"Invite user on &quot;All Users&quot; page",id:"invite-user-on-all-users-page",level:2},{value:"Assign user on &quot;All Users&quot; page in Management Board",id:"assign-user-on-all-users-page-in-management-board",level:2},{value:"Unassign user on &quot;All Users&quot; page in Management Board",id:"unassign-user-on-all-users-page-in-management-board",level:2},{value:"Edit user project role on &quot;All Users&quot; page in Management Board",id:"edit-user-project-role-on-all-users-page-in-management-board",level:2},{value:"Delete user",id:"delete-user",level:2},{value:"Edit user account role",id:"edit-user-account-role",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"all-users-page"},"All Users page"),(0,n.kt)("p",null,"All Users page in Management Board provide the access to see all available users in the system."),(0,n.kt)("p",null,"The page provides next information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"user's information: login, full name, email address"),(0,n.kt)("li",{parentName:"ul"},"last login date: in 'time ago' format"),(0,n.kt)("li",{parentName:"ul"},"projects on which users are assigned and roles on them"),(0,n.kt)("li",{parentName:"ul"},"Delete button: only Admin is able to delete user from the system")),(0,n.kt)("p",null,"All Users page allows: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to add and invite new ReportPortal users."),(0,n.kt)("li",{parentName:"ul"},"to assign users to the projects with any project role."),(0,n.kt)("li",{parentName:"ul"},"to unassign users from projects."),(0,n.kt)("li",{parentName:"ul"},"to update project role"),(0,n.kt)("li",{parentName:"ul"},"to delete users from ReportPortal.")),(0,n.kt)("p",null,"ReportPortal provides 2 ways to create a new user account in the Management Board:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'on the "All Users" page'),(0,n.kt)("li",{parentName:"ul"},'on All Projects\' "Members" page. This point is described on\n',(0,n.kt)("a",{parentName:"li",href:"/reportportal-configuration/CreationOfProjectAndAddingUsers"},"Creation of Project and Adding Users"))),(0,n.kt)("h2",{id:"add-user-on-all-users-page"},'Add user on "All Users" page'),(0,n.kt)("p",null,'To add a user on the "All Users" page, perform the following steps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Add User" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'"Add new user form" will appear.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Fill in the form and click "Add" button. A new user will be added to\nthe system and assigned to the selected project, and to "Personal Project" with the\nPROJECT MANAGER project role. Message with authorization data will be sent to the user\'s email.'))),(0,n.kt)("media-view",{thumbnail:a(94163),src:"https://youtu.be/3DmBPpRKRwk",alt:"Add User From All Users Page",type:"video"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),(0,n.kt)("br",{parentName:"p"}),"\n",'This is the only place in the system where an Administrator can be created\nfrom. "Project role" is disabled, if Administrator has been selected in the\n"Account role" field. The "ProjectRole" parameter is not specified for\nAdministrator, the Administrator has full privileges on the project.')),(0,n.kt)("h2",{id:"invite-user-on-all-users-page"},'Invite user on "All Users" page'),(0,n.kt)("p",null,'To invite a user on the "All Users" page, perform the following steps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Invite User" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The "Invite new user" form will appear.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Fill in the form and click the "Send invite" button. The invitation\nhas been sent. You can copy the link to the invitation from the "Link to\ninvitation" field.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user will receive an email with the link to the invitation. Registration\nlink will be active until the user registers in the system by this reference,\nbut not more than 24 hours. When the user clicks the link, he/she will see a registration form.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user needs to fill in the registration form and click the "Register" button to complete the registration.\nThe user will be assigned to the project that was specified by you during the invitation,\nand to "Personal Project" with the PROJECT MANAGER project role. '))),(0,n.kt)("media-view",{thumbnail:a(5629),src:"https://youtu.be/MM0eNrDK5yo",alt:"Invite User From All Users page",type:"video"}),(0,n.kt)("h2",{id:"assign-user-on-all-users-page-in-management-board"},'Assign user on "All Users" page in Management Board'),(0,n.kt)("p",null,'To assign/unassign user on the "All Users" page, perform the following\nsteps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "View Projects" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click green "plus" button \u2013 Assign user to the project.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a project from the drop-down list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a project role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Assign" button. The user will be assigned to the project.'))),(0,n.kt)("h2",{id:"unassign-user-on-all-users-page-in-management-board"},'Unassign user on "All Users" page in Management Board'),(0,n.kt)("p",null,"To unassign a user from the project, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select a user and click "View Projects" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Unassign" button near the selected project.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Confirm the warning message: "Are you sure you want to unassign\nuser from the project?". The user will be unassigned from the project.'))),(0,n.kt)("media-view",{thumbnail:a(12778),src:"https://youtu.be/DGssKgYmbds",alt:"Assign and Unassign User From All Users page",type:"video"}),(0,n.kt)("h2",{id:"edit-user-project-role-on-all-users-page-in-management-board"},'Edit user project role on "All Users" page in Management Board'),(0,n.kt)("p",null,'To edit a user project role on the "All Users" page, perform the following\nsteps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "View Projects" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select a new value from the "Project Role" drop-down.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The new project role will be automatically saved."))),(0,n.kt)("media-view",{thumbnail:a(98058),src:"https://youtu.be/Kb19uMYm0wM",alt:"Edit Project Role From All Users page",type:"video"}),(0,n.kt)("h2",{id:"delete-user"},"Delete user"),(0,n.kt)("p",null,"To delete a user from ReportPortal, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select a user and click the "Delete" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The warning message will be displayed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Delete" button. The user will be deleted from the ReportPortal. All launches and shared data (filters,\ndashboards and widgets), that the user owns on the projects will be kept in ReportPortal.'))),(0,n.kt)("media-view",{thumbnail:a(84178),src:"https://youtu.be/8kaqZPyW5KQ",alt:"Delete User",type:"video"}),(0,n.kt)("h2",{id:"edit-user-account-role"},"Edit user account role"),(0,n.kt)("p",null,"The only space in ReportPortal where user can get the Administrator rights is All Users page"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GRANT ADMINISTRATOR")),(0,n.kt)("p",null,"To grant Administrator role for any user, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into the ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Hover the cursor to the selected user\'s profile. "Make admin" label will\nappear.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Make admin" label. A confirmation message will be shown.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Change" button on pop-up window. Account role User will be changed to\nAdministrator. The user account will be marked with "admin" label.'))),(0,n.kt)("media-view",{thumbnail:a(69948),src:"https://youtu.be/U6xmYzDwwbI",alt:"Change Account Role to Administrator",type:"video"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TAKE AWAY ADMINISTRATOR ROLE")),(0,n.kt)("p",null,"To take away Administrator account role, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Management Board -",">",' "All Users" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Admin" label on the selected user\'s profile.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A confirm message will be shown.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Change" button. Account role "Administrator" will be changed to\n"User".'))),(0,n.kt)("media-view",{thumbnail:a(69948),src:"https://youtu.be/7pLNEDY7Uis",alt:"Take away Administrator role",type:"video"}))}d.isMDXComponent=!0},94163:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AddUserFromAllUsersPage-20c84ad20a1115d1d5992e959656c47f.png"},12778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/AssignUnassignUserFromAllUsers-005d23e0780ae01c6211a91752943d21.png"},69948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/ChangeAccountRole-c0fc2cf555ee13cb46f63025c74e94da.png"},84178:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/DeleteUser-2047a8fbf471dbd8c00cd5fd1cbffa00.png"},98058:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/EditProjectRoleFromAllUsers-3d19001630222efc1a8c5df286b7f55c.png"},5629:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/InviteUserFromAllUsers-b0ca007e3c3608a01fd0a4a0565e96d8.png"}}]);
"use strict";(self.webpackChunkdoc_site_00=self.webpackChunkdoc_site_00||[]).push([[5344],{9910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Robots/kuka_backup","title":"Full System Backup","description":"Backups should be performed at regular intervals or, at a minimum, prior to major changes that could potentially disrupt the system. System cloning is done using Clonezilla, as described below. The process requires a PC, a SATA-to-USB adapter, and a bootable USB drive with Clonezilla.","source":"@site/docs/Robots/10_kuka_backup.md","sourceDirName":"Robots","slug":"/Robots/kuka_backup","permalink":"/docs/Robots/kuka_backup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"displayed_sidebar":"docsSidebar","sidebar_position":10},"sidebar":"docsSidebar","previous":{"title":"Yet Another Human Machine Interface...","permalink":"/docs/Robots/yahmi/hello_yahmi"},"next":{"title":"NGINX","permalink":"/docs/category/nginx"}}');var s=t(4848),a=t(8453);const i={displayed_sidebar:"docsSidebar",sidebar_position:10},l="Full System Backup",r={},d=[{value:"Clonezilla Offline Backup and Restore",id:"clonezilla-offline-backup-and-restore",level:2},{value:"Clonezilla Network Backup and Restore",id:"clonezilla-network-backup-and-restore",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"full-system-backup",children:"Full System Backup"})}),"\n",(0,s.jsxs)(n.p,{children:["Backups should be performed at regular intervals or, at a minimum, prior to major changes that could potentially disrupt the system. System cloning is done using ",(0,s.jsx)(n.strong,{children:"Clonezilla"}),", as described below. The process requires a PC, a SATA-to-USB adapter, and a bootable USB drive with Clonezilla."]}),"\n",(0,s.jsxs)(n.p,{children:["Cloned images of the KUKA system are stored digitally on our server under ",(0,s.jsx)(n.code,{children:"KUKA\\Backup\\[YYMMDD_RobotName]"}),". Additionally, two physical SSDs are maintained, containing the latest and the previous system backups. These SSDs are plug-and-play \u2014> simply shut down the robot, swap the disks, and reboot to load the backup images."]}),"\n",(0,s.jsxs)(n.p,{children:["In the event that all SSDs fail, the digital backups can be restored onto a new SSD using ",(0,s.jsx)(n.strong,{children:"Clonezilla"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"clonezilla-offline-backup-and-restore",children:"Clonezilla Offline Backup and Restore"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown the robot and remove its harddisk."}),"\n",(0,s.jsx)(n.li,{children:"Boot Clonezilla from an USB-stick and wait for the splash screen."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"INSERT SPLASH SCREEN IMAGE HERE"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Choose YALALALALALALA"}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use a SATA to USB adapter to connect it to a PC."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"clonezilla-network-backup-and-restore",children:"Clonezilla Network Backup and Restore"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown the robot and remove its harddisk."}),"\n",(0,s.jsx)(n.li,{children:"Boot Clonezilla from an USB-stick and wait for the splash screen."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
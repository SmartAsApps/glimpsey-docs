"use strict";(self.webpackChunkglimpsey_docs=self.webpackChunkglimpsey_docs||[]).push([[366],{7851:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/product_detail-f4b071a249fc40705d0e4da8cef532b1.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}},9061:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"integration-guide/shop_integration","title":"Shop-Integration","description":"Auf unserer Produkt-Detail-Seite im Backoffice haben wir im untersten Abschnitt Code-Snippet zur Integration alles, was wir f\xfcr unsere Integration ben\xf6tigen.","source":"@site/docs/integration-guide/shop_integration.md","sourceDirName":"integration-guide","slug":"/integration-guide/shop_integration","permalink":"/glimpsey-docs/docs/integration-guide/shop_integration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Modelle hochladen","permalink":"/glimpsey-docs/docs/integration-guide/upload_models"},"next":{"title":"Tracking-Integration mit Google Analytics","permalink":"/glimpsey-docs/docs/integration-guide/tracking"}}');var r=i(4848),s=i(8453);const d={sidebar_position:2},a="Shop-Integration",o={},l=[{value:"Die Viewer-URL weiter anpassen",id:"die-viewer-url-weiter-anpassen",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"shop-integration",children:"Shop-Integration"})}),"\n",(0,r.jsxs)(n.p,{children:["Auf unserer Produkt-Detail-Seite im Backoffice haben wir im untersten Abschnitt ",(0,r.jsx)(n.em,{children:"Code-Snippet zur Integration"})," alles, was wir f\xfcr unsere Integration ben\xf6tigen."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Glimpsey Produkt-\xdcbersicht",src:i(7851).A+"",width:"3464",height:"2533"})}),"\n",(0,r.jsx)(n.p,{children:"Hier sind zwei iframe-HTML-Snippets (bzw. nur eins, wenn man keine Produkt-ID vergeben hat. Dies kann aber jederzeit nachgeholt werden) zu finden."}),"\n",(0,r.jsx)(n.p,{children:"Das erste ist f\xfcr den Zugriff \xfcber die interne Glimpsey-ID. Diese ist eigentlich nur sinnvoll, wennn man nur 1-2 Produkte auf der Website hat. Wenn man mehr hat, sollte man \xfcber\ndie Produkt ID gehen."}),"\n",(0,r.jsxs)(n.p,{children:["Dieser Zugriff \xfcber die Produkt-ID erlaubt, die Viewer-URL zu generieren, da sie immer das Format ",(0,r.jsx)(n.code,{children:"https:://<deinUnternehmen>.glimpsey.io/iframe/sku/<Produkt-ID>/"})," hat."]}),"\n",(0,r.jsx)(n.p,{children:"Diese Viewer-URL kann entweder, wie im Snippet, als iframe eingebunden werden. Oder direkt als Fullscreen-Viewer aufgerufen werden. Der Viewer passt sich dabei immer den Platzverh\xe4ltnissen an, die ihm zugewiesen werden.\nWenn der Viewer also in einen bestehenden Container eingepasst werden soll, muss die Gr\xf6\xdfe des iframes nur \xfcber CSS entsprechend gestylt werden."}),"\n",(0,r.jsx)(n.h2,{id:"die-viewer-url-weiter-anpassen",children:"Die Viewer-URL weiter anpassen"}),"\n",(0,r.jsx)(n.p,{children:"Die Viewer-URL unterst\xfctzt noch eine Reihe von URL-Parametern:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tId=<userId>"}),(0,r.jsx)(n.td,{children:"Google Analytics User-ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startInAr=true"}),(0,r.jsx)(n.td,{children:"Versucht, direkt den AR-Modus zu starten"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tId"})," wird ben\xf6tigt, um die ",(0,r.jsx)(n.a,{href:"/glimpsey-docs/docs/integration-guide/tracking",children:"Google Analytics-Integration"})," zu nutzen. Hiermit wird die User-Id des aktuellen Nutzers \xfcbergeben."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"startInAr=true"}),' versucht, direkt den AR-Modus zu starten. Da einige Browser dies nicht ohne Nutzer-Interaktion erlauben,\nwir bei einem Fehlversuch der 3D-Viewer angezeigt und der Nutzer muss selbst noch ein den "Im Raum anzeigen"-Button klicken.\nWenn kein AR auf dem Ger\xe4t verf\xfcgbar ist, wird der normale AR-Fallback-Dialog angezeigt.']})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);
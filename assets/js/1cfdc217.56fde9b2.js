"use strict";(self.webpackChunkglimpsey_docs=self.webpackChunkglimpsey_docs||[]).push([[886],{8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},9135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"integration-guide/tracking","title":"Tracking-Integration mit Google Analytics","description":"\xdcber den tId-Parameter kann die Google Analytics User-ID mitgegeben werden. Diese wird genutzt um folgende Events bei","source":"@site/docs/integration-guide/tracking.md","sourceDirName":"integration-guide","slug":"/integration-guide/tracking","permalink":"/glimpsey-docs/docs/integration-guide/tracking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Shop-Integration","permalink":"/glimpsey-docs/docs/integration-guide/shop_integration"}}');var r=t(4848),s=t(8453);const a={sidebar_position:3},d="Tracking-Integration mit Google Analytics",l={},o=[{value:"3D-Viewer-Interaktion",id:"3d-viewer-interaktion",level:2},{value:"AR-Session gestartet",id:"ar-session-gestartet",level:2},{value:"AR-Fallback-Dialog",id:"ar-fallback-dialog",level:2},{value:"Varianten-Switch",id:"varianten-switch",level:2}];function c(e){const n={em:"em",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tracking-integration-mit-google-analytics",children:"Tracking-Integration mit Google Analytics"})}),"\n",(0,r.jsxs)(n.p,{children:["\xdcber den ",(0,r.jsx)(n.em,{children:"tId"}),"-Parameter kann die Google Analytics User-ID mitgegeben werden. Diese wird genutzt um folgende Events bei\nder Nutzung des 3D-Viewers und der AR-Funktionen zu tracken:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Event"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glimpsey_3d_viewer_interaction"}),(0,r.jsx)(n.td,{children:"Der Nutzer hat mit dem 3D-Viewer interagiert und die Kamera bewegt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glimpsey_ar_session_started"}),(0,r.jsx)(n.td,{children:"Eine AR-Session wurde gestartet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glimpsey_ar_fallback_shown"}),(0,r.jsx)(n.td,{children:"Der AR-Fallback-Dialog wurde gezeigt, da das Ger\xe4t kein AR unterst\xfctzt."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glimpsey_variant_switch"}),(0,r.jsx)(n.td,{children:"Es wurde zwischen verschiedenen Varianten des Produkts gewechselt"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Damit dieses Tracking funktioniert, muss im Backoffice unter ",(0,r.jsx)(n.em,{children:"Viewer-Anpassungen"})," die GA4-Measurement-ID angegeben werden."]}),"\n",(0,r.jsx)(n.h2,{id:"3d-viewer-interaktion",children:"3D-Viewer-Interaktion"}),"\n",(0,r.jsxs)(n.p,{children:["Das Event ",(0,r.jsx)(n.em,{children:"glimpsey_3d_viewer_interaction"})," zeigt an, dass der Nutzer die Kamera im 3D-Viewer bewegt hat. Dieses Event wird\nmaximal einmal in der Sekunde gesendet und kann so auch \xfcber die L\xe4nge der Interaktion Auskunft geben. Insbesondere wenn\nder Viewer als iframe eingebunden wird, kann hier\xfcber getrackt werden, dass der Nutzer die 3D-Funktion aktiv nutzt."]}),"\n",(0,r.jsx)(n.h2,{id:"ar-session-gestartet",children:"AR-Session gestartet"}),"\n",(0,r.jsxs)(n.p,{children:["Das Event ",(0,r.jsx)(n.em,{children:"glimpsey_ar_session_started"})," zeigt an, dass der Nutzer eine AR-Session gestartet hat."]}),"\n",(0,r.jsx)(n.h2,{id:"ar-fallback-dialog",children:"AR-Fallback-Dialog"}),"\n",(0,r.jsxs)(n.p,{children:["Das Event ",(0,r.jsx)(n.em,{children:"glimpsey_ar_fallback_shown"})," zeigt an, dass der AR-Fallback-Dialog angezeigt wurde. Dieses wird angezeigt,\nwenn AR auf einem Ger\xe4t gestartet werden soll, dass dieses nicht unterst\xfctzt. Der Dialog enth\xe4lt einen QR-Code, um\nAR auf einem Smartphone oder Tablet zu starten. Dieser QR-Code enth\xe4lt auch die Google Analytics User-Id, so dass die\nSession auf dem Smartphone getrackt werden kann."]}),"\n",(0,r.jsx)(n.h2,{id:"varianten-switch",children:"Varianten-Switch"}),"\n",(0,r.jsxs)(n.p,{children:["Das Event ",(0,r.jsx)(n.em,{children:"glimpsey_variant_switch"})," zeigt an, dass die Varianten gewechselt wurden. Dieses Event kann nat\xfcrlich nur erfolgen,\nwenn ein Produkt mit mehreren Varianten angelegt wurde."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);
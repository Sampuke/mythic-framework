"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[8970,6049,918],{86049:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(89526),a=r(92070),o=r(65092),l=r(88590),c=r(14710),i=r(33933),u=r(16025),s=r(72215),d=r(71529),m=r(42282),p=r(57170),f=r(80918),b=(0,d.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},list:{position:"inherit"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const h=function(e){var t=e.jobData,r=(e.playerJob,b()),d=(0,o.k6)(),h=(0,a.v9)((function(e){return e.data.data.companyUpgrades}));return n.createElement("div",{className:r.wrapper},n.createElement(l.Z,{position:"static",className:r.header},n.createElement(c.ZP,{container:!0},n.createElement(c.ZP,{item:!0,xs:8},n.createElement(m.Z,{lines:1},t.Name)),n.createElement(c.ZP,{item:!0,xs:4,className:r.headerAction},n.createElement(i.Z,{title:"Home"},n.createElement(u.Z,{onClick:function(){d.goBack()}},n.createElement(p.G,{icon:["fas","house"]})))))),n.createElement(s.Z,{className:r.list},Boolean(h)?h.map((function(e,t){return n.createElement(f.default,{key:"upgrade-".concat(t),upgrade:e})})):n.createElement("div",{className:r.emptyMsg},"No Upgrades Available")))}},80918:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(89526),a=r(91153),o=r(77548),l=r(81939),c=r(16025),i=r(71529),u=r(57170),s=r(87961),d=r(20785),m=r(21447);function p(e,t,r,n,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=(0,i.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}}}}));const v=function(e){var t=e.upgrade,r=h(),i=(0,s.VY)(),b=(0,s.AA)()(t.value),v=f((0,n.useState)(!1),2),y=v[0],g=v[1],E=function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.send("PurchaseUpgrade",t);case 3:return e.next=5,e.sent.json();case 5:if((r=e.sent).error){e.next=9;break}e.next=20;break;case 9:e.t0=r.code,e.next=1===e.t0?12:2===e.t0?14:3===e.t0?16:-1===e.t0?18:20;break;case 12:return i("Unable to Purchase Upgrade"),e.abrupt("break",20);case 14:return i("Not Authorized"),e.abrupt("break",20);case 16:return i("Unable to Purchase Upgrade"),e.abrupt("break",20);case 18:return i("Not Yet Implemented"),e.abrupt("break",20);case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(0),console.log(e.t1),i("Unable to Purchase Upgrade");case 26:g(!1);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){p(o,n,a,l,c,"next",e)}function c(e){p(o,n,a,l,c,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();return n.createElement("div",{className:r.wrapper},n.createElement(a.ZP,{className:r.item},n.createElement(o.Z,{primary:t.label,secondary:b?"Owned":"$".concat(t.price)}),!b&&n.createElement(l.Z,null,n.createElement(c.Z,{edge:"end",onClick:function(){return g(!0)}},n.createElement(u.G,{icon:["fas","money-check-dollar-pen"]})))),n.createElement(d.I4,{title:"Purchase ".concat(t.label,"?"),open:y,confirm:"Yes",decline:"No",onConfirm:E,onDecline:function(){return g(!1)}},n.createElement("p",null,"Purchases may not be refunded, additional costs may be associated with using this purchase.")))}},58970:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(89526),a=r(92070),o=r(20088),l=r(38355),c=r(71529),i=r(65092),u=r(21447),s=r(53059),d=r(20785),m=r(79530),p=r(99456),f=(r(86049),r(57902)),b=r(87961);function h(e,t,r,n,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){h(o,n,a,l,c,"next",e)}function c(e){h(o,n,a,l,c,"throw",e)}l(void 0)}))}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=(0,c.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},content:{height:"93.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},tabPanel:{},phoneTab:{minWidth:"33.333%"},alert:{width:"fit-content",margin:"auto"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"35%"}}}));const w=function(e){var t=E(),r=(0,a.I0)(),c=(0,b.VY)(),h=(0,i.k6)(),g=(0,b.Gt)(),w=e.match.params.jobId,k=y((0,n.useState)(!1),2),A=k[0],N=k[1],x=y((0,n.useState)(!1),2),S=x[0],Z=(x[1],(0,a.v9)((function(e){return e.data.data.player}))),P=(0,a.v9)((function(e){return e.data.data.JobData})),T=(0,a.v9)((function(e){return e.com.tab})),I=Z.Jobs.find((function(e){return e.Id==w})),D=P.find((function(e){return e.Id==(null==I?void 0:I.Id)}));I&&D||h.goBack();var j=(0,n.useMemo)((function(){return(0,s.throttle)(v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,u.Z.send("FetchRoster",{ReqUpdate:!0});case 4:return e.next=6,e.sent.json();case 6:if(!(t=e.sent)||!t.rosterData){e.next=12;break}r({type:"UPDATE_ROSTERS",payload:{roster:t.rosterData}}),t.jobData&&r({type:"SET_DATA",payload:{type:"JobData",data:t.jobData}}),e.next=13;break;case 12:throw t;case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),c("Unable to Load Roster's"),r({type:"UPDATE_ROSTERS",payload:{roster:!1}});case 20:N(!1);case 21:case"end":return e.stop()}}),e,null,[[1,15]])}))),5e3)}),[]);return A?n.createElement("div",{className:t.wrapper},n.createElement(d.aN,{static:!0,text:"Loading"})):n.createElement(n.Fragment,null,!S&&I?n.createElement("div",{className:t.wrapper},n.createElement("div",{className:t.content},n.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==T,id:"notifications"},0===T&&n.createElement(p.default,{loading:A,refreshRoster:function(){return j()},jobData:D,playerJob:I})),n.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==T,id:"person"},1===T&&n.createElement(m.default,{refreshRoster:function(){return j()},jobData:D,playerJob:I})),n.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:2!==T,id:"timeworked"},2===T&&n.createElement(f.default,{refreshRoster:function(){return j()},jobData:D,playerJob:I}))),n.createElement("div",{className:t.tabs},n.createElement(o.Z,{value:T,onChange:function(e,t){r({type:"SET_COM_TAB",payload:{tab:t}})},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",scrollButtons:!1},n.createElement(l.Z,{className:t.phoneTab,label:"Roster"}),n.createElement(l.Z,{className:t.phoneTab,disabled:!(g("JOB_MANAGEMENT",I.Id)||Z.SID==(null==D?void 0:D.Owner)),label:"Manage"}),n.createElement(l.Z,{className:t.phoneTab,disabled:!(g("JOB_MANAGEMENT",I.Id)||Z.SID==(null==D?void 0:D.Owner)),label:"Time Worked"})))):n.createElement("div",{className:t.wrapper},n.createElement("div",{className:t.emptyMsg},"Error")))}}}]);
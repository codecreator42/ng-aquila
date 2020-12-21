!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,o=!1,a=void 0;try{for(var c,r=n[Symbol.iterator]();!(i=(c=r.next()).done)&&(e.push(c.value),!t||e.length!==t);i=!0);}catch(s){o=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return e}(n,t)||e(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function a(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4TwE":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i,o=e("EM62"),a=((i=function n(){c(this,n)}).\u0275mod=o.Lb({type:i}),i.\u0275inj=o.Kb({factory:function(n){return new(n||i)}}),i);e("VqxJ")},UcN8:function(n,e,i){"use strict";i.r(e),i.d(e,"NotificationExamplesModule",(function(){return $}));var o,r,s,l,f,u,b,h,p=i("ukXx"),m=i("sEIs"),d=i("0FLW"),g=i("ZhfD"),x=i("EM62"),y=((o=function n(){c(this,n)}).\u0275mod=x.Lb({type:o}),o.\u0275inj=x.Kb({factory:function(n){return new(n||o)},providers:[],imports:[[g.a,m.i]]}),o),v=i("J+dc"),k={direction:"bottom-start",fallbackOrientation:"vertical",autoFocus:!0,offset:8},T=((r=function(){function n(t,e,i){c(this,n),this._nxOverlay=t,this._element=e,this._triggerButton=i}return a(n,[{key:"open",value:function(){var n=this;if(!this._overlayRef){var t=Object.assign(Object.assign({},k),{triggerButton:this._triggerButton});this._overlayRef=this._nxOverlay.open(this._panelTemplate,this._element,t),this._overlayRef.afterClosed().pipe(Object(v.a)(1)).subscribe((function(){return n.close()}))}}},{key:"close",value:function(){this._overlayRef&&(this._overlayRef.close(),this._overlayRef=null)}},{key:"notificationPanel",set:function(n){this._panelTemplate=n},get:function(){return this._panelTemplate}}]),n}()).\u0275fac=function(n){return new(n||r)(x.Nb(g.b),x.Nb(x.l),x.Nb(g.c,10))},r.\u0275dir=x.Ib({type:r,selectors:[["","nxNotificationPanelTriggerFor",""]],hostBindings:function(n,t){1&n&&x.ac("click",(function(){return t.open()}))},inputs:{notificationPanel:["nxNotificationPanelTriggerFor","notificationPanel"]}}),r),w=i("sg/T"),S=i("g6G6"),_=i("5XID"),O=i("ZTXN"),P=[[["nx-notification-item-metadata"]],[["nx-notification-item-content"]],"*",[["nx-notification-item-actions"]]],M=["nx-notification-item-metadata","nx-notification-item-content","*","nx-notification-item-actions"],N=((s=function(){function n(t,e){c(this,n),this._elementRef=t,this._focusMonitor=e,this._read=!1,this._clickable=!0,this._hasFocus=!1,this.focused=new O.a,this._focusMonitor.monitor(this._elementRef)}return a(n,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(n){void 0!==n||this._hasFocus||(this.focused.next(this),this._hasFocus=!0,this._focusMonitor.focusVia(this._elementRef,"keyboard")),this._hasFocus||(this._elementRef.nativeElement.focus(),this._hasFocus=!0)}},{key:"_blur",value:function(){this._hasFocus=!1}},{key:"read",set:function(n){this._read=Object(_.b)(n)},get:function(){return this._read}},{key:"clickable",set:function(n){this._clickable=Object(_.b)(n)},get:function(){return this._clickable}}]),n}()).\u0275fac=function(n){return new(n||s)(x.Nb(x.l),x.Nb(w.g))},s.\u0275cmp=x.Hb({type:s,selectors:[["nx-notification-panel-item"],["","nxNotificationPanelItem",""]],hostAttrs:["tabindex","0"],hostVars:4,hostBindings:function(n,t){1&n&&x.ac("focus",(function(){return t.focus()}))("blur",(function(){return t._blur()})),2&n&&x.Fb("nx-notification-item--read",t.read)("nx-notification-item--clickable",t.clickable)},inputs:{read:"read",clickable:"clickable"},ngContentSelectors:M,decls:4,vars:0,template:function(n,t){1&n&&(x.jc(P),x.ic(0),x.ic(1,1),x.ic(2,2),x.ic(3,3))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--notification-panel-item-unread-background-color);padding:16px 24px;margin:0 -24px}.nx-notification-item--read[_nghost-%COMP%]{background-color:var(--notification-panel-item-read-background-color)}[_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background}}  nx-notification-item-metadata{font-size:14px;font-weight:400;line-height:20px;letter-spacing:.2px;margin-bottom:4px;display:flex;align-items:center}  nx-notification-item-actions,   nx-notification-item-content{font-size:16px;font-weight:400;line-height:24px}  nx-notification-item-actions{display:flex;justify-content:space-between;padding-top:8px}.nx-notification-item--clickable[_nghost-%COMP%]{cursor:pointer}.nx-notification-item--clickable[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-unread-hover-background-color)}.nx-notification-item--clickable[_nghost-%COMP%]:active{background-color:var(--notification-panel-item-unread-active-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-read-hover-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:active{background-color:var(-notification-panel-item-read-active-background-color)}"]}),s),J=["*"],C=((h=function(){function n(){c(this,n)}return a(n,[{key:"ngAfterContentInit",value:function(){this._initKeyManager()}},{key:"_initKeyManager",value:function(){var n=this;this._keyManager=new w.f(this.items).withVerticalOrientation().withHorizontalOrientation("ltr"),this.items.length>0&&Object(S.a).apply(void 0,t(this.items.map((function(n){return n.focused})))).subscribe((function(t){n._keyManager.updateActiveItem(t)}))}},{key:"_handleKeydown",value:function(n){this._keyManager.onKeydown(n)}}]),n}()).\u0275fac=function(n){return new(n||h)},h.\u0275cmp=x.Hb({type:h,selectors:[["nx-notification-panel"]],contentQueries:function(n,t,e){var i;1&n&&x.Gb(e,N,!0),2&n&&x.qc(i=x.bc())&&(t.items=i)},viewQuery:function(n,t){var e;1&n&&x.Nc(x.N,!0),2&n&&x.qc(e=x.bc())&&(t.templateRef=e.first)},hostVars:2,hostBindings:function(n,t){1&n&&x.ac("keydown",(function(n){return t._handleKeydown(n)})),2&n&&x.Fb("nx-notification-panel",!0)},exportAs:["nxNotificationPanel"],ngContentSelectors:J,decls:1,vars:0,template:function(n,t){1&n&&(x.jc(),x.ic(0))},styles:["[_nghost-%COMP%]{padding:16px 24px;display:flex;flex-direction:column;background-color:var(--notification-panel-background-color);max-height:740px;height:100%;width:400px;overflow-y:auto;box-shadow:0 8px 24px rgba(65,65,65,.35);border-radius:8px}[_nghost-%COMP%]:focus{outline:none}  nx-notification-header{display:flex;justify-content:space-between;padding:16px 0 8px}  nx-notification-header:first-child{padding-top:0}"]}),h),I=((b=function n(){c(this,n)}).\u0275fac=function(n){return new(n||b)},b.\u0275dir=x.Ib({type:b,selectors:[["nx-notification-item-metadata"]]}),b),j=((u=function n(){c(this,n)}).\u0275fac=function(n){return new(n||u)},u.\u0275dir=x.Ib({type:u,selectors:[["nx-notification-item-content"]]}),u),F=((f=function n(){c(this,n)}).\u0275fac=function(n){return new(n||f)},f.\u0275dir=x.Ib({type:f,selectors:[["nx-notification-item-actions"]]}),f),B=((l=function n(){c(this,n)}).\u0275fac=function(n){return new(n||l)},l.\u0275dir=x.Ib({type:l,selectors:[["nx-notification-header"]]}),l),R=i("q+Ep"),A=i("wdC9"),E=i("VKQk"),L=i("VqxJ"),z=i("sPAl"),H=i("BHU2");function K(n,t){1&n&&(x.Tb(0,"nx-notification-panel"),x.Tb(1,"nx-notification-header"),x.Tb(2,"h3",3),x.Jc(3,"Unread "),x.Sb(),x.Tb(4,"button",4),x.Jc(5,"Mark all as read "),x.Ob(6,"nx-icon",5),x.Sb(),x.Sb(),x.Tb(7,"a",6),x.Tb(8,"nx-notification-item-metadata"),x.Ob(9,"nx-icon",7),x.Jc(10,"File lock release \xb7 16:53 "),x.Sb(),x.Tb(11,"nx-notification-item-content"),x.Tb(12,"span",8),x.Jc(13,"The file you tried to edit (XY12345) is now available."),x.Sb(),x.Sb(),x.Tb(14,"nx-notification-item-actions"),x.Tb(15,"nx-link"),x.Tb(16,"a",9),x.Jc(17,"Edit file"),x.Sb(),x.Sb(),x.Tb(18,"button",10),x.Ob(19,"nx-icon",11),x.Sb(),x.Sb(),x.Sb(),x.Tb(20,"div",6),x.Tb(21,"nx-notification-item-metadata"),x.Ob(22,"nx-icon",12),x.Jc(23,"Callback \xb7 11:35 "),x.Sb(),x.Tb(24,"nx-notification-item-content",13),x.Tb(25,"span",8),x.Jc(26,"Please call back James Erwin at 15:00"),x.Sb(),x.Tb(27,"button",14),x.Ob(28,"nx-icon",11),x.Sb(),x.Sb(),x.Sb(),x.Tb(29,"nx-notification-header"),x.Tb(30,"h3",3),x.Jc(31,"Read "),x.Sb(),x.Sb(),x.Tb(32,"div",15),x.Tb(33,"nx-notification-item-metadata"),x.Jc(34,"Offers \xb7 Yesterday "),x.Sb(),x.Tb(35,"nx-notification-item-content"),x.Tb(36,"span",8),x.Jc(37,"Mary London"),x.Sb(),x.Jc(38," - Note created "),x.Sb(),x.Sb(),x.Sb()),2&n&&(x.Bb(7),x.Cb("href",null,x.yc))}var V,q=((V=function n(){c(this,n)}).\u0275fac=function(n){return new(n||V)},V.\u0275cmp=x.Hb({type:V,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"inline-delete"],["nxPlainButton","small","type","button","title","Delete",1,""],["nxNotificationPanelItem","","read","","clickable","false"]],template:function(n,t){if(1&n&&(x.Tb(0,"button",0),x.Ob(1,"nx-icon",1),x.Sb(),x.Hc(2,K,39,1,"ng-template",null,2,x.Ic)),2&n){var e=x.rc(3);x.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,N,I,j,F,H.a],styles:[".inline-delete[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),V);function D(n,t){1&n&&(x.Tb(0,"nx-notification-panel"),x.Tb(1,"nx-notification-header"),x.Tb(2,"h3",3),x.Jc(3,"Unread "),x.Sb(),x.Tb(4,"button",4),x.Jc(5,"Mark all as read "),x.Ob(6,"nx-icon",5),x.Sb(),x.Sb(),x.Tb(7,"a",6),x.Tb(8,"nx-notification-item-metadata"),x.Jc(9,"Tasks \xb7 5 minutes ago "),x.Sb(),x.Tb(10,"nx-notification-item-content"),x.Tb(11,"span",7),x.Jc(12,"Frank Loyd"),x.Sb(),x.Jc(13," - created new offer "),x.Sb(),x.Sb(),x.Tb(14,"a",8),x.Tb(15,"nx-notification-item-metadata"),x.Jc(16,"Offers \xb7 11:45 "),x.Sb(),x.Tb(17,"nx-notification-item-content"),x.Tb(18,"span",7),x.Jc(19,"Susi M\xfcller"),x.Sb(),x.Jc(20," - Offer status has changed "),x.Sb(),x.Sb(),x.Tb(21,"nx-notification-header"),x.Tb(22,"h3",3),x.Jc(23,"Read "),x.Sb(),x.Sb(),x.Tb(24,"a",9),x.Tb(25,"nx-notification-item-metadata"),x.Jc(26,"Offers \xb7 Yesterday "),x.Sb(),x.Tb(27,"nx-notification-item-content"),x.Tb(28,"span",7),x.Jc(29,"Mary London"),x.Sb(),x.Jc(30," - Note created "),x.Sb(),x.Sb(),x.Sb())}var U,Y=((U=function n(){c(this,n)}).\u0275fac=function(n){return new(n||U)},U.\u0275cmp=x.Hb({type:U,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","routerLink","#clickable-notification2"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(n,t){if(1&n&&(x.Tb(0,"button",0),x.Ob(1,"nx-icon",1),x.Sb(),x.Hc(2,D,31,0,"ng-template",null,2,x.Ic)),2&n){var e=x.rc(3);x.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,m.h,N,I,j],styles:[""]}),U);function X(n,t){1&n&&(x.Tb(0,"nx-notification-panel"),x.Tb(1,"nx-notification-header"),x.Tb(2,"h3",3),x.Jc(3,"Unread "),x.Sb(),x.Tb(4,"button",4),x.Jc(5,"Mark all as read "),x.Ob(6,"nx-icon",5),x.Sb(),x.Sb(),x.Tb(7,"a",6),x.Tb(8,"nx-notification-item-metadata"),x.Ob(9,"nx-icon",7),x.Jc(10,"File lock release \xb7 16:53 "),x.Sb(),x.Tb(11,"nx-notification-item-content"),x.Tb(12,"span",8),x.Jc(13,"The file you tried to edit (XY12345) is now available."),x.Sb(),x.Sb(),x.Sb(),x.Tb(14,"a",9),x.Tb(15,"nx-notification-item-metadata"),x.Ob(16,"nx-icon",10),x.Jc(17,"Callback \xb7 11:35 "),x.Sb(),x.Tb(18,"nx-notification-item-content"),x.Tb(19,"span",8),x.Jc(20,"Please call back James Erwin at 15:00"),x.Sb(),x.Sb(),x.Sb(),x.Tb(21,"nx-notification-header"),x.Tb(22,"h3",3),x.Jc(23,"Read "),x.Sb(),x.Sb(),x.Tb(24,"div",11),x.Tb(25,"nx-notification-item-metadata"),x.Jc(26,"Offers \xb7 Yesterday "),x.Sb(),x.Tb(27,"nx-notification-item-content"),x.Tb(28,"span",8),x.Jc(29,"Mary London"),x.Sb(),x.Jc(30," - Note created "),x.Sb(),x.Sb(),x.Sb()),2&n&&(x.Bb(14),x.kc("routerLink",null))}var Q,G,Z=((Q=function n(){c(this,n)}).\u0275fac=function(n){return new(n||Q)},Q.\u0275cmp=x.Hb({type:Q,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","clickable","false",3,"routerLink"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(n,t){if(1&n&&(x.Tb(0,"button",0),x.Ob(1,"nx-icon",1),x.Sb(),x.Hc(2,X,31,1,"ng-template",null,2,x.Ic)),2&n){var e=x.rc(3);x.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,m.h,N,I,j,m.f],styles:[""]}),Q),W=i("t3RA"),$=((G=function(){function n(){c(this,n)}return a(n,null,[{key:"components",value:function(){return{"notification-panel-actions":q,"notification-panel-clickable":Y,"notification-panel-mixed":Z}}}]),n}()).\u0275mod=x.Lb({type:G}),G.\u0275inj=x.Kb({factory:function(n){return new(n||G)},imports:[[R.a,y,d.c,m.i,p.a,W.a]]}),G)},VqxJ:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i("EM62"),r=["nxCopytext",""],s=["*"],l=function(){var t=function(){function t(){c(this,t),this.type="normal",this.negative=!1}return a(t,[{key:"classNames",set:function(t){if(this._classNames!==t){this._classNames=t;var e=n(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],i=void 0===e?null:e;this.type=i,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(n,t){2&n&&o.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:s,decls:1,vars:0,template:function(n,t){1&n&&(o.jc(),o.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t}()},t3RA:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var i=e("ohqM"),o=e("4TwE"),a=e("aln5"),r=e("kPBv"),s=e("2kYt"),l=e("nIj0"),f=e("EM62"),u=function(){var n=function n(){c(this,n)};return n.\u0275mod=f.Lb({type:n}),n.\u0275inj=f.Kb({factory:function(t){return new(t||n)},imports:[[],s.c,l.k,l.v,r.b,a.a,o.a,i.a]}),n}()}}])}();
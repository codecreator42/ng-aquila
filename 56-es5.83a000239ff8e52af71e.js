!function(){function a(a,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function t(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function n(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{X3P0:function(a,e,r){"use strict";r.r(e),r.d(e,"AvatarExamplesModule",(function(){return S}));var i,o,s,l,c,v,g,d,m=r("2kYt"),h=r("EM62"),u=((i=function a(){n(this,a)}).\u0275mod=h.Lb({type:i}),i.\u0275inj=h.Kb({factory:function(a){return new(a||i)},imports:[[m.c]]}),i),b=r("sg/T"),x=["nxAvatar",""],f=["*"],p=((s=function(){function a(t){n(this,a),this._changeDetectorRef=t,this._size="medium"}return t(a,[{key:"size",set:function(a){this._size!==a&&(this._size=a,this._changeDetectorRef.markForCheck())},get:function(){return this._size}}]),a}()).\u0275fac=function(a){return new(a||s)(h.Nb(h.h))},s.\u0275cmp=h.Hb({type:s,selectors:[["","nxAvatar",""]],hostVars:12,hostBindings:function(a,t){2&a&&h.Fb("nx-avatar--xsmall","xsmall"===t.size)("nx-avatar--small","small"===t.size)("nx-avatar--small-medium","small-medium"===t.size)("nx-avatar--medium","medium"===t.size)("nx-avatar--large","large"===t.size)("nx-avatar--xlarge","xlarge"===t.size)},inputs:{size:"size"},attrs:x,ngContentSelectors:f,decls:2,vars:0,consts:[[1,"nx-avatar__content-wrapper"]],template:function(a,t){1&a&&(h.jc(),h.Tb(0,"div",0),h.ic(1),h.Sb())},styles:['[_nghost-%COMP%]{background:var(--avatar-background-color);color:var(--avatar-color);border-radius:50%;text-align:center}[_nghost-%COMP%]   .nx-avatar__content-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;justify-content:center;align-items:center;position:relative}[_nghost-%COMP%]     figure{width:100%}.nx-avatar--xsmall[_nghost-%COMP%]{height:var(--avatar-xsmall-size);width:var(--avatar-xsmall-size);min-width:var(--avatar-xsmall-size);font-size:var(--avatar-xsmall-font-size);line-height:var(--avatar-xsmall-line-height);font-weight:var(--avatar-xsmall-font-weight);letter-spacing:var(--avatar-xsmall-letter-spacing)}.nx-avatar--xsmall[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-xsmall-icon-size)}.nx-avatar--small[_nghost-%COMP%]{height:var(--avatar-small-size);width:var(--avatar-small-size);min-width:var(--avatar-small-size);font-size:var(--avatar-small-font-size);line-height:var(--avatar-small-line-height);font-weight:var(--avatar-small-font-weight);letter-spacing:var(--avatar-small-letter-spacing)}.nx-avatar--small[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-small-icon-size)}.nx-avatar--small-medium[_nghost-%COMP%]{height:var(--avatar-small-medium-size);width:var(--avatar-small-medium-size);min-width:var(--avatar-small-medium-size);font-size:var(--avatar-small-medium-font-size);line-height:var(--avatar-small-medium-line-height);font-weight:var(--avatar-small-medium-font-weight);letter-spacing:var(--avatar-small-medium-letter-spacing)}.nx-avatar--small-medium[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-small-medium-icon-size)}.nx-avatar--medium[_nghost-%COMP%]{height:var(--avatar-medium-size);width:var(--avatar-medium-size);min-width:var(--avatar-medium-size);font-size:var(--avatar-medium-font-size);line-height:var(--avatar-medium-line-height);font-weight:var(--avatar-medium-font-weight);letter-spacing:var(--avatar-medium-letter-spacing)}.nx-avatar--medium[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-medium-icon-size)}.nx-avatar--large[_nghost-%COMP%]{height:var(--avatar-large-size);width:var(--avatar-large-size);min-width:var(--avatar-large-size);font-size:var(--avatar-large-font-size);line-height:var(--avatar-large-line-height);font-weight:var(--avatar-large-font-weight);letter-spacing:var(--avatar-large-letter-spacing)}.nx-avatar--large[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-large-icon-size)}.nx-avatar--xlarge[_nghost-%COMP%]{height:var(--avatar-xlarge-size);width:var(--avatar-xlarge-size);min-width:var(--avatar-xlarge-size);font-size:var(--avatar-xlarge-font-size);line-height:var(--avatar-xlarge-line-height);font-weight:var(--avatar-xlarge-font-weight);letter-spacing:var(--avatar-xlarge-letter-spacing)}.nx-avatar--xlarge[_nghost-%COMP%]     nx-icon{font-size:var(--avatar-xlarge-icon-size)}.is-button[_nghost-%COMP%]{border:none;padding:0;cursor:pointer}.is-button[_nghost-%COMP%]   .nx-avatar__content-wrapper[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;position:absolute;border-radius:50%;top:0;left:0}.is-button[_nghost-%COMP%]:hover:not(:disabled)   .nx-avatar__content-wrapper[_ngcontent-%COMP%]:after{background-color:rgba(0,0,0,.1)}.is-button[_nghost-%COMP%]:active:not(:disabled)   .nx-avatar__content-wrapper[_ngcontent-%COMP%]:after{background-color:rgba(0,0,0,.2)}.is-button[_nghost-%COMP%]:disabled{cursor:not-allowed;opacity:var(--avatar-disabled-opacity)}.is-button.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.is-button.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}.is-button[_nghost-%COMP%]:focus{outline:none}.is-button[_nghost-%COMP%]::-moz-focus-inner{border:0}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border:2px solid windowText}.is-button[_nghost-%COMP%]{border:2px solid buttonText;background-color:buttonFace}.is-button[_nghost-%COMP%]:disabled{opacity:1;border-color:GrayText;color:GrayText}}'],changeDetection:0}),s),w=((o=function(){function a(t,e){n(this,a),this._elementRef=t,this._focusMonitor=e,this._focusMonitor.monitor(this._elementRef)}return t(a,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),a}()).\u0275fac=function(a){return new(a||o)(h.Nb(h.l),h.Nb(b.g))},o.\u0275dir=h.Ib({type:o,selectors:[["button","nxAvatar",""]],hostVars:2,hostBindings:function(a,t){2&a&&h.Fb("is-button",!0)}}),o),_=r("0FLW"),z=r("cihK"),M=r("VKQk"),O=r("Yfgl"),C=((d=function a(){n(this,a)}).\u0275fac=function(a){return new(a||d)},d.\u0275cmp=h.Hb({type:d,selectors:[["ng-component"]],decls:7,vars:0,consts:[["nxAvatar","",1,"nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"nx-margin-right-s"],["name","user-o"],["nxAvatar","","aria-label","Logged in as Samantha Owl"],["nxFigure","rounded"],["src","docs-assets/images/vidar-nordli-mathisen-owl-unsplash.jpg","alt","A photo of an owl, made by Vidar Nordli-Mathisen"]],template:function(a,t){1&a&&(h.Tb(0,"div",0),h.Jc(1,"MD"),h.Sb(),h.Tb(2,"div",1),h.Ob(3,"nx-icon",2),h.Sb(),h.Tb(4,"div",3),h.Tb(5,"figure",4),h.Ob(6,"img",5),h.Sb(),h.Sb())},directives:[p,M.a,O.a],styles:["[_nghost-%COMP%]{display:flex}"]}),d),P=((g=function a(){n(this,a)}).\u0275fac=function(a){return new(a||g)},g.\u0275cmp=h.Hb({type:g,selectors:[["ng-component"]],decls:12,vars:0,consts:[["nxAvatar","","aria-label","show user details",1,"nx-margin-right-s"],["name","user-o"],["nxFigure","rounded"],["src","docs-assets/images/vidar-nordli-mathisen-owl-unsplash.jpg","alt","A photo of an owl, made by Vidar Nordli-Mathisen"],["nxAvatar","","aria-label","show user details","disabled","",1,"nx-margin-right-s"],["nxAvatar","","aria-label","show user details","disabled",""]],template:function(a,t){1&a&&(h.Tb(0,"button",0),h.Jc(1,"MD"),h.Sb(),h.Tb(2,"button",0),h.Ob(3,"nx-icon",1),h.Sb(),h.Tb(4,"button",0),h.Tb(5,"figure",2),h.Ob(6,"img",3),h.Sb(),h.Sb(),h.Tb(7,"button",4),h.Ob(8,"nx-icon",1),h.Sb(),h.Tb(9,"button",5),h.Tb(10,"figure",2),h.Ob(11,"img",3),h.Sb(),h.Sb())},directives:[w,p,M.a,O.a],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap}"]}),g),y=((v=function a(){n(this,a)}).\u0275fac=function(a){return new(a||v)},v.\u0275cmp=h.Hb({type:v,selectors:[["ng-component"]],decls:12,vars:0,consts:[["nxAvatar","","size","xsmall",1,"nx-margin-right-xs"],["nxAvatar","","size","small",1,"nx-margin-right-xs"],["nxAvatar","","size","small-medium",1,"nx-margin-right-xs"],["nxAvatar","","size","medium",1,"nx-margin-right-xs"],["nxAvatar","","size","large",1,"nx-margin-right-xs"],["nxAvatar","","size","xlarge"]],template:function(a,t){1&a&&(h.Tb(0,"div",0),h.Jc(1,"MD"),h.Sb(),h.Tb(2,"div",1),h.Jc(3,"MD"),h.Sb(),h.Tb(4,"div",2),h.Jc(5,"MD"),h.Sb(),h.Tb(6,"div",3),h.Jc(7,"MD"),h.Sb(),h.Tb(8,"div",4),h.Jc(9,"MD"),h.Sb(),h.Tb(10,"div",5),h.Jc(11,"MD"),h.Sb())},directives:[p],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap}"]}),v),T=((c=function a(){n(this,a)}).\u0275fac=function(a){return new(a||c)},c.\u0275cmp=h.Hb({type:c,selectors:[["ng-component"]],decls:14,vars:0,consts:[[1,"container","nx-margin-bottom-m"],["nxAvatar","",1,"color-1","nx-margin-right-s"],["nxAvatar","",1,"color-2","nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"color-3"],["name","user-o"],[1,"container"],["nxAvatar","",1,"color-4","nx-margin-right-s"],["nxAvatar","",1,"color-5","nx-margin-right-s"],["nxAvatar","","aria-label","Logged in",1,"color-6"]],template:function(a,t){1&a&&(h.Tb(0,"div",0),h.Tb(1,"div",1),h.Jc(2,"MD"),h.Sb(),h.Tb(3,"div",2),h.Jc(4,"MD"),h.Sb(),h.Tb(5,"div",3),h.Ob(6,"nx-icon",4),h.Sb(),h.Sb(),h.Tb(7,"div",5),h.Tb(8,"div",6),h.Jc(9,"MD"),h.Sb(),h.Tb(10,"div",7),h.Jc(11,"MD"),h.Sb(),h.Tb(12,"div",8),h.Ob(13,"nx-icon",4),h.Sb(),h.Sb())},directives:[p,M.a],styles:[".container[_ngcontent-%COMP%]{display:flex}.color-1[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-1)}.color-2[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-2)}.color-3[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-3)}.color-4[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-4)}.color-4[_ngcontent-%COMP%], .color-5[_ngcontent-%COMP%]{color:var(--documentation-avatar-text-color)}.color-5[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-5)}.color-6[_ngcontent-%COMP%]{background-color:var(--documentation-avatar-color-6);color:var(--documentation-avatar-text-color)}"]}),c),S=((l=function(){function a(){n(this,a)}return t(a,null,[{key:"components",value:function(){return{avatar:C,"avatar-button":P,"avatar-size":y,"avatar-colors":T}}}]),a}()).\u0275mod=h.Lb({type:l}),l.\u0275inj=h.Kb({factory:function(a){return new(a||l)},imports:[[u,_.c,z.a]]}),l)}}])}();
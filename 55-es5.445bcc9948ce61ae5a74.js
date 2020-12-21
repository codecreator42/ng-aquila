!function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{bED9:function(t,n,i){"use strict";i.r(n),i.d(n,"AutocompleteExamplesModule",(function(){return $}));var a=i("vobO"),c=i("t3RA"),r=i("6c6m"),u=i("COYy"),l=i("Bql2"),p=i("EM62"),s=i("wMpm"),m=i("1DSb"),f=i("2kYt"),b=i("6MO8");function C(t,e){if(1&t&&(p.Tb(0,"nx-autocomplete-option",3),p.Jc(1),p.Sb()),2&t){var o=e.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var d,x=((d=function t(){o(this,t),this.options="Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,\n    Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,\n    Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",")}).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=p.Hb({type:d,selectors:[["ng-component"]],decls:4,vars:2,consts:[["type","text",3,"nxAutocomplete"],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t&&(p.Ob(0,"input",0),p.Tb(1,"nx-autocomplete",null,1),p.Hc(3,C,2,2,"nx-autocomplete-option",2),p.Sb()),2&t){var o=p.rc(2);p.kc("nxAutocomplete",o),p.Bb(3),p.kc("ngForOf",e.options)}},directives:[s.a,m.a,f.s,b.a],encapsulation:2}),d),v=i("nIj0"),h=i("YtkY"),w=i("sRH6"),y=i("PCf9"),g=i("XEMv"),k=i("tjdh"),O=i("MqgH"),A=i("MXpF");function B(t,e){if(1&t&&(p.Tb(0,"nx-autocomplete-option",12),p.Jc(1),p.fc(2,"lowercase"),p.Sb()),2&t){var o=e.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",p.gc(2,2,o)," ")}}var T,S,F=((S=function(){function t(e){o(this,t),this.wikipediaService=e,this.modelBoundData="asdf",this.testForm=(new v.d).group({autocomplete:[null,v.y.required]}),this.dynamicBackendOptions=function(t){return e.search(t).pipe(Object(h.a)((function(t){return t.map((function(t){return t.value}))})))}}return e(t,[{key:"simpleFilteredOptions",value:function(t){return t?"Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",").filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>=0})):[]}}]),t}()).\u0275fac=function(t){return new(t||S)(p.Nb(w.a))},S.\u0275cmp=p.Hb({type:S,selectors:[["ng-component"]],features:[p.Ab([w.a])],decls:21,vars:10,consts:[["nxLabel","Template bound"],["nxInput","","type","text","nxAutocompleteDebounce","0",3,"nxAutocomplete","ngModel","ngModelChange"],["auto3","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"formGroup"],["nxLabel","Reactive bound"],["nxInput","","type","text","formControlName","autocomplete",3,"nxAutocomplete","nxAutocompleteItems"],["auto4",""],["nxLabel","Provide this required field"],["nxInput","","ngModel","","required","",3,"nxAutocomplete","nxAutocompleteItems"],["nxError",""],["auto5","nxAutocomplete"],[3,"value"]],template:function(t,e){if(1&t&&(p.Tb(0,"nx-formfield",0),p.Tb(1,"input",1),p.ac("ngModelChange",(function(t){return e.modelBoundData=t})),p.Sb(),p.Sb(),p.Tb(2,"nx-autocomplete",null,2),p.Hc(4,B,3,4,"nx-autocomplete-option",3),p.Sb(),p.Jc(5),p.Tb(6,"form",4),p.Tb(7,"nx-formfield",5),p.Ob(8,"input",6),p.Ob(9,"nx-autocomplete",null,7),p.Sb(),p.Sb(),p.Jc(11),p.Tb(12,"nx-natural-language-form"),p.Jc(13," Here is a word "),p.Tb(14,"nx-word",8),p.Ob(15,"input",9),p.Tb(16,"div",10),p.Jc(17,"This field is required."),p.Sb(),p.Ob(18,"nx-autocomplete",null,11),p.Sb(),p.Jc(20," with some following copy.\n"),p.Sb()),2&t){var o=p.rc(3),n=p.rc(10),i=p.rc(19);p.Bb(1),p.kc("nxAutocomplete",o)("ngModel",e.modelBoundData),p.Bb(3),p.kc("ngForOf",e.simpleFilteredOptions(e.modelBoundData)),p.Bb(1),p.Lc("\nTemplate bound: ",e.modelBoundData," "),p.Bb(1),p.kc("formGroup",e.testForm),p.Bb(2),p.kc("nxAutocomplete",n)("nxAutocompleteItems",e.dynamicBackendOptions),p.Bb(3),p.Lc("\nReactive form: ",e.testForm.controls.autocomplete.value," "),p.Bb(4),p.kc("nxAutocomplete",i)("nxAutocompleteItems",e.dynamicBackendOptions)}},directives:[y.b,g.b,s.a,v.a,v.p,v.s,m.a,f.s,v.A,v.q,v.i,v.g,k.a,O.a,v.w,A.a,b.a],pipes:[f.p],encapsulation:2}),S),L=((T=function t(e){o(this,t),this.wikipediaService=e,this.dynamicBackendOptions=function(t){return e.search(t).pipe(Object(h.a)((function(t){return t.map((function(t){return t.value}))})))}}).\u0275fac=function(t){return new(t||T)(p.Nb(w.a))},T.\u0275cmp=p.Hb({type:T,selectors:[["ng-component"]],features:[p.Ab([w.a])],decls:3,vars:2,consts:[["type","text",3,"nxAutocomplete","nxAutocompleteItems"],["auto2","nxAutocomplete"]],template:function(t,e){if(1&t&&(p.Ob(0,"input",0),p.Ob(1,"nx-autocomplete",null,1)),2&t){var o=p.rc(2);p.kc("nxAutocomplete",o)("nxAutocompleteItems",e.dynamicBackendOptions)}},directives:[s.a,m.a],encapsulation:2}),T);function I(t,e){if(1&t&&(p.Tb(0,"nx-autocomplete-option",4),p.Jc(1),p.Sb()),2&t){var o=e.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var H,J=((H=function(){function t(){o(this,t),this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}return e(t,[{key:"filter",value:function(t){this.filteredOptions=this.options.filter((function(e){return new RegExp(t,"gi").test(e)}))}}]),t}()).\u0275fac=function(t){return new(t||H)},H.\u0275cmp=p.Hb({type:H,selectors:[["ng-component"]],decls:5,vars:2,consts:[["type","text",3,"nxAutocomplete","input"],["animalInput",""],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t){var o=p.Ub();p.Tb(0,"input",0,1),p.ac("input",(function(){p.vc(o);var t=p.rc(1);return e.filter(t.value)})),p.Sb(),p.Tb(2,"nx-autocomplete",null,2),p.Hc(4,I,2,2,"nx-autocomplete-option",3),p.Sb()}if(2&t){var n=p.rc(3);p.kc("nxAutocomplete",n),p.Bb(4),p.kc("ngForOf",e.filteredOptions)}},directives:[s.a,m.a,f.s,b.a],encapsulation:2}),H),M=i("+K2D"),D=i("6DsR"),R=i("xRDo"),E=i("ImiB");function q(t,e){if(1&t&&(p.Tb(0,"nx-autocomplete-option",9),p.Jc(1),p.Sb()),2&t){var o=e.$implicit;p.kc("value",o),p.Bb(1),p.Lc(" ",o," ")}}var j,z,Y=((z=function(){function t(){o(this,t),this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}return e(t,[{key:"filter",value:function(t){this.filteredOptions=this.options.filter((function(e){return new RegExp(t,"gi").test(e)}))}}]),t}()).\u0275fac=function(t){return new(t||z)},z.\u0275cmp=p.Hb({type:z,selectors:[["ng-component"]],decls:11,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12"],["nxHeadline","subsection-xsmall"],["nxLabel","Animals","appearance","outline","nxFloatLabel","always"],["nxInput","","type","text",3,"nxAutocomplete","input"],["animalInput",""],["animal1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t){var o=p.Ub();p.Tb(0,"div",0),p.Tb(1,"div",1),p.Tb(2,"div",2),p.Tb(3,"h4",3),p.Jc(4,"Autocomplete with appearance outline"),p.Sb(),p.Tb(5,"nx-formfield",4),p.Tb(6,"input",5,6),p.ac("input",(function(){p.vc(o);var t=p.rc(7);return e.filter(t.value)})),p.Sb(),p.Tb(8,"nx-autocomplete",null,7),p.Hc(10,q,2,2,"nx-autocomplete-option",8),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()}if(2&t){var n=p.rc(9);p.Bb(6),p.kc("nxAutocomplete",n),p.Bb(4),p.kc("ngForOf",e.filteredOptions)}},directives:[M.a,D.a,R.a,E.a,y.b,g.b,s.a,m.a,f.s,b.a],encapsulation:2}),z),$=((j=function(){function t(){o(this,t)}return e(t,null,[{key:"components",value:function(){return{"autocomplete-basic":x,"autocomplete-data-binding":F,"autocomplete-default-rendering":L,"autocomplete-filtering":J,"autocomplete-outline":Y}}}]),t}()).\u0275mod=p.Lb({type:j}),j.\u0275inj=p.Kb({factory:function(t){return new(t||j)},imports:[[u.a,r.b,l.a,c.a,a.c,a.d]]}),j)}}])}();
"use strict";(self.webpackChunkrest_countries_api_with_color_theme_switcher=self.webpackChunkrest_countries_api_with_color_theme_switcher||[]).push([[91],{4091:(F,c,r)=>{r.r(c),r.d(c,{CountryDetailModule:()=>k});var l=r(6019),s=r(3856),g=r(2362),m=r(6067),f=r(4874),u=r(9007),d=r(4771),p=r(6005),Z=r(7851),y=r(8726),h=r(5293),C=r(4193),t=r(3668),v=r(2001),T=r(2835),x=r(2997),A=r(7214),_=r(1570);function b(n,i){1&n&&(t.TgZ(0,"div",2),t._UZ(1,"lbk-circle-loading-small"),t.qZA())}const U=function(n){return["/details",n]};function q(n,i){if(1&n&&(t.TgZ(0,"a",3),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.Q6J("routerLink",t.VKq(2,U,e.country.name)),t.xp6(1),t.Oqu(e.country.name)}}let D=(()=>{class n extends d.f{constructor(e,o){super(),this._repo=e,this._ref=o,this.loading=!1}ngOnInit(){this.loading=!0,this.appendSub=this._repo.getCountryByCode(this.borderCode).pipe((0,T.K)(e=>(this.loading=!1,this._ref.detectChanges(),(0,x.of)(void 0)))).subscribe(e=>{this.country=e,this.loading=!1,this._ref.detectChanges()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.M),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["lbk-border"]],inputs:{borderCode:"borderCode"},features:[t.qOj],decls:2,vars:2,consts:[["class","p-2 shadow-lg bg-elements",4,"ngIf"],["class","px-6 py-2 rounded-md shadow-lg bg-elements",3,"routerLink",4,"ngIf"],[1,"p-2","shadow-lg","bg-elements"],[1,"px-6","py-2","rounded-md","shadow-lg","bg-elements",3,"routerLink"]],template:function(e,o){1&e&&(t.YNc(0,b,2,0,"div",0),t.YNc(1,q,2,4,"a",1)),2&e&&(t.Q6J("ngIf",o.loading),t.xp6(1),t.Q6J("ngIf",o.country))},directives:[l.O5,_.Q,s.yS],styles:[""],changeDetection:0}),n})();function I(n,i){if(1&n&&(t.ynx(0),t._UZ(1,"lbk-border",13),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("borderCode",e)}}function B(n,i){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"p",11),t._uU(2,"Borders Countries:"),t.qZA(),t.YNc(3,I,2,1,"ng-container",12),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.country.borders)}}let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["lbk-country-card-detail"]],inputs:{country:"country"},decls:45,vars:14,consts:[[1,"grid","gap-10","mt-10","xl:grid-cols-2","xl:gap-20","xl:mt-24"],[1,"w-full","shadow-lg",3,"src","alt"],[1,"grid","gap-10","place-content-start"],[1,""],[1,"text-2xl","font-black","xl:text-3xl"],[1,"grid","gap-6"],[1,"grid","gap-6","lg:grid-cols-2"],[1,"grid","gap-2","place-content-start"],[1,"font-semibold"],["class","flex flex-wrap items-center gap-6",4,"ngIf"],[1,"flex","flex-wrap","items-center","gap-6"],[1,"inline-block","py-2","font-semibold"],[4,"ngFor","ngForOf"],[3,"borderCode"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div"),t._UZ(2,"img",1),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"h2",4),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t.TgZ(10,"p"),t.TgZ(11,"span",8),t._uU(12,"Native name:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p"),t.TgZ(15,"span",8),t._uU(16,"Population:"),t.qZA(),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"p"),t.TgZ(20,"span",8),t._uU(21,"Region:"),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"p"),t.TgZ(24,"span",8),t._uU(25,"Sub Region:"),t.qZA(),t._uU(26),t.qZA(),t.TgZ(27,"p"),t.TgZ(28,"span",8),t._uU(29,"Capital:"),t.qZA(),t._uU(30),t.qZA(),t.qZA(),t.TgZ(31,"div",7),t.TgZ(32,"p"),t.TgZ(33,"span",8),t._uU(34,"Top Level Domain:"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"p"),t.TgZ(37,"span",8),t._uU(38,"Currencies:"),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"p"),t.TgZ(41,"span",8),t._uU(42,"Languages:"),t.qZA(),t._uU(43),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,B,4,1,"div",9),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("src",o.country.flag,t.LSH)("alt",o.country.name),t.xp6(4),t.Oqu(o.country.name),t.xp6(7),t.hij(" ",o.country.nativeName,""),t.xp6(4),t.hij(" ",t.lcZ(18,12,o.country.population),""),t.xp6(5),t.hij(" ",o.country.region,""),t.xp6(4),t.hij(" ",o.country.subRegion,""),t.xp6(4),t.hij(" ",o.country.capital,""),t.xp6(5),t.hij(" ",o.country.tld,""),t.xp6(4),t.hij(" ",o.country.currencies,""),t.xp6(4),t.hij(" ",o.country.languages,""),t.xp6(1),t.Q6J("ngIf",o.country.borders&&o.country.borders.length>0))},directives:[l.O5,l.sg,D],pipes:[l.JJ],styles:[""]}),n})();function Y(n,i){1&n&&(t.TgZ(0,"div",7),t._UZ(1,"lbk-circle-loading"),t.qZA())}function J(n,i){1&n&&t._UZ(0,"lbk-country-card-detail",10),2&n&&t.Q6J("country",i.ngIf)}function N(n,i){1&n&&(t.TgZ(0,"div",11),t.TgZ(1,"h1",12),t._uU(2," Country not existed! "),t.qZA(),t.TgZ(3,"a",13),t._uU(4,"Go Home"),t.qZA(),t.qZA())}function Q(n,i){if(1&n&&(t.YNc(0,J,1,1,"lbk-country-card-detail",8),t.ALo(1,"async"),t.YNc(2,N,5,0,"ng-template",null,9,t.W1O)),2&n){const e=t.MAs(3),o=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,o.country$))("ngIfElse",e)}}let j=(()=>{class n extends d.f{constructor(e,o,a){super(),this._route=e,this._store=o,this._location=a,this.country$=this._store.select(Z.r),this.loading$=this._store.pipe((0,u.Ys)(C.Kv)),this._store.select(y.zK).subscribe(L=>{this.filter=L})}ngOnInit(){this.appendSub=this._route.params.subscribe(e=>{const o=null==e?void 0:e.fullName;if(!o)return this._store.dispatch((0,p.R)({country:void 0}));this._store.dispatch((0,h.V_)()),this._store.dispatch((0,p.K)({fullName:o}))})}onBack(){this._location.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.gz),t.Y36(u.yh),t.Y36(l.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["lbk-country-detail"]],features:[t.qOj],decls:10,vars:4,consts:[[1,"container","pb-32"],[1,"inline-block","mt-10","rounded-lg","bg-elements"],[1,"flex","items-center","gap-3","px-8","py-4","space-x-4","text-xl","shadow-lg","cursor-pointer",3,"click"],[1,"fab","fas","fa-long-arrow-alt-left"],[1,"font-medium"],["class","grid mt-20 place-content-center",4,"ngIf","ngIfElse"],["display",""],[1,"grid","mt-20","place-content-center"],[3,"country",4,"ngIf","ngIfElse"],["empty",""],[3,"country"],[1,"grid","gap-4","mt-28","place-content-center"],[1,"text-2xl","font-black","text-center"],["routerLink","/",1,"mx-auto","text-center","text-blue-500","underline"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"a",2),t.NdJ("click",function(){return o.onBack()}),t._UZ(3,"span",3),t.TgZ(4,"span",4),t._uU(5,"Back"),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,Y,2,0,"div",5),t.ALo(7,"async"),t.YNc(8,Q,4,4,"ng-template",null,6,t.W1O),t.qZA()),2&e){const a=t.MAs(9);t.xp6(6),t.Q6J("ngIf",t.lcZ(7,2,o.loading$))("ngIfElse",a)}},directives:[l.O5,v.b,O,s.yS],pipes:[l.Ov],styles:[""]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,m.D,g.d,f.v,s.Bz.forChild([{path:"",component:j}])]]}),n})()}}]);
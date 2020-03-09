function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var c=[],n=!0,a=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);n=!0);}catch(l){a=!0,i=l}finally{try{n||null==r.return||r.return()}finally{if(a)throw i}}return c}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ZRnV:function(e,t,c){"use strict";c.r(t);var n,a,i=c("tyNb"),o=c("0BIi"),r=c("NuY5"),l=c("2Vo4"),s=c("fXoL"),d=c("tk/3"),b=((n=function(){function e(t){_classCallCheck(this,e),this._httpClient=t,this.onFilesChanged=new l.a({}),this.onFileSelected=new l.a({})}return _createClass(e,[{key:"resolve",value:function(e,t){var c=this;return new Promise((function(e,t){Promise.all([c.getFiles()]).then((function(t){_slicedToArray(t,1)[0],e()}),t)}))}},{key:"getFiles",value:function(){var e=this;return new Promise((function(t,c){e._httpClient.get("api/file-manager").subscribe((function(c){e.onFilesChanged.next(c),e.onFileSelected.next(c[0]),t(c)}),c)}))}}]),e}()).\u0275fac=function(e){return new(e||n)(s.kc(d.c))},n.\u0275prov=s.Sb({token:n,factory:n.\u0275fac}),n),f=c("XNiG"),u=c("1G5W"),m=c("HY3y"),p=c("nS/M"),g=c("2C/K"),h=c("kcHR"),_=c("XiUz"),v=c("NFeN"),C=c("cpli"),x=c("FKr1"),y=((a=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Qb({type:a,selectors:[["file-manager-main-sidebar"]],decls:38,vars:0,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"header","p-24"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","secondary-text","s-36","mr-16"],[1,"logo-text","h1"],["persoInfoPerfectScrollbar","",1,"content","py-16"],[1,"nav"],["aria-label","inbox",1,"nav-item"],["matRipple","",1,"nav-link"],[1,"nav-link-icon"],[1,"title"],["aria-label","starred",1,"nav-item"]],template:function(e,t){1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"mat-icon",2),s.ad(3,"folder"),s.bc(),s.cc(4,"span",3),s.ad(5,"File Manager"),s.bc(),s.bc(),s.bc(),s.cc(6,"div",4),s.cc(7,"div",5),s.cc(8,"div",6),s.cc(9,"a",7),s.cc(10,"mat-icon",8),s.ad(11,"folder"),s.bc(),s.cc(12,"span",9),s.ad(13,"My Files"),s.bc(),s.bc(),s.bc(),s.cc(14,"div",10),s.cc(15,"a",7),s.cc(16,"mat-icon",8),s.ad(17,"star"),s.bc(),s.cc(18,"div",9),s.ad(19,"Starred"),s.bc(),s.bc(),s.bc(),s.cc(20,"div",10),s.cc(21,"a",7),s.cc(22,"mat-icon",8),s.ad(23,"folder_shared"),s.bc(),s.cc(24,"div",9),s.ad(25,"Sharred with me"),s.bc(),s.bc(),s.bc(),s.cc(26,"div",10),s.cc(27,"a",7),s.cc(28,"mat-icon",8),s.ad(29,"access_time"),s.bc(),s.cc(30,"div",9),s.ad(31,"Recent"),s.bc(),s.bc(),s.bc(),s.cc(32,"div",10),s.cc(33,"a",7),s.cc(34,"mat-icon",8),s.ad(35,"not_interested"),s.bc(),s.cc(36,"div",9),s.ad(37,"Offline"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc())},directives:[_.e,_.d,v.a,C.a,x.r],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 0 auto;height:100%}[_nghost-%COMP%] > .header[_ngcontent-%COMP%]{flex:0 1 auto;border-bottom:1px solid rgba(0,0,0,.12)}"]}),a),w=c("bTqV"),O=c("ofXK"),P=c("0EQZ"),M=c("+0xr"),S=c("znSr");function H(e,t){1&e&&s.Xb(0,"mat-header-cell",21)}function k(e,t){if(1&e&&(s.cc(0,"mat-cell",21),s.Xb(1,"mat-icon",22),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.zc("ngClass",c.type)}}function A(e,t){1&e&&(s.cc(0,"mat-header-cell"),s.ad(1,"Name"),s.bc())}function D(e,t){if(1&e&&(s.cc(0,"mat-cell"),s.ad(1),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.cd(" ",c.name,"")}}function F(e,t){1&e&&(s.cc(0,"mat-header-cell",23),s.ad(1,"Type"),s.bc())}function z(e,t){if(1&e&&(s.cc(0,"mat-cell",23),s.ad(1),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.cd(" ",c.type,"")}}function L(e,t){1&e&&(s.cc(0,"mat-header-cell",24),s.ad(1,"Owner"),s.bc())}function I(e,t){if(1&e&&(s.cc(0,"mat-cell",24),s.ad(1),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.cd(" ",c.owner,"")}}function Y(e,t){1&e&&(s.cc(0,"mat-header-cell",24),s.ad(1,"Size"),s.bc())}function j(e,t){if(1&e&&(s.cc(0,"mat-cell",24),s.ad(1),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.bd(""===c.size?"-":c.size)}}function T(e,t){1&e&&(s.cc(0,"mat-header-cell",23),s.ad(1,"Modified"),s.bc())}function R(e,t){if(1&e&&(s.cc(0,"mat-cell",23),s.ad(1),s.bc()),2&e){var c=t.$implicit;s.Hb(1),s.bd(c.modified)}}function X(e,t){1&e&&s.Xb(0,"mat-header-cell",25)}function Z(e,t){if(1&e){var c=s.dc();s.cc(0,"mat-cell",25),s.cc(1,"button",26),s.oc("click",(function(){return s.Qc(c),s.sc().toggleSidebar("file-manager-details-sidebar")})),s.cc(2,"mat-icon",27),s.ad(3,"info"),s.bc(),s.bc(),s.bc()}}function $(e,t){1&e&&s.Xb(0,"mat-header-row")}var Q=function(e){return{"mat-accent-50-bg":e}},W=function(){return{y:"100%"}},E=function(e){return{value:"*",params:e}};function N(e,t){if(1&e){var c=s.dc();s.cc(0,"mat-row",28),s.oc("click",(function(){s.Qc(c);var e=t.$implicit;return s.sc().onSelect(e)})),s.bc()}if(2&e){var n=t.$implicit,a=s.sc();s.zc("ngClass",s.Dc(2,Q,n==a.selected))("@animate",s.Dc(5,E,s.Cc(4,W)))}}var K,V,G=function(){return{value:"50"}},J=((K=function(){function e(t,c){_classCallCheck(this,e),this._fileManagerService=t,this._PersoInfoSidebarService=c,this.displayedColumns=["icon","name","type","owner","size","modified","detail-button"],this._unsubscribeAll=new f.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.dataSource=new U(this._fileManagerService),this._fileManagerService.onFilesChanged.pipe(Object(u.a)(this._unsubscribeAll)).subscribe((function(t){e.files=t})),this._fileManagerService.onFileSelected.pipe(Object(u.a)(this._unsubscribeAll)).subscribe((function(t){e.selected=t}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"onSelect",value:function(e){this._fileManagerService.onFileSelected.next(e)}},{key:"toggleSidebar",value:function(e){this._PersoInfoSidebarService.getSidebar(e).toggleOpen()}}]),e}()).\u0275fac=function(e){return new(e||K)(s.Wb(b),s.Wb(p.a))},K.\u0275cmp=s.Qb({type:K,selectors:[["file-list"]],decls:25,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","icon"],["fxFlex","64px",4,"matHeaderCellDef"],["fxFlex","64px",4,"matCellDef"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","type"],["fxHide","","fxShow.gt-md","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-md","",4,"matCellDef"],["matColumnDef","owner"],["fxHide.xs","",4,"matHeaderCellDef"],["fxHide.xs","",4,"matCellDef"],["matColumnDef","size"],["matColumnDef","modified"],["matColumnDef","detail-button"],["fxFlex","48px","fxHide.gt-md","",4,"matHeaderCellDef"],["fxFlex","48px","fxHide.gt-md","",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["fxFlex","64px"],[1,"type-icon",3,"ngClass"],["fxHide","","fxShow.gt-md",""],["fxHide.xs",""],["fxFlex","48px","fxHide.gt-md",""],["mat-icon-button","","fxHide.gt-md","",1,"sidebar-toggle",3,"click"],[1,"secondary-text"],["matRipple","",3,"ngClass","click"]],template:function(e,t){1&e&&(s.cc(0,"mat-table",0,1),s.ac(2,2),s.Yc(3,H,1,0,"mat-header-cell",3),s.Yc(4,k,2,1,"mat-cell",4),s.Zb(),s.ac(5,5),s.Yc(6,A,2,0,"mat-header-cell",6),s.Yc(7,D,2,1,"mat-cell",7),s.Zb(),s.ac(8,8),s.Yc(9,F,2,0,"mat-header-cell",9),s.Yc(10,z,2,1,"mat-cell",10),s.Zb(),s.ac(11,11),s.Yc(12,L,2,0,"mat-header-cell",12),s.Yc(13,I,2,1,"mat-cell",13),s.Zb(),s.ac(14,14),s.Yc(15,Y,2,0,"mat-header-cell",12),s.Yc(16,j,2,1,"mat-cell",13),s.Zb(),s.ac(17,15),s.Yc(18,T,2,0,"mat-header-cell",9),s.Yc(19,R,2,1,"mat-cell",10),s.Zb(),s.ac(20,16),s.Yc(21,X,1,0,"mat-header-cell",17),s.Yc(22,Z,4,0,"mat-cell",18),s.Zb(),s.Yc(23,$,1,0,"mat-header-row",19),s.Yc(24,N,1,7,"mat-row",20),s.bc()),2&e&&(s.zc("dataSource",t.dataSource)("@animateStagger",s.Cc(4,G)),s.Hb(23),s.zc("matHeaderRowDef",t.displayedColumns),s.Hb(1),s.zc("matRowDefColumns",t.displayedColumns))},directives:[M.j,M.c,M.e,M.b,M.g,M.i,M.d,_.b,M.a,v.a,O.r,S.a,S.b,w.b,M.f,M.h,x.r],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .mat-table[_ngcontent-%COMP%]{background:transparent;box-shadow:none}[_nghost-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{position:relative;cursor:pointer;min-height:64px}"],data:{animation:m.a}}),K),U=function(e){function t(e){var c;return _classCallCheck(this,t),(c=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._fileManagerService=e,c}return _inherits(t,e),_createClass(t,[{key:"connect",value:function(){return this._fileManagerService.onFilesChanged}},{key:"disconnect",value:function(){}}]),t}(P.b),q=c("1jcm"),B=function(){return{delay:"200ms"}},ee=function(e){return{value:"*",params:e}},te=((V=function(){function e(t){_classCallCheck(this,e),this._fileManagerService=t,this._unsubscribeAll=new f.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this._fileManagerService.onFileSelected.pipe(Object(u.a)(this._unsubscribeAll)).subscribe((function(t){e.selected=t}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}]),e}()).\u0275fac=function(e){return new(e||V)(s.Wb(b))},V.\u0275cmp=s.Qb({type:V,selectors:[["file-manager-details-sidebar"]],decls:64,vars:14,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"header","mat-accent-bg","p-24"],["fxLayout","row","fxLayoutAlign","end center",1,"toolbar"],["mat-icon-button","","matTooltip","Delete"],["mat-icon-button","","aria-label","Download","matTooltip","Download",1,""],["mat-icon-button","","aria-label","More","matTooltip","More"],[1,"title","mb-8"],[1,"subtitle","secondary-text"],["persoInfoPerfectScrollbar","",1,"content","p-24","mat-white-bg"],[1,"file-details"],["fxLayout","row","fxLayoutAlign","center center",1,"preview","file-icon"],[1,"type-icon","s-48",3,"ngClass"],[1,"offline-switch"],["labelPosition","before",3,"[ngModel]"],[1,"title"],[1,"type"],[1,"size"],[1,"location"],[1,"owner"],[1,"modified"],[1,"opened"],[1,"created"]],template:function(e,t){1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"button",2),s.cc(3,"mat-icon"),s.ad(4,"delete"),s.bc(),s.bc(),s.cc(5,"button",3),s.cc(6,"mat-icon"),s.ad(7,"file_download"),s.bc(),s.bc(),s.cc(8,"button",4),s.cc(9,"mat-icon"),s.ad(10,"more_vert"),s.bc(),s.bc(),s.bc(),s.cc(11,"div"),s.cc(12,"div",5),s.ad(13),s.bc(),s.cc(14,"div",6),s.cc(15,"span"),s.ad(16,"Edited"),s.bc(),s.cc(17,"span"),s.ad(18),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(19,"div",7),s.cc(20,"div",8),s.cc(21,"div",9),s.Xb(22,"mat-icon",10),s.bc(),s.cc(23,"div",11),s.cc(24,"mat-slide-toggle",12),s.oc("[ngModel]",(function(){return t.selected.offline})),s.ad(25,"Available Offline"),s.bc(),s.bc(),s.cc(26,"div",13),s.ad(27,"Info"),s.bc(),s.cc(28,"table"),s.cc(29,"tr",14),s.cc(30,"th"),s.ad(31,"Type"),s.bc(),s.cc(32,"td"),s.ad(33),s.bc(),s.bc(),s.cc(34,"tr",15),s.cc(35,"th"),s.ad(36,"Size"),s.bc(),s.cc(37,"td"),s.ad(38),s.bc(),s.bc(),s.cc(39,"tr",16),s.cc(40,"th"),s.ad(41,"Location"),s.bc(),s.cc(42,"td"),s.ad(43),s.bc(),s.bc(),s.cc(44,"tr",17),s.cc(45,"th"),s.ad(46,"Owner"),s.bc(),s.cc(47,"td"),s.ad(48),s.bc(),s.bc(),s.cc(49,"tr",18),s.cc(50,"th"),s.ad(51,"Modified"),s.bc(),s.cc(52,"td"),s.ad(53),s.bc(),s.bc(),s.cc(54,"tr",19),s.cc(55,"th"),s.ad(56,"Opened"),s.bc(),s.cc(57,"td"),s.ad(58),s.bc(),s.bc(),s.cc(59,"tr",20),s.cc(60,"th"),s.ad(61,"Created"),s.bc(),s.cc(62,"td"),s.ad(63),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&e&&(s.Hb(13),s.bd(t.selected.name),s.Hb(5),s.cd(": ",t.selected.modified,""),s.Hb(2),s.zc("@animate",s.Dc(12,ee,s.Cc(11,B))),s.Hb(2),s.zc("ngClass",t.selected.type),s.Hb(11),s.bd(t.selected.type),s.Hb(5),s.bd(""===t.selected.size?"-":t.selected.size),s.Hb(5),s.bd(t.selected.location),s.Hb(5),s.bd(t.selected.owner),s.Hb(5),s.bd(t.selected.modified),s.Hb(5),s.bd(t.selected.opened),s.Hb(5),s.bd(t.selected.created))},directives:[_.e,_.d,w.b,v.a,C.a,O.r,S.a,q.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;height:100%}[_nghost-%COMP%] > .header[_ngcontent-%COMP%]{flex:0 1 auto;height:160px;min-height:160px;max-height:160px}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{height:240px}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .offline-switch[_ngcontent-%COMP%]{padding-bottom:16px;font-weight:500}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:16px 0}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;text-align:left}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:16px 0}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.owner[_ngcontent-%COMP%], [_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.type[_ngcontent-%COMP%]{text-transform:capitalize}"],data:{animation:m.a}}),V);function ce(e,t){1&e&&(s.cc(0,"mat-icon",19),s.ad(1,"chevron_right"),s.bc())}function ne(e,t){if(1&e&&(s.cc(0,"div",17),s.cc(1,"span"),s.ad(2),s.bc(),s.Yc(3,ce,2,0,"mat-icon",18),s.bc()),2&e){var c=t.$implicit,n=t.last;s.Hb(2),s.bd(c),s.Hb(1),s.zc("ngIf",!n)}}var ae,ie=function(){return{x:"50px"}},oe=function(e){return{value:"*",params:e}},re=function(){return{delay:"300ms",scale:"0.2"}},le=((ae=function(){function e(t,c){_classCallCheck(this,e),this._fileManagerService=t,this._PersoInfoSidebarService=c,this._unsubscribeAll=new f.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this._fileManagerService.onFileSelected.pipe(Object(u.a)(this._unsubscribeAll)).subscribe((function(t){e.selected=t,e.pathArr=t.location.split(">")}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"toggleSidebar",value:function(e){this._PersoInfoSidebarService.getSidebar(e).toggleOpen()}}]),e}()).\u0275fac=function(e){return new(e||ae)(s.Wb(b),s.Wb(p.a))},ae.\u0275cmp=s.Qb({type:ae,selectors:[["file-manager"]],decls:26,vars:9,consts:[["id","file-manager",1,"page-layout","simple","right-sidebar","inner-scroll"],["name","file-manager-main-sidebar","position","left",1,"sidebar","main-sidebar"],["fxFlex","",1,"center"],["fxLayout","column","fxLayoutAlign","space-between start",1,"header","mat-accent-bg","p-24"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between start",1,"toolbar","w-100-p"],["fxLayout","row",1,"left-side"],["mat-icon-button","",1,"sidebar-toggle",3,"click"],["fxLayout","row",1,"right-side"],["mat-icon-button","","aria-label","Search","matTooltip","Search"],["fxLayout","row","fxLayoutAlign","start center",1,"breadcrumb","text-truncate","h1","pl-72"],["fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],[1,"file-uploader"],["hidden","","type","file"],["fileInput",""],["mat-fab","","aria-label","Add file",1,"add-file-button","mat-warn",3,"click"],["persoInfoPerfectScrollbar","",1,"content","mat-white-bg"],["name","file-manager-details-sidebar","position","right","lockedOpen","gt-md",1,"sidebar","details-sidebar"],["fxLayout","row","fxLayoutAlign","start center"],["class","separator",4,"ngIf"],[1,"separator"]],template:function(e,t){if(1&e){var c=s.dc();s.cc(0,"div",0),s.cc(1,"persoinfo-sidebar",1),s.Xb(2,"file-manager-main-sidebar"),s.bc(),s.cc(3,"div",2),s.cc(4,"div",3),s.cc(5,"div",4),s.cc(6,"div",5),s.cc(7,"button",6),s.oc("click",(function(){return t.toggleSidebar("file-manager-main-sidebar")})),s.cc(8,"mat-icon"),s.ad(9,"menu"),s.bc(),s.bc(),s.bc(),s.cc(10,"div",7),s.cc(11,"button",8),s.cc(12,"mat-icon"),s.ad(13,"search"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(14,"div",9),s.Yc(15,ne,4,2,"div",10),s.bc(),s.cc(16,"div",11),s.Xb(17,"input",12,13),s.cc(19,"button",14),s.oc("click",(function(){return s.Qc(c),s.Mc(18).click()})),s.cc(20,"mat-icon"),s.ad(21,"add"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(22,"div",15),s.Xb(23,"file-list"),s.bc(),s.bc(),s.cc(24,"persoinfo-sidebar",16),s.Xb(25,"file-manager-details-sidebar"),s.bc(),s.bc()}2&e&&(s.Hb(14),s.zc("@animate",s.Dc(4,oe,s.Cc(3,ie))),s.Hb(1),s.zc("ngForOf",t.pathArr),s.Hb(4),s.zc("@animate",s.Dc(7,oe,s.Cc(6,re))))},directives:[g.a,h.a,y,_.b,_.e,_.d,w.b,v.a,O.t,C.a,J,te,O.u],styles:['#file-manager .sidebar{width:320px!important;min-width:320px!important;max-width:320px!important}@media screen and (min-width:1280px){#file-manager .sidebar.details-sidebar{z-index:0}}#file-manager .center{overflow:hidden}#file-manager .center .header{position:relative;height:160px;min-height:160px;max-height:160px}@media (max-width:959px){#file-manager .center .header{height:120px;min-height:120px;max-height:120px}}#file-manager .center .header .add-file-button{position:absolute;bottom:-28px;left:16px;z-index:999}#file-manager .center .content{flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch}#file-manager .type-icon.folder:before{content:"folder";color:#ffb300}#file-manager .type-icon.document:before{content:"insert_drive_file";color:#1565c0}#file-manager .type-icon.spreadsheet:before{content:"insert_chart";color:#4caf50}'],encapsulation:2,data:{animation:m.a}}),ae);c.d(t,"FileManagerModule",(function(){return be}));var se,de=[{path:"**",component:le,children:[],resolve:{files:b}}],be=((se=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ub({type:se}),se.\u0275inj=s.Tb({factory:function(e){return new(e||se)},providers:[b],imports:[[i.j.forChild(de),w.c,v.b,x.s,q.b,M.k,o.a,r.g]]}),se)}}]);
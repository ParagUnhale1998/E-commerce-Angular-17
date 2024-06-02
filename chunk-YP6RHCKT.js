import{c as $,d as I,f as g,g as ee,h as C}from"./chunk-XTBGYHB6.js";import{Aa as U,B as M,Ba as V,C as P,Ca as q,Da as G,E as R,Ea as H,G as E,N as A,Na as B,Sa as Q,T as F,Ta as X,X as c,Y as p,Ya as Z,a as S,b as O,da as T,e as _,f as j,fa as u,fb as Y,gb as J,ib as K,ka as a,l as D,la as f,na as L,pb as W,ra as h,s as N,sa as v,ta as y,v as d,w as z,x as k,za as m}from"./chunk-4ABEXS3U.js";var ue={production:!0,userApiUrl:"https://ecommerce-user-api.onrender.com/users",ordersApiUrl:"https://ecommerce-user-api.onrender.com/orders",GOOGLE_CLIENT_ID:"413054301258-0kjjv5fuji434g0k8ruf571lneqhpeu5.apps.googleusercontent.com"};var ge=(()=>{let e=class e{constructor(){this.authState=T(!1),sessionStorage.getItem("loggedInUser")&&this.authState.set(!0)}login(){this.authState.set(!0)}logout(){this.authState.set(!1),sessionStorage.removeItem("loggedInUser")}isAuthenticated(){return this.authState}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ie=["overlay"],se=["*"];function re(i,e){i&1&&y(0,"div")}function oe(i,e){if(i&1&&(h(0,"div"),u(1,re,1,0,"div",6),v()),i&2){let r=m(2);L(r.spinner.class),f("color",r.spinner.color),c(),a("ngForOf",r.spinner.divArray)}}function ae(i,e){if(i&1&&(y(0,"div",7),Q(1,"safeHtml")),i&2){let r=m(2);a("innerHTML",X(1,1,r.template),F)}}function le(i,e){if(i&1&&(h(0,"div",2,0),u(2,oe,2,5,"div",3)(3,ae,2,3,"div",4),h(4,"div",5),V(5),v()()),i&2){let r=m();f("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),a("@.disabled",r.disableAnimation)("@fadeIn","in"),c(2),a("ngIf",!r.template),c(),a("ngIf",r.template),c(),f("z-index",r.spinner.zIndex)}}var pe={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},w={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},x="primary",l=class i{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new i(e)}},ce=(()=>{let e=class e{constructor(){this.spinnerObservable=new j(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(D(n=>n&&n.name===t))}show(t=x,n){return new Promise((s,o)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new l(O(S({},n),{show:!0}))),s(!0)):(this.spinnerObservable.next(new l({name:t,show:!0})),s(!0))},10)})}hide(t=x,n=10){return new Promise((s,o)=>{setTimeout(()=>{this.spinnerObservable.next(new l({name:t,show:!1})),s(!0)},n)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),te=new k("NGX_SPINNER_CONFIG"),de=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(n){return new(n||e)(p(W,16))},e.\u0275pipe=R({name:"safeHtml",type:e,pure:!0,standalone:!0});let i=e;return i})(),Re=(()=>{let e=class e{constructor(t,n,s,o){this.spinnerService=t,this.changeDetector=n,this.elementRef=s,this.globalConfig=o,this.disableAnimation=!1,this.spinner=new l,this.ngUnsubscribe=new _,this.setDefaultOptions=()=>{let{type:b}=this.globalConfig??{};this.spinner=l.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??b,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=w.BD_COLOR,this.zIndex=w.Z_INDEX,this.color=w.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=x,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(N(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let n in t)if(n){let s=t[n];if(s.isFirstChange())return;typeof s.currentValue<"u"&&s.currentValue!==s.previousValue&&s.currentValue!==""&&(this.spinner[n]=s.currentValue,n==="showSpinner"&&(s.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(t,n){this.spinner.divCount=pe[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((o,b)=>b);let s="";switch(n.toLowerCase()){case"small":s="la-sm";break;case"medium":s="la-2x";break;case"large":s="la-3x";break;default:break}return"la-"+t+" "+s}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(n){return new(n||e)(p(ce),p(Z),p(A),p(te,8))},e.\u0275cmp=M({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,s){if(n&1&&q(ie,5),n&2){let o;G(o=H())&&(s.spinnerDOM=o.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[E,B],ngContentSelectors:se,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,s){n&1&&(U(),u(0,le,6,12,"div",1)),n&2&&a("ngIf",s.spinner.show)},dependencies:[de,J,Y],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[$("fadeIn",[ee("in",g({opacity:1})),C(":enter",[g({opacity:0}),I(300)]),C(":leave",I(200,g({opacity:0})))])]},changeDetection:0});let i=e;return i})(),Ee=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:te,useValue:t}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=z({imports:[K]});let i=e;return i})();export{ue as a,ge as b,ce as c,Re as d,Ee as e};

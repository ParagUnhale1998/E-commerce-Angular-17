import{a as m}from"./chunk-NO5EP2EX.js";import{a as x}from"./chunk-XPGRVCRA.js";import{a as p,b as C,c as G}from"./chunk-HBGALH6I.js";import{b as w}from"./chunk-R6MQYSSJ.js";import"./chunk-WXI33M2S.js";import{B as f,Ga as a,Ma as E,Na as I,Y as t,ca as v,d,h,ib as L,m as g,mb as y,p as u,ra as s,sa as c,ta as S,tb as O}from"./chunk-4ABEXS3U.js";var B=(()=>{let r=class r{constructor(e,i,n,o,N,b){this.router=e,this.userService=i,this.authService=n,this.toastrService=o,this.spinner=N,this.ngZone=b,this.GOOGLE_CLIENT_ID=p.GOOGLE_CLIENT_ID}ngOnInit(){this.initializeGoogleLogin()}initializeGoogleLogin(){google.accounts.id.initialize({client_id:this.GOOGLE_CLIENT_ID,callback:e=>this.handleLogin(e)}),google.accounts.id.renderButton(document.getElementById("google-btn"),{theme:"filled_blue",size:"large",shape:"rectangle",width:350})}decodeToken(e){return JSON.parse(atob(e.split(".")[1]))}handleLogin(e){if(e&&e.credential){this.spinner.show();let i=this.decodeToken(e.credential),n={name:i.name,email:i.email,profilePic:i.picture,cart:[],wishlist:[],myOrders:[]};this.userService.checkUserExists(i.email).pipe(u(3),g(o=>(this.toastrService.showError("Error checking user existence","Error"),console.error("Error checking user existence:",o),this.spinner.hide(),h(null)))).subscribe(o=>{o?this.handleExistingUser(o):this.createNewUser(n)})}}handleExistingUser(e){return d(this,null,function*(){sessionStorage.setItem("loggedInUser",JSON.stringify(e)),this.toastrService.showSuccess("Login successful","Success"),this.authService.login(),this.spinner.hide(),yield this.ngZone.run(()=>d(this,null,function*(){yield this.router.navigate(["/profile"])}))})}createNewUser(e){this.userService.createUser(e).pipe(u(3),g(i=>(this.toastrService.showError("Error creating user","Error"),console.error("Error creating user:",i),this.spinner.hide(),h(null)))).subscribe(i=>{i&&(this.toastrService.showSuccess("User created successfully","Success"),sessionStorage.setItem("loggedInUser",JSON.stringify(i)),this.authService.login(),this.spinner.hide(),this.router.navigate(["/profile"]))})}};r.\u0275fac=function(i){return new(i||r)(t(O),t(x),t(C),t(w),t(G),t(v))},r.\u0275cmp=f({type:r,selectors:[["app-login"]],standalone:!0,features:[E([{provide:"SocialAuthServiceConfig",useValue:{autoLogin:!1,providers:[{id:m.PROVIDER_ID,provider:new m(p.GOOGLE_CLIENT_ID)}]}}]),I],decls:9,vars:0,consts:[[1,"flex","flex-col","justify-center","items-center","gap-2","p-4","container"],[1,"font-secondaryFont"],["id","google-btn"],[1,"fa-brands","fa-google"],[1,"font-primaryFont"]],template:function(i,n){i&1&&(s(0,"div",0)(1,"h1",1),a(2,"Welcome To Login Page"),c(),S(3,"div",2)(4,"i",3),s(5,"h1",1),a(6,"Click here For Login"),c(),s(7,"h2",4),a(8,"Wait For 1 Min After Login To Load Backend Data"),c()())},dependencies:[L,y]});let l=r;return l})();export{B as LoginComponent};
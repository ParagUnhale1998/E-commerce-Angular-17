import{a as ne}from"./chunk-L7HHVPTI.js";import{b as re}from"./chunk-PISGDUOU.js";import{b as J,d as Y,e as q,g as Z,h as K,i as X,j as ee,k as te,l as ie}from"./chunk-LSU3AK4N.js";import{m as oe}from"./chunk-XTBGYHB6.js";import{B as u,G as I,Ga as i,H as w,Ha as z,I as _,Ia as v,Na as h,O as N,Oa as H,Pa as S,Ra as $,U as j,X as s,Y as E,_a as L,a as Q,b as R,da as G,eb as O,fa as b,fb as F,gb as M,ib as y,ka as p,ma as A,na as T,ra as e,rb as U,sa as t,ta as c,ua as B,va as V,wa as P,ya as f,za as x}from"./chunk-4ABEXS3U.js";function he(a,n){if(a&1){let d=P();e(0,"img",4),f("click",function(){let r=w(d).$implicit,l=x();return _(l.setMainImage(r.url))}),t()}if(a&2){let d=n.$implicit,o=x();p("src",d.url,j)("alt",o.product.name)}}var ae=(()=>{let n=class n{ngOnChanges(o){o.product&&this.product&&(this.mainImage=this.product.featuredImage.url)}setMainImage(o){this.mainImage=o}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-image"]],inputs:{product:"product"},standalone:!0,features:[I,h],decls:4,vars:3,consts:[[1,"relative","flex","md:flex-row-reverse","flex-col","justify-start","items-start","gap-2","image-container"],[1,"pt-2","w-full","md:w-[80%]",3,"src","alt"],[1,"items-start","gap-2","grid","grid-cols-4","md:grid-cols-1","py-2","cursor-pointer","images-container"],["class","w-auto",3,"src","alt","click",4,"ngFor","ngForOf"],[1,"w-auto",3,"click","src","alt"]],template:function(r,l){r&1&&(e(0,"div",0),c(1,"img",1),e(2,"div",2),b(3,he,1,2,"img",3),t()()),r&2&&(s(),p("src",l.mainImage,j)("alt",l.product.name),s(2),p("ngForOf",l.product.images.nodes.slice(0,4)))},dependencies:[y,F]});let a=n;return a})();var le=(()=>{let n=class n{ngOnInit(){this.originalPrice=parseFloat(this.product?.priceRange.minVariantPrice.amount)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-title"]],inputs:{product:"product"},standalone:!0,features:[h],decls:7,vars:2,consts:[[1,"pt-4","text-center","md:text-left","heading-container"],[1,"px-6","md:p-0","text-3xl"],[1,"mt-4","mb-1","font-bold"],[1,"font-primaryFont","text-[11px]","tracking-wider"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"h1",1),i(2),t(),e(3,"p",2),i(4),t(),e(5,"p",3),i(6," (incl. of all taxes) "),t()()),r&2&&(s(2),z(l.product==null?null:l.product.title),s(2),v("Rs. ",l.originalPrice,""))}});let a=n;return a})();var se=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-offer"]],standalone:!0,features:[h],decls:53,vars:0,consts:[[1,"flex","flex-col","justify-start","items-start","gap-2","py-4","pt-6","border-b-[1px]","font-primaryFont","discount-container"],[1,"flex","justify-self-start","items-start","gap-4","discount-card"],["src","//www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/","alt",""],[1,"text-[12px]"],[1,""]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"div"),c(3,"img",2),t(),e(4,"div")(5,"p",3),i(6," Get this for "),e(7,"b",4),i(8,"Rs. 899"),t(),c(9,"br"),i(10," Buy 2 & Get Flat 10% Off! Code: "),e(11,"strong"),i(12,"BUY2"),t()()()(),e(13,"div",1)(14,"div"),c(15,"img",2),t(),e(16,"div")(17,"p",3),i(18," Get this for "),e(19,"b",4),i(20,"Rs. 799"),t(),c(21,"br"),i(22," Buy 5 & Get Flat 20% Off! Code: "),e(23,"strong"),i(24," BUY5"),t()()()(),e(25,"div",1)(26,"div"),c(27,"img",2),t(),e(28,"div")(29,"p",3),i(30," Get this for "),e(31,"b",4),i(32,"Rs. 849"),t(),c(33,"br"),i(34," Flat 15% Off on minimum purchase of 2699/- "),c(35,"br"),i(36," Code: "),e(37,"strong"),i(38," FLAT15"),t()()()(),e(39,"div",1)(40,"div"),c(41,"img",2),t(),e(42,"div")(43,"p",3),i(44," Get this for "),e(45,"b",4),i(46,"Rs. 799"),t(),c(47,"br"),i(48," Flat 20% Off on minimum purchase of 3999/- "),c(49,"br"),i(50," Code: "),e(51,"strong"),i(52," FLAT20"),t()()()()())}});let a=n;return a})();function ge(a,n){a&1&&(B(0),e(1,"span",11),i(2,"Size"),t(),V())}function xe(a,n){if(a&1){let d=P();e(0,"button",13),f("click",function(){let r=w(d).$implicit,l=x(2);return _(l.handleSizeClick(r))}),i(1),t()}if(a&2){let d=n.$implicit,o=x(2);A("bg-black",o.selectedSize===d)("text-white",o.selectedSize===d),s(),v(" ",d," ")}}function ye(a,n){if(a&1&&(B(0),e(1,"div",2)(2,"span",11),i(3),t(),b(4,xe,2,5,"button",12),t(),V()),a&2){let d=x();s(3),z(d.product.options[0]==null?null:d.product.options[0].name),s(),p("ngForOf",d.product.options[0]==null?null:d.product.options[0].values)}}function ve(a,n){if(a&1){let d=P();e(0,"button",14),f("click",function(){let r=w(d).$implicit,l=x();return _(l.handleSizeClick(r))}),i(1),t()}if(a&2){let d=n.$implicit,o=x();A("bg-black",o.selectedSize===d)("text-white",o.selectedSize===d),s(),v(" ",d," ")}}var ce=(()=>{let n=class n{constructor(){this.selectedSizeChange=new N,this.selectedQuantityChange=new N}handleSizeClick(o){this.selectedSize=o,this.selectedSizeChange.emit(o)}decreaseQuantity(){this.selectedQuantity>1&&(this.selectedQuantity--,this.selectedQuantityChange.emit(this.selectedQuantity))}increaseQuantity(){this.selectedQuantity++,this.selectedQuantityChange.emit(this.selectedQuantity)}setQuantity(o){let r=o.target.value,l=parseInt(r,10);this.selectedQuantity=isNaN(l)?1:Math.max(1,l),this.selectedQuantityChange.emit(this.selectedQuantity)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-size"]],inputs:{product:"product",selectedSize:"selectedSize",selectedQuantity:"selectedQuantity"},outputs:{selectedSizeChange:"selectedSizeChange",selectedQuantityChange:"selectedQuantityChange"},standalone:!0,features:[h],decls:14,vars:4,consts:[[1,"flex","md:flex-row","flex-col","justify-center","md:justify-start","items-center","md:items-center","gap-2","py-2","w-fullsize-container"],[4,"ngIf"],[1,"flex","justify-center","items-center","gap-2","capitalize","size-btn-container"],["class","border-[1px] hover:bg-black focus:bg-black active:bg-black border-black rounded-lg w-10 h-10 text-primary text-sm hover:text-white focus:text-white active:text-white",3,"bg-black","text-white","click",4,"ngFor","ngForOf"],[1,"flex","md:flex-row","flex-col","justify-center","md:justify-start","items-center","md:items-center","gap-2","md:mt-2","w-full","size-container"],[1,"font-primaryFont","tracking-widest"],[1,"relative","flex","justify-center","items-center","border","quantity-container"],[1,"hover:bg-black","px-3","p-2","hover:text-white","cursor-pointer",3,"click"],[1,"fa","fa-minus"],["type","text","placeholder","1",1,"bg-white","w-10","text-center",3,"input","value"],[1,"fa","fa-plus"],[1,"font-secondaryFont","tracking-widest"],["class","border-[1px] hover:bg-black focus:bg-black active:bg-black p-1 border-black rounded-lg w-12 h-10 text-primary text-sm hover:text-white focus:text-white active:text-white whitespace-nowrap overflow-hidden",3,"bg-black","text-white","click",4,"ngFor","ngForOf"],[1,"border-[1px]","hover:bg-black","focus:bg-black","active:bg-black","p-1","border-black","rounded-lg","w-12","h-10","text-primary","text-sm","hover:text-white","focus:text-white","active:text-white","whitespace-nowrap","overflow-hidden",3,"click"],[1,"border-[1px]","hover:bg-black","focus:bg-black","active:bg-black","border-black","rounded-lg","w-10","h-10","text-primary","text-sm","hover:text-white","focus:text-white","active:text-white",3,"click"]],template:function(r,l){r&1&&(e(0,"div",0),b(1,ge,3,0,"ng-container",1)(2,ye,5,2,"ng-container",1),e(3,"div",2),b(4,ve,2,5,"button",3),t()(),e(5,"div",4)(6,"span",5),i(7,"Quantity"),t(),e(8,"div",6)(9,"span",7),f("click",function(){return l.decreaseQuantity()}),c(10,"i",8),t(),e(11,"input",9),f("input",function(g){return l.setQuantity(g)}),t(),e(12,"span",7),f("click",function(){return l.increaseQuantity()}),c(13,"i",10),t()()()),r&2&&(s(),p("ngIf",(l.product.options[1]==null?null:l.product.options[1].name)==="Size"),s(),p("ngIf",(l.product.options[0]==null?null:l.product.options[0].name)!=="Color"),s(2),p("ngForOf",l.product.options[1]==null?null:l.product.options[1].values),s(7),p("value",l.selectedQuantity))},dependencies:[y,F,M]});let a=n;return a})();var de=(()=>{let n=class n{constructor(o,r){this.fb=o,this.toastrService=r,this.selectedQuantity=1}ngOnInit(){this.initializeForm(),this.resetSelections()}ngOnChanges(o){o.product&&this.resetSelections()}initializeForm(){this.pincodeForm=this.fb.group({pincode:[""]})}resetSelections(){this.selectedSize=this.product?.options[1]?.values?this.product.options[1].values[0]:null,this.selectedQuantity=1}addToCart(){let o=localStorage.getItem("cartItems"),r=o?JSON.parse(o):[];if(r.some(k=>k.id===this.product.id)){this.toastrService.showWarning("Product is already in the cart","Warning");return}let m=this.product.variants.nodes[0].price.amount,g=R(Q({},this.product),{selectedSize:this.selectedSize,selectedQuantity:this.selectedQuantity,totalValue:m});r.push(g),localStorage.setItem("cartItems",JSON.stringify(r)),this.toastrService.showSuccess("Product added successfully","Successfull!")}addToWishlist(){let o=localStorage.getItem("wishlistItems"),r=o?JSON.parse(o):[];if(r.some(k=>k.id===this.product.id)){this.toastrService.showWarning("Product is already in the wishlist","Warning");return}let m=this.product.variants.nodes[0].price.amount,g=R(Q({},this.product),{selectedSize:this.selectedSize,selectedQuantity:this.selectedQuantity,totalValue:m});r.push(g),localStorage.setItem("wishlistItems",JSON.stringify(r)),this.toastrService.showSuccess("Product added successfully","Successfull!")}onSelectedSizeChange(o){this.selectedSize=o}onSelectedQuantityChange(o){this.selectedQuantity=o}};n.\u0275fac=function(r){return new(r||n)(E(ee),E(oe))},n.\u0275cmp=u({type:n,selectors:[["app-product-cart-pincode-btn"]],inputs:{product:"product"},standalone:!0,features:[I,h],decls:16,vars:4,consts:[[1,"flex","flex-col","justify-center","items-center","gap-4","mt-4","cart-size-pincode-and-btn-container"],[1,"w-full",3,"selectedSizeChange","selectedQuantityChange","product","selectedSize","selectedQuantity"],[1,"flex","flex-col","justify-center","items-center","gap-2","w-full","cart-btn-container"],[1,"flex","justify-center","items-center","gap-2","bg-black","hover:bg-primary","p-3","w-full","font-primaryFont","font-semibold","text-[12px]","text-white","tracking-wider","cartbtn",3,"click"],[1,"fi","fi-shopping-cart"],[1,"flex","justify-center","items-center","gap-2","border-2","p-3","hover:border-black","w-full","font-primaryFont","font-semibold","text-[12px]","text-primary","hover:text-black","tracking-wider",3,"click"],[1,"ai","ai-fill-heart"],[1,"flex","flex-col","justify-center","items-center","shadow-md","hover:shadow-lg","mb-4","p-2","p-4","rounded-md","w-full","transform","transition-transform","hover:-translate-y-2","duration-500","cursor-pointer","pincode-container"],[1,"font-primaryFont","font-semibold","text-sm"],[1,"flex","justify-between","items-center","w-full","font-primaryFont","pin-input-container",3,"formGroup"],["type","text","formControlName","pincode","placeholder","Enter your pincode",1,"border-[1px]","shadow-none","px-4","p-2","w-[80%]","text-sm","outline-none"],["type","submit",1,"bg-black","hover:bg-primary","p-2","rounded-r-md","w-[20%]","text-[12px]","text-white","uppercase","tracking-wider","cartbtn"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"app-product-size",1),f("selectedSizeChange",function(g){return l.onSelectedSizeChange(g)})("selectedQuantityChange",function(g){return l.onSelectedQuantityChange(g)}),t(),e(2,"div",2)(3,"button",3),f("click",function(){return l.addToCart()}),i(4," ADD TO CART "),c(5,"i",4),t(),e(6,"button",5),f("click",function(){return l.addToWishlist()}),i(7," Add To Wishlist "),c(8,"i",6),t()(),e(9,"div",7)(10,"p",8),i(11," Estimated Delivery Date & COD Checker "),t(),e(12,"form",9),c(13,"input",10),e(14,"button",11),i(15," Check "),t()()()()),r&2&&(s(),p("product",l.product)("selectedSize",l.selectedSize)("selectedQuantity",l.selectedQuantity),s(11),p("formGroup",l.pincodeForm))},dependencies:[y,ce,te,Z,J,Y,q,ie,K,X]});let a=n;return a})();var be=a=>({openPay:a}),Se=a=>({openDescription:a}),Ce=a=>({openMoreInfo:a}),pe=(()=>{let n=class n{constructor(){this.activeTab=null}handleTabClick(o){this.activeTab=this.activeTab===o?null:o}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-pay-description"]],standalone:!0,features:[h],decls:93,vars:15,consts:[[1,"pay-description-container"],[1,"font-primaryFont","tab-menu"],[1,"py-1","border-b","dropdown",3,"ngClass"],["aria-haspopup","true",1,"flex","justify-between","items-center","p-2","text-primary","text-sm","tracking-wider","cursor-pointer","dropdown-trigger",3,"click"],[1,"text-xl"],["aria-label","submenu",1,"flex","flex-col","justify-start","items-start","gap-2","px-2","font-primaryFont","dropdown-content"],[1,"flex","pt-4","w-full"],[1,"flex","flex-wrap","justify-start","items-start","gap-2"],[1,"text-green-700"],["width","120","src","https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/snitchpay_logo.png","alt",""],["width","20","src","https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/info-icon.png","alt",""],[1,"flex","w-full"],[1,"flex","flex-wrap","justify-start","items-start","gap-1","text-sm"],[1,"text-green-600"],["width","80","src","https://assets.snapmint.com/assets/express_checkout/SnapMint_logo.svg","alt",""],["src","https://assets.snapmint.com/assets/merchant/info.png","alt",""],[1,"text-[12px]","text-primary"],[1,"flex","pb-4","w-full"],["width","70","src","https://www.snitch.co.in/cdn/shop/t/316/assets/brand.svg?v=74745334496592893301707102784","alt",""],["aria-label","submenu",1,"flex","flex-col","gap-2","px-2","font-primaryFont","dropdown-content"],[1,"flex","flex-col","pt-4","w-full","font-bold","text-sm"],[1,"px-6","p-4","text-primary","text-sm","list-disc"],[1,"flex","justify-start","items-start","gap-2","font-primaryFont","text-sm"],[1,"font-primaryFont","text-sm"],[1,"mr-2"],[1,"flex","justify-start","items-start","gap-2","pb-4","font-primaryFont","font-semibold","text-sm"],["aria-label","submenu",1,"flex","flex-col","gap-4","px-2","font-primaryFont","text-sm","dropdown-content"],[1,"pt-2"],[1,"text-xs"],[1,"pb-2"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"ul",1)(2,"li",2)(3,"p",3),f("click",function(){return l.handleTabClick("pay")}),i(4," EMI / PAY IN 3 OFFERS "),c(5,"i",4),t(),e(6,"ul",5)(7,"li",6)(8,"p",7),i(9," or Pay "),e(10,"b",8),i(11,"\u20B9266"),t(),i(12," and rest later via "),c(13,"img",9)(14,"img",10),t()(),e(15,"li",11)(16,"p",12),i(17," or "),e(18,"b"),i(19,"3"),t(),i(20," monthly payments of "),e(21,"b",13),i(22,"\u20B9333"),t(),i(23," with "),c(24,"img",14)(25,"img",15),t()(),e(26,"li")(27,"p",16),i(28," UPI & Cards Accepted, Online approval in 2 minutes "),t()(),e(29,"li",17)(30,"p",12),i(31," Or 3 interest free payments of "),e(32,"b"),i(33,"\u20B9266.34"),t(),c(34,"img",18),t()()()(),e(35,"li",2)(36,"p",3),f("click",function(){return l.handleTabClick("Description")}),i(37," DESCRIPTION "),c(38,"i",4),t(),e(39,"ul",19)(40,"li",20),i(41," PRODUCT SPECIFICATION "),e(42,"ul",21)(43,"li"),i(44,"Short Sleeves"),t(),e(45,"li"),i(46,"Printed Design"),t(),e(47,"li"),i(48,"Spread Collar"),t(),e(49,"li"),i(50,"Curved Hem Design"),t(),e(51,"li"),i(52,"Spare Buttons Included"),t()()(),e(53,"p",22)(54,"b"),i(55,"FABRIC:"),t(),i(56," 100% Rayon. "),t(),e(57,"p",22)(58,"b"),i(59,"FIT:"),t(),i(60," Slim Fit "),t(),e(61,"p",22)(62,"b"),i(63,"SIZE:"),t(),i(64," Model is wearing a M size "),t(),e(65,"p",22)(66,"b"),i(67,"Model Height:"),t(),i(68," 6 Feet "),t(),e(69,"p",23)(70,"b",24),i(71,"WASH CARE:"),t(),i(72,"Cold machine wash. For more details see the wash care label attached. "),t(),e(73,"p",25),i(74," Actual colour of the product may vary slightly due to photographic lighting sources or your device. "),t()()(),e(75,"li",2)(76,"p",3),f("click",function(){return l.handleTabClick("moreInfo")}),i(77," MORE INFORMATION "),c(78,"i",4),t(),e(79,"ul",26)(80,"li",27)(81,"b"),i(82,"Manufactured & Marketed by:"),t()(),e(83,"li")(84,"b"),i(85,"Snitch Apparels Pvt. Ltd."),t(),e(86,"p",28),i(87," No. 1/1, St. Johns Church Road, Bharathinagar, Bengaluru - 560005 "),t()(),e(88,"li",29)(89,"b"),i(90,"Country of Origin:"),t(),e(91,"p"),i(92,"India"),t()()()()()()),r&2&&(s(2),p("ngClass",S(9,be,l.activeTab==="pay")),s(3),T(l.activeTab==="pay"?"fa-chevron-down fa-solid":"fa-chevron-up fa-solid"),s(30),p("ngClass",S(11,Se,l.activeTab==="Description")),s(3),T(l.activeTab==="Description"?"fa-chevron-down fa-solid":"fa-chevron-up fa-solid"),s(37),p("ngClass",S(13,Ce,l.activeTab==="moreInfo")),s(3),T(l.activeTab==="moreInfo"?"fa-chevron-down fa-solid":"fa-chevron-up fa-solid"))},dependencies:[y,O],styles:[".dropdown-content[_ngcontent-%COMP%]{max-height:0;overflow:hidden;opacity:0;transition:max-height .5s ease-in-out,opacity .6s ease-in-out}.dropdown.openPay[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{max-height:250px;opacity:1}.dropdown.openDescription[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{max-height:800px;opacity:1}.dropdown.openMoreInfo[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{max-height:300px;opacity:1}"]});let a=n;return a})();var we=()=>["marketed by","return policy","place return request"],W=a=>({hidden:a}),_e=(a,n,d,o)=>({"bg-neutral-400 text-black":a,"bg-gray-200":n,"rounded-tl-lg":d,"rounded-tr-lg":o});function Pe(a,n){if(a&1){let d=P();e(0,"button",14),f("click",function(){let r=w(d).index,l=x();return _(l.handleTabClick(r))}),i(1),t()}if(a&2){let d=n.$implicit,o=n.index,r=x();p("ngClass",$(2,_e,r.activeTab===o,r.activeTab!==o,o===0,o===2)),s(),v(" ",d," ")}}var me=(()=>{let n=class n{constructor(){this.activeTab=0}handleTabClick(o){this.activeTab=o}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-policy-return"]],standalone:!0,features:[h],decls:35,vars:14,consts:[[1,"policy-container","tab-container"],[1,"flex","flex-col","items-center","p-3","w-full"],[1,"flex","justify-center","w-full","btn-container"],["class","px-2 py-2 w-1/3 font-medium font-primaryFont text-xs capitalize cursor-pointer tab-button",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"w-full"],[1,"border-gray-300","p-4","border","border-t-0","rounded-b-lg","w-full","font-primaryFont","tab-content"],["id","tab1-content",3,"ngClass"],[1,"font-bold","text-xs"],[1,"text-xs"],[1,"mt-2","font-bold","text-xs"],["id","tab2-content",3,"ngClass"],[1,"text-xs","leading-5"],["href","",1,"font-bold"],["id","tab3-content",3,"ngClass"],[1,"px-2","py-2","w-1/3","font-medium","font-primaryFont","text-xs","capitalize","cursor-pointer","tab-button",3,"click","ngClass"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),b(3,Pe,2,7,"button",3),t(),e(4,"div",4)(5,"div",5)(6,"div",6)(7,"p",7),i(8,"Snitch Apparels Pvt. Ltd."),t(),e(9,"p",8),i(10," No. 1/1, St. Johns Church Road, Bharathinagar, Bengaluru - 560005 "),t(),e(11,"p",9),i(12,"Country of Origin:"),t(),e(13,"p",8),i(14,"India"),t()(),e(15,"div",10)(16,"p",11),i(17," We offer 7 days hassle-free returns. Return Policies may vary based on products and promotions. "),c(18,"br"),i(19),c(20,"br"),i(21),c(22,"br"),i(23),c(24,"br"),i(25," For more details on our Returns Policies, please "),e(26,"a",12),i(27,"click here"),t(),i(28,". "),t()(),e(29,"div",13)(30,"p",8),i(31," To place any Returns Request, "),e(32,"a",12),i(33,"click here"),t(),i(34,". "),t()()()()()()),r&2&&(s(3),p("ngForOf",H(7,we)),s(3),p("ngClass",S(8,W,l.activeTab!==0)),s(9),p("ngClass",S(10,W,l.activeTab!==1)),s(4),v(" "," 1)"," Refunds for Prepaid orders would directly be initiated to source account and COD order will be refunded in the form of COUPON CODE ONLY "),s(2),v(" "," 2)"," Defective Products, Wrong Products or Damaged Products issue should be raised within 24 hrs of delivery "),s(2),v(" ","3)"," All Orders wherein FREE Products included are not eligible for Return "),s(6),p("ngClass",S(12,W,l.activeTab!==2)))},dependencies:[y,O,F]});let a=n;return a})();var ue=(()=>{let n=class n{constructor(){this.relatedProducts=[],this.Heading=""}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=u({type:n,selectors:[["app-product-related-product"]],inputs:{relatedProducts:"relatedProducts",Heading:"Heading"},standalone:!0,features:[h],decls:5,vars:2,consts:[[1,"-mx-4","md:-mx-0","related-products-container"],[1,"p-4","text-center","heading"],[1,"font-primaryFont","text-2xl","uppercase"],["howManyProductShowCss","w-1/3 md:w-1/4 lg:w-1/6",3,"products"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"h3",2),i(3),t()(),c(4,"app-product-slider",3),t()),r&2&&(s(3),v(" ",l.Heading," "),s(),p("products",l.relatedProducts))},dependencies:[y,ne]});let a=n;return a})();function Ee(a,n){if(a&1&&(e(0,"div",2)(1,"div",3)(2,"div",4),c(3,"app-product-image",5),t(),e(4,"div",6),c(5,"app-product-title",5)(6,"app-product-offer")(7,"app-product-cart-pincode-btn",5)(8,"app-product-pay-description")(9,"app-product-policy-return"),t()(),e(10,"div",7),c(11,"app-product-related-product",8),t()()),a&2){let d=x();s(3),p("product",d.product()),s(2),p("product",d.product()),s(2),p("product",d.product()),s(4),p("relatedProducts",d.relatedProducts())}}var ct=(()=>{let n=class n{constructor(o,r){this.route=o,this.productService=r,this.allProducts=this.productService.products$,this.product=G(void 0),this.relatedProducts=L(()=>{let l=this.allProducts(),m=this.product();if(!m)return[];let g=m.title.split(" "),k=g[g.length-1].toLowerCase();return l.filter(fe=>fe.title.toLowerCase().includes(k))})}ngOnInit(){this.route.paramMap.subscribe(o=>{let r=o.get("id");r&&this.loadProduct(r)})}loadProduct(o){let r=parseInt(o),m=this.allProducts().find(g=>parseInt(g.id.substring(g.id.lastIndexOf("/")+1))===r);this.product.set(m)}};n.\u0275fac=function(r){return new(r||n)(E(U),E(re))},n.\u0275cmp=u({type:n,selectors:[["app-product"]],standalone:!0,features:[h],decls:2,vars:1,consts:[["id","product-detail"],["class","px-4 product-container",4,"ngIf"],[1,"px-4","product-container"],[1,"gap-4","grid","grid-cols-1","md:grid-cols-2","container"],[1,"w-full","image-container"],[3,"product"],[1,"w-full","font-secondaryFont","detail-container"],[1,"w-full","container","related-products-container"],["Heading","Related Articles",3,"relatedProducts"]],template:function(r,l){r&1&&(e(0,"section",0),b(1,Ee,12,4,"div",1),t()),r&2&&(s(),p("ngIf",l.product()))},dependencies:[y,M,ae,le,se,de,pe,me,ue]});let a=n;return a})();export{ct as ProductComponent};
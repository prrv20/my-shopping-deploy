(function(){"use strict";var t={5218:function(t,e,r){var o=r(144),n=r(998),a=r(3059),i=function(){var t=this,e=t._self._c;return e(n.Z,[e("nav-bar"),e(a.Z,[e("router-view")],1)],1)},s=[],c=r(6232),u=r(5550),l=r(1154),d=r(4324),m=r(5808),f=r(4525),h=r(982),p=r(4611),v=r(1304),g=r(8162),_=r(3687),y=r(7953),b=function(){var t=this,e=t._self._c;return e("div",[e(c.Z,{attrs:{color:"indigo darken-4",dark:""}},[e(u.Z,{on:{click:function(e){t.drawer=!0}}}),e(y.qW,[e(d.Z,[t._v("mdi-shopping-outline")]),t._v(" My Shopping ")],1),e(_.Z),e(l.Z,{staticClass:"ma-3",attrs:{color:"green",content:t.cartCount,value:t.cartCount>0}},[e(d.Z,{on:{click:function(e){return t.redirectTo("Cart")}}},[t._v("mdi-cart-variant")])],1)],1),e(g.Z,{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(m.Z,{attrs:{nav:"",dense:""}},[e(h.Z,{attrs:{"active-class":"indigo--text text--darken-3"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.routes,(function(r){return e(f.Z,{key:r.name,attrs:{disabled:t.currentRoute==r.name},on:{click:function(e){return t.redirectTo(r.name)}}},[e(p.Z,[e(d.Z,[t._v(t._s(r.icon))])],1),e(v.V9,[t._v(t._s(r.title))])],1)})),1)],1)],1)],1)},C=[],Z=r(629),k={name:"nav-component",data:function(){return{drawer:!1,group:null,routes:[{icon:"mdi-home",title:"Inicio",name:"Home"},{icon:"mdi-format-list-bulleted",title:"Categorías",name:"Categories"},{icon:"mdi-account",title:"Acerca",name:"About"}]}},computed:{...(0,Z.Se)(["cartCount"]),currentRoute(){return this.$route.name}},methods:{redirectTo(t){this.$router.push({name:t})}}},x=k,w=r(1001),T=(0,w.Z)(x,b,C,!1,null,"afacd988",null),P=T.exports,S={name:"App",data:()=>({}),components:{"nav-bar":P},methods:{...(0,Z.nv)(["fetchCategories"])},created(){this.fetchCategories()}},j=S,O=(0,w.Z)(j,i,s,!1,null,null,null),E=O.exports,A=r(8345),D=function(){var t=this,e=t._self._c;return e("hello-world")},R=[],I=r(266),M=r(2118),V=r(5495),L=r(1713),$=function(){var t=this,e=t._self._c;return e(M.Z,[e(L.Z,{staticClass:"text-center"},[e(I.Z,{attrs:{cols:"12"}},[e(V.Z,{staticClass:"my-3",attrs:{src:r(9574),contain:"",height:"200"}})],1),e(I.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(I.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(L.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(r,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:r.href,target:"_blank"}},[t._v(" "+t._s(r.text)+" ")])})),0)],1),e(I.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(L.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(r,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:r.href,target:"_blank"}},[t._v(" "+t._s(r.text)+" ")])})),0)],1),e(I.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(L.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(r,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:r.href,target:"_blank"}},[t._v(" "+t._s(r.text)+" ")])})),0)],1)],1)],1)},q=[],N={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},U=N,W=(0,w.Z)(U,$,q,!1,null,null,null),B=W.exports,F={name:"HomeView",components:{HelloWorld:B}},H=F,K=(0,w.Z)(H,D,R,!1,null,null,null),z=K.exports,G=r(1146),Q=function(){var t=this,e=t._self._c;return e(M.Z,[e("h1",{staticClass:"text-center my-2 indigo--text"},[t._v("Categorías")]),e(L.Z,{staticClass:"mt-5"},t._l(t.categories,(function(r){return e(I.Z,{key:r,attrs:{col:"12",sm:"6",md:"3"}},[e(G.Z,{staticClass:"pa-2"},[e("h3",{staticClass:"text-center"},[t._v(t._s(r))]),e("a",{on:{click:function(e){return t.redirectTo(r)}}},[e("div",{staticClass:"d-flex justify-center pa-5"},[e(d.Z,{attrs:{size:"150",color:"indigo accent-1"}},[t._v(" "+t._s(t.selectIcon(r))+" ")])],1)])])],1)})),1)],1)},J=[],X={name:"categories-comp",data:function(){return{}},computed:{...(0,Z.rn)(["categories"])},methods:{selectIcon(t){let e="";switch(t){case"electronics":e="mdi-laptop";break;case"jewelery":e="mdi-diamond-stone";break;case"men's clothing":e="mdi-face-man";break;case"women's clothing":e="mdi-face-woman"}return e},redirectTo(t){this.$router.push(`/category/${t}`)}}},Y=X,tt=(0,w.Z)(Y,Q,J,!1,null,"40db1405",null),et=tt.exports,rt=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-center indigo--text"},[t._v("Categoría: "+t._s(t.id))]),e(M.Z,[e(L.Z),e(L.Z,{attrs:{justify:"center"}},t._l(t.products,(function(t){return e(I.Z,{key:t.id,staticClass:"pa-5",attrs:{col:"12",sm:"6",md:"4"}},[e("card-product",{attrs:{product:t}})],1)})),1)],1)],1)},ot=[],nt=r(6190),at=r(4886),it=r(9223),st=r(7394),ct=r(9592),ut=r(6498),lt=r(9258),dt=function(){var t=this,e=t._self._c;return e(G.Z,{staticClass:"mx-auto my-12"},[e("template",{slot:"progress"},[e(ct.Z,{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e(V.Z,{attrs:{height:"250",src:t.product.image}}),e(at.EB,{attrs:{size:"14"}},[t._v(t._s(t.product.title))]),e(at.ZB,[e(L.Z,{staticClass:"mx-0",attrs:{align:"center"}},[e(ut.Z,{attrs:{value:t.product.rating.rate,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e("div",{staticClass:"grey--text ms-4"},[t._v(" "+t._s(t.product.rating.rate)+" ("+t._s(t.product.rating.count)+") ")])],1),e("div",{staticClass:"my-4 text-subtitle-1"},[t._v("$"+t._s(t.product.price))])],1),e(it.Z,{staticClass:"mx-4"}),e(at.h7,[e(nt.Z,{attrs:{color:"orange lighten-2",text:""}},[t._v(" Explore ")]),e(_.Z),e(nt.Z,{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[e(d.Z,[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e(st.Fx,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e(it.Z),e(at.ZB,[t._v(" "+t._s(t.product.description)+" ")])],1)]),e(at.h7,[e(nt.Z,{staticClass:"green darken-2",attrs:{dark:"",text:""},on:{click:t.add}},[e(d.Z,[t._v("mdi-cart")]),t._v(" Agregar ")],1)],1),e(lt.Z,{attrs:{"aria-multiline":t.multiLine,color:"green"},scopedSlots:t._u([{key:"action",fn:function({attrs:r}){return[e(nt.Z,t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" Cerrar ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.product.title)+" Agregado al carrito ")])],2)},mt=[],ft={name:"card-comp",props:{product:{type:Object,require:!0}},data:function(){return{loading:!1,show:!1,multiLine:!0,snackbar:!1}},methods:{...(0,Z.nv)(["addToCart"]),add(){let t={id:this.product.id,title:this.product.title,price:this.product.price,count:1};this.addToCart(t),this.snackbar=!0}}},ht=ft,pt=(0,w.Z)(ht,dt,mt,!1,null,"54208c4d",null),vt=pt.exports,gt={name:"category-view",props:{id:{type:String}},data:function(){return{products:[]}},methods:{async fetchProducts(){try{let t=await fetch(`https://fakestoreapi.com/products/category/${this.id}`);if(!t.ok)throw"error api";let e=await t.json();this.products=e,console.log(e)}catch(t){console.log(t)}}},components:{"card-product":vt},created(){this.fetchProducts()}},_t=gt,yt=(0,w.Z)(_t,rt,ot,!1,null,"16d9162b",null),bt=yt.exports,Ct=r(2715),Zt=r(9449),kt=r(6313),xt=function(){var t=this,e=t._self._c;return e(M.Z,[e("h2",[t._v("Carrito de Compras")]),e(kt.Z,{attrs:{flat:""}},[e(y.qW,[e("div",[t._v(" Total Carrito: "),e("span",{staticClass:"success--text"},[t._v(" $"+t._s(Number(t.cartTotal).toLocaleString("en-US"))+" ")])])]),e(Ct.Z,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(G.Z,[e(at.EB,{staticClass:"text-h5"},[t._v("¿Estas seguro de borrar el producto?")]),e(at.h7,[e(_.Z),e(nt.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),e(nt.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Si")]),e(_.Z)],1)],1)],1)],1),e(Zt.Z,{attrs:{height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",t._l(t.headers,(function(r){return e("th",{key:r.index},[t._v(t._s(r))])})),0)]),e("tbody",t._l(t.cartProducts,(function(r){return e("tr",{key:r.id},[e("td",[t._v(t._s(r.id))]),e("td",[t._v(t._s(r.title))]),e("td",[t._v(t._s(r.price))]),e("td",[t._v(t._s(r.count))]),e("td",[t._v(t._s(r.total))]),e("td",[e(d.Z,{attrs:{color:"blue-grey",small:""},on:{click:function(e){return t.removeStock(r)}}},[t._v(" mdi-minus-thick ")]),e(d.Z,{attrs:{small:"",color:"green"},on:{click:function(e){return t.addStock(r)}}},[t._v(" mdi-plus-thick ")]),e(d.Z,{attrs:{color:"red",small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v(" mdi-trash-can ")])],1)])})),0)]},proxy:!0}])})],1)},wt=[],Tt={name:"cart-view",data:function(){return{dialogDelete:!1,headers:["Id Producto","Articulo","Precio","Cantidad","SubTotal","Acciones"],deleteId:null}},computed:{...(0,Z.Se)(["cartCount","cartProducts","cartTotal"])},methods:{...(0,Z.nv)(["addStockProductCart","removeStockProductCart","removeProductCart"]),addStock(t){this.addStockProductCart(t.id)},removeStock(t){this.removeStockProductCart(t.id)},deleteItem(t){this.deleteId=t.id,this.dialogDelete=!0},deleteItemConfirm(){this.removeProductCart(this.deleteId),this.dialogDelete=!1},closeDelete(){this.dialogDelete=!1}}},Pt=Tt,St=(0,w.Z)(Pt,xt,wt,!1,null,"b97b291e",null),jt=St.exports;o.ZP.use(A.Z);const Ot=[{path:"/",name:"Home",component:z},{path:"/categories",name:"Categories",component:et},{path:"/category/:id",name:"Category",component:bt,props:!0},{path:"/cart",name:"Cart",component:jt},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,1272))}],Et=new A.Z({mode:"history",base:"/my-shopping-deploy/",routes:Ot});var At=Et;o.ZP.use(Z.ZP);var Dt=new Z.ZP.Store({state:{categories:[],cart:[]},getters:{cartCount(t){return t.cart.length},cartProducts(t){return t.cart.map((t=>{let e=t;return e.total=t.count*t.price,e}))},cartTotal(t,e){return e.cartProducts.reduce(((t,e)=>t+e.total),0)}},mutations:{SET_CATEGORIES(t,e){t.categories=e},ADD_TO_CART(t,e){let r=t.cart.some((t=>t.id==e.id));r?t.cart.forEach((t=>{t.id==e.id&&(t.count+=1)})):t.cart.push(e)},ADD_STOCK_PRODUCT_CART(t,e){t.cart.forEach((t=>{t.id==e&&(t.count+=1)}))},REMOVE_STOCK_PRODUCT_CART(t,e){t.cart.forEach((t=>{t.id==e&&t.count>0&&(t.count-=1)}))},REMOVE_PRODUCT_CART(t,e){let r=t.cart.findIndex((t=>{t.id}));t.cart.splice(r,1)}},actions:{async fetchCategories({commit:t}){try{let e=await fetch("https://fakestoreapi.com/products/categories");if(console.log(e),!e.ok)throw"Error en Api";let r=await e.json();console.log(r),t("SET_CATEGORIES",r)}catch(e){console.log(e)}},addToCart({commit:t},e){t("ADD_TO_CART",e)},addStockProductCart({commit:t},e){t("ADD_STOCK_PRODUCT_CART",e)},removeStockProductCart({commit:t},e){t("REMOVE_STOCK_PRODUCT_CART",e)},removeProductCart({commit:t},e){t("REMOVE_PRODUCT_CART",e)}},modules:{}}),Rt=r(8864);o.ZP.use(Rt.Z);var It=new Rt.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:At,store:Dt,vuetify:It,render:t=>t(E)}).$mount("#app")},9574:function(t,e,r){t.exports=r.p+"img/logo.4d6033c9.svg"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,n,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,o){return r.f[o](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.5c9a5516.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-shopping:";r.l=function(o,n,a,i){if(t[o])t[o].push(n);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[n];var m=function(e,r){s.onerror=s.onload=null,clearTimeout(f);var n=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/my-shopping-deploy/"}(),function(){var t={143:0};r.f.j=function(e,o){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(r,o){n=t[e]=[r,o]}));o.push(n[2]=a);var i=r.p+r.u(e),s=new Error,c=function(o){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r)}for(e&&e(o);u<i.length;u++)a=i[u],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},o=self["webpackChunkmy_shopping"]=self["webpackChunkmy_shopping"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5218)}));o=r.O(o)})();
//# sourceMappingURL=app.bd1c0eb9.js.map
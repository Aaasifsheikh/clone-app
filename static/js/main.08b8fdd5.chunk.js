(this["webpackJsonpclone-app"]=this["webpackJsonpclone-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Mobile Image 2020-10-05 at 3.03.19 PM.503c967b.jpeg"},function(e,a,t){e.exports=t.p+"static/media/Laptop Image 2020-10-05 at 3.06.03 PM.d6e1dbd5.jpeg"},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/amazon_PNG11.7451f65b.png"},,,function(e,a,t){e.exports=t.p+"static/media/WhatsApp Image 2020-10-05 at 10.07.50 AM.7e99f26a.jpeg"},function(e,a,t){e.exports=t.p+"static/media/Book Image 2020-10-05 at 11.28.14 AM.980db521.jpeg"},function(e,a,t){e.exports=t.p+"static/media/Tv Image 2020-10-05 at 3.08.12 PM.2c7c1b69.jpeg"},function(e,a,t){e.exports=t.p+"static/media/VibImage 2020-10-05 at 3.15.48 PM.446e936a.jpeg"},function(e,a,t){e.exports=t.p+"static/media/Wm Image 2020-10-05 at 3.12.21 PM.bf65cfa7.jpeg"},function(e,a,t){e.exports=t.p+"static/media/amazon_PNG24.ef81cd43.png"},function(e,a,t){e.exports=t.p+"static/media/amaazon-ad.78484262.jpeg"},,,,,function(e,a,t){e.exports=t(61)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),i=(t(45),Object(n.createContext)()),o=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(i.Provider,{value:Object(n.useReducer)(a,t)},r)},s=function(){return Object(n.useContext)(i)},m=t(5),u=t(2),d=(t(46),t(4)),p=t(26),E=t.n(p),g=t(27),h=t.n(g),v=t(28),f=t.n(v),b=t(21),N=t(13),k=t(17),_=t.n(k),y=t(18),j=t.n(y),x={basket:[],user:null},w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(console.log(a),a.type){case"Add_To_Basket":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(b.a)(e.basket),[a.item])});case"Remove_From_Basket":var t=Object(b.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("you cant remove with (id:".concat(a.id,") as its no more ")),Object(N.a)(Object(N.a)({},e),{},{basket:t});default:return e}},B=function(e){var a=s(),t=Object(d.a)(a,1)[0].basket;return c.a.createElement("nav",{className:"header"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:E.a,alt:"logo",className:"Header_logo"})),c.a.createElement("div",{className:"header_search"},c.a.createElement("input",{type:"text",className:"header_searchInput"}),c.a.createElement(h.a,{className:"header_searchIcon"})),c.a.createElement("div",{className:"header_nav"},c.a.createElement(m.b,{to:"/login",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Hello ",e.input,"  "),c.a.createElement("span",{className:"header_optionLineTwo"},"Sign In"))),c.a.createElement(m.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Return"),c.a.createElement("span",{className:"header_optionLineTwo"},"& Order"))),c.a.createElement(m.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Your"),c.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),c.a.createElement(m.b,{to:"/checkout",className:"header_link"},c.a.createElement("div",{className:"header_optionBasket"},c.a.createElement(f.a,null),c.a.createElement("span",{className:"option_LineTwo header_basketCount"},null===t||void 0===t?void 0:t.length)))))},A=t(29),S=t.n(A),P=t(30),C=t.n(P),I=t(31),M=t.n(I),T=t(32),L=t.n(T),R=t(33),F=t.n(R);t(53);var H=function(e){var a=e.id,t=e.title,n=e.price,r=e.rating,l=e.image,i=s(),o=Object(d.a)(i,2),u=(o[0].basket,o[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product_info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product_price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product_rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\ud83c\udf1f")})))),c.a.createElement("img",{src:l,alt:"",className:"product_image"}),c.a.createElement(m.b,{to:""},c.a.createElement("button",{className:"product_button",onClick:function(){u({type:"Add_To_Basket",item:{id:a,title:t,price:n,image:l,rating:r}})}},"Add to basket")))};var W=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{src:S.a,alt:"",className:"home_image"}),c.a.createElement("div",{className:"home_row1"},c.a.createElement(H,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:1100,rating:5,image:C.a}),c.a.createElement(H,{id:"12321333",title:"IBF 6kg star Fully Automatic Front Loading Washing Machine",price:23e3,rating:4,image:F.a})),c.a.createElement("div",{className:"home_row2"},c.a.createElement(H,{id:"12321341",title:"Jm Womens Personal Mini Handy Full Body Massager Vibrator",price:1800,rating:5,image:L.a}),c.a.createElement(H,{id:"12321341",title:"Samsung Galaxy A50s (Prism crush Black, 4GB RAM, 128GB Storage",price:22999,rating:5,image:_.a}),c.a.createElement(H,{id:"12321341",title:"HP 15 10th Generation Core if Processor 15.6-inch FHD Laptop",price:54990,rating:5,image:j.a})),c.a.createElement("div",{className:"home_row3"},c.a.createElement(H,{id:"12321341",title:"Mi TV 4A PRO 80cm (32 inches) HD Ready Android LED TV (BLACK)| With Data Saver",price:13490,rating:4,image:M.a})))},D=(t(54),t(34)),G=t.n(D),z=(t(55),t(38));var Y=function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),i=Object(d.a)(l,2),o=i[0],s=i[1],p=Object(u.f)(),E=function(e){e.preventDefault(),alert("Your account is successfully login. your login id: ".concat(t," and password: ").concat(o)),r(""),s(""),p.push("/")};return c.a.createElement("div",{className:"login"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:G.a,className:"login_logo",alt:""})),c.a.createElement("div",{className:"login_container"},c.a.createElement("h1",null,"Sign in "),c.a.createElement("form",{className:"form_login",onSubmit:E},c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:t,name:"input",onChange:function(e){r(e.target.value)},className:"login_input",required:!0}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:o,onChange:function(e){return s(e.target.value)},className:"input_password",required:!0}),c.a.createElement(z.a,null),c.a.createElement("button",{type:"submit",onClick:E,className:"login_signInButton"},"Sign In")),c.a.createElement("p",null,"By signing in your agree to Amazon condition of Use & Sale. Please see our primary notice our Cookies Notice and our interest Based Ads-Notice"),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault()},className:"login_registerButton"},"Create your Amazon Account")))},V=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Result"))},J=t(35),q=t.n(J),K=(t(56),t(57),function(e){var a=e.id,t=e.title,n=e.price,r=e.image,l=e.rating,i=s(),o=Object(d.a)(i,2),m=(o[0].basket,o[1]);return c.a.createElement("div",{className:"CheckoutProduct"},c.a.createElement("img",{className:"checkout_image",src:r,alt:""}),c.a.createElement("div",{className:"checkout_info"},c.a.createElement("div",{className:"checkoutproduct_title"},t),c.a.createElement("div",{className:"checkoutproduct_price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"checkoutproduct_rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\ud83c\udf1f")}))),c.a.createElement("button",{onClick:function(){m({type:"Remove_From_Basket",id:a})}},"Remove from basket")))}),U=(t(58),t(36)),$=t.n(U),Q=t(37),X=t.n(Q),Z=function(){var e=s(),a=Object(d.a)(e,2),t=a[0].basket;a[1];return c.a.createElement("div",{className:"subtotal"},c.a.createElement($.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal_gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:w(t),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),c.a.createElement("button",null,"Proceed to checkout"),c.a.createElement("div",{className:"stripeCheckout"},c.a.createElement(X.a,{style:{marginTop:"20px"}})))},ee=function(){var e=s(),a=Object(d.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout_left"},c.a.createElement("img",{src:q.a,className:"checkout_ad",alt:"not-found"}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",{className:""},c.a.createElement("h2",null,"Your Shopping Basket is empty"),c.a.createElement("p",null,'You have no items in your shopping basket, to buy one or more items, click "Add to basket" next to the item')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout_title"},"Your Shopping Basket"),a.map((function(e){return c.a.createElement(K,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating})})))),a.length>0&&c.a.createElement("div",{className:"checkout_right"},c.a.createElement(Z,null)))};var ae=function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/checkout"},c.a.createElement(B,null),c.a.createElement(ee,null)),c.a.createElement(u.a,{exact:!0,path:"/login"},c.a.createElement(Y,null)),c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(B,null),c.a.createElement(W,null)),c.a.createElement(u.a,{exact:!0,path:"/show"},c.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o,{initialState:x,reducer:O},c.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.08b8fdd5.chunk.js.map
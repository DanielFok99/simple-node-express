(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc0fcf1"],{"269d":function(t,e,s){},"36e0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{column:""}},[a("h1",[t._v("Contact Us")]),a("v-layout",{staticClass:"box-wrapper",attrs:{row:""}},[a("v-flex",{staticClass:"box",attrs:{xs12:"",md4:""}},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("h1",[t._v("24/7 Technical Support")]),a("p",[t._v("Mail support will answer any question related to technical issues on server, hosting, and email. Click here for email support request.")]),a("p",[t._v("Working Hours: 24 hours x 7 days")]),a("p",[t._v("Phone Support: 03-609 7888")]),a("p",[t._v("9:00 AM - 5:00 PM (MON - FRI)")])]),a("v-flex",{staticClass:"box",attrs:{xs12:"",md4:""}},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("h1",[t._v("Sales & Inquiries")]),a("p",[t._v("Our sales staff will be happy to answer any questions you have about buying exabytes.my products and services. Click here for sales inquiries.")]),a("p",[t._v("Working Hours: 9:00 AM - 5:00 PM GMT +0800")]),a("p",[t._v("Phone Support: 03-609 7888")]),a("p",[t._v("9:00 AM - 5:00 PM (MON - FRI)")])]),a("v-flex",{staticClass:"box",attrs:{xs12:"",md4:""}},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("h1",[t._v("Billing / Payment")]),a("p",[t._v("Billing Department will be happy to answer any billing questions you have about exabytes.my hosting, products and services. Click here for billing inquiries.")]),a("p",[t._v("Working Hours: 9:00 AM - 5:00 PM GMT +0800")]),a("p",[t._v("Phone Support: 03-609 7888")]),a("p",[t._v("9:00 AM - 5:00 PM (MON - FRI)")])]),a("v-card",{staticClass:"v-card"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v("\n          title\n        ")]),a("v-card-actions")],1)],1)],1)],1)},r=[],i={name:"ContactDetails"},n=i,c=(s("b38d"),s("2877")),o=Object(c["a"])(n,a,r,!1,null,"e05baad4",null);e["a"]=o.exports},"9a0b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("home-plans"),s("meal-recipes"),s("contact-details")],1)},r=[],i=s("8df8"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.recipes,function(e,a){return s("v-flex",{key:a,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[s("v-card",[s("v-responsive",[s("v-img",{attrs:{src:e.recipe.image}})],1),s("v-card-text",[s("div",{staticClass:"title my-5"},[t._v(t._s(e.recipe.label))]),s("div",{staticClass:"subheading"},[t._v("Ingredients")]),s("ul",t._l(e.recipe.ingredientLines,function(e,a){return s("li",{key:a},[t._v(t._s(e))])}),0)]),s("v-card-actions",[s("v-btn",{attrs:{color:"green",dark:""}},[t._v("Order")])],1)],1)],1)}),1)],1)},c=[],o={name:"MealRecipes",computed:{recipes:function(){return this.$store.state.recipes},isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{orderRecipe:function(t){this.isAuthenticated?this.$store.dispatch("addRecipe",t):this.$router.push("/sign-in")}}},l=o,u=s("2877"),p=Object(u["a"])(l,n,c,!1,null,"87225382",null),v=p.exports,d=s("36e0"),h={name:"Menu",components:{HomePlans:i["a"],MealRecipes:v,ContactDetails:d["a"]}},f=h,m=Object(u["a"])(f,a,r,!1,null,"165b024d",null);e["default"]=m.exports},b38d:function(t,e,s){"use strict";var a=s("269d"),r=s.n(a);r.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-1dc0fcf1.802270d0.js.map
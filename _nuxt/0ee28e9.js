(window.webpackJsonp=window.webpackJsonp||[]).push([[247,63,78],{1084:function(t,e,o){"use strict";o.r(e);var n=o(446),r=o(345),c={layout:"sidebar",name:"customer-category",head:{title:"New customer"},components:{CustomerInfoLinks:n.default,CheckIcon:r.default},data:function(){return{sidebarOffset:0}},computed:{sidebarHeight:function(){return this.sidebarOffset}},methods:{handleSubmit:function(){console.log("success")}},mounted:function(){this.sidebarOffset=this.$refs.sidebar.offsetHeight}},_=(o(889),o(1)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"estate-info-element",style:{height:t.sidebarHeight+"px"}}),t._v(" "),o("div",{staticClass:"estate-info-wrap customer"},[o("div",{staticClass:"estate-general"},[o("div",{ref:"sidebar",staticClass:"estate-general__wrap"},[o("div",{staticClass:"estate-general__container"},[o("div",{staticClass:"estate-general__title"},[t._v("\n            "+t._s(t.$t("timeManagement"))+"\n          ")]),t._v(" "),o("div",{staticClass:"estate-general__descr"},[o("p",[t._v("\n              "+t._s(t.$t("customer_descr"))+"\n            ")])])])]),t._v(" "),o("CustomerInfoLinks",{attrs:{step:2}})],1),t._v(" "),o("form",{staticClass:"estate-info customer__info"},[o("div",{staticClass:"default-title"},[t._v("\n        "+t._s(t.$t("category.type"))+"\n      ")]),t._v(" "),o("div",{staticClass:"estate-info__descr customer__info-descr"},[o("p",[t._v("\n          "+t._s(t.$t("customer_info_descr"))+"\n        ")])]),t._v(" "),o("div",{staticClass:"customer__info-categories"},[o("div",{staticClass:"customer__info-category"},[o("div",{staticClass:"customer__info-category__title"},[t._v(t._s(t.$t("stage")))]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category1"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("lead")))])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category1"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("appointment")))])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category1"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("under_contract")))])])])]),t._v(" "),o("div",{staticClass:"customer__info-category"},[o("div",{staticClass:"customer__info-category__title"},[t._v(t._s(t.$t("type_buyer")))]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category2"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("passive_buyer")))])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category2"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("active_searching")))])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category2"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("want_buy"))+"y")])])])]),t._v(" "),o("div",{staticClass:"customer__info-category"},[o("div",{staticClass:"customer__info-category__title"},[t._v(t._s(t.$t("type_seller")))]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category3"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("passive_seller"))+"r")])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category3"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("negotiation")))])])]),t._v(" "),o("div",{staticClass:"customer__info-category__container"},[o("label",{staticClass:"content-form__item-label customer__info-single-category"},[o("input",{attrs:{type:"radio",name:"category3"}}),t._v(" "),o("span",{staticClass:" content-form__item-check customer__custom-radiobox"},[o("CheckIcon")],1),t._v(" "),o("span",{staticClass:"customer__single-category__text"},[t._v(t._s(t.$t("want_sell")))])])])])]),t._v(" "),o("div",{staticClass:"estate-info__btns"},[o("nuxt-link",{staticClass:"btn-default",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("skip_now")))]),t._v(" "),o("nuxt-link",{staticClass:"btn-default black",attrs:{to:"customer-details"}},[t._v(" "+t._s(t.$t("next_step")))])],1)])])])}),[],!1,null,"20d8b5a7",null);e.default=component.exports},345:function(t,e,o){"use strict";o.r(e);var n=o(1),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticStyle:{"enable-background":"new 0 0 76.887 55.552"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 76.887 55.552","xml:space":"preserve"}},[o("g",[o("polygon",{staticStyle:{fill:"#FFFFFF"},attrs:{points:"34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557\n      22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541 \t"}})]),t._v(" "),o("g")])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,o){"use strict";var n=o(16),r=o(7),c=o(98),_=o(24),l=o(18),d=o(52),m=o(206),f=o(71),v=o(9),y=o(73),x=o(72).f,h=o(43).f,C=o(23).f,w=o(351).trim,k="Number",I=r.Number,$=I.prototype,N=d(y($))==k,E=function(t){var e,o,n,r,c,_,l,code,d=f(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=w(d)).charCodeAt(0))||45===e){if(88===(o=d.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+d}for(_=(c=d.slice(2)).length,l=0;l<_;l++)if((code=c.charCodeAt(l))<48||code>r)return NaN;return parseInt(c,n)}return+d};if(c(k,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var F,A=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof A&&(N?v((function(){$.valueOf.call(o)})):d(o)!=k)?m(new I(E(e)),o,A):E(e)},S=n?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;S.length>O;O++)l(I,F=S[O])&&!l(A,F)&&C(A,F,h(I,F));A.prototype=$,$.constructor=A,_(r,k,A)}},351:function(t,e,o){var n=o(30),r="["+o(352)+"]",c=RegExp("^"+r+r+"*"),_=RegExp(r+r+"*$"),l=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(c,"")),2&t&&(o=o.replace(_,"")),o}};t.exports={start:l(1),end:l(2),trim:l(3)}},352:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},446:function(t,e,o){"use strict";o.r(e);o(349),o(34);var n={name:"real-estate-info-links",props:{step:{type:Number,required:!0}},data:function(){return{links:[{title:"Type",path:"customer-type",isPassed:!1},{title:"Category",path:"customer-category",isPassed:!1},{title:"Details",path:"customer-details",isPassed:!1},{title:"Documentation",path:"customer-documentation",isPassed:!1}]}},mounted:function(){var t=this;this.links.map((function(e,o){o+1<t.step&&(e.isPassed=!0)}))}},r=o(1),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"estate-general__links"},[o("ul",{staticClass:"estate-general__links-inner"},t._l(t.links,(function(link,e){return o("li",{key:e,staticClass:"estate-general__links-item"},[o("nuxt-link",{staticClass:"estate-general__link-wrap",class:{passed:link.isPassed},attrs:{to:link.path}},[o("span",{staticClass:"estate-general__link-elem"}),t._v(" "),o("span",{staticClass:"estate-general__link"},[t._v("\n        "+t._s(link.title)+"\n      ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,o){var content=o(890);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("40ed81b9",content,!0,{sourceMap:!1})},889:function(t,e,o){"use strict";o(673)},890:function(t,e,o){var n=o(12)(!1);n.push([t.i,".customer__info input[data-v-20d8b5a7]:focus:not(.search__input),.customer__info textarea[data-v-20d8b5a7]:focus{box-shadow:none}.customer__info .customer__info-descr[data-v-20d8b5a7]{max-width:100%}.customer__info-wrap[data-v-20d8b5a7]{max-width:375px}.customer__general-title[data-v-20d8b5a7]{margin-bottom:15px}.customer__type-container[data-v-20d8b5a7]{margin-bottom:50px;display:flex;flex-wrap:wrap;justify-content:space-between}.customer__form-item[data-v-20d8b5a7]{width:49%;background-color:#fff;margin-right:0}.customer__form-item[data-v-20d8b5a7]:not(:nth-last-child(-n+2)){margin-bottom:12px}.customer__info-categories[data-v-20d8b5a7]{display:flex;flex-direction:column;margin-bottom:40px}.customer__info-category[data-v-20d8b5a7]{display:flex;flex-wrap:wrap}.customer__info-category[data-v-20d8b5a7]:not(:last-child){margin-bottom:30px}.customer__info-category__title[data-v-20d8b5a7]{width:100%;margin-bottom:25px;font-weight:700;font-size:16px;text-transform:uppercase}.customer__info-category__container[data-v-20d8b5a7]{width:30%;position:relative}.customer__info-single-category[data-v-20d8b5a7]{padding-left:40px}.customer__custom-radiobox[data-v-20d8b5a7]{position:absolute;top:50%;left:0;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background-color:#fff;border:1px solid #eaeaef}.customer__info-details[data-v-20d8b5a7]{display:flex;flex-direction:column;flex-wrap:wrap}.customer__info-details__bottom[data-v-20d8b5a7],.customer__info-details__top[data-v-20d8b5a7]{display:flex;flex-wrap:wrap;justify-content:space-between}.customer__info-details .info-default[data-v-20d8b5a7]{width:48%;border:1px solid #eaeaef;margin-bottom:20px}.customer__info-details .info-default input[data-v-20d8b5a7]:focus:not(.search__input){box-shadow:none}.customer__details-bottom__title[data-v-20d8b5a7]{width:100%;text-transform:uppercase;font-size:16px;font-weight:700;margin-bottom:25px}.customer__product-content .info-default[data-v-20d8b5a7]{margin-bottom:20px}.customer__product-textarea[data-v-20d8b5a7]{height:150px}.customer__info .content-form__upload[data-v-20d8b5a7]{justify-content:center;margin-bottom:20px}.customer__info .content-form__upload-item[data-v-20d8b5a7]{background-color:#fff}.customer__info .estate-info__btns[data-v-20d8b5a7]{justify-content:center}.customer__info .estate-info__btns .btn-default[data-v-20d8b5a7]{margin-right:0}.customer__info-details .info-default-select[data-v-20d8b5a7]{width:48%}.estate-general__container[data-v-20d8b5a7]{max-width:375px;margin-left:80px}.estate-general__title[data-v-20d8b5a7]{margin-bottom:15px}.info-default[data-v-20d8b5a7]{margin-bottom:40px}",""]),t.exports=n}}]);
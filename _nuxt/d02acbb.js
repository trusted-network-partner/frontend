(window.webpackJsonp=window.webpackJsonp||[]).push([[244,197,200,205],{1078:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile__banner"},[e("img",{attrs:{src:n(493),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile__country-img"},[e("img",{attrs:{src:n(651),alt:""}})])}],o=n(807),r=n(600),f=n(808),c=n(1079),_={layout:"default",name:"agent-profile",components:{ShortInfoProfile:o.default,ProfileBar:r.default,CatalogueItems:f.default,ContentList:c.default},head:{title:"Agent profile"}},v=(n(879),n(1)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("ShortInfoProfile")],1),t._v(" "),n("div",{staticClass:"content-wrap"},[n("div",{staticClass:"profile-details"},[t._m(0),t._v(" "),n("div",{staticClass:"profile__bar"},[n("div",{staticClass:"profile__country"},[t._m(1),t._v(" "),n("div",{staticClass:"profile__country-name"},[t._v("\n            "+t._s(t.$t("spain"))+"\n          ")])]),t._v(" "),n("ProfileBar")],1),t._v(" "),n("CatalogueItems"),t._v(" "),n("div",{staticClass:"profile__content"},[n("ContentList")],1)],1)])])}),l,!1,null,"5865dde0",null);e.default=component.exports;installComponents(component,{ProfileBar:n(600).default})},449:function(t,e,n){t.exports=n.p+"img/profile.a1740b4.jpg"},493:function(t,e,n){t.exports=n.p+"img/banner.e8bfc9c.jpg"},536:function(t,e,n){var content=n(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("4e634df2",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n.r(e);var l={name:"profile-bar",data:function(){return{isFollow:!0}}},o=n(1),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile__info"},[n("div",{staticClass:"profile__info-item"},[n("div",{staticClass:"profile__info-label"},[t._v("\n      "+t._s(t.$t("tabs.events"))+"\n    ")]),t._v(" "),n("div",{staticClass:"profile__info-value"},[t._v("\n      456\n    ")])]),t._v(" "),n("div",{staticClass:"profile__info-item"},[n("div",{staticClass:"profile__info-label"},[t._v("\n      "+t._s(t.$t("properties"))+"\n    ")]),t._v(" "),n("div",{staticClass:"profile__info-value"},[t._v("\n      602\n    ")])]),t._v(" "),n("div",{staticClass:"profile__info-item"},[n("div",{staticClass:"profile__info-label"},[t._v("\n      "+t._s(t.$t("followers"))+"\n    ")]),t._v(" "),n("div",{staticClass:"profile__info-value"},[t._v("\n      290\n    ")])]),t._v(" "),n("div",{staticClass:"profile__btn-wrap"},[n("button",{staticClass:"btn-default",class:{black:!t.isFollow},attrs:{type:"button"},on:{click:function(e){t.isFollow=!t.isFollow}}},[t._v("\n      "+t._s(t.isFollow?t.$t("unfollowing"):t.$t("following"))+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},651:function(t,e,n){t.exports=n.p+"img/flag.4fc93ab.jpg"},652:function(t,e,n){var map={"./pic1.jpg":653,"./pic2.jpg":654,"./pic3.jpg":655,"./pic4.jpg":656};function l(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=o,t.exports=l,l.id=652},653:function(t,e,n){t.exports=n.p+"img/pic1.25e00a9.jpg"},654:function(t,e,n){t.exports=n.p+"img/pic2.644cf39.jpg"},655:function(t,e,n){t.exports=n.p+"img/pic3.c4c3fe2.jpg"},656:function(t,e,n){t.exports=n.p+"img/pic4.5bfbfbc.jpg"},657:function(t,e,n){"use strict";n(536)},658:function(t,e,n){var l=n(12)(!1);l.push([t.i,".profile__item-pic[data-v-09f96c13]{display:block}.profile__item-title[data-v-09f96c13]{transition:all .3s ease}.profile__item:hover .profile__item-title[data-v-09f96c13]{color:#ed8f03}",""]),t.exports=l},664:function(t,e,n){var content=n(880);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2ee85e56",content,!0,{sourceMap:!1})},807:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-info__left"},[e("div",{staticClass:"profile-info__img"},[e("img",{attrs:{src:n(449),alt:""}})])])}],o={name:"short-info-profile"},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agent__profile"},[n("div",{staticClass:"profile-info"},[n("div",{staticClass:"profile-info__header"},[t._m(0),t._v(" "),n("div",{staticClass:"profile-info__right"},[n("nuxt-link",{staticClass:"profile-info__name",attrs:{to:"agent-info"}},[t._v("\n          Ruben Bothman\n        ")]),t._v(" "),n("div",{staticClass:"profile-info__occupancy"},[t._v("\n          "+t._s(t.$t("agent.position"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"profile-info__details"},[n("div",{staticClass:"profile-info__item"},[n("div",{staticClass:"profile-info__item-label"},[t._v("\n          "+t._s(t.$t("favorite"))+"\n        ")]),t._v(" "),n("div",{staticClass:"profile-info__item-value"},[t._v("\n          602\n        ")])]),t._v(" "),n("div",{staticClass:"profile-info__item"},[n("div",{staticClass:"profile-info__item-label"},[t._v("\n          "+t._s(t.$t("followers"))+"\n        ")]),t._v(" "),n("div",{staticClass:"profile-info__item-value"},[t._v("\n          290\n        ")])])])])])}),l,!1,null,null,null);e.default=component.exports},808:function(t,e,n){"use strict";n.r(e);var l={name:"catalogue-items",data:function(){return{profileItems:[{id:0,img:"pic1.jpg",name:"Alegria Group Real Estate"},{id:1,img:"pic2.jpg",name:"Movistar"},{id:2,img:"pic3.jpg",name:"Lpa Asociation Marbella"},{id:3,img:"pic4.jpg",name:"Fiabci España"}]}}},o=(n(657),n(1)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"profile__items"},t._l(t.profileItems,(function(e,o){return l("div",{key:o,staticClass:"profile__item-wrap"},[l("nuxt-link",{staticClass:"profile__item",attrs:{to:"/"}},[l("span",{staticClass:"profile__item-pic"},[e.img?l("span",[l("img",{attrs:{src:n(652)("./"+e.img),alt:""}})]):t._e()]),t._v(" "),l("div",{staticClass:"profile__item-title"},[t._v("\n        "+t._s(t.$t(e.name)||"")+"\n      ")])])],1)})),0)}),[],!1,null,"09f96c13",null);e.default=component.exports},879:function(t,e,n){"use strict";n(664)},880:function(t,e,n){var l=n(12)(!1);l.push([t.i,".content-wrap[data-v-5865dde0]{margin-bottom:125px}",""]),t.exports=l}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[61,78,117],{1137:function(t,e,n){"use strict";n.r(e);var c=n(345),o=n(447),r={name:"create-company",components:{CheckIcon:c.default,MultipleUsersIcon:o.default},data:function(){return{companyType:[{id:0,title:"Just me",value:"self-employed"},{id:1,title:"Small team",value:"small-team"},{id:2,title:"Large team",value:"large-team"}]}},methods:{handleClick:function(){this.$emit("togglePopUp")}}},l=(n(993),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-company"},[n("div",{staticClass:"default-title"},[t._v("\n    "+t._s(t.$t("create_company"))+"\n  ")]),t._v(" "),n("div",{staticClass:"create-company__items"},t._l(t.companyType,(function(e){return n("label",{key:e.id,staticClass:"create-company__item"},[n("span",{staticClass:"create-company__item-inner"},[n("input",{staticClass:"create-company__input",attrs:{type:"radio",name:"company-type"}}),t._v(" "),n("span",{staticClass:"create-company__item-check"},[n("CheckIcon")],1),t._v(" "),n("MultipleUsersIcon")],1),t._v(" "),n("span",{staticClass:"create-company__item-title"},[n("span",[t._v("\n          "+t._s(e.title)+"\n        ")])])])})),0),t._v(" "),n("div",{staticClass:"create-company__btn"},[n("button",{staticClass:"btn-default black",on:{click:t.handleClick}},[t._v("\n      "+t._s(t.$t("next_step"))+"\n    ")])])])}),[],!1,null,"287c1ad2",null);e.default=component.exports},345:function(t,e,n){"use strict";n.r(e);var c=n(1),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 76.887 55.552"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 76.887 55.552","xml:space":"preserve"}},[n("g",[n("polygon",{staticStyle:{fill:"#FFFFFF"},attrs:{points:"34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557\n      22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541 \t"}})]),t._v(" "),n("g")])}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var c=n(1),component=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"50",height:"30",viewBox:"0 0 50 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M25 0C26.9339 0 28.7885 0.762929 30.156 2.12095C31.5234 3.47897 32.2917 5.32085 32.2917 7.24138C32.2917 9.16191 31.5234 11.0038 30.156 12.3618C28.7885 13.7198 26.9339 14.4828 25 14.4828C23.0661 14.4828 21.2115 13.7198 19.844 12.3618C18.4766 11.0038 17.7083 9.16191 17.7083 7.24138C17.7083 5.32085 18.4766 3.47897 19.844 2.12095C21.2115 0.762929 23.0661 0 25 0ZM10.4167 5.17241C11.5833 5.17241 12.6667 5.48276 13.6042 6.04138C13.2917 9 14.1667 11.9379 15.9583 14.2345C14.9167 16.2207 12.8333 17.5862 10.4167 17.5862C8.75906 17.5862 7.16935 16.9323 5.99725 15.7682C4.82515 14.6042 4.16667 13.0255 4.16667 11.3793C4.16667 9.73314 4.82515 8.15439 5.99725 6.99037C7.16935 5.82635 8.75906 5.17241 10.4167 5.17241ZM39.5833 5.17241C41.2409 5.17241 42.8306 5.82635 44.0028 6.99037C45.1749 8.15439 45.8333 9.73314 45.8333 11.3793C45.8333 13.0255 45.1749 14.6042 44.0028 15.7682C42.8306 16.9323 41.2409 17.5862 39.5833 17.5862C37.1667 17.5862 35.0833 16.2207 34.0417 14.2345C35.8333 11.9379 36.7083 9 36.3958 6.04138C37.3333 5.48276 38.4167 5.17241 39.5833 5.17241ZM11.4583 26.3793C11.4583 22.0966 17.5208 18.6207 25 18.6207C32.4792 18.6207 38.5417 22.0966 38.5417 26.3793V30H11.4583V26.3793ZM0 30V26.8966C0 24.0207 3.9375 21.6 9.27083 20.8966C8.04167 22.3034 7.29167 24.2483 7.29167 26.3793V30H0ZM50 30H42.7083V26.3793C42.7083 24.2483 41.9583 22.3034 40.7292 20.8966C46.0625 21.6 50 24.0207 50 26.8966V30Z",fill:"#A5A5B8"}})])}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,n){var content=n(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("d7a640f0",content,!0,{sourceMap:!1})},993:function(t,e,n){"use strict";n(777)},994:function(t,e,n){var c=n(12)(!1);c.push([t.i,".create-company[data-v-287c1ad2]{border-radius:6px;background:#f2f4f9;width:100%;max-width:566px;margin:0 auto 70px;padding:74px 40px 70px}.create-company>.default-title[data-v-287c1ad2]{margin-bottom:78px;font-size:26px}.create-company__items[data-v-287c1ad2]{display:flex;justify-content:space-between;margin-bottom:44px}.create-company__item[data-v-287c1ad2]{cursor:pointer}.create-company__item:hover .create-company__item-title[data-v-287c1ad2]{color:#ed8f03}.create-company__item-inner[data-v-287c1ad2]{width:119px;height:119px;position:relative;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:5px;margin-bottom:14px;border:2px solid #eaeaef}.create-company__item-title[data-v-287c1ad2]{text-align:center}.create-company__item-title span[data-v-287c1ad2]{transition:all .3s ease;font-weight:700;text-transform:uppercase;display:block}.create-company__item-check[data-v-287c1ad2]{position:absolute;background:#fff;width:24px;height:24px;overflow:hidden;border-radius:4px;cursor:pointer;border:1px solid #eaeaef;transition:all .3s ease;display:flex;align-items:center;justify-content:center;top:7px;right:7px}.create-company__item-check svg[data-v-287c1ad2]{width:17px;height:17px;transition:all .3s ease;opacity:0}.create-company__input[data-v-287c1ad2]{display:none}.create-company__btn[data-v-287c1ad2]{display:flex;justify-content:center}.create-company__btn .btn-default[data-v-287c1ad2]{min-width:226px}.create-company__input:checked+.create-company__item-check[data-v-287c1ad2]{background:#ed8f03}.create-company__input:checked+.create-company__item-check svg[data-v-287c1ad2]{opacity:1}",""]),t.exports=c}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[239,55,89],{1073:function(t,e,n){"use strict";n.r(e);var o=n(360),l=n(428),r=n(97),_={layout:"auth",name:"auth-contact-info",components:{AuthGeneral:o.default,InfoIcon:l.default,SelectItem:r.default},head:{title:"Authentication user"},data:function(){return{optionsSelect:[{id:1,name:"Choose country",value:"choose-country",chosen:!0,isDefault:!0},{id:2,name:"Spain",value:"spain",chosen:!1},{id:3,name:"Ukraine",value:"ukraine",chosen:!1}]}}},d=(n(864),n(1)),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"auth-wrap-items margin-offset"},[n("div",{staticClass:"auth-wrap-item general"},[n("div",{staticClass:"auth-wrap-general"},[n("AuthGeneral",[n("div",{staticClass:"auth-general__content-pretitle short-text"},[t._v("\n            "+t._s(t.$t("auth.contact_text"))+"\n            "),n("span",[t._v(t._s(t.$t("auth.contact.bold")))])]),t._v(" "),n("div",{staticClass:"auth-general__content-title"},[t._v(t._s(t.$t("auth.aside_title")))])])],1)]),t._v(" "),n("div",{staticClass:"auth-wrap-item auth-type_less-padd"},[n("div",{staticClass:"auth-type__steps"},[n("nuxt-link",{staticClass:"auth-type__step",attrs:{to:"auth-type"}},[t._v("1")]),t._v(" "),n("nuxt-link",{staticClass:"auth-type__step",attrs:{to:"auth-identification"}},[t._v("2")]),t._v(" "),n("div",{staticClass:"auth-type__step  active_step"},[t._v("3")]),t._v(" "),n("div",{staticClass:"auth-type__step-text"},[n("span",[t._v(" "+t._s(t.$t("auth.contact_step"))+" ")])]),t._v(" "),n("nuxt-link",{staticClass:"auth-type__step",attrs:{to:"auth-company"}},[t._v("4")]),t._v(" "),n("nuxt-link",{staticClass:"auth-type__step",attrs:{to:"auth-application"}},[t._v("5")])],1),t._v(" "),n("div",{staticClass:"auth-wrap-item__container"},[n("div",{staticClass:"default-title auth__title medium-margin_bottom"},[t._v(t._s(t.$t("auth.contact_step")))]),t._v(" "),n("form",{staticClass:"auth-identification__form"},[n("div",[n("SelectItem",{attrs:{selectOptions:t.optionsSelect,selectClass:"select-full-info select-full auth__default"}},[n("div",{staticClass:"info-default__label"},[t._v(t._s(t.$t("auth.select_country")))])])],1),t._v(" "),n("div",{staticClass:"info-default auth__default"},[n("label",{staticClass:"info-default__label",attrs:{for:"address"}},[t._v(t._s(t.$t("auth.address_label")))]),t._v(" "),n("input",{staticClass:"info-default__value ",attrs:{id:"address",type:"text",placeholder:t.$t("auth.address_descr")}})]),t._v(" "),n("div",{staticClass:"info-default auth__default"},[n("label",{staticClass:"info-default__label",attrs:{for:"contact-phone"}},[t._v(t._s(t.$t("auth.contact_phone"))+" ")]),t._v(" "),n("input",{staticClass:"info-default__value ",attrs:{id:"contact-phone",type:"text",placeholder:t.$t("auth.contact_phone")}})]),t._v(" "),n("div",{staticClass:"info-default auth__default"},[n("label",{staticClass:"info-default__label",attrs:{for:"contact-email"}},[t._v(t._s(t.$t("auth.contact_email")))]),t._v(" "),n("input",{staticClass:"info-default__value ",attrs:{id:"contact-email",type:"email",placeholder:t.$t("auth.contact_email")}})]),t._v(" "),n("div",{staticClass:"info-default auth__default"},[n("label",{staticClass:"info-default__label",attrs:{for:"website"}},[t._v(t._s(t.$t("auth.website")))]),t._v(" "),n("input",{staticClass:"info-default__value ",attrs:{id:"website",type:"text",placeholder:t.$t("auth.website")}})]),t._v(" "),n("div",{staticClass:"auth-type__notification"},[n("InfoIcon"),t._v(" "),n("div",{staticClass:"auth-type__notification-text"},[t._v(t._s(t.$t("auth.notice")))])],1),t._v(" "),n("nuxt-link",{staticClass:"btn-default black auth__btn-login",attrs:{to:"auth-company"}},[t._v(t._s(t.$t("continue")))])],1)])])])])}),[],!1,null,"8a712850",null);e.default=component.exports;installComponents(component,{AuthGeneral:n(360).default,SelectItem:n(97).default})},358:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("f088af56",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"auth-general__image"},[e("img",{staticClass:"auth-general__img",attrs:{src:n(397),alt:""}})])}],l={name:"auth-general"},r=(n(398),n(1)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-general"},[t._m(0),t._v(" "),n("div",{staticClass:"auth-general__content"},[t._t("default"),t._v(" "),n("div",{staticClass:"auth-general__content-buttons"},[n("nuxt-link",{staticClass:"btn-default blank",attrs:{to:"login"}},[t._v(t._s(t.$t("auth.login_btn")))]),t._v(" "),n("nuxt-link",{staticClass:"btn-default black",attrs:{to:"auth-type"}},[t._v(t._s(t.$t("auth.register_btn")))])],1)],2)])}),o,!1,null,"58603bee",null);e.default=component.exports},397:function(t,e,n){t.exports=n.p+"img/auth-picture.9ec0a7e.png"},398:function(t,e,n){"use strict";n(358)},399:function(t,e,n){var o=n(12)(!1);o.push([t.i,".auth-general__content-buttons[data-v-58603bee]{display:flex;align-items:center}.auth-general__content-buttons>.btn-default[data-v-58603bee]{margin-right:30px}.auth-general__img[data-v-58603bee]{margin-bottom:90px}",""]),t.exports=o},428:function(t,e,n){"use strict";n.r(e);var o=n(1),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 7H9V5H11V7ZM11 15H9V9H11V15ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z",fill:"#208CF0"}})])}),[],!1,null,null,null);e.default=component.exports},642:function(t,e,n){var content=n(865);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("77190614",content,!0,{sourceMap:!1})},864:function(t,e,n){"use strict";n(642)},865:function(t,e,n){var o=n(12)(!1);o.push([t.i,'.main-auth[data-v-8a712850]{position:relative}.main-auth[data-v-8a712850]:before{content:"";position:absolute;top:0;left:0;background-color:#f9f9fa;height:100%;z-index:-1;width:42.8%}.auth-wrap-item[data-v-8a712850]{min-height:calc(100vh - 62px)}.auth-wrap-items[data-v-8a712850]{display:flex;min-height:calc(100vh - 91px)}.auth-wrap-item[data-v-8a712850]{width:40.5%;display:flex;align-items:center;background-color:#f9f9fa}.auth-wrap-item[data-v-8a712850]:not(.general){width:59.5%;align-items:flex-start;justify-content:center;flex-direction:column;background:#fff;padding-left:140px;max-width:795px}.auth-general[data-v-8a712850]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;max-width:545px}.auth-general__image[data-v-8a712850]{width:533px;max-width:533px;max-height:296px;margin-bottom:130px}.auth-general__image img[data-v-8a712850]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.auth-general__content-pretitle[data-v-8a712850]{font-size:16px;font-weight:400;margin-bottom:20px;line-height:32px}.auth-general__content-pretitle span[data-v-8a712850]{font-weight:700}.auth-general__content-title[data-v-8a712850]{font-size:38px;font-weight:700;margin-bottom:80px}.auth-general__content-buttons[data-v-8a712850]{display:flex}.auth-general__content-buttons[data-v-8a712850] :first-child{margin-right:30px}.auth-general__content-buttons button[data-v-8a712850]{text-transform:uppercase}.auth-wrap-item__container[data-v-8a712850]{width:100%;max-width:460px}.auth__title[data-v-8a712850]{margin-bottom:25px;font-size:26px;text-transform:uppercase;line-height:34px}.auth__title[data-v-8a712850]:after{bottom:-10px}.auth__subtitle[data-v-8a712850]{margin-bottom:60px;line-height:34px}.auth__default[data-v-8a712850],.auth__subtitle_less-margin[data-v-8a712850]{margin-bottom:20px}.auth__default[data-v-8a712850]{position:relative}.auth__default span[data-v-8a712850]{width:22px;height:15px;fill:#7d869d;position:absolute;top:50%;transform:translateY(-50%);right:20px}.auth__default span.active svg path[data-v-8a712850]{fill:#ed8f03}.auth__remember-label[data-v-8a712850]{display:flex;align-items:center}.auth__remember-label .content-form__item-check[data-v-8a712850]{margin-right:13px}.auth__btn-login[data-v-8a712850]{max-width:100%;text-transform:uppercase;margin-bottom:20px}.auth__reset-container[data-v-8a712850]{display:flex;justify-content:center}.auth__reset-container span[data-v-8a712850]{margin-right:5px}.auth__reset-link[data-v-8a712850]{display:inline-block;color:#ed8f03;position:relative;text-align:center;text-decoration:underline;transition:.3s ease}.less-margin_bottom[data-v-8a712850]{margin-bottom:20px}.auth_flex[data-v-8a712850]{display:flex;align-items:center}.auth-type_big-margin[data-v-8a712850]{margin-bottom:55px}.auth-wrap-item.auth-type_less-padd[data-v-8a712850]{padding-left:60px;align-items:center}.auth-type__steps[data-v-8a712850]{width:100%;display:flex;margin-bottom:62px;align-items:center}.auth-type__step[data-v-8a712850]{min-width:44px;width:44px;height:44px;border:2px solid #15171c;background-color:#fff;color:#15171c;display:flex;align-items:center;justify-content:center;border-radius:5px;font-weight:600;font-size:16px}.auth-type__step[data-v-8a712850]:not(:last-child){margin-right:10px}.auth-type__step.active_step[data-v-8a712850]{border:none;background-color:#15171c;color:#fff}.auth-type__step-text[data-v-8a712850]{margin-right:auto;width:100%;font-size:16px;font-weight:600;position:relative;z-index:2}.auth-type__step-text span[data-v-8a712850]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-right:20px;background-color:#fff;position:relative;z-index:2}.auth-type__step-text[data-v-8a712850]:before{content:"";position:absolute;width:95%;height:1px;top:50%;left:0;transform:translateY(-50%);background-color:#15171c;z-index:-1}.auth-type__class-items[data-v-8a712850]{display:flex;justify-content:space-between;margin-bottom:45px}.auth-type__class-item[data-v-8a712850]{width:119px;display:flex;flex-direction:column;align-items:center}.auth__class-item__top[data-v-8a712850]{width:100%;max-width:119px;height:119px;background:#f9f9fa;border:2px solid #eaeaef;border-radius:5px;margin-bottom:15px;display:flex;align-items:center;justify-content:center}.auth__class-item__top svg[data-v-8a712850]{width:50px;height:30px}.auth__class-item__bottom[data-v-8a712850]{font-size:16px;line-height:24px;font-weight:700;text-transform:uppercase;text-align:center}.auth-type__notification[data-v-8a712850]{display:flex;align-items:center;justify-content:center;width:100%;background-color:rgba(32,140,240,.1);min-height:51px;margin-bottom:20px}.auth-type__notification-text[data-v-8a712850]{text-transform:uppercase;color:#208cf0;font-size:14px;font-weight:600}.auth__agree-container[data-v-8a712850]{display:flex}.auth__agree-container span[data-v-8a712850]{margin-right:10px}.auth-identification__form[data-v-8a712850]{display:flex;flex-direction:column;width:100%}.auth-identification__form-double[data-v-8a712850]{display:flex;justify-content:space-between}.medium-margin_bottom[data-v-8a712850]{margin-bottom:45px}.less_input[data-v-8a712850]{max-width:220px}.textarea__default[data-v-8a712850]{height:260px}.textarea_big[data-v-8a712850]{height:100%}.auth-application__input[data-v-8a712850]{display:none}.auth-application__list[data-v-8a712850]{display:flex;flex-direction:column;counter-reset:list;margin-bottom:50px}.auth-application__item[data-v-8a712850]{position:relative;display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding-left:15px;text-transform:uppercase}.auth-application__item[data-v-8a712850]:not(:last-child){margin-bottom:30px}.auth-application__item[data-v-8a712850]:before{counter-increment:list;content:counter(list) ".";position:absolute;top:0;left:0}.auth-application__label[data-v-8a712850]{text-transform:uppercase;text-decoration:underline;color:#ed8f03;font-size:14px;font-weight:400}.auth__remember-text[data-v-8a712850]{font-size:14px}.password.auth__default svg[data-v-8a712850]{cursor:pointer}.password.auth__default svg path[data-v-8a712850]{transition:all .3s ease}.password.auth__default svg:hover path[data-v-8a712850]{fill:#ed8f03}.auth-general__content-buttons .btn-default[data-v-8a712850]{min-width:185px;text-transform:uppercase}.margin-offset .auth-general__image[data-v-8a712850]{margin-bottom:90px}.auth-general__content-pretitle.short-text[data-v-8a712850]{max-width:370px}.auth-type__class-item[data-v-8a712850]{cursor:pointer}.auth-type__class-item.active[data-v-8a712850]{border-color:#ed8f03}.auth-type__class-item:hover .auth__class-item__bottom[data-v-8a712850]{color:#ed8f03}.auth-type__class-item.active .auth__class-item__bottom[data-v-8a712850]{color:#ed8f03}.auth__class-item__bottom[data-v-8a712850]{transition:all .3s ease}.auth-type__notification-text[data-v-8a712850]{margin-left:10px}.auth-type__step[data-v-8a712850]{transition:background-color .3s ease}.auth-type__step[data-v-8a712850]:hover{border:none;background-color:#15171c;color:#fff}.auth-general__content-buttons[data-v-8a712850]{margin-bottom:10px}.auth-wrap-item.auth-free__max_width[data-v-8a712850]{max-width:100%}.auth-wrap-item.auth-free__ai_start[data-v-8a712850]{align-items:flex-start}.auth-free__container[data-v-8a712850]{width:100%}.auth-free__block[data-v-8a712850]:not(:last-child){margin-bottom:40px}.auth-free__block[data-v-8a712850]:last-child{margin-bottom:100px}.auth-free__title[data-v-8a712850]{margin-bottom:35px}.auth-free__subtitle[data-v-8a712850]{margin-bottom:20px}.auth-free-category__list[data-v-8a712850]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between}.auth-free-category__item[data-v-8a712850]{width:32%;max-width:250px;min-height:84px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-radius:5px;border:1px solid #eaeaef}.auth-free-category__item[data-v-8a712850]:not(:nth-last-child(-n+3)){margin-bottom:20px}.auth-free-category__item .content-form__item-check[data-v-8a712850]{margin-right:0}.auth-free__category-title[data-v-8a712850]{text-transform:uppercase;font-weight:700;font-size:16px}.auth-free__work-selects[data-v-8a712850]{display:flex;justify-content:space-between}.auth-free__listings-option[data-v-8a712850]:not(:last-child){margin-bottom:30px}.auth-free__listings-label[data-v-8a712850]{display:flex;align-items:center}.auth-free-block__customer[data-v-8a712850]{margin-bottom:100px}.auth-free__buttons[data-v-8a712850]{display:flex}.auth-free__buttons[data-v-8a712850] :first-child{margin-right:30px}.auth-free__buttons a[data-v-8a712850],.auth-free__buttons button[data-v-8a712850]{text-transform:uppercase}.auth-wrap-items .auth-wrap-item .settings-select__item[data-v-8a712850]{margin-bottom:0}.auth-layout .footer[data-v-8a712850]{display:none}.auth-general__content-title[data-v-8a712850]{line-height:36px}.auth-type__notification-text[data-v-8a712850]{text-transform:lowercase}.auth-type__notification-text[data-v-8a712850]:first-letter{text-transform:capitalize}',""]),t.exports=o}}]);
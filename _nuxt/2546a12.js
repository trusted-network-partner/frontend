(window.webpackJsonp=window.webpackJsonp||[]).push([[270,81,203,204],{1132:function(t,e,n){"use strict";n.r(e);var r=n(421),l=n(828),o={layout:"sidebar",name:"real-estate-main-files",head:{title:"Add real estate"},components:{EstateInfoLinks:r.default,EstateMedia:l.default},data:function(){return{sidebarOffset:0}},computed:{sidebarHeight:function(){return this.sidebarOffset}},methods:{handleSubmit:function(){console.log("success")}},mounted:function(){this.sidebarOffset=this.$refs.sidebar.offsetHeight}},c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"estate-info-element",style:{height:t.sidebarHeight+"px"}}),t._v(" "),n("div",{staticClass:"estate-info-wrap"},[n("div",{staticClass:"estate-general"},[n("div",{ref:"sidebar",staticClass:"estate-general__wrap"},[n("div",{staticClass:"estate-general__title"},[t._v("\n            "+t._s(t.$t("media_question"))+"\n          ")]),t._v(" "),n("div",{staticClass:"estate-general__descr"},[n("p",[t._v("\n              "+t._s(t.$t("media_descr"))+"\n            ")])])]),t._v(" "),n("EstateInfoLinks",{attrs:{step:4}})],1),t._v(" "),n("EstateMedia")],1)])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){"use strict";n.r(e);var r=n(1),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{opacity:"0.2"}},[n("rect",{attrs:{x:"6.00781",y:"5.30273",width:"16",height:"1",transform:"rotate(45 6.00781 5.30273)",fill:"#15171C"}}),t._v(" "),n("rect",{attrs:{x:"17.3242",y:"6.00977",width:"16",height:"1",transform:"rotate(135 17.3242 6.00977)",fill:"#15171C"}})])])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";var r=n(16),l=n(7),o=n(98),c=n(24),d=n(18),_=n(52),f=n(206),v=n(71),m=n(9),h=n(73),C=n(72).f,y=n(43).f,k=n(23).f,w=n(351).trim,I="Number",E=l.Number,N=E.prototype,x=_(h(N))==I,$=function(t){var e,n,r,l,o,c,d,code,_=v(t,!1);if("string"==typeof _&&_.length>2)if(43===(e=(_=w(_)).charCodeAt(0))||45===e){if(88===(n=_.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(_.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+_}for(c=(o=_.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,r)}return+_};if(o(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(x?m((function(){N.valueOf.call(n)})):_(n)!=I)?f(new E($(e)),n,S):$(e)},O=r?C(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;O.length>D;D++)d(E,A=O[D])&&!d(S,A)&&k(S,A,y(E,A));S.prototype=N,N.constructor=S,c(l,I,S)}},351:function(t,e,n){var r=n(30),l="["+n(352)+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},352:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},421:function(t,e,n){"use strict";n.r(e);n(349),n(34);var r={name:"real-estate-info-links",props:{step:{type:Number,required:!0}},data:function(){return{links:[{title:"Address",path:"real-estate-address",isPassed:!1},{title:"Main information",path:"real-estate-main-info",isPassed:!1},{title:"Details",path:"real-estate-details",isPassed:!1},{title:"Media files",path:"real-estate-media-files",isPassed:!1},{title:"Documentation",path:"real-estate-documentation",isPassed:!1}]}},mounted:function(){var t=this;this.links.map((function(e,n){n+1<t.step&&(e.isPassed=!0)}))}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"estate-general__links"},[n("ul",{staticClass:"estate-general__links-inner"},t._l(t.links,(function(link,e){return n("li",{key:e,staticClass:"estate-general__links-item"},[n("nuxt-link",{staticClass:"estate-general__link-wrap",class:{passed:link.isPassed},attrs:{to:link.path}},[n("span",{staticClass:"estate-general__link-elem"}),t._v(" "),n("span",{staticClass:"estate-general__link"},[t._v("\n        "+t._s(link.title)+"\n      ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},555:function(t,e,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("023cff46",content,!0,{sourceMap:!1})},759:function(t,e,n){"use strict";n(555)},760:function(t,e,n){var r=n(12)(!1);r.push([t.i,".estate-info__btns[data-v-c0274d18]{margin-top:50px}",""]),t.exports=r},828:function(t,e,n){"use strict";n.r(e);n(54),n(44),n(34),n(221);var r={name:"real-estate-media",components:{CloseIcon:n(348).default},data:function(){return{images:[],videos:[],isDraggedOver:!1,isNotSupportedType:!1,notSupported:[]}},methods:{dragOver:function(t){t.preventDefault(),this.isDraggedOver=!0},handleDragEvent:function(){this.isDraggedOver=!1},dropFiles:function(t){t.preventDefault(),t.dataTransfer.files.length&&(this.$refs.input.files=t.dataTransfer.files,this.files(t.dataTransfer.files))},uploadFiles:function(t){var e=t.target.files;this.files(e)},files:function(t){var e=this;t&&(this.isNotSupportedType=!1,this.notSupported=[],[].forEach.call(t,(function(t){var n=t.type,r=["image/gif","image/jpeg","image/png","image/svg+xml"],l=["video/avi","video/wmv","video/mp4","video/mov","video/flv","video/webm"],o=new FileReader;o.onload=function(o){if(r.includes(n)){var c={path:o.target.result};e.images.push(c)}else if(l.includes(n)){var d={path:o.target.result};e.videos.push(d)}else e.isNotSupportedType=!0,e.notSupported.push(t.name)},o.readAsDataURL(t),e.isDraggedOver=!1})))},deleteItem:function(t,e){"images"===e&&this.deleteFromArray(this.images,t),"videos"===e&&this.deleteFromArray(this.videos,t)},deleteFromArray:function(t,e){var n=this;t&&t.map((function(r,l){e===l&&(t.splice(l,1),n.isNotSupportedType=!1,n.notSupported=[])}))}}},l=(n(759),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"estate-info"},[n("div",{staticClass:"default-title"},[t._v("\n    "+t._s(t.$t("multimedia_content"))+"\n  ")]),t._v(" "),n("div",{staticClass:"estate-info__descr"},[n("p",[t._v("\n      "+t._s(t.$t("multimedia_content_descr"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"estate-info__drop",class:{"dragged-over":t.isDraggedOver},on:{dragover:t.dragOver,dragleave:t.handleDragEvent,dragend:t.handleDragEvent,drop:t.dropFiles}},[n("div",{staticClass:"estate-info__drop-inner"},[n("div",{staticClass:"estate-info__drop-title"},[t._v("\n        "+t._s(t.$t("drag_files"))+"\n      ")]),t._v(" "),n("div",{staticClass:"estate-info__drop-descr"},[n("p",[t._v("\n          "+t._s(t.$t("click_upload"))+"\n          "),n("label",{staticClass:"estate-info__drop-label"},[n("input",{ref:"input",staticClass:"estate-info__drop-input drop-zone__input",attrs:{type:"file",name:"photos-file[]",accept:"image/*, video/* ",multiple:"multiple"},on:{change:t.uploadFiles}}),t._v(" "),n("span",{staticClass:"estate-info__drop-btn"},[t._v("\n              "+t._s(t.$t("click_here"))+"\n            ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("upload_descr")))])])])])]),t._v(" "),t.isNotSupportedType?n("div",{staticClass:"estate-info_drop-hint"},[n("div",[t._l(t.notSupported,(function(e,r){return n("span",{key:r,staticClass:"estate-info_drop-hint-item"},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),n("span",{staticClass:"estate-info_drop-hint-item"},[t._v("\n        "+t._s(t.$t("not_supported_type"))+"\n      ")])],2),t._v(" "),n("div",[t._v(t._s(t.$t("supported_files"))+" .img, .gif, .png, .svg / .avi, .mp4, .wmv, .mov, .flv, .webm ")])]):t._e()]),t._v(" "),t.images.length?n("div",{staticClass:"estate-info__section-wrap"},[n("div",{staticClass:"estate-info__section-title"},[t._v("\n      "+t._s(t.$t("photos"))+"\n    ")]),t._v(" "),n("div",{staticClass:"estate-info__section-items"},t._l(t.images,(function(image,e){return n("div",{key:e,staticClass:"estate-info__section-item"},[n("div",{staticClass:"estate-info__section-item-inner"},[n("span",{staticClass:"delete",on:{click:function(n){return t.deleteItem(e,"images")}}},[n("CloseIcon")],1),t._v(" "),n("img",{attrs:{src:image.path,alt:""}})])])})),0)]):t._e(),t._v(" "),t.videos.length?n("div",{staticClass:"estate-info__section-wrap"},[n("div",{staticClass:"estate-info__section-title"},[t._v("\n      "+t._s(t.$t("videos"))+"\n    ")]),t._v(" "),n("div",{staticClass:"estate-info__section-items"},t._l(t.videos,(function(video,e){return n("div",{key:e,staticClass:"estate-info__section-item"},[n("div",{staticClass:"estate-info__section-item-inner"},[n("video",{attrs:{controls:"",loop:""}},[n("source",{attrs:{src:video.path}})]),t._v(" "),n("span",{staticClass:"delete",on:{click:function(n){return t.deleteItem(e,"videos")}}},[n("CloseIcon")],1)])])})),0)]):t._e(),t._v(" "),n("div",{staticClass:"estate-info__section-wrap"},[n("div",{staticClass:"estate-info__section-title"},[t._v("\n     "+t._s(t.$t("virtual_tours"))+"\n    ")]),t._v(" "),n("div",{staticClass:"info-default"},[n("label",{staticClass:"info-default__label",attrs:{for:"put-url"}},[t._v("\n        "+t._s(t.$t("put_url"))+"\n      ")]),t._v(" "),n("input",{staticClass:"info-default__value no-focus",attrs:{id:"put-url",type:"text",placeholder:"Put your URL",value:"https://music.youtube.com/watch?v=Rn6BQZ9Aby8&list=RDAMVMRn6BQZ9Aby8"}})])]),t._v(" "),n("div",{staticClass:"estate-info__btns"},[n("nuxt-link",{staticClass:"btn-default",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("skip_now"))+" ")]),t._v(" "),n("nuxt-link",{staticClass:"btn-default black",attrs:{to:"real-estate-documentation"}},[t._v(" "+t._s(t.$t("next_step"))+" ")])],1)])}),[],!1,null,"c0274d18",null);e.default=component.exports}}]);
(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],p=0,v=[];p<o.length;p++)r=o[p],s[r]&&v.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"057e":function(t,e,n){"use strict";var a=n("fe34"),s=n.n(a);s.a},"21dd":function(t,e,n){t.exports=n.p+"img/logo.b8a1e139.png"},2856:function(t,e,n){},"2f12":function(t,e,n){"use strict";var a=n("bb69"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"logo",height:"80px",src:n("21dd")}}),a("HelloWorld"),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("My component and self introduction")])])}],l={name:"HelloWorld",props:{}},c=l,u=(n("d412"),n("2877")),p=Object(u["a"])(c,r,o,!1,null,"2675d87a",null);p.options.__file="HelloWorld.vue";var v=p.exports,f={name:"app",components:{HelloWorld:v}},d=f,h=(n("5c0b"),Object(u["a"])(d,s,i,!1,null,null,null));h.options.__file="App.vue";var _=h.exports,m=n("2f62");a["a"].use(m["a"]);var g=new m["a"].Store({state:{},mutations:{},actions:{}}),b=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/me"}},[n("span",{staticClass:"listTitle"},[t._v("introduction")])])],1),n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/foo"}},[n("span",{staticClass:"listTitle"},[t._v("vue-drag-screenshot")])]),n("span",{staticClass:"listDescription"},[t._v("\n      A Vue component to drag-screenshot\n    ")])],1),n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/inputTags"}},[n("span",{staticClass:"listTitle"},[t._v("vue-input-tags")])]),n("span",{staticClass:"listDescription"},[t._v("\n      A Vue component to input-tags\n    ")])],1)])},C=[],y={name:"home"},x=y,j=(n("057e"),Object(u["a"])(x,w,C,!1,null,"43ff2d9b",null));j.options.__file="home.vue";var k=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"linebox",staticStyle:{top:"25px",left:"0",background:"rgba(44, 62, 80, 0.5)"}},[t.parentValue?n("img",{staticClass:"screenshotImg",attrs:{src:t.parentValue}}):t._e()]),n("div",{staticClass:"linebox",staticStyle:{top:"25px",right:"0",border:"1px solid #444"}},[n("div",{staticClass:"canvasBox"},[n("vue-screenshot",{attrs:{width:500,height:500,imageSrc:t.imageSrc,control:t.control},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1)]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messagebox"},[a("h3",{staticStyle:{width:"100%"}},[t._v("vue-drag-screenshot")]),a("div",[t._v("\n      drag-screenshot 插件是一个可自由拖动对现有图片进行截图的插件,"),a("br"),t._v("\n      图片以及选中框均可拖动。每次拖动结束后，或鼠标弹起时可以实时返回当前选中的图片区域"),a("br"),t._v("\n      (默认图片以最大尺寸显示在操作框内)\n      "),a("h4",[t._v("接受参数：")]),a("br"),t._v("\n      v-model   = 'parentValue' //（必选）接受参数，每次返回的图片保存在v-model变量中"),a("br"),t._v("\n      :width    = '500'         //（必选）定义可操作区域的宽高"),a("br"),t._v("\n      :height   = '500'         //（必选）定义可操作区域的宽高"),a("br"),t._v("\n      :imageSrc = 'imageSrc'    //（非必选）接受一个图片路由默认初始裁剪图片"),a("br"),a("br"),t._v("\n      :control  = 'control'     //（非必选）接受一个对象包含有操作按钮，可以根据定义的顺须排列按钮的顺序，"),a("br"),t._v("\n      不定义既不显示"),a("br"),t._v("\n      control：// 包含以下功能"),a("br"),t._v("\n      narrow   : true,  // 缩小"),a("br"),t._v("\n      clears   : true,  // 清除"),a("br"),t._v("\n      restore  : true,  // 还原"),a("br"),t._v("\n      blowup   : true,  // 放大"),a("br"),t._v("\n      wheel    : true,  // 滚轮缩放 ** 新增 (滚动属性，当滚动属性开启时，支持滚轮放大图片)"),a("br"),t._v("\n      uniform  : true,  // uniform状态 ** 新增 (当uniform属性开启时，每次截取区域截图都会自动居中滚轮放大会由图片转至放大选框)"),a("br"),a("img",{attrs:{width:"980",height:"auto",src:n("c212")}})])])}],S={name:"foo",data:function(){return{imageSrc:"https://wei-zhe.github.io/img/logo.b8a1e139.png",parentValue:"",control:{narrow:!0,clears:!0,restore:!0,blowup:!0,wheel:!0,uniform:!0}}},watch:{parentValue:function(t,e){}},mounted:function(){},methods:{}},O=S,V=(n("2f12"),Object(u["a"])(O,E,$,!1,null,"2f49f23c",null));V.options.__file="foo.vue";var B=V.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"me"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"introduction"},[t._m(0),n("div",{staticClass:"lineRow"},[t._m(1),n("div",[t._v("\n              "+t._s(t.age)+"\n          ")])]),t._m(2),t._m(3),t._m(4),t._m(5)]),t._m(6)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-user"}),t._v("\n              name:\n          ")]),n("div",[t._v("\n              魏哲\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-adn"}),t._v("\n              age:\n          ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-phone-sign"}),t._v("\n              phone:\n          ")]),n("div",[t._v("\n              138-9209-3868\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-envelope-alt"}),t._v("\n              mail:\n          ")]),n("div",[t._v("\n              weizhe.wz@qq.com\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-github-sign"}),t._v("\n              github:\n          ")]),n("div",[n("a",{attrs:{href:"https://github.com/wei-zhe"}},[t._v("\n                  https://github.com/wei-zhe\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-tags"})]),n("div",[t._v("\n              2016-10 至今：深圳市前海手绘科技文化有限公司"),n("br"),t._v("\n              全栈开发工程师"),n("br"),t._v("\n              2016-10 / 2017-12 负责后端项目api，之后选择开发前端web在线动画引擎至今\n          ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mephoto"},[a("img",{attrs:{width:"100",height:"auto",src:n("c6ba")}})])}],A={name:"me",data:function(){return{age:"1995-10-11"}},watch:{},mounted:function(){this.age=this.calculatingAge(this.age)},methods:{calculatingAge:function(t){var e="",n=new Date,a=n.getFullYear(),s=n.getMonth()+1,i=n.getDate();s<10&&(s="0"+s),i<10&&(i="0"+i);var r=a+"-"+s+"-"+i;return e=r.substring(0,4)>=t.substring(0,4)&&r.substring(5,7)>=t.substring(5,7)&&r.substring(8,10)>=t.substring(8,10)?a-parseInt(t.substring(0,4)):a-parseInt(t.substring(0,4))-1,e}}},L=A,M=(n("ee8e"),Object(u["a"])(L,T,P,!1,null,"04320ad5",null));M.options.__file="me.vue";var R=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"inputTagsBox"},[n("vue-inputTags",{attrs:{width:498,height:150,setting:t.setting},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1),t._m(0)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messagebox"},[a("h3",{staticStyle:{width:"100%"}},[t._v("vue-input-tags")]),a("div",[t._v("\n            input-tags： 一个可以输入标签的vue组建，按回车键以添加标签"),a("br"),a("br"),a("h4",{staticStyle:{width:"100%"}},[t._v("接受参数")]),t._v('\n            v-model   = "parentValue"   // （必选）绑定数组变量，但是每个变量都必须是对象，并且含有一个title的属性'),a("br"),t._v('\n            :width    = "498"           // （必选）'),a("br"),t._v('\n            :height   = "150"           // （必选）'),a("br"),a("br"),t._v("\n            :setting  = 'setting'       //  设置（非必选）"),a("br"),t._v("\n            setting : { // setting参数\n                wordage : 8,    //文字数\n                ArrayLength: 20,    // 标签数\n            },"),a("br"),a("img",{attrs:{width:"500",src:n("bfe2")}})])])}],H={name:"home",data:function(){return{parentValue:[{title:"第一个标签first"},{title:"第二个标签"},{title:"第三个标签"},{title:"第四个标签last"}],setting:{wordage:8,ArrayLength:20}}}},W=H,I=(n("8e96"),Object(u["a"])(W,z,D,!1,null,"55652016",null));I.options.__file="inputTags.vue";var q=I.exports;a["a"].use(b["a"]);var J=new b["a"]({mode:"history",routes:[{path:"",component:k,meta:{title:"ADE",judgeBrowser:!0}},{path:"/foo",component:B,meta:{title:"介绍页",judgeBrowser:!0}},{path:"/me",component:R,meta:{title:"我的",judgeBrowser:!0}},{path:"/inputTags",component:q,meta:{title:"input标签",judgeBrowser:!0}}]}),F=n("196f"),Y=n.n(F),G=n("41c8"),K=n.n(G);a["a"].use(Y.a),a["a"].use(K.a),a["a"].config.productionTip=!1,J.beforeEach(function(t,e,n){window.document.title=t.meta.title,n()}),new a["a"]({store:g,router:J,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),s=n.n(a);s.a},"774e":function(t,e,n){},"8e96":function(t,e,n){"use strict";var a=n("ae58"),s=n.n(a);s.a},ae58:function(t,e,n){},af00:function(t,e,n){},bb69:function(t,e,n){},bfe2:function(t,e,n){t.exports=n.p+"img/inputtags.6098103c.jpg"},c212:function(t,e,n){t.exports=n.p+"img/action.9b6bf6aa.png"},c6ba:function(t,e,n){t.exports=n.p+"img/me.4857d81f.jpeg"},d412:function(t,e,n){"use strict";var a=n("af00"),s=n.n(a);s.a},ee8e:function(t,e,n){"use strict";var a=n("774e"),s=n.n(a);s.a},fe34:function(t,e,n){}});
//# sourceMappingURL=app.80450f05.js.map
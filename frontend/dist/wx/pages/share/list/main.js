require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([3],{JNmO:function(t,e){},Ldyp:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("official-account",{attrs:{mpcomid:"0"}}),t._v(" "),a("van-tabs",{attrs:{eventid:"3",mpcomid:"8"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"发现",mpcomid:"4"}},[a("van-notice-bar",{attrs:{text:t.notice.content,mpcomid:"1"}}),t._v(" "),a("van-search",{attrs:{placeholder:"请输入关键词",eventid:"0",mpcomid:"2"},on:{change:t.onChange}}),t._v(" "),a("ul",t._l(t.shares,function(t,e){return a("li",{key:e},[a("Card",{key:e,attrs:{share:t,mpcomid:"3-"+e}})],1)}))],1),t._v(" "),a("van-tab",{attrs:{title:"使用说明",mpcomid:"7"}},[a("div",{staticClass:"shuoming"},[a("p",[t._v("资源均为免费，兑换后即可查看下载地址；点击"),a("span",[t._v("我的 -> 我的兑换")]),t._v("，即可查看、下载兑换过的资源。")]),t._v(" "),a("h3",[t._v("积分获得方式")]),t._v(" "),a("ul",[a("li",[t._v(" > 每日签到")]),t._v(" "),a("li",[t._v(" > 投稿")]),t._v(" "),a("li",[t._v(" > 转发")]),t._v(" "),a("li",[t._v(" > 提建议、意见（尚未完成）")])],1),t._v(" "),a("h3",[t._v("深入交流")]),t._v(" "),a("ul",[a("li",[t._v(" > 技术交流群QQ群：731548893")]),t._v(" "),a("li",[t._v(" > 技术交流微信群：加我微信，注明加微信群")]),t._v(" "),a("li",[t._v(" > 私人微信：jumping_me\n            "),a("van-button",{attrs:{type:"primary",size:"mini",eventid:"1",mpcomid:"5"},on:{click:t.doCopyMe}},[t._v("复制")])],1)],1),t._v(" "),a("h3",[t._v("公众号(技术干货分享)")]),t._v(" "),a("div",[t._v("\n          由于小程序不支持二维码识别，亲们可使用如下方式关注我的公众号：\n        ")]),t._v(" "),a("ul",[a("li",[t._v(" > 点击"),a("span",[t._v("右上角 -> 关于IT牧场 -> 相关公众号")]),t._v("即可关注，操作简单，只需5秒！")]),t._v(" "),a("li",[t._v(" > 公众号微信：itmuch_com\n            "),a("van-button",{attrs:{type:"danger",size:"mini",eventid:"2",mpcomid:"6"},on:{click:t.doCopyGZH}},[t._v("复制")])],1)],1)],1)])],1)],1)},staticRenderFns:[]};e.a=n},PYFu:function(t,e,a){"use strict";var n=a("tbKW"),s=a("Ldyp");var i=function(t){a("JNmO")},r=a("ybqe")(n.a,s.a,i,"data-v-bad5a474",null);e.a=r.exports},UCfo:function(t,e,a){"use strict";var n=a("c1FY"),s=a("gC+d");var i=function(t){a("wFog")},r=a("ybqe")(n.a,s.a,i,"data-v-066cc2cf",null);e.a=r.exports},c1FY:function(t,e,a){"use strict";var n=a("VsUZ");e.a={props:["share"],computed:{detailUrl:function(){var t=this.share.id;return this.share.downloadUrl?"/pages/share/buy-success/main?id="+t:"/pages/share/detail/main?id="+t},cover:function(){return n.a+"/"+this.share.cover},summary:function(){var t=this.share.summary;return t&&t.length>30&&(t=t.substring(0,30)+"..."),t}},methods:{preview:function(){console.log("cover",this.cover),wx.previewImage({current:this.cover,urls:[this.cover]})}}}},fWrB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("5nAL"),s=a.n(n),i=a("PYFu");new s.a(i.a).$mount()},"gC+d":function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:t.detailUrl}},[a("div",{staticClass:"itmuch-card"},[a("div",{staticClass:"thumb",attrs:{eventid:"0"},on:{click:function(e){e.stopPropagation(),t.preview(e)}}},[a("img",{staticClass:"img",attrs:{src:t.cover,mode:"aspectFit"}}),t._v(" "),t.share.isOriginal?a("div",{staticClass:"tag origin"},[t._v("\n        原创\n      ")]):a("div",{staticClass:"tag reprint"},[t._v("\n        转载\n      ")])]),t._v(" "),a("div",{staticClass:"detail"},[a("div",{staticClass:"mid"},[a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.share.title)+"\n        ")]),t._v(" "),a("div",{staticClass:"summary"},[t._v(t._s(t.summary))])]),t._v(" "),a("div",{staticClass:"right"},[a("div",[t._v(t._s(t.share.price)+"积分")]),t._v(" "),t.share.downloadUrl?a("div",{staticClass:"right"},[t._v("下载")]):a("div",{staticClass:"right"},[t._v("兑换")])])])])])},staticRenderFns:[]};e.a=n},tbKW:function(t,e,a){"use strict";var n=a("mvHQ"),s=a.n(n),i=a("Xxa5"),r=a.n(i),o=a("exGp"),c=a.n(o),v=a("UCfo"),u=a("vLgD"),l=a("VsUZ");e.a={components:{Card:v.a},data:function(){return{notice:"",shares:"",more:!0,pageNo:1,searchWord:"",title:""}},methods:{onChange:function(t){var e=this;return c()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.title=t.mp.detail,e.fetchSharePosts(!0);case 2:case"end":return a.stop()}},a,e)}))()},findAllNotices:function(){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(l.d,"GET",{});case 2:t.notice=e.sent,console.log(l.d+"\n",s()(t.notice));case 4:case"end":return e.stop()}},e,t)}))()},fetchSharePosts:function(t){var e=this;return c()(r.a.mark(function a(){var n,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t&&(e.pageNo=1,e.more=!0),wx.showNavigationBarLoading(),n=e.title,a.next=5,Object(u.a)(l.g+"/q","GET",{pageNo:e.pageNo,title:n});case 5:i=a.sent,console.log(l.g+"\n",s()(i)),i.content.length<10&&e.pageNo>0&&(e.more=!1,console.log(e.more)),t?(e.shares=i.content,wx.stopPullDownRefresh()):e.shares=e.shares.concat(i.content),wx.hideNavigationBarLoading();case 10:case"end":return a.stop()}},a,e)}))()},doCopyMe:function(){wx.setClipboardData({data:"jumping_me",success:function(t){wx.getClipboardData({success:function(t){console.log(t)}})}})},doCopyGZH:function(){wx.setClipboardData({data:"itmuch_com",success:function(t){wx.getClipboardData({success:function(t){console.log(t)}})}})}},onReachBottom:function(){if(!this.more)return!1;this.pageNo=this.pageNo+1,this.fetchSharePosts()},onPullDownRefresh:function(){this.fetchSharePosts(!0)},mounted:function(){this.findAllNotices()},onShow:function(){this.fetchSharePosts(!0)}}},wFog:function(t,e){}},["fWrB"]);
(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02f1":function(t,e,n){},"0c47":function(t,e,n){},"0fd8":function(t,e,n){},"2cf1":function(t,e,n){"use strict";var i=n("0c47"),s=n.n(i);s.a},"2fcb":function(t,e,n){},"4d42":function(t,e,n){},"4ea5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"singer",(function(){return Ge}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("db4d");var s=n("fe3c"),r=n.n(s),a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),n("tab"),n("keep-alive",[n("router-view")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),n("h1",{staticClass:"text"},[t._v("Zcxiaobao Music")]),n("router-link",{staticClass:"mine",attrs:{tag:"div",to:"/user"}},[n("i",{staticClass:"icon-mine"})])],1)},u=[],d={name:"MHeader"},h=d,p=(n("d8de"),n("2877")),f=Object(p["a"])(h,l,u,!1,null,"262ebc9e",null),g=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommand"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行 ")])]),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},v=[],b={name:"Tab"},y=b,A=(n("e573"),Object(p["a"])(y,m,v,!1,null,"0903b050",null)),w=A.exports,O={components:{MHeader:g,Tab:w}},S=O,C=Object(p["a"])(S,o,c,!1,null,null,null),j=C.exports,I=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"singer"},[n("list-view",{attrs:{data:t.singers},on:{selectSinger:t.selectSinger}}),n("router-view")],1)},P=[],L=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("466d"),n("159b"),n("ade3")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[n("ul",t._l(t.data,(function(e,i){return n("li",{key:i,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),n("ul",t._l(e.items,(function(e){return n("li",{key:e.id,staticClass:"list-group-item",on:{click:function(n){return t.selectSinger(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),0)])})),0),n("div",{staticClass:"list-shortcut",on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)},touchend:function(t){t.stopPropagation()}}},[n("ul",t._l(t.shortcutList,(function(e,i){return n("li",{key:i,staticClass:"item",class:{current:t.currentIndex===i},attrs:{"data-index":i}},[t._v(t._s(e))])})),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[n("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.data||!t.data.length,expression:"!data || !data.length"}],staticClass:"loading-container"},[n("loading")],1)])},x=[],D=(n("d81d"),n("c7cd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper"},[t._t("default")],2)}),T=[],E=(n("a9e3"),n("1fba")),M={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},listenPullingUp:{type:Boolean,default:!1},pullUpLoad:{type:Object,default:null}},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new E["a"](this.$refs.wrapper,{probeType:this.probeType,click:this.click,pullUpLoad:this.pullUpLoad}),this.listenScroll&&this.scroll.on("scroll",(function(e){t.$emit("scroll",e)})),this.listenPullingUp&&this.scroll.on("pullingUp",(function(){t.$emit("pullingUp")})))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.s.disable()},destroy:function(){this.scroll&&this.scroll.destroy()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},finishPullUp:function(){this.listenPullingUp&&this.scroll&&this.scroll.finishPullUp()}},mounted:function(){var t=this;setTimeout((function(){t._initScroll()}),20)},watch:{data:function(){var t=this;setTimeout((function(){t.finishPullUp(),t.refresh()}),20)}}},R=M,z=Object(p["a"])(R,D,T,!1,null,null,null),N=z.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[i("img",{attrs:{width:"24",height:"24",src:n("5a95")}}),i("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},G=[],B={props:{title:{type:String,default:"正在载入..."}}},Z=B,q=(n("96e5"),Object(p["a"])(Z,U,G,!1,null,"30fe8d72",null)),H=q.exports,J=function(t,e){return t.classList.contains(e)},Q=function(t,e){J(t,e)||t.classList.add(e)},W=function(t,e,n){var i="data-";if(!n)return t&&t.getAttribute(i+e);t.setAttribute(i+e,n)},Y=document.createElement("div").style,F=function(){var t={webkit:"webkitTransform",moz:"mozTransform",o:"oTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==Y[t[e]])return e;return!1}(),V=function(t){return!1!==F&&("standard"===F?t:F+t.charAt(0).toUpperCase()+t.substr(1))},K=18,X=30,$={props:{data:{type:Array,default:null}},created:function(){this.touch={},this.probeType=3,this.listHeight=[],this.listenScroll=!0},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},methods:{onShortcutTouchStart:function(t){var e=W(t.target,"index");this.touch.y1=t.touches[0].pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){this.touch.y2=t.touches[0].pageY;var e=Math.floor((this.touch.y2-this.touch.y1)/K),n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},scroll:function(t){this.scrollY=t.y},selectSinger:function(t){this.$emit("selectSinger",t)},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calcaulateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++)e+=t[n].clientHeight,this.listHeight.push(e)}},components:{Scroll:N,Loading:H},computed:{shortcutList:function(){return this.data.map((function(t){return t.title.substr(0,1)}))},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout((function(){t._calcaulateHeight()}),20)},scrollY:function(t){var e=this.listHeight;if(t>0)this.currentIndex=0;else{for(var n=0;n<e.length-1;n++){var i=e[n],s=e[n+1];if(t<=-i&&t>-s)return this.currentIndex=n,void(this.diff=t+s)}this.currentIndex=e.length-2}},diff:function(t){var e=t>0&&t<X?t-X:0;this.fixedTop,this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,".concat(e,"px,0)")}}},tt=$,et=(n("8111"),Object(p["a"])(tt,_,x,!1,null,"dd358824",null)),nt=et.exports,it=(n("d3b7"),{g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"}),st={g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq.json",needNewCode:0},rt={param:"jsonpCallback"},at=0,ot=n("bc3a"),ct=n.n(ot),lt=(n("caad"),n("2532"),n("f2e8")),ut=n.n(lt);function dt(t,e,n){return t+=(t.includes("?")?"&":"?")+ht(e),new Promise((function(e,i){ut()(t,n,(function(t,n){t?i(n):e(n)}))}))}function ht(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&".concat(n,"=").concat(encodeURIComponent(i))}return e?e.substring(1):""}function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){Object(L["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt=function(){var t="https://c.y.qq.com/v8/fcg-bin/v8.fcg",e=ft({},it,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return dt(t,e,rt)},mt=function(t){var e="/getSingerSongList",n=ft({},st,{"-":"getSingerSong5820184818895127",data:{comm:{ct:24,cv:0},singerSongList:{method:"GetSingerSongList",param:{order:1,singerMid:t.id,begin:0,num:20},module:"musichall.song_list_server"}}});return ct()(e,{params:n}).then((function(t){return Promise.resolve(t)}))},vt=n("2f62"),bt=(n("b0c0"),n("d4ec")),yt=function t(e){var n=e.id,i=e.name;Object(bt["a"])(this,t),this.id=n,this.name=i,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000".concat(n,".jpg?max_age=2592000")};function At(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?At(Object(n),!0).forEach((function(e){Object(L["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ot=10,St="热门",Ct={name:"Singer",data:function(){return{singers:[]}},created:function(){this._getSinger()},methods:wt({selectSinger:function(t){this.$router.push({path:"/singer/".concat(t.id)}),this.setSinger(t)}},Object(vt["c"])({setSinger:"SET_SINGER"}),{_getSinger:function(){var t=this;gt().then((function(e){e.code===at&&(t.singers=t._normallizeSingerData(e.data.list))}))},_normallizeSingerData:function(t){var e={hot:{title:St,items:[]}};t.forEach((function(t,n){n<Ot&&e.hot.items.push(new yt({name:t.Fsinger_name,id:t.Fsinger_mid}));var i=t.Findex;e[i]||(e[i]={title:i,items:[]}),e[i].items.push(new yt({name:t.Fsinger_name,id:t.Fsinger_mid}))}));var n=[],i=[];return Object.keys(e).forEach((function(t){var s=e[t];s.title.match(/[a-zA-Z]/)?i.push(s):s.title===St&&n.push(s)})),i.sort((function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)})),[].concat(n,i)}}),components:{ListView:nt}},jt=Ct,It=(n("2cf1"),Object(p["a"])(jt,k,P,!1,null,"3dbac56f",null)),kt=It.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.data,listenPullingUp:t.listenPullingUp,pullUpLoad:t.pullUpLoad},on:{pullingUp:t.pullingUp}},[n("div",[t.sliderItems.length?n("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[n("slider",t._l(t.sliderItems,(function(e){return n("div",{key:e.id},[n("a",{attrs:{href:e.jump_info.url}},[n("img",{staticClass:"needsclick",attrs:{src:e.pic_info.url},on:{load:t.loadImg}})])])})),0)],1):t._e(),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),n("ul",{staticClass:"recom-wrapper"},t._l(t.recomPlayList,(function(e){return n("li",{key:e.content_id,staticClass:"recom-item"},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}]})]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.title)}})])})),0)]),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("最新音乐")]),n("ul",t._l(t.newSongList,(function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],attrs:{width:"60",height:"60"}})]),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.name)}}),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.singer)}})]),n("div",{staticClass:"interval"},[t._v(t._s(t._normallizeSongInterval(e.interval)))])])})),0),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.newSongLoading&&!t.isNewSongBottom,expression:"newSongLoading && !isNewSongBottom"}],staticClass:"newsong-loading"}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isNewSongBottom,expression:"isNewSongBottom"}],staticClass:"recommend-bottom"},[t._v("——我也是有底线的——")])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.recomPlayList.length,expression:"!recomPlayList.length"}],staticClass:"loading-container"},[n("loading")],1)]),n("router-view")],1)},Lt=[],_t=(n("fb6a"),n("4d90"),n("2909"));function xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?xt(Object(n),!0).forEach((function(e){Object(L["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}ct.a.defaults.withCredentials=!0;var Tt=function(){var t="/getRecomSlider",e=Dt({},st,{"-":"recom030954476498489703",data:{comm:{ct:24},focus:{module:"QQMusic.MusichallServer",method:"GetFocus",param:{}}}});return ct.a.get(t,{params:e}).then((function(t){return Promise.resolve(t)}))},Et=function(){var t="/getRecomPlayList",e=Dt({},st,{"-":"recom030954476498489703",data:{comm:{ct:24},recomPlaylist:{method:"get_hot_recommend",param:{async:1,cmd:2},module:"playlist.HotRecommendServer"}}});return ct.a.get(t,{params:e}).then((function(t){return Promise.resolve(t)}))},Mt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n="/getNewSongList",i=Dt({},st,{"-":"recom030954476498489703",data:{comm:{ct:24},new_song:{module:"newsong.NewSongServer",method:"get_new_song_info",param:{type:5},songlistPage:{pi:t,ps:e}}}});return ct.a.get(n,{params:i}).then((function(t){return Promise.resolve(t)}))},Rt=(n("a15b"),function t(e){var n=e.id,i=e.name,s=e.mid,r=e.singer,a=e.album,o=e.image,c=e.interval;Object(bt["a"])(this,t),this.id=n,this.name=i,this.mid=s,this.singer=r,this.album=a,this.interval=c,this.image=o});function zt(t){return new Rt({id:t.id,mid:t.mid,singer:Nt(t.singer),name:t.name,album:t.album.name,interval:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000".concat(t.album.mid,".jpg?max_age=2592000")})}function Nt(t){var e=[];return t?(t.forEach((function(t){e.push(t.name)})),e.join("/")):""}var Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),n("div",{staticClass:"dots"},t._l(t.dots,(function(e,i){return n("span",{key:i,staticClass:"dot",class:{active:t.currentPageIndex===i}})})),0)])},Gt=[],Bt={name:"Slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:2e3}},data:function(){return{dots:[],currentPageIndex:0,sliderItems:[]}},methods:{_setSliderWidth:function(){this.sliderItems=this.$refs.sliderGroup.children;for(var t=0,e=this.$refs.slider.clientWidth,n=0;n<this.sliderItems.length;n++){var i=this.sliderItems[n];Q(i,"slider-item"),i.style.width=e+"px",t+=e}this.loop&&(t+=2*e),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.sliderItems.length)},_initSlider:function(){var t=this;this.slider=new E["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,speed:400,threshold:.3}}),this.slider.on("scrollEnd",(function(){var e=t.slider.getCurrentPage().pageX;t.currentPageIndex=e,t.autoPlay&&t._play()})),this.slider.on("beforeScrollStart",(function(){t.autoPlay&&clearTimeout(t.timer)}))},_play:function(){var t=this;this.currentPageIndex;this.timer=setTimeout((function(){t.slider.next(400)}),this.interval)}},mounted:function(){var t=this;setTimeout((function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()}),20)}},Zt=Bt,qt=(n("8d42"),Object(p["a"])(Zt,Ut,Gt,!1,null,"4de47fc1",null)),Ht=qt.exports,Jt={name:"Recommand",data:function(){return{sliderItems:[],recomPlayList:[],newSongList:[],pullUpLoad:{threshold:20},listenPullingUp:!0,newSongListPageIndex:0,newSongLoading:!1,isNewSongBottom:!1}},methods:{pullingUp:function(){this._getNewSongList()},loadImg:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)},_getRecomSlider:function(){var t=this;Tt().then((function(e){var n=e.data;n.code===at&&(t.sliderItems=n.focus.data.content)}))},_getRecomPlayList:function(){var t=this;Et().then((function(e){var n=e.data;n.code===at&&(t.recomPlayList=n.recomPlaylist.data.v_hot.slice(0,9))}))},_getNewSongList:function(){var t=this;this.newSongListPageIndex++,this.newSongLoading=!0,Mt(this.newSongListPageIndex).then((function(e){var n=e.data;if(n.code===at)if(n.newSongList&&n.newSongList.length>0){var i=t._normallizeSong(n.newSongList);t.newSongList=[].concat(Object(_t["a"])(t.newSongList),Object(_t["a"])(i)),t.newSongLoading=!1}else t.isNewSongBottom=!0}))},_normallizeSong:function(t){var e=[];return t.forEach((function(t){e.push(zt(t))})),e},_normallizeSongInterval:function(t){var e="".concat(Math.floor(t/60)),n="".concat(t%60);return"".concat(e.padStart(2,"0"),":").concat(n.padStart(2,"0"))}},computed:{data:function(){return[].concat(Object(_t["a"])(this.newSongList),Object(_t["a"])(this.recomPlayList))}},created:function(){this._getRecomSlider(),this._getRecomPlayList(),this._getNewSongList()},components:{Slider:Ht,Scroll:N,Loading:H}},Qt=Jt,Wt=(n("93e2"),Object(p["a"])(Qt,Pt,Lt,!1,null,"14447f84",null)),Yt=Wt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank"},[t._v(" 排行页面 ")])},Vt=[],Kt={name:"Rank"},Xt=Kt,$t=Object(p["a"])(Xt,Ft,Vt,!1,null,null,null),te=$t.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[t._v(" 搜索页面 ")])},ne=[],ie={name:"Search"},se=ie,re=Object(p["a"])(se,ee,ne,!1,null,null,null),ae=re.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs}})],1)},ce=[],le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play"},[n("i",{staticClass:"icon-play"}),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),n("div",{ref:"filter",staticClass:"filter"})]),n("div",{ref:"layer",staticClass:"bg-layer"}),n("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs||!t.songs.length,expression:"!songs || !songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},ue=[],de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-list"},[t.songs?n("ul",t._l(t.songs,(function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"content"},[n("h2",{staticClass:"name"},[t._v(t._s(e.name))]),n("p",{staticClass:"desc"},[t._v(t._s(t.getSongDesc(e)))])])])})),0):t._e()])},he=[],pe={props:{songs:{type:Array,default:null}},methods:{getSongDesc:function(t){return"".concat(t.singer," - ").concat(t.album)}}},fe=pe,ge=(n("6c5e"),Object(p["a"])(fe,de,he,!1,null,"7ec0d5b4",null)),me=ge.exports,ve=40,be=V("transform"),ye=0,Ae=0,we={props:{title:{type:String,default:""},bgImage:{type:String,default:""},songs:{type:Array,default:null}},data:function(){return{scrollY:0}},created:function(){this.listenScroll=!0,this.probeType=3},mounted:function(){Ae=this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top="".concat(Ae,"px"),ye=-Ae+ve},methods:{scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()}},computed:{bgStyle:function(){return"background-image: url(".concat(this.bgImage,")")}},watch:{scrollY:function(t){var e=0,n=0,i=Math.max(t,ye);this.$refs.layer.style[be]="translate3d(0,".concat(i,"px,0)"),t<ye?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(ve,"px"),this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height="0",this.$refs.playBtn.style.display="block"),t>0&&(n=Math.abs(t/Ae),e=10),this.$refs.bgImage.style[be]="scale(".concat(1+n,")"),this.$refs.bgImage.style["zIndex"]=e}},components:{SongList:me,Scroll:N,Loading:H}},Oe=we,Se=(n("602c"),Object(p["a"])(Oe,le,ue,!1,null,"14e8b0f8",null)),Ce=Se.exports;function je(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Ie(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?je(Object(n),!0).forEach((function(e){Object(L["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ke={name:"Singer-Detail",computed:Ie({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(vt["b"])({singer:"singer"})),created:function(){this._getSingerSongList()},data:function(){return{songs:[]}},methods:{_getSingerSongList:function(){var t=this;this.singer.id?mt(this.singer).then((function(e){var n=e.data;n.code===at&&(t.songs=t._normallizeSong(n.singerSongList.data.songList))})):this.$router.push("/singer")},_normallizeSong:function(t){var e=[];return t.forEach((function(t){e.push(zt(t.songInfo))})),e}},components:{MusicList:Ce}},Pe=ke,Le=(n("7b99"),Object(p["a"])(Pe,oe,ce,!1,null,"d150c9a0",null)),_e=Le.exports,xe=I["a"].prototype.push;I["a"].prototype.push=function(t){return xe.call(this,t).catch((function(t){return t}))},a["a"].use(I["a"]);var De=[{path:"/",name:"home",redirect:"/recommand"},{path:"/recommand",name:"recommand",component:Yt},{path:"/singer",name:"singer",component:kt,children:[{path:":id",name:"singer-detail",component:_e}]},{path:"/rank",name:"rank",component:te},{path:"/search",name:"search",component:ae}],Te=new I["a"]({routes:De}),Ee=Te,Me={singer:{}},Re=Me,ze="SET_SINGER",Ne=Object(L["a"])({},ze,(function(t,e){t.singer=e})),Ue=Ne,Ge=function(t){return t.singer};a["a"].use(vt["a"]);var Be=new vt["a"].Store({state:Re,mutations:Ue,getters:i}),Ze=(n("930e"),n("caf9"));r.a.attach(document.body),a["a"].use(Ze["a"],{loading:n("710d")}),a["a"].config.productionTip=!1,new a["a"]({router:Ee,store:Be,render:function(t){return t(j)}}).$mount("#app")},5790:function(t,e,n){},"5a95":function(t,e){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},"602c":function(t,e,n){"use strict";var i=n("e77d"),s=n.n(i);s.a},"6c5e":function(t,e,n){"use strict";var i=n("ced2"),s=n.n(i);s.a},"710d":function(t,e,n){t.exports=n.p+"img/default.cbc0e020.png"},"7b99":function(t,e,n){"use strict";var i=n("4d42"),s=n.n(i);s.a},8111:function(t,e,n){"use strict";var i=n("0fd8"),s=n.n(i);s.a},"8d42":function(t,e,n){"use strict";var i=n("2fcb"),s=n.n(i);s.a},"930e":function(t,e,n){},"93e2":function(t,e,n){"use strict";var i=n("5790"),s=n.n(i);s.a},"96e5":function(t,e,n){"use strict";var i=n("02f1"),s=n.n(i);s.a},"9b79":function(t,e,n){},ced2:function(t,e,n){},d8de:function(t,e,n){"use strict";var i=n("4ea5"),s=n.n(i);s.a},e573:function(t,e,n){"use strict";var i=n("9b79"),s=n.n(i);s.a},e77d:function(t,e,n){}});
//# sourceMappingURL=app.bd80ddc0.js.map
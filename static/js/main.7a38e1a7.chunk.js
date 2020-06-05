(this["webpackJsonptwitch-vod-sync"]=this["webpackJsonptwitch-vod-sync"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(12),s=a.n(r),o=(a(19),a(6)),l=a(2),c=a(3),u=a(1),d=a(5),h=a(4),v=(a(20),a(9));function p(e,t){for(var a=""+e;a.length<t;)a="0"+a;return a}function f(e){return e.getFullYear()+"-"+p(e.getMonth()+1,2)+"-"+p(e.getDate(),2)+" "+p(e.getHours(),2)+":"+p(e.getMinutes(),2)+":"+p(e.getSeconds(),2)}function m(e){var t=e.match(/(?:([0-9]+)h)?([0-9]+)m([0-9]+)s/);if(t)return t[1]?3600*Number(t[1])+60*Number(t[2])+Number(t[3]):60*Number(t[2])+Number(t[3]);throw Error("Invalid duration")}a(21);function y(e){return 0===e?"#aaf":1===e?"#faa":2===e?"#afa":3===e?"#aff":4===e?"#faf":"#ffa"}function w(e){if(0===e.videos.size)return n.a.createElement("div",{className:"timestamps"});var t=Array.from(e.videos.entries());t.sort((function(e,t){return e[0]-t[0]}));var a=new Date(Math.min.apply(Math,Object(o.a)(t.map((function(e){var t=Object(v.a)(e,2);t[0];return t[1].startDate.getTime()}))))),i=new Date(Math.max.apply(Math,Object(o.a)(t.map((function(e){var t=Object(v.a)(e,2),a=(t[0],t[1]);return a.startDate.getTime()+1e3*a.duration}))))),r=a.getTime(),s=i.getTime(),l=n.a.createRef();var c=100/t.length,u=t.map((function(e,t){var a=Object(v.a)(e,2),i=a[0],o=a[1];return n.a.createElement("rect",{key:i,height:c+"%",y:c*t+"%",x:(o.startDate.getTime()-r)/(s-r)*100+"%",width:o.duration/(s-r)*1e3*100+"%",style:{fill:y(i)}})})),d=void 0;return e.currentPosition&&(d=n.a.createElement("rect",{height:"100%",width:"2px",x:(e.currentPosition.getTime()-r)/(s-r)*100+"%",style:{fill:"black"}})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"buttons"},n.a.createElement("input",{type:"button",value:"pause"}),n.a.createElement("input",{type:"button",value:"-",onClick:function(t){t.preventDefault(),e.onViewersChange(-1)}}),n.a.createElement("input",{type:"button",value:"+",onClick:function(t){t.preventDefault(),e.onViewersChange(1)}})),n.a.createElement("div",{className:"timestamps",ref:l,onClick:function(t){if(l.current){var a=l.current.getBoundingClientRect(),i=(t.clientX-a.x)/a.width;e.onSeek(new Date(r+(s-r)*i))}}},n.a.createElement("svg",null,u,d),n.a.createElement("div",null,n.a.createElement("div",null,f(a)),n.a.createElement("div",null,e.currentPosition?f(e.currentPosition):void 0),n.a.createElement("div",null,f(i)))))}var g=a(10),b=a.n(g),k=a(13),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).inputRef=void 0,i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.inputRef=n.a.createRef(),i}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.inputRef.current){var t=this.inputRef.current.value,a=t.match(/^(?:https?:\/\/(?:www\.|m\.)?twitch\.tv\/videos\/)?([0-9]+)(?:\?.*)?$/);if(a){var i=Number(a[1]);console.log("Picked video: ",t," ",i),this.props.onVideoPicked(i)}else console.log("Wrong URL: ",t)}else console.error("No inputRef")}},{key:"render",value:function(){return n.a.createElement("div",{className:"picker"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",name:"video",ref:this.inputRef,placeholder:"Twitch video URL"}),n.a.createElement("input",{type:"submit",value:"Watch"})))}}]),a}(n.a.PureComponent),E=(a(23),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).player=void 0,i.delayRef=void 0,i.state=i.initialState(),i.player=void 0,i.delayRef=n.a.createRef(),i.handleVideoPicked=i.handleVideoPicked.bind(Object(u.a)(i)),i.handleDelayChange=i.handleDelayChange.bind(Object(u.a)(i)),i.reset=i.reset.bind(Object(u.a)(i)),i}return Object(c.a)(a,[{key:"initialState",value:function(){return{delay:0}}},{key:"componentDidUpdate",value:function(e,t){if(this.props.state&&(this.props.state!==e.state||this.state.delay!==t.delay)&&this.player&&this.state.videoDate)if("paused"===this.props.state.state)this.player.pause(),this.player.seek((this.props.state.position.getTime()-this.state.videoDate.getTime())/1e3+this.state.delay);else if("playing"===this.props.state.state){var a=(new Date).getTime()/1e3+this.props.state.offset-this.state.videoDate.getTime()/1e3+this.state.delay;this.player.seek(a),this.player.play()}}},{key:"handleVideoPicked",value:function(){var e=Object(k.a)(b.a.mark((function e(t){var a,i,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({video:t}),e.next=3,fetch("https://api.twitch.tv/helix/videos?id="+t,{headers:{"Client-ID":this.props.clientId,Authorization:"Bearer "+this.props.accessToken}});case 3:if(200!==(a=e.sent).status){e.next=14;break}return e.next=7,a.json();case 7:i=e.sent,n=i.data[0],console.log("Got video date: ",n.created_at),r=new Date(n.created_at),s=m(n.duration),this.setState({videoDate:r,videoDuration:s}),this.props.setVideoInfo(this.props.id,{startDate:r,duration:s});case 14:this.player=new Twitch.Player("player"+this.props.id,{width:"100%",height:"100%",video:t,autoplay:!1}),console.log("Created player",this.player);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelayChange",value:function(e){var t;if(e.preventDefault(),null===(t=this.delayRef)||void 0===t?void 0:t.current){var a=Number(this.delayRef.current.value);isNaN(a)&&(a=0),this.setState({delay:a}),this.delayRef.current.value=""+a}}},{key:"reset",value:function(){this.setState({delay:0,video:void 0,videoDate:void 0,videoDuration:void 0}),this.props.setVideoInfo(this.props.id,void 0)}},{key:"render",value:function(){return this.state.video?n.a.createElement("div",{className:"viewer",style:{width:this.props.width+"px"}},n.a.createElement("div",{id:"player"+this.props.id,className:"player"}),n.a.createElement("div",{className:"options"},n.a.createElement("form",{onSubmit:this.handleDelayChange},"Delay:"," ",n.a.createElement("input",{type:"text",name:"delay",ref:this.delayRef,defaultValue:this.state.delay})," ",n.a.createElement("input",{type:"submit",value:"Set"})),n.a.createElement("input",{type:"button",onClick:this.reset,value:"Reset"}))):n.a.createElement("div",{className:"viewer",style:{width:this.props.width+"px"}},n.a.createElement(S,{onVideoPicked:this.handleVideoPicked}))}}]),a}(n.a.PureComponent)),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).interval=void 0,i.containerRef=void 0,i.state=i.initialState(),i.containerRef=n.a.createRef(),i.setVideoInfo=i.setVideoInfo.bind(Object(u.a)(i)),i.handlePlayerStateChange=i.handlePlayerStateChange.bind(Object(u.a)(i)),i.handleSeek=i.handleSeek.bind(Object(u.a)(i)),i.changeViewers=i.changeViewers.bind(Object(u.a)(i)),i.resized=i.resized.bind(Object(u.a)(i)),window.addEventListener("resize",i.resized),i}return Object(c.a)(a,[{key:"initialState",value:function(){var e=window.location.hash.match(/#access_token=([^&]+)/),t=null;return e&&e[1]&&(t=e[1],console.log("Got access token: ",t)),{accessToken:t,viewers:2,playerState:{state:"paused",position:new Date(1)},videos:new Map,width:window.innerWidth/2-14}}},{key:"componentDidMount",value:function(){this.resized(),this.interval=window.setInterval(this.computeCurrentPosition.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){void 0!==this.interval&&(window.clearInterval(this.interval),this.interval=void 0),window.removeEventListener("resize",this.resized)}},{key:"resized",value:function(){var e=this;this.setState((function(t){var a=window.innerWidth,i=window.innerHeight-20;if(e.containerRef.current){var n=e.containerRef.current.getBoundingClientRect();a=n.width,i=n.height}for(var r=0,s=1,o=1;o<=t.viewers;++o){var l=a/Math.ceil(t.viewers/o)-14,c=i/o-6,u=Math.min(l,c*(16/9)),d=Math.min(c,l/(16/9)),h=u*u+d*d;h>r&&(r=h,s=o)}var v=Math.ceil(t.viewers/s);return document.title="".concat(Math.sqrt(r)),{width:a/v-14}}))}},{key:"setVideoInfo",value:function(e,t){var a=this;console.log("setVideoInfo: ",e,", ",t),this.setState((function(i){var n=new Map(i.videos);t?n.set(e,t):n.delete(e);var r=i.playerState;if(i.videos.size>0){var s=Array.from(i.videos.values()),l=Math.min.apply(Math,Object(o.a)(s.map((function(e){return e.startDate.getTime()})))),c=Math.max.apply(Math,Object(o.a)(s.map((function(e){return e.startDate.getTime()+1e3*e.duration}))));if("paused"===a.state.playerState.state)a.state.playerState.position.getTime()<l?r={state:"paused",position:new Date(l)}:a.state.playerState.position.getTime()>c&&(r={state:"paused",position:new Date(c)});else if("playing"===a.state.playerState.state){var u=(l-(new Date).getTime())/1e3,d=(c-(new Date).getTime())/1e3;a.state.playerState.offset<u?r={state:"playing",offset:u}:a.state.playerState.offset>d&&(r={state:"playing",offset:d})}}return{videos:n,playerState:r}}))}},{key:"handlePlayerStateChange",value:function(e,t){}},{key:"computeCurrentPosition",value:function(){this.setState((function(e){var t,a,i;if("paused"===(null===(t=e.playerState)||void 0===t?void 0:t.state))i=e.playerState.position;else{if("playing"!==(null===(a=e.playerState)||void 0===a?void 0:a.state))return{};i=new Date((new Date).getTime()+1e3*e.playerState.offset)}return{currentPosition:i}}))}},{key:"handleSeek",value:function(e){var t=(e.getTime()-(new Date).getTime())/1e3;this.setState({playerState:{state:"playing",offset:t}})}},{key:"changeViewers",value:function(e){this.setState((function(t){return{viewers:Math.max(1,Math.min(6,t.viewers+e))}})),this.resized()}},{key:"render",value:function(){if(!this.state.accessToken)return setTimeout((function(){window.location.href="https://id.twitch.tv/oauth2/authorize?client_id=r69vc9claq1m3n960hrkuszot4nx54&redirect_uri=https://remram44.github.io/twitch-vod-sync/&response_type=token&scope="}),2e3),n.a.createElement("p",null,"Redirecting you to Twitch to authorize use of their API...");for(var e=[],t=0;t<this.state.viewers;++t)e.push(n.a.createElement(E,{id:t,key:t,clientId:"r69vc9claq1m3n960hrkuszot4nx54",accessToken:this.state.accessToken,state:this.state.playerState,setVideoInfo:this.setVideoInfo,onChange:this.handlePlayerStateChange,width:this.state.width}));return n.a.createElement("div",{className:"view-container",ref:this.containerRef},n.a.createElement("div",{className:"videos"},e),n.a.createElement("div",{className:"timeline"},n.a.createElement(w,{currentPosition:this.state.currentPosition,videos:this.state.videos,onSeek:this.handleSeek,onViewersChange:this.changeViewers})))}}]),a}(n.a.PureComponent);function j(){return n.a.createElement(D,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a38e1a7.chunk.js.map
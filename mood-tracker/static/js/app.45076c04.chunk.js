(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{140:function(e,t,n){e.exports=n.p+"static/media/wallpaper.9987c866.jpg"},257:function(e,t,n){e.exports=n(863)},863:function(e,t,n){"use strict";n.r(t);var o=n(875),r=n(5),s=n.n(r),i=n(6),a=n.n(i),c=n(12),l=n.n(c),u=n(7),d=n.n(u),h=n(9),g=n.n(h),f=n(4),p=n.n(f),b=n(51),m=n(0),j=n(33),y=n(78),x=n(873),S=n(876),v=n(874),w=n(10),O=n(47),E=n(55),T=n(25),k=n.n(T),I=n(176),B={mainView:{flex:1,marginTop:I.a.currentHeight},postButton:{position:"absolute",height:60,width:60,borderRadius:30,bottom:"2%",alignSelf:"center",backgroundColor:"rgba(0,0,0,1)",justifyContent:"center"},postButtonLabel:{alignSelf:"center"},scrollView:{width:"100%",alignSelf:"center"},section:{width:350,paddingVertical:"16%",borderBottomWidth:1,borderColor:"rgba(155,155,155,0.3)",alignSelf:"center"},sectionTitle:{paddingVertical:7.5,fontSize:18,color:"white",fontWeight:"400"},card:{marginTop:"5%",paddingVertical:5,paddingHorizontal:10,borderRadius:20,backgroundColor:"rgba(0,0,0,0.2)"},cardRow:{flexDirection:"row",paddingVertical:5,alignItems:"center"},moodBadge:{fontFamily:"sans-serif",backgroundColor:"green",borderRadius:30,paddingVertical:6,width:130,fontSize:16,textAlign:"center"},emotionBadge:{fontFamily:"sans-serif",backgroundColor:"aliceblue",borderRadius:30,paddingVertical:7,paddingHorizontal:12.5,marginRight:6,fontSize:15,textAlign:"center"},textBadge:{fontFamily:"sans-serif",backgroundColor:"aliceblue",borderRadius:20,paddingVertical:4,paddingHorizontal:10,width:"100%",fontSize:14,lineHeight:22,textAlign:"left"},text:{fontFamily:"sans-serif",fontSize:14,color:"white"},spaceBetween:{justifyContent:"space-between"},icon:{paddingHorizontal:12},entryIcon:{paddingRight:30}},C=n(14);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g()(this,n)}}var R={"Horr\xedvel":"red",Mal:"blue",Regular:"lightblue",Bem:"orange","\xd3timo":"green"};function U(e){var t=e.entry;return Object(C.jsxs)(w.a,{style:[B.cardRow,B.spaceBetween],children:[Object(C.jsxs)(w.a,{style:{flexDirection:"row",alignItems:"center"},children:[Object(C.jsx)(j.a,{style:[B.moodBadge,{backgroundColor:R[t.mood]}],children:t.mood}),t.star?Object(C.jsx)(b.Icon,{name:"star",fill:"gold",width:27,height:27,style:{paddingLeft:15,paddingBottom:2}}):Object(C.jsx)(C.Fragment,{})]}),Object(C.jsxs)(w.a,{style:[B.cardRow],children:[Object(C.jsx)(b.Icon,{name:"edit",height:18,width:18,fill:"rgba(255,255,255,0.75)",style:B.icon}),Object(C.jsx)(j.a,{style:B.text,children:t.startTime.slice(0,5)})]})]})}function A(e){var t=e.entry;return t.address?Object(C.jsxs)(w.a,{style:B.cardRow,children:[Object(C.jsx)(b.Icon,{name:"pin",height:16,width:16,fill:"rgba(255,255,255,0.75)",style:B.icon}),Object(C.jsx)(j.a,{style:B.text,children:t.address})]}):Object(C.jsx)(C.Fragment,{})}function N(e){var t=e.entry;return t.emotions.length>0?Object(C.jsx)(w.a,{style:[B.cardRow,{flexWrap:"wrap",justifyContent:"flex-start"}],children:t.emotions.map((function(e,t){return Object(C.jsx)(O.a,{style:{paddingVertical:5,paddingHorizontal:2},children:Object(C.jsx)(j.a,{style:[B.emotionBadge],children:e},t)})}))}):Object(C.jsx)(C.Fragment,{})}function M(e){var t=e.entry;return t.jornal?Object(C.jsx)(w.a,{style:B.cardRow,children:Object(C.jsx)(j.a,{style:B.textBadge,children:t.jornal})}):Object(C.jsx)(C.Fragment,{})}function D(e){var t=e.entry;return Object(C.jsxs)(w.a,{style:B.card,children:[Object(C.jsx)(U,{entry:t}),Object(C.jsx)(N,{entry:t}),Object(C.jsx)(A,{entry:t}),Object(C.jsx)(M,{entry:t})]},t._id)}var z=function(e){d()(n,e);var t=P(n);function n(e){var o;return s()(this,n),(o=t.call(this,e)).state={date:o.props.date,userEntries:[],entriesSyncing:!1,newPost:o.props.newPost},o.syncUserEntries=o.syncUserEntries.bind(l()(o)),o}return a()(n,[{key:"componentDidMount",value:function(){var e=this;console.log('"Subcomponent UserEntryCards did mount..."'),this.syncUserEntries(),setInterval((function(){console.log("Default auto syncing started..."),e.syncUserEntries()}),1e4),setInterval((function(){e.updateIfNewPost()}),1e3)}},{key:"updateIfNewPost",value:function(){this.props.newPost&&(console.log("JUST POSTED STATUS: True. Selecting current date ..."),this.props.forgetNewPost(),this.syncUserEntries())}},{key:"UserEntryCardsList",value:function(){var e=this;return this.state.userEntries.filter((function(t){return t.date===e.props.date})).map((function(e){return Object(C.jsx)(D,{entry:e})}))}},{key:"syncUserEntries",value:function(){var e,t,n,o,r=this;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("SYNC ENTRIES STATUS: Started..."),this.setState({entriesSyncing:!0}),s.prev=2,s.next=5,k.a.awrap(fetch("https://morning-journey-78874.herokuapp.com/https://mood-tracker-server.herokuapp.com/Users",{method:"GET"}));case 5:if(e=s.sent,t="Status: "+e.status+", "+e.statusText,!e.ok){s.next=18;break}return s.next=10,k.a.awrap(e.json());case 10:n=s.sent,o=n.filter((function(e){return e.username===r.props.userInfo.username}))[0],console.log("fetch GET request for user entries successful."),console.log(t),this.setState({userEntries:o.entries.reverse(),entriesSynced:!0}),console.log("SYNC ENTRIES STATUS: Successful."),s.next=20;break;case 18:throw console.log(new Error('"fetch" GET request for user entries failed. Throwing error...')),new Error(t);case 20:s.next=26;break;case 22:s.prev=22,s.t0=s.catch(2),console.log("SYNC ENTRIES STATUS: Error captured. Printing error..."),console.log(s.t0);case 26:return s.prev=26,this.setState({entriesSyncing:!1}),console.log("SYNC ENTRIES STATUS: Finished."),s.finish(26);case 30:case"end":return s.stop()}}),null,this,[[2,22,26,30]],Promise)}},{key:"render",value:function(){return console.log('"Rendering UserEntryCards subcomponent..."'),this.UserEntryCardsList()}}]),n}(m.Component),L=["2021-01-01","2021-01-02","2021-01-03","2021-01-04","2021-01-05","2021-01-06","2021-01-07","2021-01-08","2021-01-09","2021-01-10","2021-01-11","2021-01-12","2021-01-13","2021-01-14","2021-01-15","2021-01-16","2021-01-17","2021-01-18","2021-01-19","2021-01-20","2021-01-21","2021-01-22","2021-01-23","2021-01-24","2021-01-25","2021-01-26","2021-01-27","2021-01-28","2021-01-29","2021-01-30","2021-01-31","2021-02-01","2021-02-02","2021-02-03","2021-02-04","2021-02-05","2021-02-06","2021-02-07","2021-02-08","2021-02-09","2021-02-10","2021-02-11","2021-02-12","2021-02-13","2021-02-14","2021-02-15","2021-02-16","2021-02-17","2021-02-18","2021-02-19","2021-02-20","2021-02-21","2021-02-22","2021-02-23","2021-02-24","2021-02-25","2021-02-26","2021-02-27","2021-02-28","2021-03-01","2021-03-02","2021-03-03","2021-03-04","2021-03-05","2021-03-06","2021-03-07","2021-03-08","2021-03-09","2021-03-10","2021-03-11","2021-03-12","2021-03-13","2021-03-14","2021-03-15","2021-03-16","2021-03-17","2021-03-18","2021-03-19","2021-03-20","2021-03-21","2021-03-22","2021-03-23","2021-03-24","2021-03-25","2021-03-26","2021-03-27","2021-03-28","2021-03-29","2021-03-30","2021-03-31","2021-04-01","2021-04-02","2021-04-03","2021-04-04","2021-04-05","2021-04-06","2021-04-07","2021-04-08","2021-04-09","2021-04-10","2021-04-11","2021-04-12","2021-04-13","2021-04-14","2021-04-15","2021-04-16","2021-04-17","2021-04-18","2021-04-19","2021-04-20","2021-04-21","2021-04-22","2021-04-23","2021-04-24","2021-04-25","2021-04-26","2021-04-27","2021-04-28","2021-04-29","2021-04-30","2021-05-01","2021-05-02","2021-05-03","2021-05-04","2021-05-05","2021-05-06","2021-05-07","2021-05-08","2021-05-09","2021-05-10","2021-05-11","2021-05-12","2021-05-13","2021-05-14","2021-05-15","2021-05-16","2021-05-17","2021-05-18","2021-05-19","2021-05-20","2021-05-21","2021-05-22","2021-05-23","2021-05-24","2021-05-25","2021-05-26","2021-05-27","2021-05-28","2021-05-29","2021-05-30","2021-05-31","2021-06-01","2021-06-02","2021-06-03","2021-06-04","2021-06-05","2021-06-06","2021-06-07","2021-06-08","2021-06-09","2021-06-10","2021-06-11","2021-06-12","2021-06-13","2021-06-14","2021-06-15","2021-06-16","2021-06-17","2021-06-18","2021-06-19","2021-06-20","2021-06-21","2021-06-22","2021-06-23","2021-06-24","2021-06-25","2021-06-26","2021-06-27","2021-06-28","2021-06-29","2021-06-30","2021-07-01","2021-07-02","2021-07-03","2021-07-04","2021-07-05","2021-07-06","2021-07-07","2021-07-08","2021-07-09","2021-07-10","2021-07-11","2021-07-12","2021-07-13","2021-07-14","2021-07-15","2021-07-16","2021-07-17","2021-07-18","2021-07-19","2021-07-20","2021-07-21","2021-07-22","2021-07-23","2021-07-24","2021-07-25","2021-07-26","2021-07-27","2021-07-28","2021-07-29","2021-07-30","2021-07-31","2021-08-01","2021-08-02","2021-08-03","2021-08-04","2021-08-05","2021-08-06","2021-08-07","2021-08-08","2021-08-09","2021-08-10","2021-08-11","2021-08-12","2021-08-13","2021-08-14","2021-08-15","2021-08-16","2021-08-17","2021-08-18","2021-08-19","2021-08-20","2021-08-21","2021-08-22","2021-08-23","2021-08-24","2021-08-25","2021-08-26","2021-08-27","2021-08-28","2021-08-29","2021-08-30","2021-08-31","2021-09-01","2021-09-02","2021-09-03","2021-09-04","2021-09-05","2021-09-06","2021-09-07","2021-09-08","2021-09-09","2021-09-10","2021-09-11","2021-09-12","2021-09-13","2021-09-14","2021-09-15","2021-09-16","2021-09-17","2021-09-18","2021-09-19","2021-09-20","2021-09-21","2021-09-22","2021-09-23","2021-09-24","2021-09-25","2021-09-26","2021-09-27","2021-09-28","2021-09-29","2021-09-30","2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07","2021-10-08","2021-10-09","2021-10-10","2021-10-11","2021-10-12","2021-10-13","2021-10-14","2021-10-15","2021-10-16","2021-10-17","2021-10-18","2021-10-19","2021-10-20","2021-10-21","2021-10-22","2021-10-23","2021-10-24","2021-10-25","2021-10-26","2021-10-27","2021-10-28","2021-10-29","2021-10-30","2021-10-31","2021-11-01","2021-11-02","2021-11-03","2021-11-04","2021-11-05","2021-11-06","2021-11-07","2021-11-08","2021-11-09","2021-11-10","2021-11-11","2021-11-12","2021-11-13","2021-11-14","2021-11-15","2021-11-16","2021-11-17","2021-11-18","2021-11-19","2021-11-20","2021-11-21","2021-11-22","2021-11-23","2021-11-24","2021-11-25","2021-11-26","2021-11-27","2021-11-28","2021-11-29","2021-11-30","2021-12-01","2021-12-02","2021-12-03","2021-12-04","2021-12-05","2021-12-06","2021-12-07","2021-12-08","2021-12-09","2021-12-10","2021-12-11","2021-12-12","2021-12-13","2021-12-14","2021-12-15","2021-12-16","2021-12-17","2021-12-18","2021-12-19","2021-12-20","2021-12-21","2021-12-22","2021-12-23","2021-12-24","2021-12-25","2021-12-26","2021-12-27","2021-12-28","2021-12-29","2021-12-30","2021-12-31","2022-01-01","2022-01-02","2022-01-03","2022-01-04","2022-01-05","2022-01-06","2022-01-07","2022-01-08","2022-01-09","2022-01-10","2022-01-11","2022-01-12","2022-01-13","2022-01-14","2022-01-15","2022-01-16","2022-01-17","2022-01-18","2022-01-19","2022-01-20","2022-01-21","2022-01-22","2022-01-23","2022-01-24","2022-01-25","2022-01-26","2022-01-27","2022-01-28","2022-01-29","2022-01-30","2022-01-31","2022-02-01","2022-02-02","2022-02-03","2022-02-04","2022-02-05","2022-02-06","2022-02-07","2022-02-08","2022-02-09","2022-02-10","2022-02-11","2022-02-12","2022-02-13","2022-02-14","2022-02-15","2022-02-16","2022-02-17","2022-02-18","2022-02-19","2022-02-20","2022-02-21","2022-02-22","2022-02-23","2022-02-24","2022-02-25","2022-02-26","2022-02-27","2022-02-28","2022-03-01","2022-03-02","2022-03-03","2022-03-04","2022-03-05","2022-03-06","2022-03-07","2022-03-08","2022-03-09","2022-03-10","2022-03-11","2022-03-12","2022-03-13","2022-03-14","2022-03-15","2022-03-16","2022-03-17","2022-03-18","2022-03-19","2022-03-20","2022-03-21","2022-03-22","2022-03-23","2022-03-24","2022-03-25","2022-03-26","2022-03-27","2022-03-28","2022-03-29","2022-03-30","2022-03-31","2022-04-01","2022-04-02","2022-04-03","2022-04-04","2022-04-05","2022-04-06","2022-04-07","2022-04-08","2022-04-09","2022-04-10","2022-04-11","2022-04-12","2022-04-13","2022-04-14","2022-04-15","2022-04-16","2022-04-17","2022-04-18","2022-04-19","2022-04-20","2022-04-21","2022-04-22","2022-04-23","2022-04-24","2022-04-25","2022-04-26","2022-04-27","2022-04-28","2022-04-29","2022-04-30","2022-05-01","2022-05-02","2022-05-03","2022-05-04","2022-05-05","2022-05-06","2022-05-07","2022-05-08","2022-05-09","2022-05-10","2022-05-11","2022-05-12","2022-05-13","2022-05-14","2022-05-15","2022-05-16","2022-05-17","2022-05-18","2022-05-19","2022-05-20","2022-05-21","2022-05-22","2022-05-23","2022-05-24","2022-05-25","2022-05-26","2022-05-27","2022-05-28","2022-05-29","2022-05-30","2022-05-31","2022-06-01","2022-06-02","2022-06-03","2022-06-04","2022-06-05","2022-06-06","2022-06-07","2022-06-08","2022-06-09","2022-06-10","2022-06-11","2022-06-12","2022-06-13","2022-06-14","2022-06-15","2022-06-16","2022-06-17","2022-06-18","2022-06-19","2022-06-20","2022-06-21","2022-06-22","2022-06-23","2022-06-24","2022-06-25","2022-06-26","2022-06-27","2022-06-28","2022-06-29","2022-06-30"];function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g()(this,n)}}var H={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Ago:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dec"];function W(){var e=Date().toString().split(" ");return[e[3],H[e[1]],e[2]].join("-")}function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next",n=L[L.indexOf(e)+("previous"==t?-1:1)];return n}function J(e){for(var t=e.split("-"),n=0;n<12;n++)if(H[G[n]]==t[1])return t[2]+", "+G[n]}var q=function(e){d()(o,e);var t=V(o);function o(e){var n;return s()(this,o),(n=t.call(this,e)).state={userEntries:[],date:W(),time:Date().toString().split(" ")[4],selectedDate:W(),entriesLoading:!1,entriesSynced:!1},n.onNextButtonPress=n.onNextButtonPress.bind(l()(n)),n.forgetNewPost=n.forgetNewPost.bind(l()(n)),n}return a()(o,[{key:"componentDidMount",value:function(){console.log('"Entries" screen component did mount...')}},{key:"onNextButtonPress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";function t(){this.setState({selectedDate:F(this.state.selectedDate,e)})}return t.bind(this)}},{key:"selectedDateTitle",value:function(){var e=this.state.selectedDate,t=F(W(),"previous");F(t,"previous");return e===W()?"Hoje  ":e===t?"Ontem  ":""}},{key:"forgetNewPost",value:function(){function e(){this.props.navigation.setParams({newPost:!1}),this.setState({selectedDate:W()})}return e.bind(this)}},{key:"render",value:function(){var e=this;console.log('Rendering "Entries" screen...');var t=this.state.selectedDate===this.state.date;return Object(C.jsxs)(y.a,{source:n(140),style:[B.mainView],children:[Object(C.jsx)(E.a,{style:B.scrollView,children:Object(C.jsxs)(w.a,{style:B.section,children:[Object(C.jsxs)(w.a,{style:[B.cardRow,{justifyContent:"space-between"}],children:[Object(C.jsx)(O.a,{onPress:this.onNextButtonPress("previous"),children:Object(C.jsx)(b.Icon,{name:"arrow-back",width:35,height:35,fill:"white"})}),Object(C.jsxs)(j.a,{style:B.sectionTitle,children:[" ","Suas entradas  \u2022  "+this.selectedDateTitle()+J(this.state.selectedDate)," "]}),t?Object(C.jsx)(w.a,{}):Object(C.jsx)(O.a,{onPress:this.onNextButtonPress(),children:Object(C.jsx)(b.Icon,{name:"arrow-forward",width:35,height:35,fill:"white"})})]}),Object(C.jsx)(z,{userInfo:this.props.route.params.userInfo,newPost:this.props.route.params.newPost,forgetNewPost:this.forgetNewPost(),date:this.state.selectedDate})]})}),Object(C.jsx)(O.a,{onPress:function(){e.props.navigation.navigate("PostEntrance",{})},style:[B.postButton],children:Object(C.jsx)(b.Icon,{name:"plus-circle",width:72,height:72,fill:"white",style:B.postButtonLabel})})]})}}]),o}(m.Component),Y=n(8),K=n.n(Y),_=n(252),Q={entrances:{marginTop:I.a.currentHeight,borderWidth:0,flex:1,justifyContent:"space-between",alignItems:"flex-start"},content:{flexGrow:1,paddingBottom:"0%",paddingHorizontal:"5%",alignSelf:"stretch",borderColor:"black"},section:{paddingVertical:"10%",paddingHorizontal:"10%",justifyContent:"flex-start",borderTopWidth:1,borderBottomWidth:1},contentRow:{flexDirection:"column",padding:10,marginTop:22,borderWidth:1,borderColor:"rgba(155,155,155, 0.4)",borderRadius:30,backgroundColor:"rgba(255,255,255, 0.3)"},entryTitle:{paddingBottom:3,paddingLeft:5,fontSize:19,color:"white"},postButtonView:{height:60,width:60,borderRadius:30,alignSelf:"center",justifyContent:"center",alignItems:"center",backgroundColor:"white"},postButton:{},postButtonLabel:{fontSize:45,fontWeight:"bold"},moodButtonView:{width:65,height:65,alignItems:"center",justifyContent:"center"},moodButton:{height:53,width:53,borderRadius:30,justifyContent:"center",marginColor:"black",marginWidth:2},moodButtonBorder:{},date:{position:"relative",left:"60%",paddingVertical:8,paddingHorizontal:10,fontSize:15,alignSelf:"center",backgroundColor:"white",borderRadius:20},jornalText:{paddingVertical:5,paddingHorizontal:10,minHeight:170,width:"100%",borderRadius:20,color:"white",fontSize:16},saveButton:{height:50,width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,justifyContent:"center",alignItems:"center",backgroundColor:"white"},card:{marginTop:"5%",paddingVertical:5,paddingHorizontal:10,borderRadius:20,backgroundColor:"rgba(255,255,255,0.3)"},cardRow:{flexDirection:"row",paddingVertical:5,alignItems:"center"},moodBadge:{backgroundColor:"green",borderRadius:30,paddingVertical:6,width:130,fontSize:16,textAlign:"center"},emotionBadge:{backgroundColor:"rgba(1,1,1,0.5)",borderRadius:30,paddingVertical:7,paddingHorizontal:12.5,marginRight:6,fontSize:15,textAlign:"center"}};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){K()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g()(this,n)}}Q.emotionBadge={backgroundColor:"rgba(1,1,1,0.5)",borderRadius:30,paddingVertical:7,paddingHorizontal:12.5,marginRight:6,fontSize:15,textAlign:"center"},Q.text={fontSize:14};for(var ee=(new Date).toString().split(" "),te=ee[2]+" "+ee[1]+" "+ee[3]+" - "+ee[4].slice(0,5),ne=["Anima\xe7\xe3o","Concentra\xe7\xe3o","Desinibi\xe7\xe3o","Motiva\xe7\xe3o","Euforia"],oe=["Al\xedvio","Calma","Conforto","Despreocupa\xe7\xe3o","Inspira\xe7\xe3o","Orgulho","Paz","Relaxamento","Satisfa\xe7\xe3o","Seguran\xe7a"],re=["Agita\xe7\xe3o","Ansiosiedade","Tristeza","Decep\xe7\xe3o","Depress\xe3o","Desespero","Frustra\xe7\xe3o","Insatisfa\xe7\xe3o","Irrita\xe7\xe3o","Medo","Paranoia","Preocupa\xe7\xe3o","Impaciencia","Raiva","Revolta","Sobrecarregado(a)","Tens\xe3o","Nojo"],se=["Timidez","Cansa\xe7o","Confus\xe3o","Desanimo","Vergonha","Inseguran\xe7a","Ap\xe1tia","Solid\xe3o","T\xe9dio"],ie=[].concat(ne,oe,re,se),ae=[ne,oe,re,se],ce=["Bem & Energizado","Bem & Calmo","Mal e Energizado","Mal & Calmo"],le={},ue=0;ue<ie.length;ue++)le[ie[ue]]=!1;function de(){return Date().toString().split(" ")[4]}function he(){var e,t=Date().toString().split(" ");return[t[3],(e=t[1],["01","02","03","04","05","06","07","08","09","10","11","12"][["Jan","Feb","Mar","Apr","Jun","Jul","Ago","Sep","Oct","Nov","Dec"].indexOf(e)]),t[2]].join("-")}var ge=function(e){d()(o,e);var t=$(o);function o(e){var n;return s()(this,o),(n=t.call(this,e)).state={moodButtons:{colors:["#f91f1f","blue","bisque","#fff00f","forestgreen"],colorsSelected:["darkred","darkblue","grey","goldenrod","darkgreen"],moods:["Horr\xedvel","Mal","Regular","Bem","\xd3timo"]},emotionButtons:{isSelectedEmotions:le,basicEmotions:ie,emotionGroups:ae},star:!1,selectedMood:null,jornalEntry:"",emotions:[],address:"",startTime:de(),selectedEntry:"Mood",isLoading:!1},n.onSaveButtonPress=n.onSaveButtonPress.bind(l()(n)),n.EmotionButtons=n.EmotionButtons.bind(l()(n)),n.MoodButtons=n.MoodButtons.bind(l()(n)),n.postEntryHeader=n.postEntryHeader.bind(l()(n)),n.onEmotionButtonPress=n.onEmotionButtonPress.bind(l()(n)),n.onMoodButtonPress=n.onMoodButtonPress.bind(l()(n)),n.inputSection=n.inputSection.bind(l()(n)),n.setSelectedEntry=n.setSelectedEntry.bind(l()(n)),n.InputCard=n.InputCard.bind(l()(n)),n.JornalInput=n.JornalInput.bind(l()(n)),n.postNewEntryAsync=n.postNewEntryAsync.bind(l()(n)),n}return a()(o,[{key:"postEntryHeader",value:function(){var e=this;return Object(C.jsxs)(w.a,{style:[B.cardRow,{justifyContent:"space-between"}],children:[Object(C.jsx)(O.a,{onPress:function(){e.props.navigation.goBack()},style:Q.postButton,children:Object(C.jsx)(b.Icon,{name:"arrow-back",fill:"white",height:30,width:30})}),Object(C.jsxs)(w.a,{style:[B.emotionBadge,{flexDirection:"row"}],children:[Object(C.jsxs)(j.a,{children:[" ",te," "]}),Object(C.jsx)(b.Icon,{name:"edit",fill:"rgba(75,75,75,1)",height:20,width:20})]}),Object(C.jsx)(O.a,{onPress:function(){e.setState({star:!e.state.star})},style:Q.postButton,children:Object(C.jsx)(b.Icon,{name:this.state.star?"star":"star-outline",fill:"rgba(245,245,245,0.7)",height:30,width:30})})]})}},{key:"onMoodButtonPress",value:function(e){function t(){this.state.selectedMood==e?this.setState({selectedMood:null}):this.setState({selectedMood:e})}return t=t.bind(this)}},{key:"MoodButtons",value:function(){var e=this;return this.state.moodButtons.moods.map((function(t,n){var o={width:65,height:65,alignItems:"center",justifyContent:"center",borderWidth:e.state.selectedMood==t?3:0,borderRadius:32.5,borderColor:e.state.moodButtons.colors[n]},r=e.state.moodButtons.colors[n];return Object(C.jsx)(w.a,{style:o,children:Object(C.jsx)(O.a,{title:t,onPress:e.onMoodButtonPress(t),style:[Q.moodButton,e.state.selectedMood==t?{fontWeight:"bold",backgroundColor:r}:{fontWeight:null,backgroundColor:r}],children:Object(C.jsx)(j.a,{style:{textAlign:"center",textAlignVertical:"center"},children:t})})},"mood "+n)}))}},{key:"onEmotionButtonPress",value:function(e){function t(){this.setState({emotionButtons:Z(Z({},this.state.emotionButtons),{},{isSelectedEmotions:Z(Z({},this.state.emotionButtons.isSelectedEmotions),{},K()({},e,!this.state.emotionButtons.isSelectedEmotions[e]))})})}return t=t.bind(this)}},{key:"EmotionButtons",value:function(e){var t=this;return e.map((function(e){return Object(C.jsx)(O.a,{title:e,style:{paddingVertical:5},onPress:t.onEmotionButtonPress(e),children:Object(C.jsx)(j.a,{style:[Q.emotionBadge,{backgroundColor:t.state.emotionButtons.isSelectedEmotions[e]?"lightblue":"white"}],children:e})})}))}},{key:"JornalInput",value:function(){var e=this;return Object(C.jsx)(_.a,{multiline:!0,placeholder:"Today was...",style:Q.jornalText,onChangeText:function(t){return e.setState({jornalEntry:t})},value:this.state.jornalEntry})}},{key:"setSelectedEntry",value:function(e){function t(){this.setState({selectedEntry:this.state.selectedEntry===e?null:e})}return t=t.bind(this)}},{key:"inputSection",value:function(e,t,n){return this.state.selectedEntry===e?"Emotions"==e?this.state.emotionButtons.emotionGroups.map((function(e,o){return Object(C.jsxs)(w.a,{style:{width:"100%",alignItems:"center"},children:[Object(C.jsx)(j.a,{style:{fontSize:15,color:"white",paddingVertical:11},children:ce[o]}),Object(C.jsx)(w.a,{style:[B.cardRow,t],children:n(e)},o)]})})):Object(C.jsx)(w.a,{style:[B.cardRow,t],children:n}):Object(C.jsx)(C.Fragment,{})}},{key:"InputCard",value:function(e,t,n,o,r){return Object(C.jsxs)(w.a,{style:[B.card],children:[Object(C.jsxs)(O.a,{style:B.cardRow,onPress:this.setSelectedEntry(e),children:[Object(C.jsx)(b.Icon,{name:n,fill:"rgba(255,255,255,0.75)",height:25,width:25,style:B.entryIcon}),Object(C.jsxs)(j.a,{style:Q.entryTitle,children:[" ",t," "]})]}),this.inputSection(e=e,o=o,r=r)]})}},{key:"onSaveButtonPress",value:function(){var e=this;if(this.state.selectedMood){var t={jornal:this.state.jornalEntry,mood:this.state.selectedMood,emotions:this.state.emotionButtons.basicEmotions.filter((function(t){return e.state.emotionButtons.isSelectedEmotions[t]})),address:this.state.address,date:he(),startTime:this.state.startTime,endTime:de(),star:this.state.star};this.postNewEntryAsync(t)}else alert("Necess\xe1rio adicionar uma avalia\xe7\xe3o.")}},{key:"postNewEntryAsync",value:function(e){var t,n,o;return k.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return this.setState({isLoading:!0}),t=this.props.route.params.userInfo,r.prev=2,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},r.next=6,k.a.awrap(fetch("https://morning-journey-78874.herokuapp.com/https://mood-tracker-server.herokuapp.com/Users/"+t.username+"/entries",n));case 6:if(!(o=r.sent).ok){r.next=13;break}console.log("fetch POST request successful"),console.log("Status: "+o.status+", "+o.statusText),this.props.navigation.navigate("Entrances",{newPost:!0}),r.next=15;break;case 13:throw console.log("fetch POST request failed. Throwing error..."),new Error("Status: "+o.status+", "+o.statusText);case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(2),console.log("Erro capturado:"),console.log(r.t0);case 21:return r.prev=21,this.setState({isLoading:!1}),r.finish(21);case 24:case"end":return r.stop()}}),null,this,[[2,17,21,24]],Promise)}},{key:"render",value:function(){return console.log('Rendering "Post Entry" screen...'),Object(C.jsxs)(y.a,{source:n(140),style:B.mainView,children:[Object(C.jsx)(E.a,{style:B.scrollView,children:Object(C.jsxs)(w.a,{style:B.section,children:[this.postEntryHeader(),this.InputCard("Mood","Avalia\xe7\xe3o","smiling-face",{justifyContent:"space-between"},this.MoodButtons()),this.InputCard("Emotions","Emo\xe7\xf5es","checkmark-square-outline",{flexWrap:"wrap",justifyContent:"space-evenly"},this.EmotionButtons),this.InputCard("Jornal","Jornal","book",{flexDirection:"column"},this.JornalInput())]})}),Object(C.jsx)(O.a,{onPress:this.onSaveButtonPress,style:Q.saveButton,children:Object(C.jsx)(j.a,{style:{fontWeight:"bold",fontSize:17},children:"Salvar"})})]})}}]),o}(m.Component),fe=n(102),pe={login:{mainView:{flex:1,justifyContent:"center",alignItems:"center"},titleView:{flexDirection:"row",justifyContent:"center",alignItems:"center",minHeight:60},title:{fontSize:25,fontWeight:"bold",color:"white",alignSelf:"center"},titleIcon:{paddingLeft:6,paddingTop:3},card:{height:"55%",minHeight:390,width:350,paddingHorizontal:10,paddingVertical:10,borderWidth:1,borderRadius:10,backgroundColor:"azure"},cardHeader:{height:"25%",width:"100%"},cardTitle:{position:"relative",top:"30%",left:"5%",fontSize:24,fontWeight:"bold",color:"black"},cardSection:{height:"25%",justifyContent:"space-evenly",alignItems:"center"},loadingIcon:{alignSelf:"center"},inputField:{minHeight:40,width:"100%",paddingLeft:10,fontSize:14,borderWidth:1,borderRadius:5,backgroundColor:"white"},button:{height:40,width:"100%",textAlign:"center",justifyContent:"center",borderWidth:1,borderRadius:5,borderColor:"white",backgroundColor:"lightblue"},buttonLabel:{fontSize:15,fontWeight:"bold",color:"black"},text:{fontSize:15,textAlign:"center"},msgBox:{width:350,height:36,justifyContent:"center",backgroundColor:"rgb(30,30,30)",borderWidth:1,borderColor:"rgb(40,40,40)"},msg:{textAlign:"center",color:"white"}}};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){K()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g()(this,n)}}var ye="https://morning-journey-78874.herokuapp.com/",xe=function(e){d()(o,e);var t=je(o);function o(e){var n;return s()(this,o),(n=t.call(this,e)).state={userInfo:{password:"",email:"",username:""},loginMsg:"",isUserAuth:!1,isDataLoading:!1},n.onChangeText=n.onChangeText.bind(l()(n)),n.submitButton=n.submitButton.bind(l()(n)),n.loginMsg=n.loginMsg.bind(l()(n)),n.setLoginMsg=n.setLoginMsg.bind(l()(n)),n.onSignIn=n.onSignIn.bind(l()(n)),n.onSignUp=n.onSignUp.bind(l()(n)),n}return a()(o,[{key:"loadingIcon",value:function(){return this.state.isDataLoading?Object(C.jsx)(b.Icon,{name:"loader-outline",animation:"pulse",width:25,height:25}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(b.Icon,{name:"log-in-outline",animation:"pulse",width:25,height:25})})}},{key:"setLoginMsg",value:function(e){var t=this;this.setState({loginMsg:e}),setTimeout((function(){return t.setState({loginMsg:""})}),5e3)}},{key:"loginMsg",value:function(){return Object(C.jsx)(w.a,{style:[pe.login.msgBox,this.state.loginMsg?{}:{backgroundColor:"transparent",borderColor:"transparent"}],children:Object(C.jsx)(j.a,{style:pe.login.msg,children:this.state.loginMsg})})}},{key:"onChangeText",value:function(e){function t(t){this.setState({userInfo:me(me({},this.state.userInfo),{},K()({},e,t))})}return t=t.bind(this)}},{key:"submitButton",value:function(e){var t="signin"==e;return Object(C.jsx)(O.a,{onPress:t?this.onSignIn:this.onSignUp,style:[pe.login.button],children:Object(C.jsx)(j.a,{style:pe.login.buttonLabel,children:t?"Entrar":"Cadastrar"})})}},{key:"encryptedPassword",value:function(){for(var e="",t=0;t<this.state.userInfo.password.length;t++)e+="*";return e}},{key:"LoginScreen",value:function(){return Object(C.jsxs)(y.a,{source:n(140),style:[pe.login.mainView,{justifyContent:"space-evenly"}],children:[Object(C.jsxs)(w.a,{style:pe.login.titleView,children:[Object(C.jsx)(j.a,{style:pe.login.title,children:"Mood Tracker"}),Object(C.jsx)(b.Icon,{name:"clock-outline",width:25,height:25,fill:"white",animation:"pulse",style:pe.login.titleIcon})]}),Object(C.jsxs)(w.a,{style:pe.login.card,children:[Object(C.jsx)(w.a,{style:pe.login.cardHeader,children:Object(C.jsx)(j.a,{style:pe.login.cardTitle,children:"Entrar"})}),Object(C.jsxs)(w.a,{style:pe.login.cardSection,children:[Object(C.jsx)(fe.a,{placeholder:"Email",onChangeText:this.onChangeText("email"),style:pe.login.inputField,autoComplete:"email",importantForAutofill:"yes"}),Object(C.jsx)(fe.a,{placeholder:"Senha",onChangeText:this.onChangeText("password"),style:pe.login.inputField,secureTextEntry:!0,autoComplete:"password",importantForAutofill:"yes"})]}),Object(C.jsxs)(w.a,{style:pe.login.cardSection,children:[this.submitButton("signin"),this.submitButton("signup")]}),Object(C.jsx)(w.a,{style:[pe.login.cardSection],children:this.loadingIcon()})]}),this.loginMsg()]})}},{key:"onSignIn",value:function(){var e,t,n,o,r,s;return k.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("SIGNIN STATUS: started..."),e=this.state.userInfo,this.setState({isDataLoading:!0}),i.prev=3,i.next=6,k.a.awrap(fetch(ye+"https://mood-tracker-server.herokuapp.com/Users",{method:"GET"}));case 6:if(t=i.sent,n="Status: "+t.status+", "+t.statusText,!t.ok){i.next=13;break}console.log("fetch GET request for users data at signin successful."),console.log(n),i.next=15;break;case 13:throw console.log("fetch GET request for users data at signin failed. Throwing error..."),new Error(n);case 15:return i.next=17,k.a.awrap(t.json());case 17:o=i.sent,(r=o.filter((function(t){return t.email===e.email}))[0])?r.password===e.password?(s=me(me({},e),{},{username:e.email.split("@")[0]}),this.setState({isUserAuth:!0,userInfo:s}),"Login realizado com sucesso!",this.setLoginMsg("Login realizado com sucesso!"),console.log("SIGNIN STATUS: Sucesso.")):("Senha incorreta.",this.setLoginMsg("Senha incorreta."),console.log("SIGNIN STATUS: Senha incorreta.")):("Email n\xe3o cadastrado!",this.setLoginMsg("Email n\xe3o cadastrado!"),console.log("SIGNIN STATUS: Email n\xe3o cadastrado!")),i.next=29;break;case 22:i.prev=22,i.t0=i.catch(3),"Erro no servidor! Tente novamente...",this.setLoginMsg("Erro no servidor! Tente novamente..."),console.log("Error catched in fetch GET request for users data at  signin. Printing Error..."),console.log("SIGNIN STATUS:Erro capturado. Imprimindo erro..."),console.log(i.t0);case 29:return i.prev=29,this.setState({isDataLoading:!1}),console.log("SIGNIN STATUS: Concluido."),this.state.isUserAuth&&this.props.authUser(this.state.userInfo),i.finish(29);case 34:case"end":return i.stop()}}),null,this,[[3,22,29,34]],Promise)}},{key:"onSignUp",value:function(){var e,t,n,o,r,s,i,a,c,l;return k.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("SIGNUP STATUS: started..."),e=this.state.userInfo,this.setState({isDataLoading:!0}),u.prev=3,u.next=6,k.a.awrap(fetch(ye+"https://mood-tracker-server.herokuapp.com/Users",{method:"GET"}));case 6:if(t=u.sent,n="Status: "+t.status+", "+t.statusText,!t.ok){u.next=13;break}console.log("fetch GET request for users data at signup successful."),console.log(n),u.next=15;break;case 13:throw console.log("fetch GET request for users data at signup failed. Throwing error..."),new Error(n);case 15:return u.next=17,k.a.awrap(t.json());case 17:if(o=u.sent,r=o.filter((function(t){return t.email===e.email}))[0],s={ok:!1},r){u.next=39;break}return e.username=e.email.split("@")[0],i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(me({entries:[]},e))},u.next=25,k.a.awrap(fetch(ye+"https://mood-tracker-server.herokuapp.com/Users/"+e.username,i));case 25:if(s=u.sent,a="Status: "+s.status+", "+s.statusText,!s.ok){u.next=35;break}c="Cadastro realizado com sucesso!",this.setLoginMsg(c),console.log("fetch POST request for user data at signup successful."),console.log(a),console.log("SING UP STATUS: "+c),u.next=37;break;case 35:throw console.log("fetch POST request for user data at signup failed. Throwing error..."),new Error(a);case 37:u.next=42;break;case 39:l="Email j\xe1 cadastrado.",this.setLoginMsg(l),console.log("SING UP STATUS: "+l);case 42:u.next=50;break;case 44:u.prev=44,u.t0=u.catch(3),"Erro no servidor, n\xe3o foi poss\xedvel realizar o cadastro. Por favor, tente novamente.",this.setLoginMsg("Erro no servidor, n\xe3o foi poss\xedvel realizar o cadastro. Por favor, tente novamente."),console.log("SING UP STATUS: Erro capturado. Imprimindo erro..."),console.log(u.t0);case 50:return u.prev=50,this.setState({isDataLoading:!1}),console.log("SING UP STATUS: Concluido."),s.ok&&this.onSignIn(),u.finish(50);case 55:case"end":return u.stop()}}),null,this,[[3,44,50,55]],Promise)}},{key:"render",value:function(){return console.log('Rendering "LoginComponent" screen...'),this.LoginScreen()}}]),o}(m.Component);function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g()(this,n)}}var ve=Object(v.a)(),we=Object(S.a)();function Oe(e){return Object(C.jsxs)(we.Navigator,{initialRouteName:"Entrances",screenOptions:{headerShown:!1},children:[Object(C.jsx)(we.Screen,{name:"Entrances",component:q,options:{title:"Suas entradas"},initialParams:{userInfo:e.route.params.userInfo}}),Object(C.jsx)(we.Screen,{name:"PostEntrance",component:ge,options:{title:"Adicione uma  entrada"},initialParams:{userInfo:e.route.params.userInfo}})]})}function Ee(){return Object(C.jsx)(y.a,{source:n(140),style:{width:"100%",height:"100%"},children:Object(C.jsx)(j.a,{children:"Settings"})})}var Te=function(e){var t=e.route;return{headerShown:!1,tabBarActiveTintColor:"tomato",tabBarInactiveTintColor:"gray",tabBarHideOnKeyboard:!0,tabBarIcon:function(e){var n,o=e.focused,r=(e.color,e.size);return"Home"===t.name?n=o?"home":"home-outline":"Settings"===t.name&&(n=o?"settings":"settings-outline"),Object(C.jsx)(b.Icon,{name:n,width:r,height:r,fill:"rgb(35,35,35)"})}}},ke=function(e){d()(n,e);var t=Se(n);function n(e){var o;return s()(this,n),(o=t.call(this,e)).state={isUserAuth:!1,userInfo:null},o.authUser=o.authUser.bind(l()(o)),o}return a()(n,[{key:"authUser",value:function(e){console.log('User authenticated. Navigating to "Entries" screen...'),this.setState({isUserAuth:!0,userInfo:e})}},{key:"render",value:function(){return this.state.isUserAuth?Object(C.jsx)(x.a,{children:Object(C.jsxs)(ve.Navigator,{screenOptions:Te,children:[Object(C.jsx)(ve.Screen,{name:"Home",component:Oe,initialParams:{userInfo:this.state.userInfo}}),Object(C.jsx)(ve.Screen,{name:"Settings",component:Ee,initialParams:{userInfo:this.state.userInfo}})]})}):Object(C.jsx)(xe,{authUser:this.authUser})}}]),n}(m.Component);Object(o.a)(ke)}},[[257,1,2]]]);
//# sourceMappingURL=app.45076c04.chunk.js.map
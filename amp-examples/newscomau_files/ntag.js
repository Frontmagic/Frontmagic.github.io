// NTag 2016-09-08T04:23:09.056Z 5e91952296e7818242aee692d05a419bb2d73852

(function() {var w=window;utag_data=w.utag_data||{};nb=w.nb||[];newskey=w.newskey||{};var ud=utag_data;
    !function e(t,n,s){function i(a,r){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!r&&c)return c(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,e,t,n,s)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<s.length;a++)i(s[a]);return i}({1:[function(e,t){var n=e(1),s={loadLib:function(){window.ndm=window.ndm||{},window.ndm.cam=window.ndm.cam||{},window.envoy_config=window.envoy_config||{},window.envoy_config.preEventQueue=window.envoy_config.preEventQueue||[],window.utag_data=window.utag_data||{},function(e,t,n,s,i,o,a){var r="envoyssl",c="https:"===document.location.protocol?"https://"+r+".":"http://"+r+".";e[i]={},o=t.createElement(n),a=t.getElementsByTagName(n)[0],s=c+s,o.async=1,o.src=s,a.parentNode.insertBefore(o,a)}(window,document,"script","newscdn.com.au/service/concat.js?envoy&identity&siteid=dtw","newscdn")},login:function(e){var t=window;t.newscdn.envoy.subscribe("envoy/identity/user/details",function(t){"logged-in"===t.status&&t.userDetails&&t.userDetails.sid&&e&&e(t)})},init:function(){s.willLoad=!1,s.loaded=!1,s.details=n.get("dpipeUser"),n.unset("dpipeUser"),s.details&&(s.details=JSON.parse(s.details));var e=function(e){var t=s.details={};t.memtype=e.memtype;var i=e.userDetails;i&&(t.pcsid=i.sid,t.authProvider=i.authProvider),n.set("dpipeUser",JSON.stringify(t)),s.loaded=!0,nb.push(["data:idaas:userDetailsLoaded",t])},t=function(){s.willLoad=!0;var t=w.newscdn.envoy.config("identity");t&&t.aclResponse?e(t.aclResponse):s.login(e)};w.newscdn&&w.newscdn.envoy?t():(s.willLoad=w.envoy_config,w._envq=w._envq||[],w._envq.push(t))},checkIfChanged:function(){var e=s.details&&s.details.pcsid||ud.pc_pcsid,t=n.get("dpipe_pcsid");(!e||/none/i.test(e))&&(e=null),(!t||/none/i.test(t))&&(t=null),t!=e&&(e?nb.push(["data:login",{pcsid:e,old:t}]):nb.push(["data:logout",{old:t}])),e?n.set("dpipe_pcsid",e):n.unset("dpipe_pcsid")}};t.exports=s},{1:8}],2:[function(e,t){{var n=e(2);e(1)}t.exports={call:function(e,t){{var s=window,i=s.utag_data;i.pc_pcsid}return t||window.newskey&&window.newskey.nk&&(t="newskey_"+window.newskey.nk),t?(n.jsonp("//audienceapi.newsdiscover.com.au/person/"+t+"/targeting",e),t):!1}}},{1:3,2:7}],3:[function(e,t){t.exports={set:function(e,t,n,s){var i,o;s=s?"; domain="+s:"",o=escape(t)+"; path=/"+s,-1==n?(i=new Date(0),o+="; expires="+i.toUTCString()):parseInt(n,10)>0&&(i=new Date((new Date).getTime()+6e4*n),o+="; expires="+i.toUTCString()),document.cookie=e+"="+o},get:function(e){var t=new RegExp("(?:^"+e+"|; *"+e+")=(.*?)(?:;|$)","g"),n=t.exec(document.cookie);return null===n?null:n[1]}}},{}],4:[function(e,t){var n=e(1),s=function i(e,t){var n,s=[],o=0,a=".";for(var r in e)if("[object Array]"===Object.prototype.toString.call(e[r]))s.push({k:t+a+r,v:e[r].join(",")});else if("object"==typeof e[r])for(n=i(e[r],t+a+r),o=0;o<n.length;o++)s.push(n[o]);else s.push({k:t+a+r,v:e[r]});return s};t.exports={clear:function(){var e=0,t=(n.get("disc_keys")||"").split("|");for(e=0;e<t.length;e++)n.unset(t[e])},update:function(e){var t,i,o=[];for(this.clear(),t=s(e,"disc"),i=0;i<t.length;i++)n.set(t[i].k,t[i].v),o.push(t[i].k);n.set("disc_keys",o.join("|"))}}},{1:8}],5:[function(e,t){var n=e(2),s=e(1),i=e(3),o={id:"01",url:"//ps.eyeota.net/match",shouldRun:function(){var e=/MSIE ([1-9]|10)\./.test(navigator.userAgent),t=/AppleWebKit/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor),s=i.isBot();return!s&&!e&&!t&&n.checkOrSchedule(o.id,604800)},queuePixel:function(){var e=window.newskey?window.newskey.nk:"",t=(new Date).getTime().toString()+Math.random();s.pixel({bid:"hc9gdbu",r:document.location.protocol+"//pixel.newsdiscover.com.au/px2.gif?et=01&net_uid="+e+"&cb="+t+"&bids=01&bidv={UUID_hc9gdbu}"},o.url),n.update(o.id)}};t.exports=o},{1:12,2:14,3:15}],6:[function(e,t){t.exports=function(){for(var e="",t=location.hostname.split("."),n=t.length-1;n>=0;n--)if(e=t.slice(n).join("."),document.cookie="domtes2=1;path=/;domain="+e,/domtes2=1/.test(document.cookie.toString())){document.cookie="domtes2=;path=/;expires="+new Date(0).toUTCString()+";domain="+e;break}return e}},{}],7:[function(e,t,n){n.jsonp=function(e,t){var n=Math.round(1e6*Math.random()),s=(new Date).getTime(),i="dpipe_audi_cb"+s+n,o=document.createElement("script");window[i]=t,o.async=!0,o.src=e+(/\?/.test(e)?"&":"?")+"callback="+i+"&"+s,scrs=document.getElementsByTagName("script")[0],scrs.parentNode.insertBefore(o,scrs)}},{}],8:[function(e,t){var n=e(1),s=function(){};s.prototype={storage:localStorage,cookieTime:5256e3,session:function(){var e=new s;return e.storage=sessionStorage,e.cookieTime=null,e},set:function(e,t){try{return this.storage.setItem(e,t)}catch(s){return n.set(e,t,this.cookieTime)}},get:function(e){var t="";try{t=this.storage.getItem(e)}catch(s){}return t||(t=n.get(e)||""),t},unset:function(e){try{return this.storage.removeItem(e)}catch(t){return n.set(e,value,-1)}}},t.exports=new s},{1:3}],9:[function(e,t,n){var s=e(1);n.pixel=function(e,t,n,i){s.pixel(e,"//pixel.newsdiscover.com.au/"+t,n,i)}},{1:12}],10:[function(){var e=w.nb||[];if(e.pop){var t=/(\?|\&)nbd=1($|\&)/.test(location.search);if(t){var n=document.createElement("script");n.src="//tags.news.com.au/prod/ntag/nbv.js",document.getElementsByTagName("head")[0].appendChild(n)}for(var s=w.nb={push:function(e){var n,s=e[0],i=e[1],o=e[2]||!1,a=this.l[s]=this.l[s]||[],r=this.o[s]=this.o[s]||[];if("function"==typeof i){if(o){var c=function(){var e=[].slice.apply(arguments);i.apply(this,e),a[a.indexOf(c)]=function(){}};a.push(c)}else a.push(i);for(n=0;n<r.length;n++){if(t)i(r[n]);else try{i(r[n])}catch(d){w.console&&console.log(d.message||d)}if(o)break}}else{for(n=0;n<a.length;n++)if(t)a[n](i);else try{a[n](i)}catch(d){w.console&&console.log(d.message||d)}r.push(i)}return this},l:{},o:{}},i=0;i<e.length;i++)s.push(e[i])}},{}],11:[function(e,t){var n=e(2),s=e(1);t.exports=function(e){var t="asdfghjkl"==s.get("TAO");e?e&&(s.set("TAO","asdfghjkl",525600),t||n.jsonp("//services.krxd.net/consumer/optout",function(){})):t&&(s.set("TAO","",-1),n.jsonp("//services.krxd.net/consumer/optin",function(){}))}},{1:3,2:7}],12:[function(e,t,n){n.pixel=function(e,t,n,s){if(!t)throw new Exception("Expecting a pixel name in second parameter");var i=[];for(var o in e)void 0!==e[o]&&i.push(o+"="+encodeURIComponent(e[o]));if(i.length>1){var a=new Image;n&&(a.onload=n),s&&(a.onerror=s),a.src=t+"?"+i.join("&")}}},{}],13:[function(e,t){var n=e(3),s=e(7),i=e(2),o=e(8),a=e(9),r=e(4),c=e(1),d=e(5),u=e(6),p=e(10),_=function(){a(n.get("disc_oo")||"y"==n.get("yoc"))},l=function(){var e=i.call(function(t){if(t.ret){if(t.ret.dis_segs&&t.ret.dis_segs.indexOf("DIS_INV")>=0)return u.jsonp("//tags.news.com.au/prod/utrack/utrack.js?reset="+window.newskey.nk,function(){window.console&&console.log("INVALID NEWSKEY FOUND, RESETTING")}),void 0;r.update(t.ret),/newskey/.test(e)&&(t.ret.opt_out?(n.set("disc_oo",1,1440),n.set("yoc","y",1576800,d())):(n.set("disc_oo","",-1),n.set("yoc","",-1,d())))}var s=!1;if(t.aka&&t.aka["aka-id"]){var o=t.aka["aka-id"],a=n.get("kx_pub_fpuserid");a!=o&&(n.set("kx_pub_fpuserid",o,525600),s=!0),-1==o.indexOf(e)&&/pcsid_/.test(o)&&i.call(function(e){e.ret&&r.update(e.ret)},o)}_(),v(),nb.push(["data:aapiResponse",{response:t,akaidChanged:s}])})},w=function(e,t){var i=e;i._et="view",i._du=document.URL,document.referrer&&(i._dr=document.referrer);var o=n.get("nk_src"),a=n.get("nk_ts"),r=s.get("l_nk_chk")||"",d=s.get("net_site_uid");r||(s.set("l_nk_chk",("000"+Math.random().toString().slice(2)).slice(-17)),r=s.get("l_nk_chk")||"nolocal"+window.location.host.replace(/[.:]/g,"")),i.net_uid="";var u=c.details;u&&(u.pcsid&&(i.pc_pcsid=u.pcsid),u.memtype&&(i.pc_memtype=u.memtype,"anonymous"==u.memtype&&utag_data.pc_memtype&&(i.pc_memtype=utag_data.pc_memtype))),p.isBot()&&(ud.net_isbot="true");var _=["api_address_override","app_conn_type","app_pi_date","app_pi_day","app_pi_hour","app_version","ev_action","ev_cat","ev_label","ev_value","interactive_info","mp_mlc_path","mp_section_id","mp_story_id","net_article_byline","net_article_headline","net_article_id","net_content_type","net_platform","net_pn","net_section","net_site","net_site_uid","net_sub_uid","net_sub_uid_hit","net_site_udb","net_subsec","net_subsubsec","net_subsubsubsec","pc_acclevel","pc_byref","pc_conttypegrant","pc_conttyperule","pc_memtype","pc_pcsid","pc_think_src","pg_auto_refresh","ss_apps_device_type","ss_apps_device_type","ss_apps_orientation","newskey_geo_network","ss_mp_story_id","ss_osca_desc","ss_osca_postcode","ss_osca_price","ss_osca_promocode","ss_sp_ads","ss_sp_ads_string","ss_sp_agegrp","ss_sp_busunit","ss_sp_clubid","ss_sp_country","ss_sp_eid","ss_sp_etid","ss_sp_ga_url","ss_sp_gaaccoun","ss_sp_leagueid","ss_sp_leaguename","ss_sp_lga","ss_sp_prod","ss_sp_sportcode","ss_sp_sportname","ss_sp_state","vid_category","vid_media_id","vid_player_type","vid_title","vid_video_src","net_article_source","net_isbot","ss_co_company","ss_co_industry","ss_co_jobtitle","ss_co_keyword","ss_co_loc","ss_co_occupation","ss_co_skills","ss_sp_agegrp2","ss_sp_pc2","ss_deal_postcode","ss_deal_gender","ss_deal_product_category","ss_deal_cctype","ss_deal_agegroup","ss_deal_id_viewed","ss_deal_id_purchased","ss_deal_purchased_confirmation","ss_deal_name_viewed","ss_deal_name_purchased","ss_deal_start_date","ss_deal_end_date","ss_deal_rrp_price","ss_deal_purchase_price","ss_deal_discount_amount","ss_deal_discount_percent","ss_deal_target_location","ss_deal_redeem_location","ss_deal_referrer","nk_busted"],l=[/^ss_cg_.+$/,/^sops_.+$/,/^re_.+$/],w={prev_cbd:"cbd",net_sec1:"net_section",net_sec2:"net_subsec",net_sec3:"net_subsubsec",net_sec4:"net_subsubsubsec","cp.utag_ulog__vi":"_vi","cp.utag_ulog__fs":"_fs","cp.utag_ulog__cs":"_cs","cp.utag_ulog__sc":"_sc","cp.utag_ulog__ec":"_ec","cp.utag_ulog__evc":"_evc"};for(var g in _)i[_[g]]=i[_[g]]||ud[_[g]];for(var h in ud)for(var f=0;f<l.length;f++){var m=h.toString().match(l[f]);if(m){var k=m[1]||m[0];i[k]||(i[k]=ud[h])}}for(var v in w)i[w[v]]=i[w[v]]||ud[v];!i.net_site_uid&&d&&(i.net_site_uid=d),i.net_site_uid&&!i.net_site_udb&&(i.net_site_udb=utag_data.net_site),window.newskey&&window.newskey.nk&&(i.nk=i.net_uid=window.newskey.nk,i.nk_src=window.newskey.nk_src,i.nk_ts=window.newskey.nk_ts,i.nk_isnew=window.newskey.isnew?1:0,i.nk_chk=(window.newskey.checksum||"")+"-"+r,utag_data.utrack_cb&&window.newskey.cb&&utag_data.utrack_cb!=window.newskey.cb&&(i.nk_src+="|cached"),i.nk_utl=window.newskey.utrack_loaded?1:0,i.l_nk_src=o,i.l_nk_ts=a,window.newskey.l_prev_nk&&(i.l_prev_nk=window.newskey.l_prev_nk),window.newskey.prev_nk&&window.newskey.prev_nk!=window.newskey.nk&&(i.prev_nk=window.newskey.prev_nk)),!ud.ad_ppid||ud.newskey&&ud.ad_ppid.match(ud.newskey)||(i.ppid=ud.ad_ppid.replace(/^0+/,"")),i.ad_krux_segs=s.get("kxsegs"),i.ad_krux_user=s.get("kxuser"),i.app_pi_ts=(new Date).getTime(),i.app_pi_tz=-(new Date).getTimezoneOffset()/60,window.outerHeight?(i.bhgt=window.outerHeight,i.bwdth=window.outerWidth):document.documentElement&&document.documentElement.clientHeight?(i.bhgt=document.documentElement.clientHeight,i.bwdth=document.documentElement.clientWidth):(i.bhgt="",i.bwdth="");var y=["pc_pcsid","net_uid","disc_postcode","disc_lat","disc_long","net_sub_uid","net_site_udb","net_site_uid","et","opt_out_status","email"];if("px1.gif"==t){var b={};for(var x in y)i[y[x]]&&(b[y[x]]=i[y[x]]);return b}return i},g=function(e,t){var n=w(e,t),s=function(e){return function(){nb.push(["pixel:loaded",e])}},i=function(e){return function(){nb.push(["pixel:notloaded",e])}};o.pixel(n,t,s(t),i(t)),"px1.gif"==t&&k()},h=function(e,t){t||(t="px1.gif");var n=!1,s=!1,i=!1,o=function(){!n&&s&&i&&(n=!0,g(e,t))},a=function(){i=!0,o()},r=function(){s=!0,o()};nb.push(["newskey:utrackLoaded",function(){a()}]),setTimeout(function(){a()},2e3),ud.wait_for&&ud.wait_for.length?(nb.push(["ppid:id",r]),nb.push(["ppid:anonymous",r]),setTimeout(function(){r()},1e3)):c.willLoad&&!c.loaded?(nb.push(["data:idaas:userDetailsLoaded",r]),setTimeout(function(){r()},1e3)):r()},f=null,m=function(e){(e||f)&&(clearTimeout(f),f=null),e?l():f=setTimeout(function(){l(),f=null},4e3)},k=function(){n.set("disc_pixCk",1,720)},v=function(){n.set("disc_audiCk",1,10)},y=function(){return n.get("disc_pixCk")},b=function(){return n.get("disc_audiCk")};t.exports={queuePixel:h,queueApi:m,updateOptOut:_,getPixelDone:y,getAPIDone:b}},{1:1,10:15,2:2,3:3,4:4,5:6,6:7,7:8,8:9,9:11}],14:[function(e,t){var n=e(1),s=function(){return this instanceof s?(s.prototype.init.call(this),void 0):new s};s.prototype={local_name:"disc_schedule",init:function(){this.load()},load:function(){this.sch=n.get(this.local_name);try{this.sch=JSON.parse(this.sch)}catch(e){this.sch={}}},save:function(){n.set(this.local_name,JSON.stringify(this.sch))},remove:function(e){delete this.sch[e],this.save()},schedule:function(e,t){this.sch[e]={t:t,l:null},this.save()},update:function(e,t){t||(t=Math.floor((new Date).getTime()/1e3)),this.sch[e].l=t,this.save()},check:function(e){if(this.sch[e]){var t=Math.floor((new Date).getTime()/1e3);return!this.sch[e].l||this.sch[e].l+this.sch[e].t<=t?!0:!1}return-1},checkOrSchedule:function(e,t){var n=this.check(e);return-1===n&&(this.schedule(e,t),n=!0),n}},t.exports=s()},{1:8}],15:[function(e,t){t.exports={isBot:function(){var e=navigator.userAgent.toLowerCase(),t=["bot","crawl","spider","spyder","khte","ktxn","keynote","gomezagent","alertsite","pingdom","yottamonitor","yottaamonitor","yahoo","slurp","scrape","agentname","aport","avantgo","backweb","bimbo","bordermanager","bumblebee","ce-preload","changedetection","charlotte","crescent","dialer","download ninja","dts agent","enews creator","fetch","firehunter","frontier","getright","go!zilla","golem","harvest","httrack","indy library","infolink","internet ninja","justview","kilroy","larbin","libwww-perl","linkchecker","lwp","macreport","microsoft url control","mobipocket webcompanion","monitor","monster","mozilla/5.0 (compatible; msie 5.0)","ms frontpage","ms search","msnptc","nomad","patric","perman surfer","pioneer","powermarks","rpt-http","spike","stuff","sucker","taz","teleport","templeton","thunderstone","t-h-u-n-d-e-r-s-t-o-n-e","voyager","web downloader","webauto","webcapture","webcopier","webdup","webinator","website extractor","webtool","webzip","wget","worm","freedom","yahoofeedseeker","internal zero-knowledge agent","liferea","findlinks","mackster","automapit","advanced email extractor","news reader","feedfetcher","http-webtest","forex trading network organization","newstin","panscient.com","snoopy","n-central","globrix","aol_cap","pagebull","universalsearch","hoopla","maxamine","argus","google wireless transcoder","jobrapido","webnews arianna","python-urllib","litefinder","isearch","pricerunner","system center operations manager","nettraffic sensor","nettraffic+sensor","d1garabicengine","joedog","websitepulse","bitvouseragent","mozilla/4.0 (compatible; msie 6.0; windows nt 5.1;1813)","swish-e","contentsmartz","quintura-crw","paros","msnrv","kalooga","watchmouse","pureload","proximic","powerset","yahoo-richabstracts","scoutjet","twiceler","twingly","attributor","europarchive","search-engine-studio","yanga","webmetrics","irc search","irc+search","vivisimo","onkosh","holmes","sphere scout","sphere+scout","simplepie","drupal","htmlparser","watchfire webxm","daumoa","lucidmedia clicksense","nielsen adr","evrinid","fdm 3.x","webgrab","isense","business-semantics","trovit","riverglassscanner","siteimprove","ruby","apache-httpclient","sitealarm","archive.org","facebookexternalhit","flipboardproxy","google web preview","evidon"];if(null===e||""===e)return!0;for(var n=0;n<t.length;n++){var s=t[n];if(-1!==e.indexOf(s))return!0}return!1}}},{}],16:[function(e){e(1),e(2),e(3),e(4),e(5),e(6)},{1:10,2:17,3:18,4:19,5:20,6:21}],17:[function(e){var t=(e(2),e(1));if(window.newskey&&window.newskey.nk)window.nb.push(["newskey:timeout",{}]);else{setTimeout(function(){window.newskey=window.newskey||{},window.newskey.nk=t.get("nk"),window.newskey.ck=window.newskey.ck||t.get("newskey"),window.newskey.nk_src=window.newskey.nk_src||t.get("nk_src")||"none",window.newskey.nk_ts=window.newskey.nk_ts||t.get("nk_ts"),window.newskey.checksum=window.newskey.checksum||t.get("nk_chk"),window.nb.push(["newskey:timeout",{}])},2e3);var n=function(){window.nb.push(["newskey:utrackLoaded",{}]),window.nb.push(["newskey:timeout",{}])},s=(new Date).getTime().toString()+Math.random(),i=("https:"==document.location.protocol?"https:":"http:")+"//tags.news.com.au/prod/utrack/utrack.js?cb="+s,o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.src=i,a.handlerFlag=0,a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||b.handlerFlag||(a.handlerFlag=1,n())},a.onload=function(){a.handlerFlag||(a.handlerFlag=1,n())},o.appendChild(a)}},{1:3,2:7}],18:[function(e){var t=(e(2),e(4)),n=e(5),s=e(1),i=e(3);nb.push(["data:login",function(e){n.queuePixel({et:"login",pc_pcsid:e.pcsid}),n.queueApi()}]),nb.push(["data:logout",function(){n.queuePixel({et:"logout"}),n.queueApi()}]),nb.push(["ppid:id",function(e){var s=t.get("net_site_uid");e.id&&t.set("net_site_uid",e.id),e.id!=s&&(n.queuePixel({et:"login"}),n.queueApi())}]),nb.push(["ppid:anonymous",function(){var e=t.get("net_site_uid");t.unset("net_site_uid"),e&&(n.queuePixel({et:"logout"}),n.queueApi())}]),nb.push(["data:page",function(){s.init(),s.checkIfChanged(),n.updateOptOut(),n.queuePixel({},"px2.gif"),!n.getPixelDone()||window.utag_data&&window.utag_data.net_sub_uid?(n.queuePixel({et:"touch"}),n.queueApi()):n.getAPIDone()||n.queueApi(!0)}]),nb.push(["newskey:timeout",function(){window.newskey&&window.newskey.nk&&(window.newskey.nk.match(/[^0-9a-zA-Z]+/)?(window.newskey.nk="",ud.nk_busted=1):i.shouldRun()&&i.queuePixel())}]),nb.push(["data:page",{}])},{1:1,2:3,3:5,4:8,5:13}],19:[function(e){var t=e(1);nb.push(["data:page",function(){t.get("dpipe_sc")&&t.get("dpipe_s30")||nb.push(["data:session:start",{}]),t.set("dpipe_sc","1"),t.set("dpipe_s30","1",30)}])},{1:3}],20:[function(e){var t=e(1);nb.push(["video:adcall",function(e){var n={video_event:"adcall",video_ad_tag_url:e.adTagUrl,video_embed_code:e.embedCode,video_ad_played:e.adPlayed};t.queuePixel(n,"v.gif")}])},{1:13}],21:[function(e){var t=e(1);nb.push(["weather:set-location",function(e){t.queuePixel({disc_postcode:e.postcode,disc_lat:e.latitude,disc_long:e.longitude}),t.queueApi()}]),nb.push(["postcode:set",function(e){t.queuePixel({disc_postcode:e.postcode,disc_lat:"",disc_long:""}),t.queueApi()}])},{1:13}]},{},[16]);
})();

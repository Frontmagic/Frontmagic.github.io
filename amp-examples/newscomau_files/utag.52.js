//tealium universal tag - utag.52 ut4.0.201605310353, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){window.unruly=window.unruly||{};unruly.native=unruly.native||{};unruly.native.siteId=892757;}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var unrulyModule=function(){var el;var loadScript=function(url,callback){var head=document.getElementsByTagName('head')[0],script=document.createElement('script');script.type='text/javascript';script.src=url;script.onreadystatechange=callback;script.onload=callback;head.appendChild(script);};var unrulyLoaded=function(){window.ads_api=window.ads_api||{};window.ads_api.ready=window.ads_api.ready||[];window.ads_api.ready.push(function(){window.ads_api.populate('unruly_native_slot');});};var init=function(selector){el=document.querySelectorAll(selector)[0];if(!el){return false;}
el.setAttribute('class','w_unruly ad-block ad-custom unruly_insert_native_ad_here');el.setAttribute('data-ad-size','4x4');el.setAttribute('id','unruly_native_slot');window.unruly=window.unruly||{};window.unruly.native=window.unruly.native||{};loadScript("//video.unrulymedia.com/native/native-loader.js",unrulyLoaded);};return{init:init}}();unrulyModule.init('.ad-unruly');}};utag.o[loader].loader.LOAD(id);})("52","newsltd.news");}catch(error){utag.DB(error);}
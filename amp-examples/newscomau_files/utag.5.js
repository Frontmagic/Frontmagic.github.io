//tealium universal tag - utag.5 ut4.0.201605310353, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{if(!utag.libloader){utag.libloader=function(src,handler,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(typeof handler=='function'){b.handlerFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.handlerFlag){b.handlerFlag=1;handler()}};b.onload=function(){if(!b.handlerFlag){b.handlerFlag=1;handler()}};a.getElementsByTagName('head')[0].appendChild(b)}}};(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.map={"ad_test_env":"env","ad_sec1":"sec1","ad_sec2":"sec2","ad_sec3":"sec3","ad_sec4":"sec4","ad_sec5":"sec5","ad_sec6":"sec6","ad_keywords":"kw","ad_location":"location","ad_vid_site":"vsite","ad_viewno":"viewno","ad_krux_segs":"ksgmnt","ad_krux_user":"kuid","ad_site_view":"siteview","newskey_count24":"netview","ad_criteo_cookie":"crtg","ad_pagetype":"pagetype","net_article_id":"aid","net_path":"pth","newskey":"nk","pc_pcsid":"u"};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){var data={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'){e=u.map[d].split(',');for(f=0;f<e.length;f++){data[e[f]]=b[d]}}}
if(utag_data.ad_loaded===true){return;}
window.ads_api=window.ads_api||{};window.ads_api.ready=window.ads_api.ready||[];window.ads_api.ready.push(function(){window.ads_api.run(data,u.map);});}};try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('5','newsltd.news');}catch(e){}
utag.libloader("//tags.news.com.au/prod/tad/tad.js",function(){if(window.console){console.log("TAD loaded");}});utag.libloader("//www.googletagservices.com/tag/js/gpt.js",function(){if(window.console){console.log("GPT loaded");}});
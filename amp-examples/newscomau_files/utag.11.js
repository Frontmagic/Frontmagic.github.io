//tealium universal tag - utag.11 ut4.0.201611030145, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{nb=window.nb||[];(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'all':1};u.pad=function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a};u.gd=function(a,b){if(a=="u")return a;b=a.split("/");return b.length>1?b[2]:"u"};u.vi=function(t,a,b){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2)}catch(e){};a+=this.pad(navigator.userAgent.length,3);a+=this.pad(top.document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5);return a};u.server="//pixel.newsdiscover.com.au/px2.gif";u.session=1800000;u.i=new Array(new Image(),new Image(),new Image());u.x=0;u.timeout='//tealium.hs.llnwd.net/o43/db.gif?utid='+utag.cfg.utid+'&tag_id='+id;u.map={};u.extend=[];u.send=function(a,b,c,d,e,f,r,t){if(u.ev[a]||typeof u.ev["all"]!="undefined"){r=utag.data["dom.referrer"];r=r.length==0?"u":r;if(typeof b["qp.ref"]!="undefined")r=b["qp.ref"];t=(new Date()).getTime();b["_et"]=a;b["_vi"]=utag.data["cp.utag_ulog__vi"];b["_fs"]=utag.data["cp.utag_ulog__fs"];b["_ss"]="1";b["_sc"]=utag.data["cp.utag_ulog__sc"];b["_du"]=utag.data["dom.url"];b["_dr"]=r;var ck={i:{},u:{},a:{}};if(utag.data["cp.utag_ulog__vi"]==null){ck={i:{_vi:b["_vi"]=u.vi(t),_vr:b["_vr"]=r,_fs:b["_fs"]=t,_cs:b["_cs"]=t,_sc:b["_sc"]="1",_evc:1,_ev:1},u:{}};b["_vd"]=u.gd(r);b["_sr"]=r;b["_sd"]=b["_vd"];b["_evc"]="1";b["_ec"]="1";}else if(utag.data["cp.utag_ulog__cs"]==null||(t-(utag.data["cp.utag_ulog__ts"]-0))>u.session){ck={u:{_cs:b["_cs"]=t,_ec:1,_evc:1},a:{_sc:1}};b["_sc"]=(utag.data["cp.utag_ulog__sc"]-0)+1;b["_vr"]=utag.data["cp.utag_ulog__vr"];b["_vd"]=u.gd(b["_vr"]);b["_sr"]=r;b["_sd"]=u.gd(r);b["_evc"]="1";b["_ec"]="1";}else{b["_cs"]=utag.data["cp.utag_ulog__cs"];b["_ir"]=r;b["_id"]=u.gd(r);b["_ss"]="0";if(a=="view"){ck["a"]["_evc"]=1;b["_evc"]=(utag.data["cp.utag_ulog__evc"]-0)+1;}
ck["a"]["_ec"]=1;b["_ec"]=(utag.data["cp.utag_ulog__ec"]-0)+1;}
b["_nv"]=(b["_sc"]==1)?1:0;ck["u"]["_ts"]=t;if(typeof ck.u!="undefined")utag.loader.SC("utag_ulog",ck.u);if(typeof ck.i!="undefined")utag.loader.SC("utag_ulog",ck.i,"i");if(typeof ck.a!="undefined")utag.loader.SC("utag_ulog",ck.a,"a");nb.push(['data:utag:send',b]);};}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('11','newsltd.news');}catch(e){}
var js=document.createElement('script');js.src='//tags.news.com.au/prod/ntag/ntag.js';document.head.appendChild(js);
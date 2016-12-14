(function(e){e.fn.lazyloadimages=function(n,q){var k=e(window),g=n||0,h=window.devicePixelRatio>=2,p=screen.width>=768,m=h?"data-src-retina":"data-src",o=this,l;this.one("lazyloadimages",function(){var r=this.getAttribute(m);r=r||this.getAttribute("data-src");if((h||p)&&r!==null&&!r.match("group=iphone")){r=r.replace("group=iphone","group=ipad")}if(r){this.setAttribute("src",r);this.classList.add("image-loaded");if(typeof q==="function"){q.call(this)}}});function f(){var r=o.filter(function(){var t=e(this),s=k.scrollTop(),v=s+k.height(),w=t.offset().top,u=w+t.height();if(t.is(":hidden")){return}return u>=s-g&&w<=v+g});l=r.trigger("lazyloadimages");o=o.not(l)}k.scroll(f);k.resize(f);k.on("triggerlazyloadimages",f);f();return this}}(ndm.jQuery));(function(e){e.fn.truncate=function(f){this.each(function(){var g=e(this),h;g.find(".timestamp").remove();if(g.data("text")===undefined){g.data("text",g.text())}h=g.data("text");h=h.replace(/^[\s\n]+/g,"");h=h.replace(/\s+/g," ");if(h.length>f){h=h.substr(0,f);h=h.replace(/[\W\s]+\w+$/,"\u2026");h=h.replace(/[\W\s]+$/,"\u2026")}g.text(h)})}}(ndm.jQuery));(function(e){e.fn.desktoplink=function(){var h=7,g,f;g=new Date();g.setTime(g.getTime()+h*24*60*60*1000);f="expires="+g.toGMTString()+"; ";e(this).click(function(){document.cookie="skip_mobile=true; "+f+"path=/; domain=."+window.location.host.replace(/^(m|mobile)\./,"");window.location="http://"+window.location.host.replace(/^(m|mobile)\./,"");event.preventDefault()})}}(ndm.jQuery));(function(e){e.fn.domshuffler=function(f){this.each(function(){var m=e(this),k={},g={},l={},h=false;if(f){e.extend(k,f)}g.domshuffler=function(){l.dostuff();g.events()};g.events=function(){window.addEventListener("orientationchange",function(){l.dostuff()},false)};l.dostuff=function(){if(!h){if(window.orientation===-90||window.orientation===90){m.find(".timeago").each(function(){var n=e(this);n.parent().parent().siblings(".storyblock-footer").prepend(n)});m.find(".story-block").each(function(){var n=e(this);n.find(".heading").append(n.find(".storyblock-footer > ul.related"))});m.find(".standfirst, .promo-text").truncate(130)}else{m.find(".timeago").each(function(){var n=e(this);if(n.parents(".plmnt-thumbnail")[0]!==undefined||n.parents(".plmnt-headline")[0]!==undefined){n.parent().parent().siblings(".storyblock-footer").prepend(n)}else{n.parent().parent().siblings(".storyblock-footer").append(n)}});if(m.hasClass("plmnt-thumbnail")||m.hasClass("plmnt-headline")){m.find(".story-block").each(function(){var n=e(this);n.find(".heading").append(n.find(".storyblock-footer > ul.related"))})}m.find(".standfirst, .promo-text").truncate(66)}}else{if(window.orientation===-90||window.orientation===90){m.find(".timeago").each(function(){var n=e(this);n.parent().prepend(n)});m.find(".story-block").each(function(){var n=e(this);n.find(".heading").append(n.find(".storyblock-footer > ul.related"))});m.find(".standfirst, .promo-text").truncate(130)}else{m.find(".timeago").each(function(){var n=e(this);if(n.parents(".plmnt-thumbnail")[0]!==undefined||n.parents(".plmnt-headline")[0]!==undefined){n.parent().prepend(n)}else{n.parent().append(n)}});if(m.hasClass("plmnt-thumbnail")||m.hasClass("plmnt-headline")){m.find(".story-block").each(function(){var n=e(this);n.find(".heading").append(n.find(".storyblock-footer > ul.related"))})}else{m.find(".story-block").each(function(){var n=e(this);n.find(".storyblock-footer").append(n.find(".heading > ul.related"))})}m.find(".standfirst, .promo-text").truncate(66)}}h=true};g.domshuffler()})}}(ndm.jQuery));(function(e){e.fn.continuousLoad=function(f){this.each(function(){var r=e(this),h=r,k=e(window),p=[],n,l={},m={},g={},o=false,q=0;if(e.fn.continuousLoad.defaults){e.extend(l,e.fn.continuousLoad.defaults)}if(f){e.extend(l,f)}m.continuousLoad=function(){m.loadlist();m.events();g.scrollTrigger()};m.loadlist=function(){var s=r.find(".related-groups li");s.each(function(t){var u=e(this).attr("class");if(u&&t!==0){u=u.match(/linkto-group-[0-9]+/);if(u instanceof Array){u=u[0];u=u.replace(/linkto-group-/,"");p.push(u)}else{u=false}}});n=p.length};m.events=function(){window.onscroll=function(){g.scrollTrigger()}};g.scrollTrigger=function(){if(!o){if(e(window).scrollTop()>=(h.offset().top-e(window).height())-800){o=true;g.getGroup()}}};g.getGroup=function(){var s,t=e('<div class="group continuous-load-loading"><div class="inner"><div class="logo"></div><p>Loading...</p></div></div>');s=l.vertical+l.prefix+p[q]+l.suffix;r.parent().append(t);e.ajax({async:true,url:s,dataType:"html",type:"GET",cache:true,success:function(v){var u="";v=v.replace(/<!--[\s\w\/\[\].,()-:@;<>]*-->/g,"");v=v.replace(/<script[\s\w="\/>.();<]*\/script>/g,"");v=v.replace(/^\s/g,"");u=e(v);u.find("img[data-src]").lazyloadimages(1000,function(){e(this).load(function(){this.style.opacity=1})});t.remove();r.parent().append(u);setTimeout(function(){u.find(".date-and-time").timeago();u.find(".plmnt-feature, .plmnt-thumbnail, .plmnt-headline").domshuffler();u.find(".plmnt-feature .content-item, .plmnt-thumbnail .story-block, .plmnt-headline .story-block, .plmnt-breaking-news .story-block, .plmnt-breaking-news-dates .story-block, .horoscope-summary .story-block").blocktap();u.find(".module-horoscopes .stand-first").truncate(75);u.find(".js-plmnt-vision-scroll").visionscroller();k.trigger("triggerlazyloadimages")},500);h=u;q=q+1;if(q<n){o=false}},error:function(){t.remove()}})};m.continuousLoad()})};e.fn.continuousLoad.defaults={prefix:"/cs/Satellite?cid=",suffix:"&pagename=Foundation%2FNews_Group%2FFDNdetail&site=NewsComAu&channel=mobile&esi=true",vertical:window.location.origin||window.location.protocol+"//"+window.location.hostname,environment:"mobile.news.com.au"}}(ndm.jQuery));(function(e){e.persistantHeader=(function(){var f=0;e(window).scroll(function(g){if(window.orientation===-90||window.orientation===90){var h=document.documentElement.scrollTop||document.body.scrollTop;if(window.console){console.log("scrollTop",h);console.log("event",g)}if(f<(h-5)&&h>66){e("#header-fixed").addClass("hide")}else{if((f-5)>h||h<66){e("#header-fixed").removeClass("hide")}}f=h}else{e("#header-fixed").removeClass("hide")}})}())}(ndm.jQuery));(function(e){e.fn.hamburger=function(){var m=e(this),l=e("#mobile-nav-button"),h=e("#page-overlay"),n=false,k=("ontouchstart" in document)?true:false,g,f;l.on("touchstart click",function(o){if(o.type==="click"&&!m.hasClass("show-nav")){m.addClass("show-nav");e("body").addClass("hamburger-nav");n=true}else{if(m.hasClass("show-nav")){e("#search-box .search-input input").blur();l.focus();setTimeout(function(){m.removeClass("show-nav")},250);e("body").removeClass("hamburger-nav");n=false;if(k){o.stopPropagation();o.preventDefault()}}}});h.on("touchstart click",function(o){if(!k){l.click()}else{l.trigger("touchstart");o.stopPropagation();o.preventDefault();return false}});m.find("a").each(function(){var p=e(this),o=e('<span class="drop-down-button"></span>');if(p.siblings("ul").length===1){o.click(function(){if(!p.parent().hasClass("show-sub-nav")){p.parent().siblings().find(".show-sub-nav").removeClass("show-sub-nav");p.parent().siblings(".show-sub-nav").removeClass("show-sub-nav");p.parent().addClass("show-sub-nav");if(p.parent().parent().hasClass("tier-1")){m.animate({scrollTop:o.offset().top-m.offset().top+m.scrollTop()},200,"swing")}}else{p.parent().removeClass("show-sub-nav");p.siblings("ul").find(".show-sub-nav").removeClass("show-sub-nav")}});p.parent().addClass("has-sub-nav");p.after(o)}p.on("click",function(){setTimeout(function(){m.removeClass("show-nav")},250);e("body").removeClass("hamburger-nav");n=false;e("#mobile-nav input.gsc-input, #search-box .search-input input").blur()})});m.find(".nav-go-to-desktop a").desktoplink();g=function(q){var p,o;q=q||document.querySelector(q);if(!q){return}q.addEventListener("touchstart",function(r){p=r.touches[0].pageY;o=q.scrollTop;if(o<=0){q.scrollTop=1}if(o+q.offsetHeight>=q.scrollHeight){q.scrollTop=q.scrollHeight-q.offsetHeight-1}},false)};f=document.getElementById("mobile-nav");new g(f);document.getElementById("page").addEventListener("touchmove",function(o){if(n){o.preventDefault()}},false)}}(ndm.jQuery));(function(e){e.fn.anchor=function(f){this.each(function(){var l=e(this),g={},k={},h;if(f){e.extend(k,f)}e.extend(k,e.fn.anchor.defaults,f||{});g.dom=function(){g.events()};h=function(){l.click(function(o){var n=e(this.hash),p=Math.abs(e(window).scrollTop()-e(this).offset().top),m=(p/k.speed)*1000;n=n.length?n:e("[name="+this.hash.slice(1)+"]");if(n.length){e("html,body").animate({scrollTop:n.offset().top-k.offset},m,k.easing);o.preventDefault()}})};g.events=function(){h()};g.anchor=function(){g.dom()};g.anchor()});return this};e.fn.anchor.defaults={speed:1000,offset:0,easing:"linear"}}(ndm.jQuery));(function(e){e.fn.blocktap=function(f){e(this).each(function(){var k=e(this),g,h={};if(f){e.extend(h,f)}e.extend(h,e.fn.blocktap.defaults,f||{});g=e(this).find(h.primaryURL).clone().addClass("blocktap").wrapInner("<span />");k.append(g);e(this).hover(function(){e(this).addClass(h.hoverClass)},function(){e(this).removeClass(h.hoverClass)})})};e.fn.blocktap.defaults={primaryURL:"h4.heading > a",hoverClass:"blocktap-hover"}}(ndm.jQuery));(function(e){window.nb=window.nb||[];e.fn.localise=function(f){this.each(function(){var p=e(this),m={},l={},r,s,h,k=-1,g=[],q,n,o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];if(f){e.extend(l,f)}if(e.metadata){e.extend(l,p.metadata())}e.extend(l,e.fn.localise.defaults,f||{});r=function(t){q=t;n=0};s=function(){var t;if(!q){return k}while(true){if(n>=q.length){return k}t=q.charAt(n);n=n+1;if(g[t]){return g[t]}if(t==="A"){return 0}}return k};h=function(w){r(w);var t="",v=new Array(4),u=false;while(!u&&(v[0]=s())!==k&&(v[1]=s())!==k){v[2]=s();v[3]=s();t+=e.fn.localise.helpers.ntos((((v[0]<<2)&255)|v[1]>>4));if(v[2]!==k){t+=e.fn.localise.helpers.ntos((((v[1]<<4)&255)|v[2]>>2));if(v[3]!==k){t+=e.fn.localise.helpers.ntos((((v[2]<<6)&255)|v[3]))}else{u=true}}else{u=true}}return t};m.dom=function(){var w,u,y,v,t;t=e.fn.localise.helpers.hasLocalStorage();for(w=0;w<o.length;w=w+1){g[o[w]]=w}v=e.fn.localise.helpers.readCookie("__pref");if(v!==undefined&&v!==null){v=v.replace("%3D","=");v=v.replace("%3d","=");y=e.fn.localise.helpers.extractAploc(h(v));y=parseInt(y,10);u=l.wzDataLoc+l.wzDataForecast+"&lc="+y+"&u="+l.wzDataID+"&k="+e.fn.localise.helpers.encryptPassword(l.wzDataAC);e.ajax({url:u,dataType:"jsonp",jsonp:"jsonp",cache:true,jsonpCallback:"wzData",success:function(G){var K="",E=G.countries[0].locations[0],F=E.local_forecasts.forecasts[0],H=E.postcode,J=E.latitude,z=E.longitude,A=E.state,B=E.name,C=localStorage.getItem("weatherwidget.postcode"),I=F.max,D=F.icon_filename.slice(0,-4).replace(/_/g,"-");K+='<a class="weather-link" title="Today\'s maxium temperature for '+B+'" href="http://m.weather.news.com.au/'+A.toLowerCase()+"/"+A.toLowerCase()+"/"+B.toLowerCase()+'">';K+='<span class="weather-icon weather-icon-max '+D+'"></span>';K+='<span class="weather-temp weather-temp-max"><span class="temp-number">'+I+'<sup>&deg;</sup><span class="temp-degree">C</span></span> <span class="temp-level">max</span></span>';K+="</a>";if(t===true&&v!==null&&C===H){p.removeClass("location-not-set").html(K)}else{if(t===true&&v!==null&&C!==H){p.removeClass("location-not-set").html(K);localStorage.setItem("weatherwidget.postcode",H);nb.push(["weather:set-location",{latitude:J,longitude:z,postcode:H}])}else{e.fn.localise.helpers.unsetWeather()}}},error:function(){e.fn.localise.helpers.unsetWeather();if(window.console){console.log("Weatherzone API not available")}}})}else{e.fn.localise.helpers.unsetWeather()}};m.localise=function(){m.dom()};m.localise()});return this};e.fn.localise.helpers={hasLocalStorage:function(){try{localStorage.setItem("testls","1");localStorage.removeItem("testls");return true}catch(f){return false}},encryptPassword:function(f){var m,g=new Date(),h=g.getDate()*2,n=(g.getMonth()+1)*300,l=(g.getFullYear()-2000)*170000,k=h+n+l+f;m=calcMD5(k);return m},readCookie:function(g){var l,h,k=g+"=",f=document.cookie.split(";");for(h=0;h<f.length;h=h+1){l=f[h];while(l.charAt(0)===" "){l=l.substring(1,l.length)}if(l.indexOf(k)===0){return l.substring(k.length,l.length)}}return null},ntos:function(f){f=f.toString(16);if(f.length===1){f="0"+f}f="%"+f;return unescape(f)},extractAploc:function(h){var g,k,f=h.split(";");for(g=0;g<f.length;g=g+1){k=f[g].split("|");if(k[0]==="loc_code"){return k[1]}}return""},unsetWeather:function(){e("#module-weather-widget").addClass("location-not-set").html('<a href="http://m.weather.news.com.au/#changeLocation" class="set-weather-link"><span>Set your weather</span></a>')}};e.fn.localise.defaults={wzDataLoc:"http://ws1.theweather.com.au/?lt=aploc&locdet=1&latlon=1&format=json&callback=wzData",wzDataForecast:"&obs=1&dailyobs=7&fc=1&days=7&rollover=24",wzDataID:"10491-1662",wzDataAC:"DuK4eqx3"}}(ndm.jQuery));function calcMD5(n){x=l(n);a=1732584193;b=-271733879;c=-1732584194;d=271733878;var k="0123456789abcdef";function h(r){n="";for(j=0;j<=3;j++){n+=k.charAt((r>>(j*8+4))&15)+k.charAt((r>>(j*8))&15)}return n}function l(r){nblk=((r.length+8)>>6)+1;blks=new Array(nblk*16);for(i=0;i<nblk*16;i++){blks[i]=0}for(i=0;i<r.length;i++){blks[i>>2]|=r.charCodeAt(i)<<((i%4)*8)}blks[i>>2]|=128<<((i%4)*8);blks[nblk*16-2]=r.length*8;return blks}function q(r,u){var t=(r&65535)+(u&65535);var s=(r>>16)+(u>>16)+(t>>16);return(s<<16)|(t&65535)}function g(r,s){return(r<<s)|(r>>>(32-s))}function o(z,v,u,r,y,w){return q(g(q(q(v,z),q(r,w)),y),u)}function e(v,u,A,z,r,y,w){return o((u&A)|((~u)&z),v,u,r,y,w)}function m(v,u,A,z,r,y,w){return o((u&z)|(A&(~z)),v,u,r,y,w)}function f(v,u,A,z,r,y,w){return o(u^A^z,v,u,r,y,w)}function p(v,u,A,z,r,y,w){return o(A^(u|(~z)),v,u,r,y,w)}for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=e(a,b,c,d,x[i+0],7,-680876936);d=e(d,a,b,c,x[i+1],12,-389564586);c=e(c,d,a,b,x[i+2],17,606105819);b=e(b,c,d,a,x[i+3],22,-1044525330);a=e(a,b,c,d,x[i+4],7,-176418897);d=e(d,a,b,c,x[i+5],12,1200080426);c=e(c,d,a,b,x[i+6],17,-1473231341);b=e(b,c,d,a,x[i+7],22,-45705983);a=e(a,b,c,d,x[i+8],7,1770035416);d=e(d,a,b,c,x[i+9],12,-1958414417);c=e(c,d,a,b,x[i+10],17,-42063);b=e(b,c,d,a,x[i+11],22,-1990404162);a=e(a,b,c,d,x[i+12],7,1804603682);d=e(d,a,b,c,x[i+13],12,-40341101);c=e(c,d,a,b,x[i+14],17,-1502002290);b=e(b,c,d,a,x[i+15],22,1236535329);a=m(a,b,c,d,x[i+1],5,-165796510);d=m(d,a,b,c,x[i+6],9,-1069501632);c=m(c,d,a,b,x[i+11],14,643717713);b=m(b,c,d,a,x[i+0],20,-373897302);a=m(a,b,c,d,x[i+5],5,-701558691);d=m(d,a,b,c,x[i+10],9,38016083);c=m(c,d,a,b,x[i+15],14,-660478335);b=m(b,c,d,a,x[i+4],20,-405537848);a=m(a,b,c,d,x[i+9],5,568446438);d=m(d,a,b,c,x[i+14],9,-1019803690);c=m(c,d,a,b,x[i+3],14,-187363961);b=m(b,c,d,a,x[i+8],20,1163531501);a=m(a,b,c,d,x[i+13],5,-1444681467);d=m(d,a,b,c,x[i+2],9,-51403784);c=m(c,d,a,b,x[i+7],14,1735328473);b=m(b,c,d,a,x[i+12],20,-1926607734);a=f(a,b,c,d,x[i+5],4,-378558);d=f(d,a,b,c,x[i+8],11,-2022574463);c=f(c,d,a,b,x[i+11],16,1839030562);b=f(b,c,d,a,x[i+14],23,-35309556);a=f(a,b,c,d,x[i+1],4,-1530992060);d=f(d,a,b,c,x[i+4],11,1272893353);c=f(c,d,a,b,x[i+7],16,-155497632);b=f(b,c,d,a,x[i+10],23,-1094730640);a=f(a,b,c,d,x[i+13],4,681279174);d=f(d,a,b,c,x[i+0],11,-358537222);c=f(c,d,a,b,x[i+3],16,-722521979);b=f(b,c,d,a,x[i+6],23,76029189);a=f(a,b,c,d,x[i+9],4,-640364487);d=f(d,a,b,c,x[i+12],11,-421815835);c=f(c,d,a,b,x[i+15],16,530742520);b=f(b,c,d,a,x[i+2],23,-995338651);a=p(a,b,c,d,x[i+0],6,-198630844);d=p(d,a,b,c,x[i+7],10,1126891415);c=p(c,d,a,b,x[i+14],15,-1416354905);b=p(b,c,d,a,x[i+5],21,-57434055);a=p(a,b,c,d,x[i+12],6,1700485571);d=p(d,a,b,c,x[i+3],10,-1894986606);c=p(c,d,a,b,x[i+10],15,-1051523);b=p(b,c,d,a,x[i+1],21,-2054922799);a=p(a,b,c,d,x[i+8],6,1873313359);d=p(d,a,b,c,x[i+15],10,-30611744);c=p(c,d,a,b,x[i+6],15,-1560198380);b=p(b,c,d,a,x[i+13],21,1309151649);a=p(a,b,c,d,x[i+4],6,-145523070);d=p(d,a,b,c,x[i+11],10,-1120210379);c=p(c,d,a,b,x[i+2],15,718787259);b=p(b,c,d,a,x[i+9],21,-343485551);a=q(a,olda);b=q(b,oldb);c=q(c,oldc);d=q(d,oldd)}return h(a)+h(b)+h(c)+h(d)}(function(e){e.fn.mobiletracking=function(f){this.each(function(){var n=e(this),k={},h={},q=e.fn.mobiletracking.omniture,g=e.fn.mobiletracking.omnievent,o=e.fn.mobiletracking.omnitureEvent,r=e.fn.mobiletracking.ga,l=e("body"),p=e("body.story");if(e.fn.mobiletracking.defaults){e.extend(h,e.fn.mobiletracking.defaults)}if(f){e.extend(h,f)}if(e.metadata){e.extend(h,n.metadata())}window.mready=window.mready||[];function m(t){var s="";t=t.replace(/^\s+|\s+$/g,"");if(/^[0-9]/.exec(t)){s+="number-"}s+=t.replace(/[^a-zA-Z 0-9]+/g,"").replace(/\s+/g,"-").toLowerCase();return s}k.dom=function(){k.events()};k.events=function(){l.delegate(".story-info-tools .tool-text-resize li a","click",function(){var v="ncam-story-text-resize",t="button",s=e(this).attr("class"),u=e(this).parents("li").index()+1;r(v,t,s);o(v,u,s)});l.delegate(".share-tools-story a","click",function(){var v="ncam-story-share-tool-bottom",t="button",s=e(this).attr("class"),u=e(this).parents("li").index()+1;r(v,t,s);o(v,u,s)});l.delegate(".story-body .share-tools li a","click",function(){var v="ncam-story-share-tool-top",t="button",s=e(this).attr("class"),u=e(this).parents("li").index()+1;r(v,t,s);o(v,u,s)});l.delegate(".comments-group .module-header .heading","click",function(){var u="ncam-story-comments",t="button",s="open";r(u,t,s);o(u,0,s)});l.delegate(".comments-group .button-submit","click",function(){var u="ncam-story-comments",t="button",s="submit";r(u,t,s);o(u,0,s)});l.delegate(".comments-group .show-all-comments","click",function(){var u="ncam-story-comments",t="button",s="show-all";r(u,t,s);o(u,0,s)});l.delegate("#mobile-nav-button","click",function(){var u="NCAM-mobile-nav-button",t="NA",s="close";if(l.hasClass("hamburger-nav")===true){s="open"}r(u,t,s);g(u,s)});l.delegate(".drop-down-button","click",function(){var u="NCAM-open-mobile-nav-"+e(this).parents("li").find("> a").text(),t=e(this).parents("li").find("> a").text(),s=e(this).parents("li").find("> a").text();r(u,t,s);g(u,s)});n.delegate("#mobile-nav .tier-1 > li a","click",function(v){var t="NCAM-mobile-nav-jump-to-section-"+e(this).text(),s=e(this).parents("li").index(),u=e(this).attr("href");q(v,t,s,u)});n.delegate("#mobile-nav .tier-2 > li a","click",function(v){var t="NCAM-mobile-nav-jump-to-sub-section-"+e(this).text(),s=e(this).parent().index()+1,u=e(this).attr("href");q(v,t,s,u)});n.delegate("#header-logo strong a","click",function(v){var t="NCAM-return-to-homepage",s=1,u="return-to-homepage";q(v,t,s,u)});n.delegate("#mobile-nav .nav-sub-pages li a","click",function(v){var t="NCAM-sub-nav",s=e(this).parent().index+1,u=e(this).text();q(v,t,s,u)});n.delegate("#mobile-nav .nav-sub-pages li.nav-go-to-desktop a","click",function(v){var t="NCAM-go-to-desktop",s=1,u="go-to-desktop";q(v,t,s,u)});n.delegate(".module-breadcrumbs ul li a","click",function(v){var t="NCAM-breadcrumbs-"+e(this).parents("ul").find(".link-1 a").text(),s=e(this).parents("li").index()+1,u=e(this).attr("href");q(v,t,s,u)});p.delegate(".group-related .story-block a","click",function(v){var t="NCAM-read-next",s=e(this).parents(".story-block").index()+1,u=e(this).attr("href");q(v,t,s,u)});l.delegate("#content .promo-feature-marketing a","click",function(){var t=m(e(this).find("img").attr("alt")),u="NCAM-marketing-promo",s="image";r(u,t,s)})};k.mobiletracking=function(){k.dom()};k.mobiletracking()});return this};e.fn.mobiletracking.defaults={};e.fn.mobiletracking.omniture=function(n,g,f,k){var m=e(n.target),h=m.attr("href"),l;l=metrics&&metrics.npv({itm:{container:g,order:f,label:k}},h);if(l){m.attr("href",h+"#"+l)}};e.fn.mobiletracking.omnievent=function(g,h){var f=false,k;if(f===true){k=window.mready||[];k.push(function(){metrics.ev({events:[g],eVar27:h})})}};e.fn.mobiletracking.omnitureEvent=function(g,f,h){window.mready.push(function(k){k.ev({itm:{container:g,order:f,label:h}})})};e.fn.mobiletracking.ga=function(h,g,f){setTimeout(function(){utag.link({ev_cat:h,ev_action:g,ev_label:f,ev_value:0})},400)};e(function(){e("body").mobiletracking()})}(jQuery));(function(e){e.fn.visionscroller=function(f){this.each(function(){var p=e(this),o=e(this).find(".module-content"),m={},l={},n={},h={},r=p.find(".module-content > .content-item"),k="transform",g="translateX(-",q="px)";if(e.fn.visionscroller.defaults){e.extend(l,e.fn.visionscroller.defaults)}if(f){e.extend(l,f)}if(e.metadata){e.extend(l,p.metadata())}n.changeslide=function(s){if(s==="prev"){if(h.current===1){}else{h.current-=1}}else{if(s==="next"){if(h.current===h.slides){}else{h.current+=1}}}if(h.current===1){p.find(".vs-prev").addClass("vs-inactive").removeClass("vs-active");p.find(".vs-next").addClass("vs-active").removeClass("vs-inactive")}else{if(h.current===h.slides){p.find(".vs-prev").addClass("vs-active").removeClass("vs-inactive");p.find(".vs-next").addClass("vs-inactive").removeClass("vs-active")}else{p.find(".vs-prev").addClass("vs-active").removeClass("vs-inactive");p.find(".vs-next").addClass("vs-active").removeClass("vs-inactive")}}if((h.current===h.slides)&&(h.fraction>0)){var t=((h.slides-2)*h.mwidth)+(h.fraction*h.mwidth);o.css(k,g+t+q)}else{o.css(k,g+((h.current-1)*h.mwidth)+q)}};n.gatracking=function(u){var v=l.campaign,t=u,s=location.href;setTimeout(function(){utag.link({ev_cat:v,ev_action:t,ev_label:s,ev_value:0,net_section:ndm.page.section})},l.utagdelay)};n.omitracking=function(v){var t=l.campaign+"-story-block",s=v.link,u=v.label;ndm.newscomau.helper.omniture(v.e,t,s,u)};m.dom=function(){if(e("html").hasClass("ie")===true){k="left";g="-";q="px"}h.current=1;h.total=r.length;h.mwidth=parseInt(p.css("width"),10);h.ciwidth=parseInt(r.css("width"),10);h.mcwidth=h.total*h.ciwidth;h.slides=Math.ceil(h.mcwidth/h.mwidth);h.fraction=(h.mcwidth/h.mwidth)%1;console.log();p.prepend('<a class="vs-controls vs-prev vs-inactive" href="#">Previous</a>').append('<a class="vs-controls vs-next vs-active" href="#">Next</a>');p.find(".module-content").css("width",h.mcwidth);m.events()};m.events=function(){var s,t;o.bind("touchstart",function(u){s=u.originalEvent.changedTouches[0].pageX});o.bind("touchend",function(u){t=u.originalEvent.changedTouches[0].pageX;if(s>t){if((s-t)>75){p.trigger("vs-change",["next"]);p.trigger("vs-gatrack",["next"])}}else{if((t-s)>75){p.trigger("vs-change",["prev"]);p.trigger("vs-gatrack",["prev"])}}});o.bind("touchcancel touchmove",function(u){u.preventDefault()});p.find(".vs-prev").bind("click",function(u){p.trigger("vs-change",["prev"]);p.trigger("vs-gatrack",["prev"]);u.preventDefault()});p.find(".vs-next").bind("click",function(u){p.trigger("vs-change",["next"]);p.trigger("vs-gatrack",["next"]);u.preventDefault()});p.find(".module-content > .content-item a").bind("click",function(u){p.trigger("vs-omnitrack",[{e:u,link:parseInt(e(this).parents(".content-item").index()+1,10),label:e(this).attr("href")}])});p.bind("vs-change",function(v,u){n.changeslide(u)});p.bind("vs-gatrack",function(v,u){n.gatracking(u)});p.bind("vs-omnitrack",function(v,u){n.omitracking(u)})};m.visionscroller=function(){m.dom()};m.visionscroller()});return this};e.fn.visionscroller.defaults={campaign:"news",utagdelay:500}}(jQuery));(function(g){function f(){var m=[],k,l,h=window.location.href.slice(window.location.href.indexOf("#")+1).split("&");for(k=0;k<h.length;k=k+1){l=h[k].split("=");m.push(l[0]);m[l[0]]=l[1]}return m}function e(h){return f()[h]}g(function(){var k,h;k=e("htmlclass");h=e("bodyclass");if(k){g("html").addClass(k)}if(h){g("body").addClass(h)}})}(ndm.jQuery));(function(f){var g=window.ads_api=window.ads_api||{},e=g.conf=g.conf||{};e.adsense_color_bg="#fff";f("body").removeClass("no-js").addClass("has-js");f(function(){f("img[data-src]").lazyloadimages(1500,function(){f(this).load(function(){this.style.opacity=1})});f("body.homepage #module-weather-widget").localise();f(".js-load-group").continuousLoad();f(".plmnt-feature .date-and-time, .plmnt-headline .date-and-time, .plmnt-thumbnail .date-and-time").timeago();f("#content .plmnt-feature .content-item, #content .plmnt-thumbnail .story-block, #content .plmnt-headline .story-block, #content .plmnt-breaking-news .story-block, #content .plmnt-breaking-news-dates .story-block, #content .horoscope-summary .story-block").blocktap();f("#content .plmnt-feature, #content .plmnt-thumbnail, #content .plmnt-headline").domshuffler();f(".module-horoscopes .stand-first").truncate(75);f("#mobile-nav").hamburger();f("#content .js-plmnt-vision-scroll").visionscroller();f(".module-video-thumb .poster img").trigger("lazyloadimages");f(".js-anchor a, .vms-cat a, .story-comments-link a").anchor()})}(ndm.jQuery));(function(k){var g,e="012148326047351459851:walkttorfpg",h=document.createElement("script"),f;k(function(){k("#mobile-nav .nav-search-box").append('<form id="search-box" class="search-box" action="http://mobile.news.com.au/search-results"><input type="hidden" name="cx" value="012148326047351459851:walkttorfpg" /><label><div class="search-input"><input placeholder="search" type="text" name="q" title="search" autocomplete="off"></div><div class="clear-button" title="clear results"></div></label><button type="submit" value="Search">Search</button></form>');k("#search-box .clear-button").on("click",function(l){k("#search-box .search-input input").val("");l.preventDefault()});if(k("body.search-results").length){f=function(){google.search.cse.element.render({div:"search-results",tag:"search"});k("#search-results input.gsc-input").attr("placeholder","search")};window.__gcse={parsetags:"explicit",callback:f};h.type="text/javascript";h.async=true;h.src="//www.google.com/cse/cse.js?cx="+e;g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(h,g)}})}(ndm.jQuery));
(function(a){a.fn.resizeText=function(b){if(localStorage.getItem("fontSize")!==null&&localStorage.getItem("fontSize")!=="null"){document.body.style.fontSize=localStorage.getItem("fontSize")}else{if(document.body.style.fontSize===""){document.body.style.fontSize="100%"}}if(b==="increase"){document.body.style.fontSize=(parseFloat(document.body.style.fontSize)+10)+"%";localStorage.setItem("fontSize",document.body.style.fontSize)}else{if(b==="decrease"){document.body.style.fontSize=(parseFloat(document.body.style.fontSize)-10)+"%";localStorage.setItem("fontSize",document.body.style.fontSize)}else{if(b==="reset"){document.body.style.fontSize="100%";localStorage.setItem("fontSize",null)}}}}}(ndm.jQuery));(function(a){a.fn.authorstcog=function(b){this.each(function(){var f=a(this),c={},e={},d,h,g;if(a.fn.authorstcog.defaults){a.extend(e,a.fn.authorstcog.defaults)}if(b){a.extend(e,b)}if(a.metadata){a.extend(e,f.metadata())}h=function(i){if(typeof(Storage)!=="undefined"){localStorage.setItem("nca.ad",i)}};d=function(){var i=null;if(typeof(Storage)!=="undefined"){i=localStorage.getItem("nca.ad")}return i};g=function(k){var p=k.bylines.authors,q,s,l,j,m=f.find(".author-name").text(),o=[];for(q in p){if(p.hasOwnProperty(q)){s=new RegExp(p[q].name,"i");l=m.search(s);if(l!==-1){o.push(p[q])}}}if(o.length!==0){if(o.length===1){var n;f.addClass("nca-author show-headshot "+o[0].classname);f.prepend(a('<span class="author-headshot" />'));f.find(".author-name").text("").append(a('<a class="author-link" />'));n=f.find(".author-link");n.text(o[0].name);n.attr("href",o[0].morelink);if(o[0].social&&o[0].social.twitter&&o[0].social.twitter!==""&&a("body").hasClass("desktop")){var r=a('<span class="author-twitter"><a target="_blank"></a><span>');r.find("a").text("@"+o[0].social.twitter).attr("href","https://twitter.com/"+o[0].social.twitter);f.append(r)}}else{if(o.length>1){var i=f.find(".author-name"),r;f.addClass("nca-author nca-multi-author");i.text("");a(o).each(function(t){r=a('<a class="author-link" />');r.text(this.name).attr("href",this.morelink);if(t>0){i.append(' <span class="and">and</span> ')}i.append(r)})}}}};c.dom=function(){var i;if(d()!==null){i=d();i=JSON.parse(i);g(i)}else{a.ajax({url:e.authors,dataType:"jsonp",jsonp:"jsonp",cache:true,jsonpCallback:"bylines",success:function(j){h(JSON.stringify(j));g(j)},error:function(){}})}};c.authorstcog=function(){c.dom()};c.authorstcog()});return this};a.fn.authorstcog.defaults={authors:"http://media.news.com.au/cs/nca/latest/public/js/desktop/shared/lib/jquery.fn.authors/authors-data.js"}}(jQuery));(function(a){a.fn.inPageGallery=function(b){this.each(function(){var k=a(this),j={},g={},i={},h=1,n=k.find(".container-main .slide").length,e=true,c=false,m=false,o=a(".in-page-gallery").index(k)+1,d={},f,l=false;if(a("body").hasClass("desktop")){f="desktop"}else{f="mobile"}k.addClass("gallery-"+o+"-index");if(a.fn.inPageGallery.defaults){a.extend(i,a.fn.inPageGallery.defaults)}if(b){a.extend(i,b)}if(a.metadata){a.extend(i,k.metadata())}d.track=function(r,q,p){if(i.trackingName!==""){window.mready.push(function(s){s.ev({itm:{container:i.trackingName,order:p,label:r+":"+q}})})}};g.PopupCenter=function(p,y,z,t){var x=window.screenLeft!=undefined?window.screenLeft:screen.left;var q=window.screenTop!=undefined?window.screenTop:screen.top;var r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;var A=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;var s=((r/2)-(z/2))+x;var v=((A/2)-(t/2))+q;var u=window.open(p,y,"scrollbars=yes, width="+z+", height="+t+", top="+v+", left="+s)};g.changeActive=function(r){var p,q;if("left"===r){if(1===h){h=1}else{h=h-1}}else{if("right"===r){if(h===n){h=n}else{h=h+1}}else{if(typeof h==="number"){h=(r+1)}}}p=k.find(".spos-"+h);k.find(".js-active").removeClass("js-active");p.addClass("js-active");if(undefined===p.find("img").attr("src")){p.find("img").attr("src",p.find("img").attr("data-src")).load(function(){this.style.opacity=1})}if(undefined===p.next().find("img").attr("src")){p.next().find("img").attr("src",p.next().find("img").attr("data-src")).load(function(){this.style.opacity=1})}if(1===h){k.find(".container-main .wrapper-main").css("transform","translate3d(0px, 0px, 0px)")}else{q=(k.find(".container-main").width()*h)-k.find(".container-main").width();k.find(".container-main .wrapper-main").css("transform","translate3d(-"+q+"px, 0px, 0px)")}g.scrollThumbs(h);k.find(".container-captions .active").removeClass("active");k.find(".container-captions .pos-"+h).addClass("active");k.find(".count .current").text(h);k.find(".container-main .left, .container-main .right, .full-screen-controls .left, .full-screen-controls .right").removeClass("js-inactive");if(h===1){k.find(".container-main .left, .full-screen-controls .left").addClass("js-inactive")}else{if(h===n){k.find(".container-main .right, .full-screen-controls .right").addClass("js-inactive")}}if(!c){g.galleryHover()}};g.scrollThumbs=function(v){var u,x,p=k.find(".wrapper-thumbs").position().left,w=k.find(".wrapper-thumbs").width(),y=w-50,s=k.find(".wrapper-thumbs .spos-1").position().left-p,q=Math.round(k.find(".wrapper-thumbs .srpos-1").position().left-p),r=k.find(".wrapper-thumbs .srpos-1").width();if("left"===v){u=s+y;if(u>=0){u=0;k.find(".container-thumbs .controls .left").addClass("js-inactive")}k.find(".container-thumbs .controls .right").removeClass("js-inactive")}else{if("right"===v){u=s-y;x=q-y;if(w>=r+x){k.find(".container-thumbs .controls .right").addClass("js-inactive")}k.find(".container-thumbs .controls .left").removeClass("js-inactive")}else{if(typeof v==="number"){var t=k.find(".wrapper-thumbs .spos-"+h).position().left-p;if(t!==s&&t<0||t>w){u=s-t}else{return}}}}k.find(".wrapper-thumbs").stop();k.find(".wrapper-thumbs").animate({scrollLeft:Math.abs(u)},750);if(!c){g.galleryHover()}};g.thumbsScrolled=function(){var t=k.find(".wrapper-thumbs").position().left,s=k.find(".wrapper-thumbs .spos-1").position().left-t,q=Math.round(k.find(".wrapper-thumbs .srpos-1").position().left-t),p=k.find(".wrapper-thumbs .srpos-1").width(),r=k.find(".wrapper-thumbs").width();if(s>=0){k.find(".container-thumbs .controls .left").addClass("js-inactive")}else{k.find(".container-thumbs .controls .left").removeClass("js-inactive")}if(r>=q+p){k.find(".container-thumbs .controls .right").addClass("js-inactive")}else{k.find(".container-thumbs .controls .right").removeClass("js-inactive")}};g.galleryHover=function(){if(e){if(window.ads_api&&window.ads_api.populate){window.setTimeout(function(){k.find(".ad-wrap").append('<div class="ad ad-block ad-halfpage" id="ad-halfpage-'+k.find(".gallery-anchor").attr("name")+'" data-ad-tar="pos='+(o+2)+'" ></div>');window.ads_api.populate("ad-halfpage-"+k.find(".gallery-anchor").attr("name"))},700)}utag_data=window.utag_data||{};utag_data.ad_ajax=true;e=false}if(false===c){k.addClass("expanded");k.find(".expander").addClass("active");c=true}};g.galleryUnHover=function(){k.removeClass("expanded");k.removeClass("full-screen");k.find(".expander").removeClass("active");c=false};g.fullScreen=function(){k.find(".container-main .slide img").each(function(){var p=a(this);if(p.attr("src")){p.attr("src",p.attr("src").replace("?width=650","?width=1024"))}else{if(f==="desktop"){p.attr("data-src",p.attr("data-src").replace("?width=650","?width=1024"))}else{p.attr("src",p.attr("data-src").replace("?width=650","?width=1024"));p.css("opacity","1")}}});k.find(".wrapper-main").css("transition","none");k.addClass("full-screen");if(f==="desktop"){g.changeActive(h-1);setTimeout(function(){k.find(".wrapper-main").css("transition","")},600)}a("body").addClass("no-scroll");if(a().swiperight!==undefined&&a().swipeleft!==undefined){if(1===h){document.querySelector(".gallery-"+o+"-index.full-screen .main-view .heading").scrollIntoView()}else{document.querySelector(".gallery-"+o+"-index .wrapper-main .js-active").scrollIntoView()}}};g.closeFullScreen=function(){k.find(".wrapper-main").css("transition","none");k.removeClass("full-screen");g.changeActive(h-1);setTimeout(function(){k.find(".wrapper-main").css("transition","")},600);k.find(".container-main .slide img").each(function(){var p=a(this);if(p.attr("src")){p.attr("src",p.attr("src").replace("?width=1024","?width=650"))}else{p.attr("data-src",p.attr("data-src").replace("?width=1024","?width=650"))}});k.addClass("thumbs-active");k.find(".show-thumbs-btn button").html("HIDE THUMBS");k.find(".container-main .wrapper-main, .container-main .wrapper-main .slide, .container-main .wrapper-main .slide .img-wrap").css("height","");g.galleryUnHover();a("body").removeClass("no-scroll")};g.openCloseSharing=function(){if(l){k.find(".share-buttons, .full-screen-controls").removeClass("active");l=false;d.track("button","close social share","0")}else{k.find(".share-buttons, .full-screen-controls").addClass("active");l=true;d.track("button","open social share","0")}if(!c){g.galleryHover()}};j.dom=function(){k.find(".spos-1").addClass("js-active");k.find(".container-captions .pos-1").addClass("active");k.find(".spos-1 img").attr("src",k.find(".spos-1 img").attr("data-src")).load(function(){this.style.opacity=1});k.find(".left").addClass("js-inactive");j.socialLinks();k.find(".container-main .spos-2 img").attr("src",k.find(".container-main .spos-2 img").attr("data-src")).load(function(){this.style.opacity=1})};j.socialLinks=function(){var r=encodeURIComponent(a('meta[property="og:url"]').attr("content")),p=encodeURIComponent(a('meta[property="og:image"]').attr("content")),q=encodeURIComponent(a('meta[property="og:title"]').attr("content").trim());if(k.find(".wrapper-main .js-active")){p=encodeURIComponent(k.find(".wrapper-main .js-active img").attr("src"))}k.find(".facebook").html('<a class="sharetools-facebook" href="http://m.facebook.com/sharer.php?u='+r+"&t="+q+"&sv="+p+'" target="_blank"><span>Share on Facebook</span></a>');k.find(".facebook").click(function(s){s.preventDefault();g.PopupCenter(a(this).find("a").attr("href"),"fbwin","500","350");d.track("button","social share source","facebook");return false});k.find(".pinterest").html('<a class="sharetools-pinterest" href="http://pinterest.com/pin/create/button/?url='+r+"&media="+p+"&description="+q+'" target="_blank" class="pin-it-button" count-layout="horizontal">Share on Pinterest</a>');k.find(".pinterest").click(function(s){s.preventDefault();g.PopupCenter(a(this).find("a").attr("href"),"pintwin","500","350");d.track("button","social share source","pinterest");return false});k.find(".tumblr").html('<a class="sharetools-tumblr" href="http://tumblr.com/widgets/share/tool?canonicalUrl='+r+'" target="_blank"><span>Share on Tumblr</span></a>');k.find(".tumblr").click(function(s){s.preventDefault();g.PopupCenter(a(this).find("a").attr("href"),"tumblrwin","500","350");d.track("button","social share source","tumblr");return false});k.find(".twitter").html('<a class="sharetools-twitter" href="https://twitter.com/intent/tweet?text='+q+"&url="+r+'" target="_blank"><span>Share on Twitter</span></a>');k.find(".twitter").click(function(s){s.preventDefault();g.PopupCenter(a(this).find("a").attr("href"),"twitterwin","650","320");d.track("button","social share source","twitter");return false})};j.events=function(){k.find(".container-main .left, .full-screen-controls .left").bind("click",function(r){g.changeActive("left");d.track("button","prev","0");r.preventDefault()});k.find(".container-main .right, .full-screen-controls .right").bind("click",function(r){g.changeActive("right");d.track("button","next","0");r.preventDefault()});if(a().swiperight!==undefined&&a().swipeleft!==undefined){k.find(".container-main .slide img").each(function(r){a(this).bind("click",function(){if(k.hasClass("full-screen")){g.closeFullScreen();d.track("button","close full screen","0")}else{g.fullScreen();d.track("button","open full screen","0")}})});k.find(".container-main .coverimage").bind("click",function(r){g.fullScreen();d.track("button","open full screen","0")});window.addEventListener("orientationchange",function(){setTimeout(function(){k.find(".wrapper-main").css("transition","none");g.changeActive(h-1)},300);setTimeout(function(){k.find(".wrapper-main").css("transition","")},600)},false)}else{var q=document.querySelector(".gallery-"+o+"-index .container-main"),p=new Hammer.Manager(q,{recognizers:[[Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}],]});k.find(".wrapper-main").css("touch-action","none");p.on("swipeleft",function(r){g.changeActive("right");d.track("button","next","0")});p.on("swiperight",function(r){g.changeActive("left");d.track("button","prev","0")});k.find(".container-main .slide").each(function(){a(this).bind("click",function(r){if(false===m){k.addClass("expanded");m=true}else{g.changeActive("right");d.track("button","next","0");r.preventDefault()}})})}k.find(".container-thumbs .slide").each(function(r){a(this).bind("click",function(){if(false===m){k.addClass("expanded");m=true}else{g.changeActive(r);d.track("button","thumbnail clicked",r)}})});k.find(".container-captions .controls .fullscreen").bind("click",function(){g.fullScreen();d.track("button","open full screen","0")});if(f==="desktop"){k.find(".container").bind("click",function(){if(!c){g.galleryHover()}if(!k.hasClass("expanded")){d.track("button","open initial expand","0")}k.addClass("expanded")})}k.find(".container-main").bind("mouseover",function(){if(h===1){k.find(".container-main .left").hide();k.find(".container-main .right").show()}else{if(h===n){k.find(".container-main .left").show();k.find(".container-main .right").hide()}else{k.find(".container-main .left, .container-main .right").show()}}});k.find(".container-main").bind("mouseout",function(){k.find(".container-main .left, .container-main .right").hide()});k.find(".full-screen-close").bind("click",function(r){r.preventDefault();g.closeFullScreen();m=false;d.track("button","close full screen","0")});a(document).keyup(function(r){if(r.keyCode===27){if(k.hasClass("full-screen")){g.closeFullScreen();d.track("button","close full screen","0")}else{if(k.hasClass("expanded")){g.galleryUnHover();d.track("button","close initial expand","0")}}}});k.find(".lightbox").bind("click",function(r){r.preventDefault();g.galleryUnHover();g.closeFullScreen();m=false;if(k.hasClass("full-screen")){d.track("button","close full screen","0")}else{d.track("button","close initial expand","0")}});k.find(".show-thumbs-btn button").bind("click",function(r){r.preventDefault();if(k.hasClass("thumbs-active")){a(this).html("SHOW THUMBS");k.removeClass("thumbs-active");k.find(".container-main .wrapper-main, .container-main .wrapper-main .slide, .container-main .wrapper-main .slide .img-wrap").css("height",(k.find(".container-main .wrapper-main").height()+75));d.track("button","hide thumbnail","0")}else{a(this).html("HIDE THUMBS");k.addClass("thumbs-active");k.find(".container-main .wrapper-main, .container-main .wrapper-main .slide, .container-main .wrapper-main .slide .img-wrap").css("height",(k.find(".container-main .wrapper-main").height()-75));d.track("button","show thumbnail","0")}});if(f==="desktop"){window.addEventListener("orientationchange",function(){k.find(".container-main .wrapper-main, .container-main .wrapper-main .slide, .container-main .wrapper-main .slide .img-wrap").css("height","")},false)}k.find(".container-thumbs .controls .left").bind("click",function(r){g.scrollThumbs("left");d.track("button","scroll thumbnail prev","0");r.preventDefault()});k.find(".container-thumbs .controls .right").bind("click",function(r){g.scrollThumbs("right");d.track("button","scroll thumbnail next","0");r.preventDefault()});k.find(".share-tools .open-button, .full-screen-controls .share").bind("click",function(r){g.openCloseSharing();r.preventDefault()});k.find(".expander .close").bind("click",function(){g.galleryUnHover();m=false;d.track("button","close initial expand","0")});k.find(".share-link a").bind("click",function(){g.socialTools()});a(".wrapper-thumbs").scroll(function(r){g.thumbsScrolled(r)})};j.inPageGallery=function(){j.dom();j.events()};j.inPageGallery()});return this};a.fn.inPageGallery.defaults={trackingName:"in-page-gallery"}}(ndm.jQuery));(function(a){a.scribbleIframe=function(){var d=window.addEventListener?"addEventListener":"attachEvent",b=d==="attachEvent"?"onmessage":"message",e="http://embed.scribblelive.com",c=a('iframe[src^="'+e+'"]');if(c.length!==1||(c.attr("src").indexOf("ThemeId=15850")===-1&&c.attr("src").indexOf("ThemeId=16707")===-1&&c.attr("src").indexOf("ThemeId=26143")===-1)){return}a(".story-body .scribble").removeClass("scribble").removeClass("scribble");c.attr("src",c.attr("src")+"&parent="+window.location.host.replace(".com.au","")).removeAttr("height").attr("width","100%").css("width","100%");window[d](b,function(f){if(f.origin===e&&typeof f.data==="string"&&f.data.indexOf("H: ")===0){c.css("height",f.data.replace("H: ","")+"px")}},false)}}(ndm.jQuery));(function(a){a.dom.appendDiv=function(g,e,d){var b,f;if(g&&g.appendChild){f=document.createElement(d||"div");for(b in e){if(e.hasOwnProperty(b)){f[b]=e[b]}}g.appendChild(f);return f}};a.dom.appendElement=function(d,b,c){return a.dom.appendDiv(d,c,b)};a.dom.insertDivAfter=function(g,e,d){var b,f;if(g&&g.parentNode){f=document.createElement(d||"div");for(b in e){if(e.hasOwnProperty(b)){f[b]=e[b]}}g.parentNode.insertBefore(f,g.nextSibling);return f}};a.dom.appendButton=function(c,b){b.innerHTML="<span>"+(b.innerHTML||"")+"</span>";b.className="button "+(b.className||"");return a.dom.appendDiv(c,b,"button")}}(msite));(function(a){a.form.getRadioValue=function(b){var e,d,c;e=b.form||document.getElementById(b.id);d=e&&e[b.name];if(d){for(c=0;c<d.length;c=c+1){if(d[c].type!=="radio"){return}if(d[c].checked){return d[c].value}}return(d.type==="radio"&&d.checked&&d.value)||null}};a.form.validateListener=function(b){var c=b.form||document.querySelector(b.selector);if(c&&b.tests){c.addEventListener("submit",function(j){var f,g,h,k,n,m,l=false,d,o;d=/^([0-9a-zA-Z]+[\-._+&])*[0-9a-zA-Z_]+@([\-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;o=function(q,r,i){var p=r.message||i||"This field has errors",e=a.dom.insertDivAfter(q,{className:"field-errors"},"ul");l=true;if(e){a.dom.appendElement(e,"li",{innerHTML:p})}};f=c.querySelectorAll("ul.field-errors");for(h=0;h<f.length;h=h+1){f[h].parentNode.removeChild(f[h])}for(h=0;h<b.tests.length;h=h+1){n=b.tests[h];g=n.id&&document.getElementById(n.id);g=g||(n.name&&c[n.name]);if(g){if(n.regexp){m=new RegExp(n.regexp);if(!k.match(m)){o(g,n)}}else{switch(n.test){case"email":if(!g.value||!g.value.match(d)){o(g,n,"Please enter a valid email address")}break;case"required":if(!((g.length===undefined&&g.type!=="radio"&&g.value&&g.value.match(/\w+/))||a.form.getRadioValue({form:c,name:n.name}))){o(g,n,"Required")}break}}}}if(l){j.preventDefault();c.classList.add("hasErrors");return false}else{c.classList.remove("hasErrors");return b.callback?b.callback():true}})}};a.form.stringify=function(g){var c,d,e="",f={},b=g.querySelectorAll("input, textarea, select");if(b.length>0){Array.prototype.slice.call(b,0).map(function(h){if(h.type==="radio"){c=a.form.getRadioValue({form:g,name:h.name})||"";f[escape(h.name)]=escape(c)}else{if(h.name&&h.value){f[escape(h.name)]=escape(h.value)}}})}for(d in f){if(f.hasOwnProperty(d)){if(e.length){e+="&"}e+=d+"="+f[d]}}return e};a.form.ajaxListener=function(b){var e="",c=b.form||document.querySelector(b.selector),d=b.messageFinder;if(c&&d){c.addEventListener("submit",function(f){f.preventDefault();if(!c.classList.contains("hasErrors")){e=a.form.stringify(c);a.ajax.post(c.action,function(g){c.parentNode.innerHTML='<div class="ajax-msg">'+(d(g)||"Form submitted successfully.")+"</div>";if(b.callback){b.callback()}},e);return false}})}};a.form.jsEnabled=function(b){var c,e,d=b.form;d=d||document.querySelector(b.selector);if(d){e=d.querySelectorAll(".honey");for(c=0;c<e.length;c=c+1){e[c].parentNode.removeChild(e[c])}a.dom.appendElement(d,"input",{type:"hidden",value:"true",name:"jsEnabled"})}}}(msite));(function(a){a.widget.commentform=function(){var b=[{test:"required",id:"ccomments"},{test:"required",id:"module-comment-add-fullName"},{test:"email",id:"module-comment-add-email"}],c=document.getElementById("module-comment-add-form");if(c){a.form.jsEnabled({form:c});a.form.validateListener({form:c,tests:b})}}}(msite));(function(a){a.storyloadiframe=a.fn.storyloadiframe=function(){return this.each(function(){var c={$promoContainer:a(this).parents(".promo-class-iframeInteractive"),$promoLink:a(this).find(".heading a").attr("href"),$promoIframeHtml:'<iframe src="" width="650" height="1000" scrolling="no" frameborder="0"></iframe>',$parentWidth:a(".promo-class-iframeInteractive").parent().width(),$scriptURL:"http://resources.newscdn.com.au/cs/frameworks/prefab/latest/public/js/channel/desktop/libs/jquery/story-load-iframe/vendor/iframeResizer.min.js"};function b(){if(c.$parentWidth>=1024){c.$iframeWidth=1024}else{if(c.$parentWidth<1024&&c.$parentWidth>=768){c.$iframeWidth=768}else{if(c.$parentWidth<768&&c.$parentWidth>=650){c.$iframeWidth=650}else{c.$iframeWidth=c.$parentWidth}}}c.$iframe=a(c.$promoIframeHtml).attr({src:c.$promoLink,width:c.$iframeWidth}).css("display","block");c.$promoContainer.hide().after(c.$iframe);a(c.$iframe).iFrameResize({heightCalculationMethod:"lowestElement",autoResize:"true",checkOrigin:"false"})}a.getScript(c.$scriptURL,function(){b()})})}}(ndm.jQuery));(function(a){a.fn.comments=function(){var c="module-comment-add-form-iframe",b=a("#module-comment-add-form fieldset.additional-information"),d;if(ndm.page.commentcount!==undefined){a(".story-header").append('<ul class="story-comments-link"><li class="comments last"><a href="#comments">'+ndm.page.commentcount+"</a></li></ul>")}a("#module-comment-add-form").find(".form-item-submit").after('<iframe id="'+c+'" name="'+c+'" frameborder="0" height="350" width="280" class="assistive comment-validation-iframe"></iframe>');a("#module-comment-add-form").attr("target",c);a("#module-comment-add-form textarea").focus(function(){a.jStorage.set("skip_mobile","true");a("#module-comment-add-fullName").val(a.jStorage.set("commentFullName")||"");a("#module-comment-add-email").val(a.jStorage.set("commentEmail")||"");a("#module-comment-add-location").val(a.jStorage.set("commentLocation")||"");a("#module-comment-add-alert").attr("checked",a.jStorage.set("commentsEmailMe")==="true");a("#module-comment-add-save-details").attr("checked",a.jStorage.set("commentsRemember")==="true")});d=function(){var e=a("#module-comment-add-fullName").val(),g=a("#module-comment-add-email").val(),l=a("#ccomments").val(),f=new RegExp("^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z_-]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$"),j=new RegExp("[^ \\n]+"),h=new RegExp("[^ \\n]+"),i=true,k="";a("#form-item-error-summary").remove();k+='<div tabindex="0" class="form-item form-item-error-summary" id="form-item-error-summary">';k+="<dl>";k+="<dt>Please complete the following:</dt>";if(!h.test(l)){k+="<dd>Please enter your comments</dd>";i=false}if(!f.test(g)){k+="<dd>Please enter your (valid) email address</dd>";i=false}if(!j.test(e)){k+="<dd>Please enter your name</dd>";i=false}k+="</dl>";k+="</div>";if(i===false){a("#module-comment-add-form fieldset legend.assistive").after(k)}return i};a("#module-comment-add-form").submit(function(){var g=d(),e={"module-comment-add-fullName":"commentFullName","module-comment-add-email":"commentEmail","module-comment-add-location":"commentLocation","module-comment-add-alert":"commentsEmailMe","module-comment-add-save-details":"commentsRemember"},j={expires:365,path:"/"},l=a("#module-comment-add-save-details").attr("checked"),f,k,h,i;if(g===false){return false}if(l===true){for(f in e){if(e.hasOwnProperty(f)){k=e[f];if(f==="module-comment-add-save-details"){h=a("#"+f).attr("checked")}else{h=a("#"+f).val()}a.jStorage.set(k,h,j)}}}else{for(f in e){if(e.hasOwnProperty(f)){k=e[f];a.jStorage.set(k,true,j)}}}a("#module-comment-add-form").addClass("submitted");a("#module-comment-add-form-iframe").remove();a("#submit-thank-you").css("display","block");return true})}}(ndm.jQuery));(function(a){a("#ccomments").on("focus keypress",function(){var d=a(this),b=d.parents(".form-item").find(".field-instruction em"),f=parseInt(1200,10),c=this.value.length,e=f-c;b.html(e)});a(function(){var b=a("#comments .show-all-comments").attr("href");if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||(/Android|iPhone|iPad|iPod/i.test(navigator.platform))){jQuery("ul.share-tools li.whatsappinit").append('<a class="sharetools-whatsapp" href="whatsapp://send?text='+encodeURIComponent(jQuery('meta[property="og:title"]').attr("content").trim())+" "+encodeURIComponent(jQuery('meta[property="og:url"]').attr("content"))+'"><span>Share this to a friend on WhatsApp</span></a>')}a("#comments #module-comment-add .module-header .heading, #comments .comment-list-module .module-header .heading").on("click",function(c){a(this).parent().next(".module-content").slideToggle(400,"swing").parents(".module").toggleClass("open");c.preventDefault()});a("#comments .comment-list-module").addClass("open");if(a("body").hasClass("fw-archive-comments")){a("#comments").addClass("unloaded").prepend('<div class="load-comments"><a href="#">read comments</a></div>')}else{a("#comments").addClass("unloaded").prepend('<div class="load-comments"><a href="#">leave a comment</a></div>')}a("#comments.unloaded .load-comments a").on("click",function(c){a(this).parents("#comments").removeClass("unloaded");a(this).parents("#comments").find(".load-comments").remove();c.preventDefault()});a("#page .story-body").prepend('<div id="generic-page-overlay" class="generic-page-overlay" />');a("#story-info-tools .tool-button").on("click",function(d){var c=a(this).parents(".story-info-tool");if(c.siblings().hasClass("open")){c.siblings().removeClass("open")}a("body").addClass("show-story-info-tools");c.toggleClass("open","open");d.stopPropagation();d.preventDefault()});if(a("#story-info-tools .story-info-tool").hasClass("open")){a("body").addClass("show-story-info-tools")}else{a("body").removeClass("show-story-info-tools")}a("#generic-page-overlay").on("touchstart click",function(c){a("#story-info-tools .story-info-tool").removeClass("open");a("body").removeClass("show-story-info-tools");c.stopPropagation();c.preventDefault()});a("#story-info-tools .share-tools a").on("click",function(){a("#story-info-tools .story-info-tool").removeClass("open");a("body").removeClass("show-story-info-tools")});a("#module-comment-add-email").attr("type","email");a(".in-page-gallery").inPageGallery();a("#story .story-comments-link a").attr("href",b);a.scribbleIframe();msite.widget.commentform();a().resizeText();a(".js-font-inc").click(function(c){a().resizeText("increase");c.preventDefault()});a(".js-font-dec").click(function(c){a().resizeText("decrease");c.preventDefault()});if(a(".story-body .iframeInteractive").length){a(".story-body .promo-block.iframeInteractive").storyloadiframe()}a("#comments").comments();a(".show-all-comments").attr("href",function(){if(location.origin==="http://frontend.ni.news.com.au"){return a(this).attr("href").replace("2Fstory-","2Fcomments-")+"#comments"}else{return a(this).attr("href").replace("/story-","/comments-")+"#comments"}});a(".story-header .story-comments-link .comments a").text(ndm.page.commentcount||"");if(ndm.page.commentcount===undefined||ndm.page.commentcount===0){a(".comments-group .module.open .show-all-comments").remove()}a("#entertainment-facebook").html('<p>Follow <a href="https://www.facebook.com/news.com.au.entertainment">News.com.au Entertainment</a> on Facebook for more updates!</p>');a("#sport-facebook").html('<p>Follow <a href="https://www.facebook.com/news.com.au.sport">News.com.au Sport</a> on Facebook for more updates.</p>')})}(ndm.jQuery));
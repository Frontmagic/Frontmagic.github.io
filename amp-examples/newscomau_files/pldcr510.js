/*
 Nielsen SDK package v0.9.28 
 (c) 2016 The Nielsen Company 
*/
/* PLDCR build v5.0.0.10*/
window.NOLCMB.registerLib("PLDCR",function(e){"use strict";function t(e,t){var i={};return i.set=function(e,t){return i.init=!0,i.elapsed=0,i.startTimeStamp=0,"function"==typeof e&&(i.funcCall=e),isNaN(t)||(i.intervalTime=t),i},i.play=function(e){return i.isActive||(e?(i.startTimeStamp=0,i.elapsed=0,i.setTimer()):i.setTimer(i.remaining),i.isActive=!0),i},i.pause=function(){return i.isActive&&(i.isActive=!1,i.remaining-=Date.now()-i.last,i.clearTimer()),i},i.stop=function(){return i.isActive=!1,i.remaining=i.intervalTime,i.clearTimer(),i},i.clearTimer=function(){window.clearTimeout(i.timeoutObject)},i.setTimer=function(e){var t=i;"function"==typeof i.funcCall&&(isNaN(e)&&(e=i.intervalTime),i.remaining=e,i.last=Date.now(),i.clearTimer(),i.timeoutObject=window.setTimeout(function(){t.tick()},e))},i.tick=function(){i.isActive&&(i.elapsed++,i.funcCall(),i.setTimer())},i.init?i:(i.set(e,t),i)}function i(){d&&(m=d.elapsed,e._listeners.fireEvent("dcrHeartbeat",d.elapsed))}function n(t){e.globalHasFocus&&!e.globalHasFocus()&&(e._listeners.fireEvent("info",{type:"info",msg:"Page onBlur fired and stopped static timer: "+JSON.stringify(t,function(e,t){if("string"==typeof t)return t})}),d&&d.pause())}function r(t){e._listeners.fireEvent("info",{type:"info",msg:"Page onFocus fired and playing static timer: "+JSON.stringify(t,function(e,t){if("string"==typeof t)return t})}),d&&d.play(v),v=!1}function s(t){!document.hidden&&e.globalHasFocus&&e.globalHasFocus()?(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - VISIBLE"}),d&&d.play(v),v=!1):(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - HIDDEN"}),d&&d.pause())}function a(e){d&&d.stop()}var o=e.PLDCR=e.PLDCR||{},u="5.0.0",c="10",f=window.NOLCMB,l=e.getBaseBuildVer?e.getBaseBuildVer()+c:u+c,d,p=0,m=0,v=!1;return o.startDcrTick=function(){},o.latestDcrTick=function(){return m},o.start=function(n){var r=!e.globalHasFocus||e.globalHasFocus();v=n,(void 0===d||n)&&(r?(d=t(i,1e3).play(!0),v=!1):d=t(i,1e3))},o.stop=function(){d&&d.stop()},o.init=function(e){f.browserSafeAddEventListener({element:window,eventType:"blur",func:n,useCapture:!1}),f.browserSafeAddEventListener({element:window,eventType:"focus",func:r,useCapture:!1}),f.browserSafeAddEventListener({element:window,eventType:"beforeunload",func:a,useCapture:!1}),f.browserSafeAddEventListener({element:window,eventType:"pagehide",func:a,useCapture:!1}),document.addEventListener&&document.addEventListener("visibilitychange",s)},o.built||(o.built=!0,o.BUILDVERSION=l,e.bindPlayers(o,"PLDCR")),o});
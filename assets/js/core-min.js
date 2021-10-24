!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e,i,n;t.ui=t.ui||{},t.ui.version="1.12.1",t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:(e="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(e+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.escapeSelector=(i=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(i,"\\$1")}),t.ui.focusable=function(e,i){var n,o,s,r,l,a=e.nodeName.toLowerCase();return"area"===a?(o=(n=e.parentNode).name,!(!e.href||!o||"map"!==n.nodeName.toLowerCase())&&((s=t("img[usemap='#"+o+"']")).length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(a)?(r=!e.disabled)&&(l=t(e).closest("fieldset")[0])&&(r=!l.disabled):r="a"===a&&e.href||i,r&&t(e).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}(t(e)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),s={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function r(e,i,o,s){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,o&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}t.fn["inner"+i]=function(e){return void 0===e?s["inner"+i].call(this):this.each(function(){t(this).css(o,r(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?s["outer"+i].call(this,e):this.each(function(){t(this).css(o,r(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.labels=function(){var e,i,n,o,s;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(o=this.eq(0).parents("label"),(n=this.attr("id"))&&(s=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",o=o.add(s.find(i).addBack(i))),this.pushStack(o))},t.ui.plugin={add:function(e,i,n){var o,s=t.ui[e].prototype;for(o in n)s.plugins[o]=s.plugins[o]||[],s.plugins[o].push([i,n[o]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},function(){var e,i=Math.max,n=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=t.fn.position;function c(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function f(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,n,o=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=o.children()[0];return t("body").append(o),i=s.offsetWidth,o.css("overflow","scroll"),i===(n=s.offsetWidth)&&(n=o[0].clientWidth),o.remove(),e=i-n},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:o,offset:!n&&!o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return h.apply(this,arguments);e=t.extend({},e);var a,u,d,p,g,m,v,b,w=t(e.of),y=t.position.getWithinInfo(e.within),_=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),W={};return m=9===(b=(v=w)[0]).nodeType?{width:v.width(),height:v.height(),offset:{top:0,left:0}}:t.isWindow(b)?{width:v.width(),height:v.height(),offset:{top:v.scrollTop(),left:v.scrollLeft()}}:b.preventDefault?{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}:{width:v.outerWidth(),height:v.outerHeight(),offset:v.offset()},w[0].preventDefault&&(e.at="left top"),u=m.width,d=m.height,p=m.offset,g=t.extend({},p),t.each(["my","at"],function(){var t,i,n=(e[this]||"").split(" ");1===n.length&&(n=o.test(n[0])?n.concat(["center"]):s.test(n[0])?["center"].concat(n):["center","center"]),n[0]=o.test(n[0])?n[0]:"center",n[1]=s.test(n[1])?n[1]:"center",t=r.exec(n[0]),i=r.exec(n[1]),W[this]=[t?t[0]:0,i?i[0]:0],e[this]=[l.exec(n[0])[0],l.exec(n[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?g.left+=u:"center"===e.at[0]&&(g.left+=u/2),"bottom"===e.at[1]?g.top+=d:"center"===e.at[1]&&(g.top+=d/2),a=c(W.at,u,d),g.left+=a[0],g.top+=a[1],this.each(function(){var o,s,r=t(this),l=r.outerWidth(),h=r.outerHeight(),m=f(this,"marginLeft"),v=f(this,"marginTop"),b=l+m+f(this,"marginRight")+_.width,C=h+v+f(this,"marginBottom")+_.height,E=t.extend({},g),H=c(W.my,r.outerWidth(),r.outerHeight());"right"===e.my[0]?E.left-=l:"center"===e.my[0]&&(E.left-=l/2),"bottom"===e.my[1]?E.top-=h:"center"===e.my[1]&&(E.top-=h/2),E.left+=H[0],E.top+=H[1],o={marginLeft:m,marginTop:v},t.each(["left","top"],function(i,n){t.ui.position[x[i]]&&t.ui.position[x[i]][n](E,{targetWidth:u,targetHeight:d,elemWidth:l,elemHeight:h,collisionPosition:o,collisionWidth:b,collisionHeight:C,offset:[a[0]+H[0],a[1]+H[1]],my:e.my,at:e.at,within:y,elem:r})}),e.using&&(s=function(t){var o=p.left-E.left,s=o+u-l,a=p.top-E.top,c=a+d-h,f={target:{element:w,left:p.left,top:p.top,width:u,height:d},element:{element:r,left:E.left,top:E.top,width:l,height:h},horizontal:s<0?"left":o>0?"right":"center",vertical:c<0?"top":a>0?"bottom":"middle"};u<l&&n(o+s)<u&&(f.horizontal="center"),d<h&&n(a+c)<d&&(f.vertical="middle"),i(n(o),n(s))>i(n(a),n(c))?f.important="horizontal":f.important="vertical",e.using.call(this,t,f)}),r.offset(t.extend(E,{using:s}))})},t.ui.position={fit:{left:function(t,e){var n,o=e.within,s=o.isWindow?o.scrollLeft:o.offset.left,r=o.width,l=t.left-e.collisionPosition.marginLeft,a=s-l,h=l+e.collisionWidth-r-s;e.collisionWidth>r?a>0&&h<=0?(n=t.left+a+e.collisionWidth-r-s,t.left+=a-n):t.left=h>0&&a<=0?s:a>h?s+r-e.collisionWidth:s:a>0?t.left+=a:h>0?t.left-=h:t.left=i(t.left-l,t.left)},top:function(t,e){var n,o=e.within,s=o.isWindow?o.scrollTop:o.offset.top,r=e.within.height,l=t.top-e.collisionPosition.marginTop,a=s-l,h=l+e.collisionHeight-r-s;e.collisionHeight>r?a>0&&h<=0?(n=t.top+a+e.collisionHeight-r-s,t.top+=a-n):t.top=h>0&&a<=0?s:a>h?s+r-e.collisionHeight:s:a>0?t.top+=a:h>0?t.top-=h:t.top=i(t.top-l,t.top)}},flip:{left:function(t,e){var i,o,s=e.within,r=s.offset.left+s.scrollLeft,l=s.width,a=s.isWindow?s.scrollLeft:s.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-a,f=h+e.collisionWidth-l-a,u="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];c<0?((i=t.left+u+d+p+e.collisionWidth-l-r)<0||i<n(c))&&(t.left+=u+d+p):f>0&&((o=t.left-e.collisionPosition.marginLeft+u+d+p-a)>0||n(o)<f)&&(t.left+=u+d+p)},top:function(t,e){var i,o,s=e.within,r=s.offset.top+s.scrollTop,l=s.height,a=s.isWindow?s.scrollTop:s.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-a,f=h+e.collisionHeight-l-a,u="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,p=-2*e.offset[1];c<0?((o=t.top+u+d+p+e.collisionHeight-l-r)<0||o<n(c))&&(t.top+=u+d+p):f>0&&((i=t.top-e.collisionPosition.marginTop+u+d+p-a)>0||n(i)<f)&&(t.top+=u+d+p)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&s.length?s:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:(n=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var o,s=0,r=Array.prototype.slice;t.cleanData=(o=t.cleanData,function(e){var i,n,s;for(s=0;null!=(n=e[s]);s++)try{(i=t._data(n,"events"))&&i.remove&&t(n).triggerHandler("remove")}catch(t){}o(e)}),t.widget=function(e,i,n){var o,s,r,l={},a=e.split(".")[0],h=a+"-"+(e=e.split(".")[1]);return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[a]=t[a]||{},o=t[a][e],s=t[a][e]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},t.extend(s,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(r=new i).options=t.widget.extend({},r.options),t.each(n,function(e,n){t.isFunction(n)?l[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=o,e=n.apply(this,arguments),this._super=i,this._superApply=s,e}}():l[e]=n}),s.prototype=t.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||e},l,{constructor:s,namespace:a,widgetName:e,widgetFullName:h}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,s,i._proto)}),delete o._childConstructors):i._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var i,n,o=r.call(arguments,1),s=0,l=o.length;s<l;s++)for(i in o[s])n=o[s][i],o[s].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var s="string"==typeof o,l=r.call(arguments,1),a=this;return s?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(a=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,l))!==s&&void 0!==i?(a=i&&i.jquery?a.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):a=void 0:(l.length&&(o=t.widget.extend.apply(null,[o].concat(l))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),a}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<n.length-1;s++)o[n[s]]=o[n[s]]||{},o=o[n[s]];if(e=n.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,o;for(i in e)o=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&o&&o.length&&(n=t(o.get()),this._removeClass(o,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],n=this;function o(o,s){var r,l;for(l=0;l<o.length;l++)r=n.classesElementLookup[o[l]]||t(),r=e.add?t(t.unique(r.get().concat(e.element.get()))):t(r.not(e.element).get()),n.classesElementLookup[o[l]]=r,i.push(o[l]),s&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,o){-1!==t.inArray(e.target,o)&&(i.classesElementLookup[n]=t(o.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var o="string"==typeof t||null===t,s={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n};return s.element.toggleClass(this._classes(s),n),this},_on:function(e,i,n){var o,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=o=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,o=this.widget()),t.each(n,function(n,r){function l(){if(e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var a=n.match(/^([\w:-]*)\s*(.*)$/),h=a[1]+s.eventNamespace,c=a[2];c?o.on(h,c,l):i.on(h,l)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(r)&&!1===r.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){var r;"string"==typeof o&&(o={effect:o});var l=o?!0===o||"number"==typeof o?i:o.effect||i:e;"number"==typeof(o=o||{})&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[l]?n[e](o):l!==e&&n[l]?n[l](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}})});
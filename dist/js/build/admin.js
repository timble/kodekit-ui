var globalCacheForjQueryReplacement = window.jQuery;
window.jQuery = window.kQuery;
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*!
 * FooTable - Awesome Responsive Tables
 * Version : 2.0.3
 * http://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 11 Nov 2014
 */
(function(e,t){function a(){var e=this;e.id=null,e.busy=!1,e.start=function(t,a){e.busy||(e.stop(),e.id=setTimeout(function(){t(),e.id=null,e.busy=!1},a),e.busy=!0)},e.stop=function(){null!==e.id&&(clearTimeout(e.id),e.id=null,e.busy=!1)}}function i(i,o,n){var r=this;r.id=n,r.table=i,r.options=o,r.breakpoints=[],r.breakpointNames="",r.columns={},r.plugins=t.footable.plugins.load(r);var l=r.options,d=l.classes,s=l.events,u=l.triggers,f=0;return r.timers={resize:new a,register:function(e){return r.timers[e]=new a,r.timers[e]}},r.init=function(){var a=e(t),i=e(r.table);if(t.footable.plugins.init(r),i.hasClass(d.loaded))return r.raise(s.alreadyInitialized),undefined;r.raise(s.initializing),i.addClass(d.loading),i.find(l.columnDataSelector).each(function(){var e=r.getColumnData(this);r.columns[e.index]=e});for(var o in l.breakpoints)r.breakpoints.push({name:o,width:l.breakpoints[o]}),r.breakpointNames+=o+" ";r.breakpoints.sort(function(e,t){return e.width-t.width}),i.unbind(u.initialize).bind(u.initialize,function(){i.removeData("footable_info"),i.data("breakpoint",""),i.trigger(u.resize),i.removeClass(d.loading),i.addClass(d.loaded).addClass(d.main),r.raise(s.initialized)}).unbind(u.redraw).bind(u.redraw,function(){r.redraw()}).unbind(u.resize).bind(u.resize,function(){r.resize()}).unbind(u.expandFirstRow).bind(u.expandFirstRow,function(){i.find(l.toggleSelector).first().not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.expandAll).bind(u.expandAll,function(){i.find(l.toggleSelector).not("."+d.detailShow).trigger(u.toggleRow)}).unbind(u.collapseAll).bind(u.collapseAll,function(){i.find("."+d.detailShow).trigger(u.toggleRow)}),i.trigger(u.initialize),a.bind("resize.footable",function(){r.timers.resize.stop(),r.timers.resize.start(function(){r.raise(u.resize)},l.delay)})},r.addRowToggle=function(){if(l.addRowToggle){var t=e(r.table),a=!1;t.find("span."+d.toggle).remove();for(var i in r.columns){var o=r.columns[i];if(o.toggle){a=!0;var n="> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:nth-child("+(parseInt(o.index,10)+1)+"),"+"> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:nth-child("+(parseInt(o.index,10)+1)+")";return t.find(n).not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle)),undefined}}a||t.find("> tbody > tr:not(."+d.detail+",."+d.disabled+") > td:first-child").add("> tbody > tr:not(."+d.detail+",."+d.disabled+") > th:first-child").not("."+d.detailCell).prepend(e(l.toggleHTMLElement).addClass(d.toggle))}},r.setColumnClasses=function(){var t=e(r.table);for(var a in r.columns){var i=r.columns[a];if(null!==i.className){var o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", "),o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+(parseInt(t,10)+1)+")",n=!1}),t.find(o).not("."+d.detailCell).addClass(i.className)}}},r.bindToggleSelectors=function(){var t=e(r.table);r.hasAnyBreakpointColumn()&&(t.find(l.toggleSelector).unbind(u.toggleRow).bind(u.toggleRow,function(){var t=e(this).is("tr")?e(this):e(this).parents("tr:first");r.toggleDetail(t)}),t.find(l.toggleSelector).unbind("click.footable").bind("click.footable",function(a){t.is(".breakpoint")&&e(a.target).is("td,th,."+d.toggle)&&e(this).trigger(u.toggleRow)}))},r.parse=function(e,t){var a=l.parsers[t.type]||l.parsers.alpha;return a(e)},r.getColumnData=function(t){var a=e(t),i=a.data("hide"),o=a.index();i=i||"",i=jQuery.map(i.split(","),function(e){return jQuery.trim(e)});var n={index:o,hide:{},type:a.data("type")||"alpha",name:a.data("name")||e.trim(a.text()),ignore:a.data("ignore")||!1,toggle:a.data("toggle")||!1,className:a.data("class")||null,matches:[],names:{},group:a.data("group")||null,groupName:null,isEditable:a.data("editable")};if(null!==n.group){var d=e(r.table).find('> thead > tr.footable-group-row > th[data-group="'+n.group+'"], > thead > tr.footable-group-row > td[data-group="'+n.group+'"]').first();n.groupName=r.parse(d,{type:"alpha"})}var u=parseInt(a.prev().attr("colspan")||0,10);f+=u>1?u-1:0;var p=parseInt(a.attr("colspan")||0,10),c=n.index+f;if(p>1){var b=a.data("names");b=b||"",b=b.split(",");for(var g=0;p>g;g++)n.matches.push(g+c),b.length>g&&(n.names[g+c]=b[g])}else n.matches.push(c);n.hide["default"]="all"===a.data("hide")||e.inArray("default",i)>=0;var h=!1;for(var m in l.breakpoints)n.hide[m]="all"===a.data("hide")||e.inArray(m,i)>=0,h=h||n.hide[m];n.hasBreakpoint=h;var v=r.raise(s.columnData,{column:{data:n,th:t}});return v.column.data},r.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0)},r.calculateWidth=function(e,t){return jQuery.isFunction(l.calculateWidthOverride)?l.calculateWidthOverride(e,t):(t.viewportWidth<t.width&&(t.width=t.viewportWidth),t.parentWidth<t.width&&(t.width=t.parentWidth),t)},r.hasBreakpointColumn=function(e){for(var t in r.columns)if(r.columns[t].hide[e]){if(r.columns[t].ignore)continue;return!0}return!1},r.hasAnyBreakpointColumn=function(){for(var e in r.columns)if(r.columns[e].hasBreakpoint)return!0;return!1},r.resize=function(){var t=e(r.table);if(t.is(":visible")){if(!r.hasAnyBreakpointColumn())return t.trigger(u.redraw),undefined;var a={width:t.width(),viewportWidth:r.getViewportWidth(),parentWidth:t.parent().width()};a=r.calculateWidth(t,a);var i=t.data("footable_info");if(t.data("footable_info",a),r.raise(s.resizing,{old:i,info:a}),!i||i&&i.width&&i.width!==a.width){for(var o,n=null,l=0;r.breakpoints.length>l;l++)if(o=r.breakpoints[l],o&&o.width&&a.width<=o.width){n=o;break}var d=null===n?"default":n.name,f=r.hasBreakpointColumn(d),p=t.data("breakpoint");t.data("breakpoint",d).removeClass("default breakpoint").removeClass(r.breakpointNames).addClass(d+(f?" breakpoint":"")),d!==p&&(t.trigger(u.redraw),r.raise(s.breakpoint,{breakpoint:d,info:a}))}r.raise(s.resized,{old:i,info:a})}},r.redraw=function(){r.addRowToggle(),r.bindToggleSelectors(),r.setColumnClasses();var t=e(r.table),a=t.data("breakpoint"),i=r.hasBreakpointColumn(a);t.find("> tbody > tr:not(."+d.detail+")").data("detail_created",!1).end().find("> thead > tr:last-child > th").each(function(){var i=r.columns[e(this).index()],o="",n=!0;e.each(i.matches,function(e,t){n||(o+=", ");var a=t+1;o+="> tbody > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > tfoot > tr:not(."+d.detail+") > td:nth-child("+a+")",o+=", > colgroup > col:nth-child("+a+")",n=!1}),o+=', > thead > tr[data-group-row="true"] > th[data-group="'+i.group+'"]';var l=t.find(o).add(this);if(""!==a&&(i.hide[a]===!1?l.addClass("footable-visible").show():l.removeClass("footable-visible").hide()),1===t.find("> thead > tr.footable-group-row").length){var s=t.find('> thead > tr:last-child > th[data-group="'+i.group+'"]:visible, > thead > tr:last-child > th[data-group="'+i.group+'"]:visible'),u=t.find('> thead > tr.footable-group-row > th[data-group="'+i.group+'"], > thead > tr.footable-group-row > td[data-group="'+i.group+'"]'),f=0;e.each(s,function(){f+=parseInt(e(this).attr("colspan")||1,10)}),f>0?u.attr("colspan",f).show():u.hide()}}).end().find("> tbody > tr."+d.detailShow).each(function(){r.createOrUpdateDetailRow(this)}),t.find("[data-bind-name]").each(function(){r.toggleInput(this)}),t.find("> tbody > tr."+d.detailShow+":visible").each(function(){var t=e(this).next();t.hasClass(d.detail)&&(i?t.show():t.hide())}),t.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"),t.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"),t.find("> thead > tr, > tbody > tr").find("> th.footable-visible:last, > td.footable-visible:last").addClass("footable-last-column").end().find("> th.footable-visible:first, > td.footable-visible:first").addClass("footable-first-column"),r.raise(s.redrawn)},r.toggleDetail=function(t){var a=t.jquery?t:e(t),i=a.next();a.hasClass(d.detailShow)?(a.removeClass(d.detailShow),i.hasClass(d.detail)&&i.hide(),r.raise(s.rowCollapsed,{row:a[0]})):(r.createOrUpdateDetailRow(a[0]),a.addClass(d.detailShow).next().show(),r.raise(s.rowExpanded,{row:a[0]}))},r.removeRow=function(t){var a=t.jquery?t:e(t);a.hasClass(d.detail)&&(a=a.prev());var i=a.next();a.data("detail_created")===!0&&i.remove(),a.remove(),r.raise(s.rowRemoved)},r.appendRow=function(t){var a=t.jquery?t:e(t);e(r.table).find("tbody").append(a),r.redraw()},r.getColumnFromTdIndex=function(t){var a=null;for(var i in r.columns)if(e.inArray(t,r.columns[i].matches)>=0){a=r.columns[i];break}return a},r.createOrUpdateDetailRow=function(t){var a,i=e(t),o=i.next(),n=[];if(i.data("detail_created")===!0)return!0;if(i.is(":hidden"))return!1;if(r.raise(s.rowDetailUpdating,{row:i,detail:o}),i.find("> td:hidden").each(function(){var t=e(this).index(),a=r.getColumnFromTdIndex(t),i=a.name;if(a.ignore===!0)return!0;t in a.names&&(i=a.names[t]);var o=e(this).attr("data-bind-name");if(null!=o&&e(this).is(":empty")){var l=e("."+d.detailInnerValue+"["+'data-bind-value="'+o+'"]');e(this).html(e(l).contents().detach())}var s;return a.isEditable!==!1&&(a.isEditable||e(this).find(":input").length>0)&&(null==o&&(o="bind-"+e.now()+"-"+t,e(this).attr("data-bind-name",o)),s=e(this).contents().detach()),s||(s=e(this).contents().clone(!0,!0)),n.push({name:i,value:r.parse(this,a),display:s,group:a.group,groupName:a.groupName,bindName:o}),!0}),0===n.length)return!1;var u=i.find("> td:visible").length,f=o.hasClass(d.detail);return f||(o=e('<tr class="'+d.detail+'"><td class="'+d.detailCell+'"><div class="'+d.detailInner+'"></div></td></tr>'),i.after(o)),o.find("> td:first").attr("colspan",u),a=o.find("."+d.detailInner).empty(),l.createDetail(a,n,l.createGroupedDetail,l.detailSeparator,d),i.data("detail_created",!0),r.raise(s.rowDetailUpdated,{row:i,detail:o}),!f},r.raise=function(t,a){r.options.debug===!0&&e.isFunction(r.options.log)&&r.options.log(t,"event"),a=a||{};var i={ft:r};e.extend(!0,i,a);var o=e.Event(t,i);return o.ft||e.extend(!0,o,i),e(r.table).trigger(o),o},r.reset=function(){var t=e(r.table);t.removeData("footable_info").data("breakpoint","").removeClass(d.loading).removeClass(d.loaded),t.find(l.toggleSelector).unbind(u.toggleRow).unbind("click.footable"),t.find("> tbody > tr").removeClass(d.detailShow),t.find("> tbody > tr."+d.detail).remove(),r.raise(s.reset)},r.toggleInput=function(t){var a=e(t).attr("data-bind-name");if(null!=a){var i=e("."+d.detailInnerValue+"["+'data-bind-value="'+a+'"]');null!=i&&(e(t).is(":visible")?e(i).is(":empty")||e(t).html(e(i).contents().detach()):e(t).is(":empty")||e(i).html(e(t).contents().detach()))}},r.init(),r}t.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(t){return e(t).data("value")||e.trim(e(t).text())},numeric:function(t){var a=e(t).data("value")||e(t).text().replace(/[^0-9.\-]/g,"");return a=parseFloat(a),isNaN(a)&&(a=0),a}},addRowToggle:!0,calculateWidthOverride:null,toggleSelector:" > tbody > tr:not(.footable-row-detail)",columnDataSelector:"> thead > tr:last-child > th, > thead > tr:last-child > td",detailSeparator:":",toggleHTMLElement:"<span />",createGroupedDetail:function(e){for(var t={_none:{name:null,data:[]}},a=0;e.length>a;a++){var i=e[a].group;null!==i?(i in t||(t[i]={name:e[a].groupName||e[a].group,data:[]}),t[i].data.push(e[a])):t._none.data.push(e[a])}return t},createDetail:function(t,a,i,o,n){var r=i(a);for(var l in r)if(0!==r[l].data.length){"_none"!==l&&t.append('<div class="'+n.detailInnerGroup+'">'+r[l].name+"</div>");for(var d=0;r[l].data.length>d;d++){var s=r[l].data[d].name?o:"";t.append(e("<div></div>").addClass(n.detailInnerRow).append(e("<div></div>").addClass(n.detailInnerName).append(r[l].data[d].name+s)).append(e("<div></div>").addClass(n.detailInnerValue).attr("data-bind-value",r[l].data[d].bindName).append(r[l].data[d].display)))}}},classes:{main:"footable",loading:"footable-loading",loaded:"footable-loaded",toggle:"footable-toggle",disabled:"footable-disabled",detail:"footable-row-detail",detailCell:"footable-row-detail-cell",detailInner:"footable-row-detail-inner",detailInnerRow:"footable-row-detail-row",detailInnerGroup:"footable-row-detail-group",detailInnerName:"footable-row-detail-name",detailInnerValue:"footable-row-detail-value",detailShow:"footable-detail-show"},triggers:{initialize:"footable_initialize",resize:"footable_resize",redraw:"footable_redraw",toggleRow:"footable_toggle_row",expandFirstRow:"footable_expand_first_row",expandAll:"footable_expand_all",collapseAll:"footable_collapse_all"},events:{alreadyInitialized:"footable_already_initialized",initializing:"footable_initializing",initialized:"footable_initialized",resizing:"footable_resizing",resized:"footable_resized",redrawn:"footable_redrawn",breakpoint:"footable_breakpoint",columnData:"footable_column_data",rowDetailUpdating:"footable_row_detail_updating",rowDetailUpdated:"footable_row_detail_updated",rowCollapsed:"footable_row_collapsed",rowExpanded:"footable_row_expanded",rowRemoved:"footable_row_removed",reset:"footable_reset"},debug:!1,log:null},version:{major:0,minor:5,toString:function(){return t.footable.version.major+"."+t.footable.version.minor},parse:function(e){var t=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(e);return{major:parseInt(t[1],10)||0,minor:parseInt(t[2],10)||0,patch:parseInt(t[3],10)||0}}},plugins:{_validate:function(a){if(!e.isFunction(a))return t.footable.options.debug===!0&&console.error('Validation failed, expected type "function", received type "{0}".',typeof a),!1;var i=new a;return"string"!=typeof i.name?(t.footable.options.debug===!0&&console.error('Validation failed, plugin does not implement a string property called "name".',i),!1):e.isFunction(i.init)?(t.footable.options.debug===!0&&console.log('Validation succeeded for plugin "'+i.name+'".',i),!0):(t.footable.options.debug===!0&&console.error('Validation failed, plugin "'+i.name+'" does not implement a function called "init".',i),!1)},registered:[],register:function(a,i){t.footable.plugins._validate(a)&&(t.footable.plugins.registered.push(a),"object"==typeof i&&e.extend(!0,t.footable.options,i))},load:function(e){var a,i,o=[];for(i=0;t.footable.plugins.registered.length>i;i++)try{a=t.footable.plugins.registered[i],o.push(new a(e))}catch(n){t.footable.options.debug===!0&&console.error(n)}return o},init:function(e){for(var a=0;e.plugins.length>a;a++)try{e.plugins[a].init(e)}catch(i){t.footable.options.debug===!0&&console.error(i)}}}};var o=0;e.fn.footable=function(a){a=a||{};var n=e.extend(!0,{},t.footable.options,a);return this.each(function(){o++;var t=new i(this,n,o);e(this).data("footable",t)})}})(jQuery,window);
// @preserve jQuery.floatThead 1.4.0 - http://mkoryak.github.io/floatThead/ - Copyright (c) 2012 - 2016 Misha Koryak
// @license MIT
!function(a){function b(a,b){if(8==k){var c=p.width(),d=i.debounce(function(){var a=p.width();c!=a&&(c=a,b())},1);p.on(a,d)}else p.on(a,i.debounce(b,1))}function c(b){var c=b[0],d=c.offsetParent;if(!d){d=c.parentElement;do{var e=window.getComputedStyle(d).getPropertyValue("position");if("static"!=e)break;if(d.offsetParent){d=d.offsetParent;break}}while(d=d.parentElement)}return a(d==document.body?[]:d)}function d(a){window&&window.console&&window.console.error&&window.console.error("jQuery.floatThead: "+a)}function e(a){var b=a.getBoundingClientRect();return b.width||b.right-b.left}function f(){var b=a('<div style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');a("body").append(b);var c=b.innerWidth(),d=a("div",b).innerWidth();return b.remove(),c-d}function g(a){if(a.dataTableSettings)for(var b=0;b<a.dataTableSettings.length;b++){var c=a.dataTableSettings[b].nTable;if(a[0]==c)return!0}return!1}function h(a,b,c){var d=c?"outerWidth":"width";if(n&&a.css("max-width")){var e=0;c&&(e+=parseInt(a.css("borderLeft"),10),e+=parseInt(a.css("borderRight"),10));for(var f=0;f<b.length;f++)e+=b.get(f).offsetWidth;return e}return a[d]()}a.floatThead=a.floatThead||{},a.floatThead.defaults={headerCellSelector:"tr:visible:first>*:visible",zIndex:1001,position:"auto",top:0,bottom:0,scrollContainer:function(){return a([])},responsiveContainer:function(){return a([])},getSizingRow:function(a){return a.find("tbody tr:visible:first>*:visible")},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,enableAria:!1,autoReflow:!1,debug:!1};var i=window._,j="undefined"!=typeof MutationObserver,k=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];a=1+a,b.innerHTML="<!--[if gt IE "+a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode}(),l=/Gecko\//.test(navigator.userAgent),m=/WebKit\//.test(navigator.userAgent);k||l||m||(k=11);var n=function(){if(m){var b=a('<div style="width:0px"><table style="max-width:100%"><tr><th><div style="min-width:100px;">X</div></th></tr></table></div>');a("body").append(b);var c=0==b.find("table").width();return b.remove(),c}return!1},o=!l&&!k,p=a(window);if(!window.matchMedia){var q=window.onbeforeprint,r=window.onafterprint;window.onbeforeprint=function(){q&&q(),p.triggerHandler("beforeprint")},window.onafterprint=function(){r&&r(),p.triggerHandler("afterprint")}}a.fn.floatThead=function(l){if(l=l||{},!i&&(i=window._||a.floatThead._,!i))throw new Error("jquery.floatThead-slim.js requires underscore. You should use the non-lite version since you do not have underscore.");if(8>k)return this;var q=null;if(i.isFunction(n)&&(n=n()),i.isString(l)){var r=l,s=this;return this.filter("table").each(function(){var b=a(this),c=b.data("floatThead-lazy");c&&b.floatThead(c);var d=b.data("floatThead-attached");if(d&&i.isFunction(d[r])){var e=d[r]();"undefined"!=typeof e&&(s=e)}}),s}var t=a.extend({},a.floatThead.defaults||{},l);if(a.each(l,function(b){b in a.floatThead.defaults||!t.debug||d("Used ["+b+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+i.keys(a.floatThead.defaults).join(", "))}),t.debug){var u=a.fn.jquery.split(".");1==parseInt(u[0],10)&&parseInt(u[1],10)<=7&&d("jQuery version "+a.fn.jquery+" detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")}return this.filter(":not(."+t.floatTableClass+")").each(function(){function l(a){return a+".fth-"+G+".floatTHead"}function n(){var b=0;if(I.children("tr:visible").each(function(){b+=a(this).outerHeight(!0)}),"collapse"==H.css("border-collapse")){var c=parseInt(H.css("border-top-width"),10),d=parseInt(H.find("thead tr:first").find(">*:first").css("border-top-width"),10);c>d&&(b-=c/2)}ib.outerHeight(b),jb.outerHeight(b)}function r(){var a=h(H,mb,!0),b=T?S:Q,c=b.width()||a,d="hidden"!=b.css("overflow-y")?c-N.vertical:c;if(fb.width(d),R){var e=100*a/d;ab.css("width",e+"%")}else ab.outerWidth(a)}function s(){K=(i.isFunction(t.top)?t.top(H):t.top)||0,L=(i.isFunction(t.bottom)?t.bottom(H):t.bottom)||0}function u(){var b,c=I.find(t.headerCellSelector);if(db?b=cb.find("col").length:(b=0,c.each(function(){b+=parseInt(a(this).attr("colspan")||1,10)})),b!=P){P=b;for(var d,e=[],f=[],g=[],h=0;b>h;h++)e.push(t.enableAria&&(d=c.eq(h).text())?'<th scope="col" class="floatThead-col">'+d+"</th>":'<th class="floatThead-col"/>'),f.push("<col/>"),g.push("<fthtd style='display:table-cell;height:0;width:auto;'/>");f=f.join(""),e=e.join(""),o&&(g=g.join(""),eb.html(g),mb=eb.find("fthtd")),ib.html(e),jb=ib.find("th"),db||cb.html(f),kb=cb.find("col"),bb.html(f),lb=bb.find("col")}return b}function v(){if(!M){if(M=!0,U){var a=h(H,mb,!0),b=$.width();a>b&&H.css("minWidth",a)}H.css(pb),ab.css(pb),ab.append(I),J.before(hb),n()}}function w(){M&&(M=!1,U&&H.width(rb),hb.detach(),H.prepend(I),H.css(qb),ab.css(qb),H.css("minWidth",sb),H.css("minWidth",h(H,mb)))}function x(a){tb!=a&&(tb=a,H.triggerHandler("floatThead",[a,fb]))}function y(a){U!=a&&(U=a,fb.css({position:U?"absolute":"fixed"}))}function z(a,b,c,d){return o?c:d?t.getSizingRow(a,b,c):b}function A(){var a,b=u();return function(){kb=cb.find("col");var c=z(H,kb,mb,k);if(c.length==b&&b>0){if(!db)for(a=0;b>a;a++)kb.eq(a).css("width","");w();var d=[];for(a=0;b>a;a++)d[a]=e(c.get(a));for(a=0;b>a;a++)lb.eq(a).width(d[a]),kb.eq(a).width(d[a]);v()}else ab.append(I),H.css(qb),ab.css(qb),n();H.triggerHandler("reflowed",[fb])}}function B(a){var b=Q.css("border-"+a+"-width"),c=0;return b&&~b.indexOf("px")&&(c=parseInt(b,10)),c}function C(){return"auto"==S.css("overflow-x")}function D(){var a,b=Q.scrollTop(),c=0,d=W?V.outerHeight(!0):0,e=X?d:-d,f=fb.height(),g=H.offset(),h=0,i=0;if(R){var j=Q.offset();c=g.top-j.top+b,W&&X&&(c+=d),h=B("left"),i=B("top"),c-=i}else a=g.top-K-f+L+N.horizontal;var k=p.scrollTop(),l=p.scrollLeft(),n=(C()?S:Q).scrollLeft();return function(j){T=C();var o=H[0].offsetWidth<=0&&H[0].offsetHeight<=0;if(!o&&gb)return gb=!1,setTimeout(function(){H.triggerHandler("reflow")},1),null;if(o&&(gb=!0,!U))return null;if("windowScroll"==j)k=p.scrollTop(),l=p.scrollLeft();else if("containerScroll"==j)if(S.length){if(!T)return;n=S.scrollLeft()}else b=Q.scrollTop(),n=Q.scrollLeft();else"init"!=j&&(k=p.scrollTop(),l=p.scrollLeft(),b=Q.scrollTop(),n=(T?S:Q).scrollLeft());if(!m||!(0>k||0>l)){if(_)y("windowScrollDone"==j?!0:!1);else if("windowScrollDone"==j)return null;g=H.offset(),W&&X&&(g.top+=d);var q,r,s=H.outerHeight();if(R&&U){if(c>=b){var t=c-b+i;q=t>0?t:0,x(!1)}else q=Z?i:b,x(!0);r=h}else!R&&U?(k>a+s+e?q=s-f+e:g.top>=k+K?(q=0,w(),x(!1)):(q=K+k-g.top+c+(X?d:0),v(),x(!0)),r=n):R&&!U?(c>b||b-c>s?(q=g.top-k,w(),x(!1)):(q=g.top+b-k-c,v(),x(!0)),r=g.left+n-l):R||U||(k>a+s+e?q=s+K-k+a+e:g.top>k+K?(q=g.top-k,v(),x(!1)):(q=K,x(!0)),r=g.left+n-l);return{top:q,left:r}}}}function E(){var a=null,b=null,c=null;return function(d,e,f){null==d||a==d.top&&b==d.left||(fb.css({top:d.top,left:d.left}),a=d.top,b=d.left),e&&r(),f&&n();var g=(T?S:Q).scrollLeft();U&&c==g||(fb.scrollLeft(g),c=g)}}function F(){if(Q.length)if(Q.data().perfectScrollbar)N={horizontal:0,vertical:0};else{var a=Q.width(),b=Q.height(),c=H.height(),d=h(H,mb),e=d>a?O:0,f=c>b?O:0;N.horizontal=d>a-f?O:0,N.vertical=c>b-e?O:0}}var G=i.uniqueId(),H=a(this);if(H.data("floatThead-attached"))return!0;if(!H.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');j=t.autoReflow&&j;var I=H.children("thead:first"),J=H.children("tbody:first");if(0==I.length||0==J.length)return H.data("floatThead-lazy",t),void H.unbind("reflow").one("reflow",function(){H.floatThead(t)});H.data("floatThead-lazy")&&H.unbind("reflow"),H.data("floatThead-lazy",!1);var K,L,M=!0,N={vertical:0,horizontal:0},O=f(),P=0;t.scrollContainer===!0&&(t.scrollContainer=c);var Q=t.scrollContainer(H)||a([]),R=Q.length>0,S=R?a([]):t.responsiveContainer(H)||a([]),T=C(),U=null;"undefined"!=typeof t.useAbsolutePositioning&&(t.position="auto",t.useAbsolutePositioning&&(t.position=t.useAbsolutePositioning?"absolute":"fixed"),d("option 'useAbsolutePositioning' has been removed in v1.3.0, use `position:'"+t.position+"'` instead. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"undefined"!=typeof t.scrollingTop&&(t.top=t.scrollingTop,d("option 'scrollingTop' has been renamed to 'top' in v1.3.0. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"undefined"!=typeof t.scrollingBottom&&(t.bottom=t.scrollingBottom,d("option 'scrollingBottom' has been renamed to 'bottom' in v1.3.0. See docs for more info: http://mkoryak.github.io/floatThead/#options")),"auto"==t.position?U=null:"fixed"==t.position?U=!1:"absolute"==t.position?U=!0:t.debug&&d('Invalid value given to "position" option, valid is "fixed", "absolute" and "auto". You passed: ',t.position),null==U&&(U=R);var V=H.find("caption"),W=1==V.length;if(W)var X="top"===(V.css("caption-side")||V.attr("align")||"top");var Y=a('<fthfoot style="display:table-footer-group;border-spacing:0;height:0;border-collapse:collapse;visibility:hidden"/>'),Z=!1,$=a([]),_=9>=k&&!R&&U,ab=a("<table/>"),bb=a("<colgroup/>"),cb=H.children("colgroup:first"),db=!0;0==cb.length&&(cb=a("<colgroup/>"),db=!1);var eb=a('<fthtr style="display:table-row;border-spacing:0;height:0;border-collapse:collapse"/>'),fb=a('<div style="overflow: hidden;" aria-hidden="true"></div>'),gb=!1,hb=a("<thead/>"),ib=a('<tr class="size-row"/>'),jb=a([]),kb=a([]),lb=a([]),mb=a([]);hb.append(ib),H.prepend(cb),o&&(Y.append(eb),H.append(Y)),ab.append(bb),fb.append(ab),t.copyTableClass&&ab.attr("class",H.attr("class")),ab.attr({cellpadding:H.attr("cellpadding"),cellspacing:H.attr("cellspacing"),border:H.attr("border")});var nb=H.css("display");if(ab.css({borderCollapse:H.css("borderCollapse"),border:H.css("border"),display:nb}),"none"==nb&&(gb=!0),ab.addClass(t.floatTableClass).css({margin:0,"border-bottom-width":0}),U){var ob=function(a,b){var c=a.css("position"),d="relative"==c||"absolute"==c,e=a;if(!d||b){var f={paddingLeft:a.css("paddingLeft"),paddingRight:a.css("paddingRight")};fb.css(f),e=a.data("floatThead-containerWrap")||a.wrap("<div class='"+t.floatWrapperClass+"' style='position: relative; clear:both;'></div>").parent(),a.data("floatThead-containerWrap",e),Z=!0}return e};R?($=ob(Q,!0),$.prepend(fb)):($=ob(H),H.before(fb))}else H.before(fb);fb.css({position:U?"absolute":"fixed",marginTop:0,top:U?0:"auto",zIndex:t.zIndex}),fb.addClass(t.floatContainerClass),s();var pb={"table-layout":"fixed"},qb={"table-layout":H.css("tableLayout")||"auto"},rb=H[0].style.width||"",sb=H.css("minWidth")||"",tb=!1;F();var ub,vb=function(){(ub=A())()};vb();var wb=D(),xb=E();xb(wb("init"),!0);var yb=i.debounce(function(){xb(wb("windowScrollDone"),!1)},1),zb=function(){xb(wb("windowScroll"),!1),_&&yb()},Ab=function(){xb(wb("containerScroll"),!1)},Bb=function(){H.is(":hidden")||(s(),F(),vb(),wb=D(),(xb=E())(wb("resize"),!0,!0))},Cb=i.debounce(function(){H.is(":hidden")||(F(),s(),vb(),wb=D(),xb(wb("reflow"),!0))},1),Db=function(){H.floatThead("destroy",[!0])},Eb=function(){H.floatThead(t)},Fb=function(a){a.matches?Db():Eb()};if(window.matchMedia?window.matchMedia("print").addListener(Fb):(p.on("beforeprint",Db),p.on("afterprint",Eb)),R?U?Q.on(l("scroll"),Ab):(Q.on(l("scroll"),Ab),p.on(l("scroll"),zb)):(S.on(l("scroll"),Ab),p.on(l("scroll"),zb)),p.on(l("load"),Cb),b(l("resize"),Bb),H.on("reflow",Cb),g(H)&&H.on("filter",Cb).on("sort",Cb).on("page",Cb),p.on(l("shown.bs.tab"),Cb),p.on(l("tabsactivate"),Cb),j){var Gb=null;i.isFunction(t.autoReflow)&&(Gb=t.autoReflow(H,Q)),Gb||(Gb=Q.length?Q[0]:H[0]),q=new MutationObserver(function(a){for(var b=function(a){return a&&a[0]&&("THEAD"==a[0].nodeName||"TD"==a[0].nodeName||"TH"==a[0].nodeName)},c=0;c<a.length;c++)if(!b(a[c].addedNodes)&&!b(a[c].removedNodes)){Cb();break}}),q.observe(Gb,{childList:!0,subtree:!0})}H.data("floatThead-attached",{destroy:function(a,b){var c=".fth-"+G;w(),H.css(qb),cb.remove(),o&&Y.remove(),hb.parent().length&&hb.replaceWith(I),x(!1),j&&(q.disconnect(),q=null),H.off("reflow reflowed"),Q.off(c),S.off(c),Z&&(Q.length?Q.unwrap():H.unwrap()),R?Q.data("floatThead-containerWrap",!1):H.data("floatThead-containerWrap",!1),H.css("minWidth",sb),fb.remove(),H.data("floatThead-attached",!1),p.off(c),b||(window.matchMedia&&window.matchMedia("print").removeListener(Fb),Db=Eb=function(){})},reflow:function(){Cb()},setHeaderHeight:function(){n()},getFloatContainer:function(){return fb},getRowGroups:function(){return M?fb.find(">table>thead").add(H.children("tbody,tfoot")):H.children("thead,tbody,tfoot")}})}),this}}(jQuery),function(a){a.floatThead=a.floatThead||{},a.floatThead._=window._||function(){var b={},c=Object.prototype.hasOwnProperty,d=["Arguments","Function","String","Number","Date","RegExp"];b.has=function(a,b){return c.call(a,b)},b.keys=function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c};var e=0;return b.uniqueId=function(a){var b=++e+"";return a?a+b:b},a.each(d,function(){var a=this;b["is"+a]=function(b){return Object.prototype.toString.call(b)=="[object "+a+"]"}}),b.debounce=function(a,b,c){var d,e,f,g,h;return function(){f=this,e=arguments,g=new Date;var i=function(){var j=new Date-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e)))},j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e)),h}},b}()}(jQuery);
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

/*
JqTree 1.3.3

Copyright 2015 Marco Braak

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, DragAndDropHandler, DragElement, HitAreasGenerator, Position, VisibleNodeIterator, node_module,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

node_module = require('./node');

Position = node_module.Position;

$ = jQuery;

DragAndDropHandler = (function() {
  function DragAndDropHandler(tree_widget) {
    this.tree_widget = tree_widget;
    this.hovered_area = null;
    this.$ghost = null;
    this.hit_areas = [];
    this.is_dragging = false;
    this.current_item = null;
  }

  DragAndDropHandler.prototype.mouseCapture = function(position_info) {
    var $element, node_element;
    $element = $(position_info.target);
    if (!this.mustCaptureElement($element)) {
      return null;
    }
    if (this.tree_widget.options.onIsMoveHandle && !this.tree_widget.options.onIsMoveHandle($element)) {
      return null;
    }
    node_element = this.tree_widget._getNodeElement($element);
    if (node_element && this.tree_widget.options.onCanMove) {
      if (!this.tree_widget.options.onCanMove(node_element.node)) {
        node_element = null;
      }
    }
    this.current_item = node_element;
    return this.current_item !== null;
  };

  DragAndDropHandler.prototype.mouseStart = function(position_info) {
    var offset;
    this.refresh();
    offset = $(position_info.target).offset();
    this.drag_element = new DragElement(this.current_item.node, position_info.page_x - offset.left, position_info.page_y - offset.top, this.tree_widget.element);
    this.is_dragging = true;
    this.current_item.$element.addClass('jqtree-moving');
    return true;
  };

  DragAndDropHandler.prototype.mouseDrag = function(position_info) {
    var area, can_move_to;
    this.drag_element.move(position_info.page_x, position_info.page_y);
    area = this.findHoveredArea(position_info.page_x, position_info.page_y);
    can_move_to = this.canMoveToArea(area);
    if (can_move_to && area) {
      if (!area.node.isFolder()) {
        this.stopOpenFolderTimer();
      }
      if (this.hovered_area !== area) {
        this.hovered_area = area;
        if (this.mustOpenFolderTimer(area)) {
          this.startOpenFolderTimer(area.node);
        } else {
          this.stopOpenFolderTimer();
        }
        this.updateDropHint();
      }
    } else {
      this.removeHover();
      this.removeDropHint();
      this.stopOpenFolderTimer();
    }
    if (!area) {
      if (this.tree_widget.options.onDragMove != null) {
        this.tree_widget.options.onDragMove(this.current_item.node, position_info.original_event);
      }
    }
    return true;
  };

  DragAndDropHandler.prototype.mustCaptureElement = function($element) {
    return !$element.is('input,select');
  };

  DragAndDropHandler.prototype.canMoveToArea = function(area) {
    var position_name;
    if (!area) {
      return false;
    } else if (this.tree_widget.options.onCanMoveTo) {
      position_name = Position.getName(area.position);
      return this.tree_widget.options.onCanMoveTo(this.current_item.node, area.node, position_name);
    } else {
      return true;
    }
  };

  DragAndDropHandler.prototype.mouseStop = function(position_info) {
    var current_item;
    this.moveItem(position_info);
    this.clear();
    this.removeHover();
    this.removeDropHint();
    this.removeHitAreas();
    current_item = this.current_item;
    if (this.current_item) {
      this.current_item.$element.removeClass('jqtree-moving');
      this.current_item = null;
    }
    this.is_dragging = false;
    if (!this.hovered_area && current_item) {
      if (this.tree_widget.options.onDragStop != null) {
        this.tree_widget.options.onDragStop(current_item.node, position_info.original_event);
      }
    }
    return false;
  };

  DragAndDropHandler.prototype.refresh = function() {
    this.removeHitAreas();
    if (this.current_item) {
      this.generateHitAreas();
      this.current_item = this.tree_widget._getNodeElementForNode(this.current_item.node);
      if (this.is_dragging) {
        return this.current_item.$element.addClass('jqtree-moving');
      }
    }
  };

  DragAndDropHandler.prototype.removeHitAreas = function() {
    return this.hit_areas = [];
  };

  DragAndDropHandler.prototype.clear = function() {
    this.drag_element.remove();
    return this.drag_element = null;
  };

  DragAndDropHandler.prototype.removeDropHint = function() {
    if (this.previous_ghost) {
      return this.previous_ghost.remove();
    }
  };

  DragAndDropHandler.prototype.removeHover = function() {
    return this.hovered_area = null;
  };

  DragAndDropHandler.prototype.generateHitAreas = function() {
    var hit_areas_generator;
    hit_areas_generator = new HitAreasGenerator(this.tree_widget.tree, this.current_item.node, this.getTreeDimensions().bottom);
    return this.hit_areas = hit_areas_generator.generate();
  };

  DragAndDropHandler.prototype.findHoveredArea = function(x, y) {
    var area, dimensions, high, low, mid;
    dimensions = this.getTreeDimensions();
    if (x < dimensions.left || y < dimensions.top || x > dimensions.right || y > dimensions.bottom) {
      return null;
    }
    low = 0;
    high = this.hit_areas.length;
    while (low < high) {
      mid = (low + high) >> 1;
      area = this.hit_areas[mid];
      if (y < area.top) {
        high = mid;
      } else if (y > area.bottom) {
        low = mid + 1;
      } else {
        return area;
      }
    }
    return null;
  };

  DragAndDropHandler.prototype.mustOpenFolderTimer = function(area) {
    var node;
    node = area.node;
    return node.isFolder() && !node.is_open && area.position === Position.INSIDE;
  };

  DragAndDropHandler.prototype.updateDropHint = function() {
    var node_element;
    if (!this.hovered_area) {
      return;
    }
    this.removeDropHint();
    node_element = this.tree_widget._getNodeElementForNode(this.hovered_area.node);
    return this.previous_ghost = node_element.addDropHint(this.hovered_area.position);
  };

  DragAndDropHandler.prototype.startOpenFolderTimer = function(folder) {
    var openFolder;
    openFolder = (function(_this) {
      return function() {
        return _this.tree_widget._openNode(folder, _this.tree_widget.options.slide, function() {
          _this.refresh();
          return _this.updateDropHint();
        });
      };
    })(this);
    this.stopOpenFolderTimer();
    return this.open_folder_timer = setTimeout(openFolder, this.tree_widget.options.openFolderDelay);
  };

  DragAndDropHandler.prototype.stopOpenFolderTimer = function() {
    if (this.open_folder_timer) {
      clearTimeout(this.open_folder_timer);
      return this.open_folder_timer = null;
    }
  };

  DragAndDropHandler.prototype.moveItem = function(position_info) {
    var doMove, event, moved_node, position, previous_parent, target_node;
    if (this.hovered_area && this.hovered_area.position !== Position.NONE && this.canMoveToArea(this.hovered_area)) {
      moved_node = this.current_item.node;
      target_node = this.hovered_area.node;
      position = this.hovered_area.position;
      previous_parent = moved_node.parent;
      if (position === Position.INSIDE) {
        this.hovered_area.node.is_open = true;
      }
      doMove = (function(_this) {
        return function() {
          _this.tree_widget.tree.moveNode(moved_node, target_node, position);
          _this.tree_widget.element.empty();
          return _this.tree_widget._refreshElements();
        };
      })(this);
      event = this.tree_widget._triggerEvent('tree.move', {
        move_info: {
          moved_node: moved_node,
          target_node: target_node,
          position: Position.getName(position),
          previous_parent: previous_parent,
          do_move: doMove,
          original_event: position_info.original_event
        }
      });
      if (!event.isDefaultPrevented()) {
        return doMove();
      }
    }
  };

  DragAndDropHandler.prototype.getTreeDimensions = function() {
    var offset;
    offset = this.tree_widget.element.offset();
    return {
      left: offset.left,
      top: offset.top,
      right: offset.left + this.tree_widget.element.width(),
      bottom: offset.top + this.tree_widget.element.height() + 16
    };
  };

  return DragAndDropHandler;

})();

VisibleNodeIterator = (function() {
  function VisibleNodeIterator(tree) {
    this.tree = tree;
  }

  VisibleNodeIterator.prototype.iterate = function() {
    var _iterateNode, is_first_node;
    is_first_node = true;
    _iterateNode = (function(_this) {
      return function(node, next_node) {
        var $element, child, children_length, i, j, len, must_iterate_inside, ref;
        must_iterate_inside = (node.is_open || !node.element) && node.hasChildren();
        if (node.element) {
          $element = $(node.element);
          if (!$element.is(':visible')) {
            return;
          }
          if (is_first_node) {
            _this.handleFirstNode(node, $element);
            is_first_node = false;
          }
          if (!node.hasChildren()) {
            _this.handleNode(node, next_node, $element);
          } else if (node.is_open) {
            if (!_this.handleOpenFolder(node, $element)) {
              must_iterate_inside = false;
            }
          } else {
            _this.handleClosedFolder(node, next_node, $element);
          }
        }
        if (must_iterate_inside) {
          children_length = node.children.length;
          ref = node.children;
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            child = ref[i];
            if (i === (children_length - 1)) {
              _iterateNode(node.children[i], null);
            } else {
              _iterateNode(node.children[i], node.children[i + 1]);
            }
          }
          if (node.is_open) {
            return _this.handleAfterOpenFolder(node, next_node, $element);
          }
        }
      };
    })(this);
    return _iterateNode(this.tree, null);
  };

  VisibleNodeIterator.prototype.handleNode = function(node, next_node, $element) {};

  VisibleNodeIterator.prototype.handleOpenFolder = function(node, $element) {};

  VisibleNodeIterator.prototype.handleClosedFolder = function(node, next_node, $element) {};

  VisibleNodeIterator.prototype.handleAfterOpenFolder = function(node, next_node, $element) {};

  VisibleNodeIterator.prototype.handleFirstNode = function(node, $element) {};

  return VisibleNodeIterator;

})();

HitAreasGenerator = (function(superClass) {
  extend(HitAreasGenerator, superClass);

  function HitAreasGenerator(tree, current_node, tree_bottom) {
    HitAreasGenerator.__super__.constructor.call(this, tree);
    this.current_node = current_node;
    this.tree_bottom = tree_bottom;
  }

  HitAreasGenerator.prototype.generate = function() {
    this.positions = [];
    this.last_top = 0;
    this.iterate();
    return this.generateHitAreas(this.positions);
  };

  HitAreasGenerator.prototype.getTop = function($element) {
    return $element.offset().top;
  };

  HitAreasGenerator.prototype.addPosition = function(node, position, top) {
    var area;
    area = {
      top: top,
      node: node,
      position: position
    };
    this.positions.push(area);
    return this.last_top = top;
  };

  HitAreasGenerator.prototype.handleNode = function(node, next_node, $element) {
    var top;
    top = this.getTop($element);
    if (node === this.current_node) {
      this.addPosition(node, Position.NONE, top);
    } else {
      this.addPosition(node, Position.INSIDE, top);
    }
    if (next_node === this.current_node || node === this.current_node) {
      return this.addPosition(node, Position.NONE, top);
    } else {
      return this.addPosition(node, Position.AFTER, top);
    }
  };

  HitAreasGenerator.prototype.handleOpenFolder = function(node, $element) {
    if (node === this.current_node) {
      return false;
    }
    if (node.children[0] !== this.current_node) {
      this.addPosition(node, Position.INSIDE, this.getTop($element));
    }
    return true;
  };

  HitAreasGenerator.prototype.handleClosedFolder = function(node, next_node, $element) {
    var top;
    top = this.getTop($element);
    if (node === this.current_node) {
      return this.addPosition(node, Position.NONE, top);
    } else {
      this.addPosition(node, Position.INSIDE, top);
      if (next_node !== this.current_node) {
        return this.addPosition(node, Position.AFTER, top);
      }
    }
  };

  HitAreasGenerator.prototype.handleFirstNode = function(node, $element) {
    if (node !== this.current_node) {
      return this.addPosition(node, Position.BEFORE, this.getTop($(node.element)));
    }
  };

  HitAreasGenerator.prototype.handleAfterOpenFolder = function(node, next_node, $element) {
    if (node === this.current_node.node || next_node === this.current_node.node) {
      return this.addPosition(node, Position.NONE, this.last_top);
    } else {
      return this.addPosition(node, Position.AFTER, this.last_top);
    }
  };

  HitAreasGenerator.prototype.generateHitAreas = function(positions) {
    var group, hit_areas, j, len, position, previous_top;
    previous_top = -1;
    group = [];
    hit_areas = [];
    for (j = 0, len = positions.length; j < len; j++) {
      position = positions[j];
      if (position.top !== previous_top && group.length) {
        if (group.length) {
          this.generateHitAreasForGroup(hit_areas, group, previous_top, position.top);
        }
        previous_top = position.top;
        group = [];
      }
      group.push(position);
    }
    this.generateHitAreasForGroup(hit_areas, group, previous_top, this.tree_bottom);
    return hit_areas;
  };

  HitAreasGenerator.prototype.generateHitAreasForGroup = function(hit_areas, positions_in_group, top, bottom) {
    var area_height, area_top, i, position, position_count;
    position_count = Math.min(positions_in_group.length, 4);
    area_height = Math.round((bottom - top) / position_count);
    area_top = top;
    i = 0;
    while (i < position_count) {
      position = positions_in_group[i];
      hit_areas.push({
        top: area_top,
        bottom: area_top + area_height,
        node: position.node,
        position: position.position
      });
      area_top += area_height;
      i += 1;
    }
    return null;
  };

  return HitAreasGenerator;

})(VisibleNodeIterator);

DragElement = (function() {
  function DragElement(node, offset_x, offset_y, $tree) {
    this.offset_x = offset_x;
    this.offset_y = offset_y;
    this.$element = $("<span class=\"jqtree-title jqtree-dragging\">" + node.name + "</span>");
    this.$element.css("position", "absolute");
    $tree.append(this.$element);
  }

  DragElement.prototype.move = function(page_x, page_y) {
    return this.$element.offset({
      left: page_x - this.offset_x,
      top: page_y - this.offset_y
    });
  };

  DragElement.prototype.remove = function() {
    return this.$element.remove();
  };

  return DragElement;

})();

module.exports = {
  DragAndDropHandler: DragAndDropHandler,
  DragElement: DragElement,
  HitAreasGenerator: HitAreasGenerator
};

},{"./node":5}],2:[function(require,module,exports){
var $, ElementsRenderer, NodeElement, html_escape, node_element, util;

node_element = require('./node_element');

NodeElement = node_element.NodeElement;

util = require('./util');

html_escape = util.html_escape;

$ = jQuery;

ElementsRenderer = (function() {
  function ElementsRenderer(tree_widget) {
    this.tree_widget = tree_widget;
    this.opened_icon_element = this.createButtonElement(tree_widget.options.openedIcon);
    this.closed_icon_element = this.createButtonElement(tree_widget.options.closedIcon);
  }

  ElementsRenderer.prototype.render = function(from_node) {
    if (from_node && from_node.parent) {
      return this.renderFromNode(from_node);
    } else {
      return this.renderFromRoot();
    }
  };

  ElementsRenderer.prototype.renderFromRoot = function() {
    var $element;
    $element = this.tree_widget.element;
    $element.empty();
    return this.createDomElements($element[0], this.tree_widget.tree.children, true, true, 1);
  };

  ElementsRenderer.prototype.renderFromNode = function(node) {
    var $previous_li, li;
    $previous_li = $(node.element);
    li = this.createLi(node, node.getLevel());
    this.attachNodeData(node, li);
    $previous_li.after(li);
    $previous_li.remove();
    if (node.children) {
      return this.createDomElements(li, node.children, false, false, node.getLevel() + 1);
    }
  };

  ElementsRenderer.prototype.createDomElements = function(element, children, is_root_node, is_open, level) {
    var child, i, len, li, ul;
    ul = this.createUl(is_root_node);
    element.appendChild(ul);
    for (i = 0, len = children.length; i < len; i++) {
      child = children[i];
      li = this.createLi(child, level);
      ul.appendChild(li);
      this.attachNodeData(child, li);
      if (child.hasChildren()) {
        this.createDomElements(li, child.children, false, child.is_open, level + 1);
      }
    }
    return null;
  };

  ElementsRenderer.prototype.attachNodeData = function(node, li) {
    node.element = li;
    return $(li).data('node', node);
  };

  ElementsRenderer.prototype.createUl = function(is_root_node) {
    var class_string, role, ul;
    if (!is_root_node) {
      class_string = '';
      role = 'group';
    } else {
      class_string = 'jqtree-tree';
      role = 'tree';
      if (this.tree_widget.options.rtl) {
        class_string += ' jqtree-rtl';
      }
    }
    ul = document.createElement('ul');
    ul.className = "jqtree_common " + class_string;
    ul.setAttribute('role', role);
    return ul;
  };

  ElementsRenderer.prototype.createLi = function(node, level) {
    var is_selected, li;
    is_selected = this.tree_widget.select_node_handler && this.tree_widget.select_node_handler.isNodeSelected(node);
    if (node.isFolder()) {
      li = this.createFolderLi(node, level, is_selected);
    } else {
      li = this.createNodeLi(node, level, is_selected);
    }
    if (this.tree_widget.options.onCreateLi) {
      this.tree_widget.options.onCreateLi(node, $(li));
    }
    return li;
  };

  ElementsRenderer.prototype.createFolderLi = function(node, level, is_selected) {
    var button_classes, button_link, div, folder_classes, icon_element, is_folder, li;
    button_classes = this.getButtonClasses(node);
    folder_classes = this.getFolderClasses(node, is_selected);
    if (node.is_open) {
      icon_element = this.opened_icon_element;
    } else {
      icon_element = this.closed_icon_element;
    }
    li = document.createElement('li');
    li.className = "jqtree_common " + folder_classes;
    li.setAttribute('role', 'presentation');
    div = document.createElement('div');
    div.className = "jqtree-element jqtree_common";
    div.setAttribute('role', 'presentation');
    li.appendChild(div);
    button_link = document.createElement('a');
    button_link.className = button_classes;
    button_link.appendChild(icon_element.cloneNode(false));
    button_link.setAttribute('role', 'presentation');
    button_link.setAttribute('aria-hidden', 'true');
    if (this.tree_widget.options.buttonLeft) {
      div.appendChild(button_link);
    }
    div.appendChild(this.createTitleSpan(node.name, level, is_selected, node.is_open, is_folder = true));
    if (!this.tree_widget.options.buttonLeft) {
      div.appendChild(button_link);
    }
    return li;
  };

  ElementsRenderer.prototype.createNodeLi = function(node, level, is_selected) {
    var class_string, div, is_folder, li, li_classes;
    li_classes = ['jqtree_common'];
    if (is_selected) {
      li_classes.push('jqtree-selected');
    }
    class_string = li_classes.join(' ');
    li = document.createElement('li');
    li.className = class_string;
    li.setAttribute('role', 'presentation');
    div = document.createElement('div');
    div.className = "jqtree-element jqtree_common";
    div.setAttribute('role', 'presentation');
    li.appendChild(div);
    div.appendChild(this.createTitleSpan(node.name, level, is_selected, node.is_open, is_folder = false));
    return li;
  };

  ElementsRenderer.prototype.createTitleSpan = function(node_name, level, is_selected, is_open, is_folder) {
    var classes, title_span;
    title_span = document.createElement('span');
    classes = "jqtree-title jqtree_common";
    if (is_folder) {
      classes += " jqtree-title-folder";
    }
    title_span.className = classes;
    title_span.setAttribute('role', 'treeitem');
    title_span.setAttribute('aria-level', level);
    title_span.setAttribute('aria-selected', util.getBoolString(is_selected));
    title_span.setAttribute('aria-expanded', util.getBoolString(is_open));
    if (is_selected) {
      title_span.setAttribute('tabindex', 0);
    }
    title_span.innerHTML = this.escapeIfNecessary(node_name);
    return title_span;
  };

  ElementsRenderer.prototype.getButtonClasses = function(node) {
    var classes;
    classes = ['jqtree-toggler', 'jqtree_common'];
    if (!node.is_open) {
      classes.push('jqtree-closed');
    }
    if (this.tree_widget.options.buttonLeft) {
      classes.push('jqtree-toggler-left');
    } else {
      classes.push('jqtree-toggler-right');
    }
    return classes.join(' ');
  };

  ElementsRenderer.prototype.getFolderClasses = function(node, is_selected) {
    var classes;
    classes = ['jqtree-folder'];
    if (!node.is_open) {
      classes.push('jqtree-closed');
    }
    if (is_selected) {
      classes.push('jqtree-selected');
    }
    if (node.is_loading) {
      classes.push('jqtree-loading');
    }
    return classes.join(' ');
  };

  ElementsRenderer.prototype.escapeIfNecessary = function(value) {
    if (this.tree_widget.options.autoEscape) {
      return html_escape(value);
    } else {
      return value;
    }
  };

  ElementsRenderer.prototype.createButtonElement = function(value) {
    var div;
    if (typeof value === 'string') {
      div = document.createElement('div');
      div.innerHTML = value;
      return document.createTextNode(div.innerHTML);
    } else {
      return $(value)[0];
    }
  };

  return ElementsRenderer;

})();

module.exports = ElementsRenderer;

},{"./node_element":6,"./util":12}],3:[function(require,module,exports){
var $, KeyHandler,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

$ = jQuery;

KeyHandler = (function() {
  var DOWN, LEFT, RIGHT, UP;

  LEFT = 37;

  UP = 38;

  RIGHT = 39;

  DOWN = 40;

  function KeyHandler(tree_widget) {
    this.selectNode = bind(this.selectNode, this);
    this.tree_widget = tree_widget;
    if (tree_widget.options.keyboardSupport) {
      $(document).bind('keydown.jqtree', $.proxy(this.handleKeyDown, this));
    }
  }

  KeyHandler.prototype.deinit = function() {
    return $(document).unbind('keydown.jqtree');
  };

  KeyHandler.prototype.moveDown = function() {
    var node;
    node = this.tree_widget.getSelectedNode();
    if (node) {
      return this.selectNode(node.getNextNode());
    } else {
      return false;
    }
  };

  KeyHandler.prototype.moveUp = function() {
    var node;
    node = this.tree_widget.getSelectedNode();
    if (node) {
      return this.selectNode(node.getPreviousNode());
    } else {
      return false;
    }
  };

  KeyHandler.prototype.moveRight = function() {
    var node;
    node = this.tree_widget.getSelectedNode();
    if (!node) {
      return true;
    } else if (!node.isFolder()) {
      return true;
    } else {
      if (node.is_open) {
        return this.selectNode(node.getNextNode());
      } else {
        this.tree_widget.openNode(node);
        return false;
      }
    }
  };

  KeyHandler.prototype.moveLeft = function() {
    var node;
    node = this.tree_widget.getSelectedNode();
    if (!node) {
      return true;
    } else if (node.isFolder() && node.is_open) {
      this.tree_widget.closeNode(node);
      return false;
    } else {
      return this.selectNode(node.getParent());
    }
  };

  KeyHandler.prototype.handleKeyDown = function(e) {
    var key;
    if (!this.tree_widget.options.keyboardSupport) {
      return true;
    }
    if ($(document.activeElement).is('textarea,input,select')) {
      return true;
    }
    if (!this.tree_widget.getSelectedNode()) {
      return true;
    }
    key = e.which;
    switch (key) {
      case DOWN:
        return this.moveDown();
      case UP:
        return this.moveUp();
      case RIGHT:
        return this.moveRight();
      case LEFT:
        return this.moveLeft();
    }
    return true;
  };

  KeyHandler.prototype.selectNode = function(node) {
    if (!node) {
      return true;
    } else {
      this.tree_widget.selectNode(node);
      if (this.tree_widget.scroll_handler && (!this.tree_widget.scroll_handler.isScrolledIntoView($(node.element).find('.jqtree-element')))) {
        this.tree_widget.scrollToNode(node);
      }
      return false;
    }
  };

  return KeyHandler;

})();

module.exports = KeyHandler;

},{}],4:[function(require,module,exports){

/*
This widget does the same a the mouse widget in jqueryui.
 */
var $, MouseWidget, SimpleWidget,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimpleWidget = require('./simple.widget');

$ = jQuery;

MouseWidget = (function(superClass) {
  extend(MouseWidget, superClass);

  function MouseWidget() {
    return MouseWidget.__super__.constructor.apply(this, arguments);
  }

  MouseWidget.is_mouse_handled = false;

  MouseWidget.prototype._init = function() {
    this.$el.bind('mousedown.mousewidget', $.proxy(this._mouseDown, this));
    this.$el.bind('touchstart.mousewidget', $.proxy(this._touchStart, this));
    this.is_mouse_started = false;
    this.mouse_delay = 0;
    this._mouse_delay_timer = null;
    this._is_mouse_delay_met = true;
    return this.mouse_down_info = null;
  };

  MouseWidget.prototype._deinit = function() {
    var $document;
    this.$el.unbind('mousedown.mousewidget');
    this.$el.unbind('touchstart.mousewidget');
    $document = $(document);
    $document.unbind('mousemove.mousewidget');
    return $document.unbind('mouseup.mousewidget');
  };

  MouseWidget.prototype._mouseDown = function(e) {
    var result;
    if (e.which !== 1) {
      return;
    }
    result = this._handleMouseDown(e, this._getPositionInfo(e));
    if (result) {
      e.preventDefault();
    }
    return result;
  };

  MouseWidget.prototype._handleMouseDown = function(e, position_info) {
    if (MouseWidget.is_mouse_handled) {
      return;
    }
    if (this.is_mouse_started) {
      this._handleMouseUp(position_info);
    }
    this.mouse_down_info = position_info;
    if (!this._mouseCapture(position_info)) {
      return;
    }
    this._handleStartMouse();
    this.is_mouse_handled = true;
    return true;
  };

  MouseWidget.prototype._handleStartMouse = function() {
    var $document;
    $document = $(document);
    $document.bind('mousemove.mousewidget', $.proxy(this._mouseMove, this));
    $document.bind('touchmove.mousewidget', $.proxy(this._touchMove, this));
    $document.bind('mouseup.mousewidget', $.proxy(this._mouseUp, this));
    $document.bind('touchend.mousewidget', $.proxy(this._touchEnd, this));
    if (this.mouse_delay) {
      return this._startMouseDelayTimer();
    }
  };

  MouseWidget.prototype._startMouseDelayTimer = function() {
    if (this._mouse_delay_timer) {
      clearTimeout(this._mouse_delay_timer);
    }
    this._mouse_delay_timer = setTimeout((function(_this) {
      return function() {
        return _this._is_mouse_delay_met = true;
      };
    })(this), this.mouse_delay);
    return this._is_mouse_delay_met = false;
  };

  MouseWidget.prototype._mouseMove = function(e) {
    return this._handleMouseMove(e, this._getPositionInfo(e));
  };

  MouseWidget.prototype._handleMouseMove = function(e, position_info) {
    if (this.is_mouse_started) {
      this._mouseDrag(position_info);
      return e.preventDefault();
    }
    if (this.mouse_delay && !this._is_mouse_delay_met) {
      return true;
    }
    this.is_mouse_started = this._mouseStart(this.mouse_down_info) !== false;
    if (this.is_mouse_started) {
      this._mouseDrag(position_info);
    } else {
      this._handleMouseUp(position_info);
    }
    return !this.is_mouse_started;
  };

  MouseWidget.prototype._getPositionInfo = function(e) {
    return {
      page_x: e.pageX,
      page_y: e.pageY,
      target: e.target,
      original_event: e
    };
  };

  MouseWidget.prototype._mouseUp = function(e) {
    return this._handleMouseUp(this._getPositionInfo(e));
  };

  MouseWidget.prototype._handleMouseUp = function(position_info) {
    var $document;
    $document = $(document);
    $document.unbind('mousemove.mousewidget');
    $document.unbind('touchmove.mousewidget');
    $document.unbind('mouseup.mousewidget');
    $document.unbind('touchend.mousewidget');
    if (this.is_mouse_started) {
      this.is_mouse_started = false;
      this._mouseStop(position_info);
    }
  };

  MouseWidget.prototype._mouseCapture = function(position_info) {
    return true;
  };

  MouseWidget.prototype._mouseStart = function(position_info) {
    return null;
  };

  MouseWidget.prototype._mouseDrag = function(position_info) {
    return null;
  };

  MouseWidget.prototype._mouseStop = function(position_info) {
    return null;
  };

  MouseWidget.prototype.setMouseDelay = function(mouse_delay) {
    return this.mouse_delay = mouse_delay;
  };

  MouseWidget.prototype._touchStart = function(e) {
    var touch;
    if (e.originalEvent.touches.length > 1) {
      return;
    }
    touch = e.originalEvent.changedTouches[0];
    return this._handleMouseDown(e, this._getPositionInfo(touch));
  };

  MouseWidget.prototype._touchMove = function(e) {
    var touch;
    if (e.originalEvent.touches.length > 1) {
      return;
    }
    touch = e.originalEvent.changedTouches[0];
    return this._handleMouseMove(e, this._getPositionInfo(touch));
  };

  MouseWidget.prototype._touchEnd = function(e) {
    var touch;
    if (e.originalEvent.touches.length > 1) {
      return;
    }
    touch = e.originalEvent.changedTouches[0];
    return this._handleMouseUp(this._getPositionInfo(touch));
  };

  return MouseWidget;

})(SimpleWidget);

module.exports = MouseWidget;

},{"./simple.widget":10}],5:[function(require,module,exports){
var $, Node, Position;

$ = jQuery;

Position = {
  getName: function(position) {
    return Position.strings[position - 1];
  },
  nameToIndex: function(name) {
    var i, j, ref;
    for (i = j = 1, ref = Position.strings.length; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      if (Position.strings[i - 1] === name) {
        return i;
      }
    }
    return 0;
  }
};

Position.BEFORE = 1;

Position.AFTER = 2;

Position.INSIDE = 3;

Position.NONE = 4;

Position.strings = ['before', 'after', 'inside', 'none'];

Node = (function() {
  function Node(o, is_root, node_class) {
    if (is_root == null) {
      is_root = false;
    }
    if (node_class == null) {
      node_class = Node;
    }
    this.name = '';
    this.setData(o);
    this.children = [];
    this.parent = null;
    if (is_root) {
      this.id_mapping = {};
      this.tree = this;
      this.node_class = node_class;
    }
  }

  Node.prototype.setData = function(o) {

    /*
    Set the data of this node.
    
    setData(string): set the name of the node
    setdata(object): set attributes of the node
    
    Examples:
        setdata('node1')
    
        setData({ name: 'node1', id: 1});
    
        setData({ name: 'node2', id: 2, color: 'green'});
    
    * This is an internal function; it is not in the docs
    * Does not remove existing node values
     */
    var key, setName, value;
    setName = (function(_this) {
      return function(name) {
        if (name !== null) {
          return _this.name = name;
        }
      };
    })(this);
    if (typeof o !== 'object') {
      setName(o);
    } else {
      for (key in o) {
        value = o[key];
        if (key === 'label') {
          setName(value);
        } else if (key !== 'children') {
          this[key] = value;
        }
      }
    }
    return null;
  };

  Node.prototype.initFromData = function(data) {
    var addChildren, addNode;
    addNode = (function(_this) {
      return function(node_data) {
        _this.setData(node_data);
        if (node_data.children) {
          return addChildren(node_data.children);
        }
      };
    })(this);
    addChildren = (function(_this) {
      return function(children_data) {
        var child, j, len, node;
        for (j = 0, len = children_data.length; j < len; j++) {
          child = children_data[j];
          node = new _this.tree.node_class('');
          node.initFromData(child);
          _this.addChild(node);
        }
        return null;
      };
    })(this);
    addNode(data);
    return null;
  };


  /*
  Create tree from data.
  
  Structure of data is:
  [
      {
          label: 'node1',
          children: [
              { label: 'child1' },
              { label: 'child2' }
          ]
      },
      {
          label: 'node2'
      }
  ]
   */

  Node.prototype.loadFromData = function(data) {
    var j, len, node, o;
    this.removeChildren();
    for (j = 0, len = data.length; j < len; j++) {
      o = data[j];
      node = new this.tree.node_class(o);
      this.addChild(node);
      if (typeof o === 'object' && o.children) {
        node.loadFromData(o.children);
      }
    }
    return null;
  };


  /*
  Add child.
  
  tree.addChild(
      new Node('child1')
  );
   */

  Node.prototype.addChild = function(node) {
    this.children.push(node);
    return node._setParent(this);
  };


  /*
  Add child at position. Index starts at 0.
  
  tree.addChildAtPosition(
      new Node('abc'),
      1
  );
   */

  Node.prototype.addChildAtPosition = function(node, index) {
    this.children.splice(index, 0, node);
    return node._setParent(this);
  };

  Node.prototype._setParent = function(parent) {
    this.parent = parent;
    this.tree = parent.tree;
    return this.tree.addNodeToIndex(this);
  };


  /*
  Remove child. This also removes the children of the node.
  
  tree.removeChild(tree.children[0]);
   */

  Node.prototype.removeChild = function(node) {
    node.removeChildren();
    return this._removeChild(node);
  };

  Node.prototype._removeChild = function(node) {
    this.children.splice(this.getChildIndex(node), 1);
    return this.tree.removeNodeFromIndex(node);
  };


  /*
  Get child index.
  
  var index = getChildIndex(node);
   */

  Node.prototype.getChildIndex = function(node) {
    return $.inArray(node, this.children);
  };


  /*
  Does the tree have children?
  
  if (tree.hasChildren()) {
      //
  }
   */

  Node.prototype.hasChildren = function() {
    return this.children.length !== 0;
  };

  Node.prototype.isFolder = function() {
    return this.hasChildren() || this.load_on_demand;
  };


  /*
  Iterate over all the nodes in the tree.
  
  Calls callback with (node, level).
  
  The callback must return true to continue the iteration on current node.
  
  tree.iterate(
      function(node, level) {
         console.log(node.name);
  
         // stop iteration after level 2
         return (level <= 2);
      }
  );
   */

  Node.prototype.iterate = function(callback) {
    var _iterate;
    _iterate = function(node, level) {
      var child, j, len, ref, result;
      if (node.children) {
        ref = node.children;
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          result = callback(child, level);
          if (result && child.hasChildren()) {
            _iterate(child, level + 1);
          }
        }
        return null;
      }
    };
    _iterate(this, 0);
    return null;
  };


  /*
  Move node relative to another node.
  
  Argument position: Position.BEFORE, Position.AFTER or Position.Inside
  
  // move node1 after node2
  tree.moveNode(node1, node2, Position.AFTER);
   */

  Node.prototype.moveNode = function(moved_node, target_node, position) {
    if (moved_node.isParentOf(target_node)) {
      return;
    }
    moved_node.parent._removeChild(moved_node);
    if (position === Position.AFTER) {
      return target_node.parent.addChildAtPosition(moved_node, target_node.parent.getChildIndex(target_node) + 1);
    } else if (position === Position.BEFORE) {
      return target_node.parent.addChildAtPosition(moved_node, target_node.parent.getChildIndex(target_node));
    } else if (position === Position.INSIDE) {
      return target_node.addChildAtPosition(moved_node, 0);
    }
  };


  /*
  Get the tree as data.
   */

  Node.prototype.getData = function(include_parent) {
    var getDataFromNodes;
    if (include_parent == null) {
      include_parent = false;
    }
    getDataFromNodes = function(nodes) {
      var data, j, k, len, node, tmp_node, v;
      data = [];
      for (j = 0, len = nodes.length; j < len; j++) {
        node = nodes[j];
        tmp_node = {};
        for (k in node) {
          v = node[k];
          if ((k !== 'parent' && k !== 'children' && k !== 'element' && k !== 'tree') && Object.prototype.hasOwnProperty.call(node, k)) {
            tmp_node[k] = v;
          }
        }
        if (node.hasChildren()) {
          tmp_node.children = getDataFromNodes(node.children);
        }
        data.push(tmp_node);
      }
      return data;
    };
    if (include_parent) {
      return getDataFromNodes([this]);
    } else {
      return getDataFromNodes(this.children);
    }
  };

  Node.prototype.getNodeByName = function(name) {
    var result;
    result = null;
    this.iterate(function(node) {
      if (node.name === name) {
        result = node;
        return false;
      } else {
        return true;
      }
    });
    return result;
  };

  Node.prototype.addAfter = function(node_info) {
    var child_index, node;
    if (!this.parent) {
      return null;
    } else {
      node = new this.tree.node_class(node_info);
      child_index = this.parent.getChildIndex(this);
      this.parent.addChildAtPosition(node, child_index + 1);
      if (typeof node_info === 'object' && node_info.children && node_info.children.length) {
        node.loadFromData(node_info.children);
      }
      return node;
    }
  };

  Node.prototype.addBefore = function(node_info) {
    var child_index, node;
    if (!this.parent) {
      return null;
    } else {
      node = new this.tree.node_class(node_info);
      child_index = this.parent.getChildIndex(this);
      this.parent.addChildAtPosition(node, child_index);
      if (typeof node_info === 'object' && node_info.children && node_info.children.length) {
        node.loadFromData(node_info.children);
      }
      return node;
    }
  };

  Node.prototype.addParent = function(node_info) {
    var child, j, len, new_parent, original_parent, ref;
    if (!this.parent) {
      return null;
    } else {
      new_parent = new this.tree.node_class(node_info);
      new_parent._setParent(this.tree);
      original_parent = this.parent;
      ref = original_parent.children;
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        new_parent.addChild(child);
      }
      original_parent.children = [];
      original_parent.addChild(new_parent);
      return new_parent;
    }
  };

  Node.prototype.remove = function() {
    if (this.parent) {
      this.parent.removeChild(this);
      return this.parent = null;
    }
  };

  Node.prototype.append = function(node_info) {
    var node;
    node = new this.tree.node_class(node_info);
    this.addChild(node);
    if (typeof node_info === 'object' && node_info.children && node_info.children.length) {
      node.loadFromData(node_info.children);
    }
    return node;
  };

  Node.prototype.prepend = function(node_info) {
    var node;
    node = new this.tree.node_class(node_info);
    this.addChildAtPosition(node, 0);
    if (typeof node_info === 'object' && node_info.children && node_info.children.length) {
      node.loadFromData(node_info.children);
    }
    return node;
  };

  Node.prototype.isParentOf = function(node) {
    var parent;
    parent = node.parent;
    while (parent) {
      if (parent === this) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  };

  Node.prototype.getLevel = function() {
    var level, node;
    level = 0;
    node = this;
    while (node.parent) {
      level += 1;
      node = node.parent;
    }
    return level;
  };

  Node.prototype.getNodeById = function(node_id) {
    return this.id_mapping[node_id];
  };

  Node.prototype.addNodeToIndex = function(node) {
    if (node.id != null) {
      return this.id_mapping[node.id] = node;
    }
  };

  Node.prototype.removeNodeFromIndex = function(node) {
    if (node.id != null) {
      return delete this.id_mapping[node.id];
    }
  };

  Node.prototype.removeChildren = function() {
    this.iterate((function(_this) {
      return function(child) {
        _this.tree.removeNodeFromIndex(child);
        return true;
      };
    })(this));
    return this.children = [];
  };

  Node.prototype.getPreviousSibling = function() {
    var previous_index;
    if (!this.parent) {
      return null;
    } else {
      previous_index = this.parent.getChildIndex(this) - 1;
      if (previous_index >= 0) {
        return this.parent.children[previous_index];
      } else {
        return null;
      }
    }
  };

  Node.prototype.getNextSibling = function() {
    var next_index;
    if (!this.parent) {
      return null;
    } else {
      next_index = this.parent.getChildIndex(this) + 1;
      if (next_index < this.parent.children.length) {
        return this.parent.children[next_index];
      } else {
        return null;
      }
    }
  };

  Node.prototype.getNodesByProperty = function(key, value) {
    return this.filter(function(node) {
      return node[key] === value;
    });
  };

  Node.prototype.filter = function(f) {
    var result;
    result = [];
    this.iterate(function(node) {
      if (f(node)) {
        result.push(node);
      }
      return true;
    });
    return result;
  };

  Node.prototype.getNextNode = function(include_children) {
    var next_sibling;
    if (include_children == null) {
      include_children = true;
    }
    if (include_children && this.hasChildren() && this.is_open) {
      return this.children[0];
    } else {
      if (!this.parent) {
        return null;
      } else {
        next_sibling = this.getNextSibling();
        if (next_sibling) {
          return next_sibling;
        } else {
          return this.parent.getNextNode(false);
        }
      }
    }
  };

  Node.prototype.getPreviousNode = function() {
    var previous_sibling;
    if (!this.parent) {
      return null;
    } else {
      previous_sibling = this.getPreviousSibling();
      if (previous_sibling) {
        if (!previous_sibling.hasChildren() || !previous_sibling.is_open) {
          return previous_sibling;
        } else {
          return previous_sibling.getLastChild();
        }
      } else {
        return this.getParent();
      }
    }
  };

  Node.prototype.getParent = function() {
    if (!this.parent) {
      return null;
    } else if (!this.parent.parent) {
      return null;
    } else {
      return this.parent;
    }
  };

  Node.prototype.getLastChild = function() {
    var last_child;
    if (!this.hasChildren()) {
      return null;
    } else {
      last_child = this.children[this.children.length - 1];
      if (!last_child.hasChildren() || !last_child.is_open) {
        return last_child;
      } else {
        return last_child.getLastChild();
      }
    }
  };

  return Node;

})();

module.exports = {
  Node: Node,
  Position: Position
};

},{}],6:[function(require,module,exports){
var $, BorderDropHint, FolderElement, GhostDropHint, NodeElement, Position, node,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

node = require('./node');

Position = node.Position;

$ = jQuery;

NodeElement = (function() {
  function NodeElement(node, tree_widget) {
    this.init(node, tree_widget);
  }

  NodeElement.prototype.init = function(node, tree_widget) {
    this.node = node;
    this.tree_widget = tree_widget;
    if (!node.element) {
      node.element = this.tree_widget.element;
    }
    return this.$element = $(node.element);
  };

  NodeElement.prototype.getUl = function() {
    return this.$element.children('ul:first');
  };

  NodeElement.prototype.getSpan = function() {
    return this.$element.children('.jqtree-element').find('span.jqtree-title');
  };

  NodeElement.prototype.getLi = function() {
    return this.$element;
  };

  NodeElement.prototype.addDropHint = function(position) {
    if (position === Position.INSIDE) {
      return new BorderDropHint(this.$element);
    } else {
      return new GhostDropHint(this.node, this.$element, position);
    }
  };

  NodeElement.prototype.select = function() {
    var $li, $span;
    $li = this.getLi();
    $li.addClass('jqtree-selected');
    $li.attr('aria-selected', 'true');
    $span = this.getSpan();
    return $span.attr('tabindex', 0);
  };

  NodeElement.prototype.deselect = function() {
    var $li, $span;
    $li = this.getLi();
    $li.removeClass('jqtree-selected');
    $li.attr('aria-selected', 'false');
    $span = this.getSpan();
    return $span.attr('tabindex', -1);
  };

  return NodeElement;

})();

FolderElement = (function(superClass) {
  extend(FolderElement, superClass);

  function FolderElement() {
    return FolderElement.__super__.constructor.apply(this, arguments);
  }

  FolderElement.prototype.open = function(on_finished, slide) {
    var $button, doOpen;
    if (slide == null) {
      slide = true;
    }
    if (!this.node.is_open) {
      this.node.is_open = true;
      $button = this.getButton();
      $button.removeClass('jqtree-closed');
      $button.html('');
      $button.append(this.tree_widget.renderer.opened_icon_element.cloneNode(false));
      doOpen = (function(_this) {
        return function() {
          var $li, $span;
          $li = _this.getLi();
          $li.removeClass('jqtree-closed');
          $span = _this.getSpan();
          $span.attr('aria-expanded', 'true');
          if (on_finished) {
            on_finished();
          }
          return _this.tree_widget._triggerEvent('tree.open', {
            node: _this.node
          });
        };
      })(this);
      if (slide) {
        return this.getUl().slideDown('fast', doOpen);
      } else {
        this.getUl().show();
        return doOpen();
      }
    }
  };

  FolderElement.prototype.close = function(slide) {
    var $button, doClose;
    if (slide == null) {
      slide = true;
    }
    if (this.node.is_open) {
      this.node.is_open = false;
      $button = this.getButton();
      $button.addClass('jqtree-closed');
      $button.html('');
      $button.append(this.tree_widget.renderer.closed_icon_element.cloneNode(false));
      doClose = (function(_this) {
        return function() {
          var $li, $span;
          $li = _this.getLi();
          $li.addClass('jqtree-closed');
          $span = _this.getSpan();
          $span.attr('aria-expanded', 'false');
          return _this.tree_widget._triggerEvent('tree.close', {
            node: _this.node
          });
        };
      })(this);
      if (slide) {
        return this.getUl().slideUp('fast', doClose);
      } else {
        this.getUl().hide();
        return doClose();
      }
    }
  };

  FolderElement.prototype.getButton = function() {
    return this.$element.children('.jqtree-element').find('a.jqtree-toggler');
  };

  FolderElement.prototype.addDropHint = function(position) {
    if (!this.node.is_open && position === Position.INSIDE) {
      return new BorderDropHint(this.$element);
    } else {
      return new GhostDropHint(this.node, this.$element, position);
    }
  };

  return FolderElement;

})(NodeElement);

BorderDropHint = (function() {
  function BorderDropHint($element) {
    var $div, width;
    $div = $element.children('.jqtree-element');
    width = $element.width() - 4;
    this.$hint = $('<span class="jqtree-border"></span>');
    $div.append(this.$hint);
    this.$hint.css({
      width: width,
      height: $div.outerHeight() - 4
    });
  }

  BorderDropHint.prototype.remove = function() {
    return this.$hint.remove();
  };

  return BorderDropHint;

})();

GhostDropHint = (function() {
  function GhostDropHint(node, $element, position) {
    this.$element = $element;
    this.node = node;
    this.$ghost = $('<li class="jqtree_common jqtree-ghost"><span class="jqtree_common jqtree-circle"></span><span class="jqtree_common jqtree-line"></span></li>');
    if (position === Position.AFTER) {
      this.moveAfter();
    } else if (position === Position.BEFORE) {
      this.moveBefore();
    } else if (position === Position.INSIDE) {
      if (node.isFolder() && node.is_open) {
        this.moveInsideOpenFolder();
      } else {
        this.moveInside();
      }
    }
  }

  GhostDropHint.prototype.remove = function() {
    return this.$ghost.remove();
  };

  GhostDropHint.prototype.moveAfter = function() {
    return this.$element.after(this.$ghost);
  };

  GhostDropHint.prototype.moveBefore = function() {
    return this.$element.before(this.$ghost);
  };

  GhostDropHint.prototype.moveInsideOpenFolder = function() {
    return $(this.node.children[0].element).before(this.$ghost);
  };

  GhostDropHint.prototype.moveInside = function() {
    this.$element.after(this.$ghost);
    return this.$ghost.addClass('jqtree-inside');
  };

  return GhostDropHint;

})();

module.exports = {
  BorderDropHint: BorderDropHint,
  FolderElement: FolderElement,
  GhostDropHint: GhostDropHint,
  NodeElement: NodeElement
};

},{"./node":5}],7:[function(require,module,exports){
var $, SaveStateHandler, indexOf, isInt, util;

util = require('./util');

indexOf = util.indexOf;

isInt = util.isInt;

$ = jQuery;

SaveStateHandler = (function() {
  function SaveStateHandler(tree_widget) {
    this.tree_widget = tree_widget;
  }

  SaveStateHandler.prototype.saveState = function() {
    var state;
    state = JSON.stringify(this.getState());
    if (this.tree_widget.options.onSetStateFromStorage) {
      return this.tree_widget.options.onSetStateFromStorage(state);
    } else if (this.supportsLocalStorage()) {
      return localStorage.setItem(this.getCookieName(), state);
    } else if ($.cookie) {
      $.cookie.raw = true;
      return $.cookie(this.getCookieName(), state, {
        path: '/'
      });
    }
  };

  SaveStateHandler.prototype.getStateFromStorage = function() {
    var json_data;
    json_data = this._loadFromStorage();
    if (json_data) {
      return this._parseState(json_data);
    } else {
      return null;
    }
  };

  SaveStateHandler.prototype._parseState = function(json_data) {
    var state;
    state = $.parseJSON(json_data);
    if (state && state.selected_node && isInt(state.selected_node)) {
      state.selected_node = [state.selected_node];
    }
    return state;
  };

  SaveStateHandler.prototype._loadFromStorage = function() {
    if (this.tree_widget.options.onGetStateFromStorage) {
      return this.tree_widget.options.onGetStateFromStorage();
    } else if (this.supportsLocalStorage()) {
      return localStorage.getItem(this.getCookieName());
    } else if ($.cookie) {
      $.cookie.raw = true;
      return $.cookie(this.getCookieName());
    } else {
      return null;
    }
  };

  SaveStateHandler.prototype.getState = function() {
    var getOpenNodeIds, getSelectedNodeIds;
    getOpenNodeIds = (function(_this) {
      return function() {
        var open_nodes;
        open_nodes = [];
        _this.tree_widget.tree.iterate(function(node) {
          if (node.is_open && node.id && node.hasChildren()) {
            open_nodes.push(node.id);
          }
          return true;
        });
        return open_nodes;
      };
    })(this);
    getSelectedNodeIds = (function(_this) {
      return function() {
        var n;
        return (function() {
          var i, len, ref, results;
          ref = this.tree_widget.getSelectedNodes();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            results.push(n.id);
          }
          return results;
        }).call(_this);
      };
    })(this);
    return {
      open_nodes: getOpenNodeIds(),
      selected_node: getSelectedNodeIds()
    };
  };

  SaveStateHandler.prototype.setInitialState = function(state) {
    var must_load_on_demand;
    if (!state) {
      return false;
    } else {
      must_load_on_demand = this._openInitialNodes(state.open_nodes);
      this._selectInitialNodes(state.selected_node);
      return must_load_on_demand;
    }
  };

  SaveStateHandler.prototype._openInitialNodes = function(node_ids) {
    var i, len, must_load_on_demand, node, node_id;
    must_load_on_demand = false;
    for (i = 0, len = node_ids.length; i < len; i++) {
      node_id = node_ids[i];
      node = this.tree_widget.getNodeById(node_id);
      if (node) {
        if (!node.load_on_demand) {
          node.is_open = true;
        } else {
          must_load_on_demand = true;
        }
      }
    }
    return must_load_on_demand;
  };

  SaveStateHandler.prototype._selectInitialNodes = function(node_ids) {
    var i, len, node, node_id, select_count;
    select_count = 0;
    for (i = 0, len = node_ids.length; i < len; i++) {
      node_id = node_ids[i];
      node = this.tree_widget.getNodeById(node_id);
      if (node) {
        select_count += 1;
        this.tree_widget.select_node_handler.addToSelection(node);
      }
    }
    return select_count !== 0;
  };

  SaveStateHandler.prototype.setInitialStateOnDemand = function(state, cb_finished) {
    if (state) {
      return this._setInitialStateOnDemand(state.open_nodes, state.selected_node, cb_finished);
    } else {
      return cb_finished();
    }
  };

  SaveStateHandler.prototype._setInitialStateOnDemand = function(node_ids, selected_nodes, cb_finished) {
    var loadAndOpenNode, loading_count, openNodes;
    loading_count = 0;
    openNodes = (function(_this) {
      return function() {
        var i, len, new_nodes_ids, node, node_id;
        new_nodes_ids = [];
        for (i = 0, len = node_ids.length; i < len; i++) {
          node_id = node_ids[i];
          node = _this.tree_widget.getNodeById(node_id);
          if (!node) {
            new_nodes_ids.push(node_id);
          } else {
            if (!node.is_loading) {
              if (node.load_on_demand) {
                loadAndOpenNode(node);
              } else {
                _this.tree_widget._openNode(node, false);
              }
            }
          }
        }
        node_ids = new_nodes_ids;
        if (_this._selectInitialNodes(selected_nodes)) {
          _this.tree_widget._refreshElements();
        }
        if (loading_count === 0) {
          return cb_finished();
        }
      };
    })(this);
    loadAndOpenNode = (function(_this) {
      return function(node) {
        loading_count += 1;
        return _this.tree_widget._openNode(node, false, function() {
          loading_count -= 1;
          return openNodes();
        });
      };
    })(this);
    return openNodes();
  };

  SaveStateHandler.prototype.getCookieName = function() {
    if (typeof this.tree_widget.options.saveState === 'string') {
      return this.tree_widget.options.saveState;
    } else {
      return 'tree';
    }
  };

  SaveStateHandler.prototype.supportsLocalStorage = function() {
    var testSupport;
    testSupport = function() {
      var error, error1, key;
      if (typeof localStorage === "undefined" || localStorage === null) {
        return false;
      } else {
        try {
          key = '_storage_test';
          sessionStorage.setItem(key, true);
          sessionStorage.removeItem(key);
        } catch (error1) {
          error = error1;
          return false;
        }
        return true;
      }
    };
    if (this._supportsLocalStorage == null) {
      this._supportsLocalStorage = testSupport();
    }
    return this._supportsLocalStorage;
  };

  SaveStateHandler.prototype.getNodeIdToBeSelected = function() {
    var state;
    state = this.getStateFromStorage();
    if (state && state.selected_node) {
      return state.selected_node[0];
    } else {
      return null;
    }
  };

  return SaveStateHandler;

})();

module.exports = SaveStateHandler;

},{"./util":12}],8:[function(require,module,exports){
var $, ScrollHandler;

$ = jQuery;

ScrollHandler = (function() {
  function ScrollHandler(tree_widget) {
    this.tree_widget = tree_widget;
    this.previous_top = -1;
    this.is_initialized = false;
    this._initScrollParent();
  }

  ScrollHandler.prototype._initScrollParent = function() {
    var $scroll_parent, getParentWithOverflow, setDocumentAsScrollParent;
    getParentWithOverflow = (function(_this) {
      return function() {
        var css_values, el, hasOverFlow, i, len, ref;
        css_values = ['overflow', 'overflow-y'];
        hasOverFlow = function(el) {
          var css_value, i, len, ref;
          for (i = 0, len = css_values.length; i < len; i++) {
            css_value = css_values[i];
            if ((ref = $.css(el, css_value)) === 'auto' || ref === 'scroll') {
              return true;
            }
          }
          return false;
        };
        if (hasOverFlow(_this.tree_widget.$el[0])) {
          return _this.tree_widget.$el;
        }
        ref = _this.tree_widget.$el.parents();
        for (i = 0, len = ref.length; i < len; i++) {
          el = ref[i];
          if (hasOverFlow(el)) {
            return $(el);
          }
        }
        return null;
      };
    })(this);
    setDocumentAsScrollParent = (function(_this) {
      return function() {
        _this.scroll_parent_top = 0;
        return _this.$scroll_parent = null;
      };
    })(this);
    if (this.tree_widget.$el.css('position') === 'fixed') {
      setDocumentAsScrollParent();
    }
    $scroll_parent = getParentWithOverflow();
    if ($scroll_parent && $scroll_parent.length && $scroll_parent[0].tagName !== 'HTML') {
      this.$scroll_parent = $scroll_parent;
      this.scroll_parent_top = this.$scroll_parent.offset().top;
    } else {
      setDocumentAsScrollParent();
    }
    return this.is_initialized = true;
  };

  ScrollHandler.prototype._ensureInit = function() {
    if (!this.is_initialized) {
      return this._initScrollParent();
    }
  };

  ScrollHandler.prototype.checkScrolling = function() {
    var hovered_area;
    this._ensureInit();
    hovered_area = this.tree_widget.dnd_handler.hovered_area;
    if (hovered_area && hovered_area.top !== this.previous_top) {
      this.previous_top = hovered_area.top;
      if (this.$scroll_parent) {
        return this._handleScrollingWithScrollParent(hovered_area);
      } else {
        return this._handleScrollingWithDocument(hovered_area);
      }
    }
  };

  ScrollHandler.prototype._handleScrollingWithScrollParent = function(area) {
    var distance_bottom;
    distance_bottom = this.scroll_parent_top + this.$scroll_parent[0].offsetHeight - area.bottom;
    if (distance_bottom < 20) {
      this.$scroll_parent[0].scrollTop += 20;
      this.tree_widget.refreshHitAreas();
      return this.previous_top = -1;
    } else if ((area.top - this.scroll_parent_top) < 20) {
      this.$scroll_parent[0].scrollTop -= 20;
      this.tree_widget.refreshHitAreas();
      return this.previous_top = -1;
    }
  };

  ScrollHandler.prototype._handleScrollingWithDocument = function(area) {
    var distance_top;
    distance_top = area.top - $(document).scrollTop();
    if (distance_top < 20) {
      return $(document).scrollTop($(document).scrollTop() - 20);
    } else if ($(window).height() - (area.bottom - $(document).scrollTop()) < 20) {
      return $(document).scrollTop($(document).scrollTop() + 20);
    }
  };

  ScrollHandler.prototype.scrollTo = function(top) {
    var tree_top;
    this._ensureInit();
    if (this.$scroll_parent) {
      return this.$scroll_parent[0].scrollTop = top;
    } else {
      tree_top = this.tree_widget.$el.offset().top;
      return $(document).scrollTop(top + tree_top);
    }
  };

  ScrollHandler.prototype.isScrolledIntoView = function(element) {
    var $element, element_bottom, element_top, view_bottom, view_top;
    this._ensureInit();
    $element = $(element);
    if (this.$scroll_parent) {
      view_top = 0;
      view_bottom = this.$scroll_parent.height();
      element_top = $element.offset().top - this.scroll_parent_top;
      element_bottom = element_top + $element.height();
    } else {
      view_top = $(window).scrollTop();
      view_bottom = view_top + $(window).height();
      element_top = $element.offset().top;
      element_bottom = element_top + $element.height();
    }
    return (element_bottom <= view_bottom) && (element_top >= view_top);
  };

  return ScrollHandler;

})();

module.exports = ScrollHandler;

},{}],9:[function(require,module,exports){
var $, SelectNodeHandler;

$ = jQuery;

SelectNodeHandler = (function() {
  function SelectNodeHandler(tree_widget) {
    this.tree_widget = tree_widget;
    this.clear();
  }

  SelectNodeHandler.prototype.getSelectedNode = function() {
    var selected_nodes;
    selected_nodes = this.getSelectedNodes();
    if (selected_nodes.length) {
      return selected_nodes[0];
    } else {
      return false;
    }
  };

  SelectNodeHandler.prototype.getSelectedNodes = function() {
    var id, node, selected_nodes;
    if (this.selected_single_node) {
      return [this.selected_single_node];
    } else {
      selected_nodes = [];
      for (id in this.selected_nodes) {
        node = this.tree_widget.getNodeById(id);
        if (node) {
          selected_nodes.push(node);
        }
      }
      return selected_nodes;
    }
  };

  SelectNodeHandler.prototype.getSelectedNodesUnder = function(parent) {
    var id, node, selected_nodes;
    if (this.selected_single_node) {
      if (parent.isParentOf(this.selected_single_node)) {
        return [this.selected_single_node];
      } else {
        return [];
      }
    } else {
      selected_nodes = [];
      for (id in this.selected_nodes) {
        node = this.tree_widget.getNodeById(id);
        if (node && parent.isParentOf(node)) {
          selected_nodes.push(node);
        }
      }
      return selected_nodes;
    }
  };

  SelectNodeHandler.prototype.isNodeSelected = function(node) {
    if (node.id) {
      return this.selected_nodes[node.id];
    } else if (this.selected_single_node) {
      return this.selected_single_node.element === node.element;
    } else {
      return false;
    }
  };

  SelectNodeHandler.prototype.clear = function() {
    this.selected_nodes = {};
    return this.selected_single_node = null;
  };

  SelectNodeHandler.prototype.removeFromSelection = function(node, include_children) {
    if (include_children == null) {
      include_children = false;
    }
    if (!node.id) {
      if (this.selected_single_node && node.element === this.selected_single_node.element) {
        return this.selected_single_node = null;
      }
    } else {
      delete this.selected_nodes[node.id];
      if (include_children) {
        return node.iterate((function(_this) {
          return function(n) {
            delete _this.selected_nodes[node.id];
            return true;
          };
        })(this));
      }
    }
  };

  SelectNodeHandler.prototype.addToSelection = function(node) {
    if (node.id) {
      return this.selected_nodes[node.id] = true;
    } else {
      return this.selected_single_node = node;
    }
  };

  return SelectNodeHandler;

})();

module.exports = SelectNodeHandler;

},{}],10:[function(require,module,exports){

/*
Copyright 2013 Marco Braak

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
var $, SimpleWidget,
  slice = [].slice;

$ = jQuery;

SimpleWidget = (function() {
  SimpleWidget.prototype.defaults = {};

  function SimpleWidget(el, options) {
    this.$el = $(el);
    this.options = $.extend({}, this.defaults, options);
  }

  SimpleWidget.prototype.destroy = function() {
    return this._deinit();
  };

  SimpleWidget.prototype._init = function() {
    return null;
  };

  SimpleWidget.prototype._deinit = function() {
    return null;
  };

  SimpleWidget.register = function(widget_class, widget_name) {
    var callFunction, createWidget, destroyWidget, getDataKey, getWidgetData;
    getDataKey = function() {
      return "simple_widget_" + widget_name;
    };
    getWidgetData = function(el, data_key) {
      var widget;
      widget = $.data(el, data_key);
      if (widget && (widget instanceof SimpleWidget)) {
        return widget;
      } else {
        return null;
      }
    };
    createWidget = function($el, options) {
      var data_key, el, existing_widget, i, len, widget;
      data_key = getDataKey();
      for (i = 0, len = $el.length; i < len; i++) {
        el = $el[i];
        existing_widget = getWidgetData(el, data_key);
        if (!existing_widget) {
          widget = new widget_class(el, options);
          if (!$.data(el, data_key)) {
            $.data(el, data_key, widget);
          }
          widget._init();
        }
      }
      return $el;
    };
    destroyWidget = function($el) {
      var data_key, el, i, len, results, widget;
      data_key = getDataKey();
      results = [];
      for (i = 0, len = $el.length; i < len; i++) {
        el = $el[i];
        widget = getWidgetData(el, data_key);
        if (widget) {
          widget.destroy();
        }
        results.push($.removeData(el, data_key));
      }
      return results;
    };
    callFunction = function($el, function_name, args) {
      var el, i, len, result, widget, widget_function;
      result = null;
      for (i = 0, len = $el.length; i < len; i++) {
        el = $el[i];
        widget = $.data(el, getDataKey());
        if (widget && (widget instanceof SimpleWidget)) {
          widget_function = widget[function_name];
          if (widget_function && (typeof widget_function === 'function')) {
            result = widget_function.apply(widget, args);
          }
        }
      }
      return result;
    };
    return $.fn[widget_name] = function() {
      var $el, args, argument1, function_name, options;
      argument1 = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      $el = this;
      if (argument1 === void 0 || typeof argument1 === 'object') {
        options = argument1;
        return createWidget($el, options);
      } else if (typeof argument1 === 'string' && argument1[0] !== '_') {
        function_name = argument1;
        if (function_name === 'destroy') {
          return destroyWidget($el);
        } else if (function_name === 'get_widget_class') {
          return widget_class;
        } else {
          return callFunction($el, function_name, args);
        }
      }
    };
  };

  return SimpleWidget;

})();

module.exports = SimpleWidget;

},{}],11:[function(require,module,exports){
var $, BorderDropHint, DragAndDropHandler, DragElement, ElementsRenderer, FolderElement, GhostDropHint, HitAreasGenerator, JqTreeWidget, KeyHandler, MouseWidget, Node, NodeElement, Position, SaveStateHandler, ScrollHandler, SelectNodeHandler, SimpleWidget, __version__, node_module, ref, ref1, util_module,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

__version__ = require('./version');

ref = require('./drag_and_drop_handler'), DragAndDropHandler = ref.DragAndDropHandler, DragElement = ref.DragElement, HitAreasGenerator = ref.HitAreasGenerator;

ElementsRenderer = require('./elements_renderer');

KeyHandler = require('./key_handler');

MouseWidget = require('./mouse.widget');

SaveStateHandler = require('./save_state_handler');

ScrollHandler = require('./scroll_handler');

SelectNodeHandler = require('./select_node_handler');

SimpleWidget = require('./simple.widget');

node_module = require('./node');

Node = node_module.Node;

Position = node_module.Position;

util_module = require('./util');

ref1 = require('./node_element'), BorderDropHint = ref1.BorderDropHint, FolderElement = ref1.FolderElement, GhostDropHint = ref1.GhostDropHint, NodeElement = ref1.NodeElement;

$ = jQuery;

JqTreeWidget = (function(superClass) {
  extend(JqTreeWidget, superClass);

  function JqTreeWidget() {
    return JqTreeWidget.__super__.constructor.apply(this, arguments);
  }

  JqTreeWidget.prototype.BorderDropHint = BorderDropHint;

  JqTreeWidget.prototype.DragElement = DragElement;

  JqTreeWidget.prototype.DragAndDropHandler = DragAndDropHandler;

  JqTreeWidget.prototype.ElementsRenderer = ElementsRenderer;

  JqTreeWidget.prototype.GhostDropHint = GhostDropHint;

  JqTreeWidget.prototype.HitAreasGenerator = HitAreasGenerator;

  JqTreeWidget.prototype.Node = Node;

  JqTreeWidget.prototype.SaveStateHandler = SaveStateHandler;

  JqTreeWidget.prototype.ScrollHandler = ScrollHandler;

  JqTreeWidget.prototype.SelectNodeHandler = SelectNodeHandler;

  JqTreeWidget.prototype.defaults = {
    autoOpen: false,
    saveState: false,
    dragAndDrop: false,
    selectable: true,
    useContextMenu: true,
    onCanSelectNode: null,
    onSetStateFromStorage: null,
    onGetStateFromStorage: null,
    onCreateLi: null,
    onIsMoveHandle: null,
    onCanMove: null,
    onCanMoveTo: null,
    onLoadFailed: null,
    autoEscape: true,
    dataUrl: null,
    closedIcon: null,
    openedIcon: '&#x25bc;',
    slide: true,
    nodeClass: Node,
    dataFilter: null,
    keyboardSupport: true,
    openFolderDelay: 500,
    rtl: null,
    onDragMove: null,
    onDragStop: null,
    buttonLeft: true,
    onLoading: null
  };

  JqTreeWidget.prototype.toggle = function(node, slide) {
    if (slide == null) {
      slide = null;
    }
    if (slide === null) {
      slide = this.options.slide;
    }
    if (node.is_open) {
      this.closeNode(node, slide);
    } else {
      this.openNode(node, slide);
    }
    return this.element;
  };

  JqTreeWidget.prototype.getTree = function() {
    return this.tree;
  };

  JqTreeWidget.prototype.selectNode = function(node) {
    this._selectNode(node, false);
    return this.element;
  };

  JqTreeWidget.prototype._selectNode = function(node, must_toggle) {
    var canSelect, deselected_node, openParents, saveState;
    if (must_toggle == null) {
      must_toggle = false;
    }
    if (!this.select_node_handler) {
      return;
    }
    canSelect = (function(_this) {
      return function() {
        if (_this.options.onCanSelectNode) {
          return _this.options.selectable && _this.options.onCanSelectNode(node);
        } else {
          return _this.options.selectable;
        }
      };
    })(this);
    openParents = (function(_this) {
      return function() {
        var parent;
        parent = node.parent;
        if (parent && parent.parent && !parent.is_open) {
          return _this.openNode(parent, false);
        }
      };
    })(this);
    saveState = (function(_this) {
      return function() {
        if (_this.options.saveState) {
          return _this.save_state_handler.saveState();
        }
      };
    })(this);
    if (!node) {
      this._deselectCurrentNode();
      saveState();
      return;
    }
    if (!canSelect()) {
      return;
    }
    if (this.select_node_handler.isNodeSelected(node)) {
      if (must_toggle) {
        this._deselectCurrentNode();
        this._triggerEvent('tree.select', {
          node: null,
          previous_node: node
        });
      }
    } else {
      deselected_node = this.getSelectedNode();
      this._deselectCurrentNode();
      this.addToSelection(node);
      this._triggerEvent('tree.select', {
        node: node,
        deselected_node: deselected_node
      });
      openParents();
    }
    return saveState();
  };

  JqTreeWidget.prototype.getSelectedNode = function() {
    if (this.select_node_handler) {
      return this.select_node_handler.getSelectedNode();
    } else {
      return null;
    }
  };

  JqTreeWidget.prototype.toJson = function() {
    return JSON.stringify(this.tree.getData());
  };

  JqTreeWidget.prototype.loadData = function(data, parent_node) {
    this._loadData(data, parent_node);
    return this.element;
  };


  /*
  signatures:
  - loadDataFromUrl(url, parent_node=null, on_finished=null)
      loadDataFromUrl('/my_data');
      loadDataFromUrl('/my_data', node1);
      loadDataFromUrl('/my_data', node1, function() { console.log('finished'); });
      loadDataFromUrl('/my_data', null, function() { console.log('finished'); });
  
  - loadDataFromUrl(parent_node=null, on_finished=null)
      loadDataFromUrl();
      loadDataFromUrl(node1);
      loadDataFromUrl(null, function() { console.log('finished'); });
      loadDataFromUrl(node1, function() { console.log('finished'); });
   */

  JqTreeWidget.prototype.loadDataFromUrl = function(param1, param2, param3) {
    if ($.type(param1) === 'string') {
      this._loadDataFromUrl(param1, param2, param3);
    } else {
      this._loadDataFromUrl(null, param1, param2);
    }
    return this.element;
  };

  JqTreeWidget.prototype.reload = function(on_finished) {
    this._loadDataFromUrl(null, null, on_finished);
    return this.element;
  };

  JqTreeWidget.prototype._loadDataFromUrl = function(url_info, parent_node, on_finished) {
    var $el, addLoadingClass, handeLoadData, handleError, handleSuccess, loadDataFromUrlInfo, parseUrlInfo, removeLoadingClass;
    $el = null;
    addLoadingClass = (function(_this) {
      return function() {
        if (parent_node) {
          $el = $(parent_node.element);
        } else {
          $el = _this.element;
        }
        $el.addClass('jqtree-loading');
        return _this._notifyLoading(true, parent_node, $el);
      };
    })(this);
    removeLoadingClass = (function(_this) {
      return function() {
        if ($el) {
          $el.removeClass('jqtree-loading');
          return _this._notifyLoading(false, parent_node, $el);
        }
      };
    })(this);
    parseUrlInfo = function() {
      if ($.type(url_info) === 'string') {
        return {
          url: url_info
        };
      }
      if (!url_info.method) {
        url_info.method = 'get';
      }
      return url_info;
    };
    handeLoadData = (function(_this) {
      return function(data) {
        removeLoadingClass();
        _this._loadData(data, parent_node);
        if (on_finished && $.isFunction(on_finished)) {
          return on_finished();
        }
      };
    })(this);
    handleSuccess = (function(_this) {
      return function(response) {
        var data;
        if ($.isArray(response) || typeof response === 'object') {
          data = response;
        } else if (data != null) {
          data = $.parseJSON(response);
        } else {
          data = [];
        }
        if (_this.options.dataFilter) {
          data = _this.options.dataFilter(data);
        }
        return handeLoadData(data);
      };
    })(this);
    handleError = (function(_this) {
      return function(response) {
        removeLoadingClass();
        if (_this.options.onLoadFailed) {
          return _this.options.onLoadFailed(response);
        }
      };
    })(this);
    loadDataFromUrlInfo = function() {
      url_info = parseUrlInfo();
      return $.ajax($.extend({}, url_info, {
        method: url_info.method != null ? url_info.method.toUpperCase() : 'GET',
        cache: false,
        dataType: 'json',
        success: handleSuccess,
        error: handleError
      }));
    };
    if (!url_info) {
      url_info = this._getDataUrlInfo(parent_node);
    }
    addLoadingClass();
    if (!url_info) {
      removeLoadingClass();
    } else if ($.isArray(url_info)) {
      handeLoadData(url_info);
    } else {
      loadDataFromUrlInfo();
    }
  };

  JqTreeWidget.prototype._loadData = function(data, parent_node) {
    var deselectNodes, loadSubtree;
    if (parent_node == null) {
      parent_node = null;
    }
    deselectNodes = (function(_this) {
      return function() {
        var i, len, n, selected_nodes_under_parent;
        if (_this.select_node_handler) {
          selected_nodes_under_parent = _this.select_node_handler.getSelectedNodesUnder(parent_node);
          for (i = 0, len = selected_nodes_under_parent.length; i < len; i++) {
            n = selected_nodes_under_parent[i];
            _this.select_node_handler.removeFromSelection(n);
          }
        }
        return null;
      };
    })(this);
    loadSubtree = (function(_this) {
      return function() {
        parent_node.loadFromData(data);
        parent_node.load_on_demand = false;
        parent_node.is_loading = false;
        return _this._refreshElements(parent_node);
      };
    })(this);
    if (!data) {
      return;
    }
    this._triggerEvent('tree.load_data', {
      tree_data: data
    });
    if (!parent_node) {
      this._initTree(data);
    } else {
      deselectNodes();
      loadSubtree();
    }
    if (this.isDragging()) {
      return this.dnd_handler.refresh();
    }
  };

  JqTreeWidget.prototype.getNodeById = function(node_id) {
    return this.tree.getNodeById(node_id);
  };

  JqTreeWidget.prototype.getNodeByName = function(name) {
    return this.tree.getNodeByName(name);
  };

  JqTreeWidget.prototype.getNodesByProperty = function(key, value) {
    return this.tree.getNodesByProperty(key, value);
  };

  JqTreeWidget.prototype.openNode = function(node, slide) {
    if (slide == null) {
      slide = null;
    }
    if (slide === null) {
      slide = this.options.slide;
    }
    this._openNode(node, slide);
    return this.element;
  };

  JqTreeWidget.prototype._openNode = function(node, slide, on_finished) {
    var doOpenNode, parent;
    if (slide == null) {
      slide = true;
    }
    doOpenNode = (function(_this) {
      return function(_node, _slide, _on_finished) {
        var folder_element;
        folder_element = new FolderElement(_node, _this);
        return folder_element.open(_on_finished, _slide);
      };
    })(this);
    if (node.isFolder()) {
      if (node.load_on_demand) {
        return this._loadFolderOnDemand(node, slide, on_finished);
      } else {
        parent = node.parent;
        while (parent) {
          if (parent.parent) {
            doOpenNode(parent, false, null);
          }
          parent = parent.parent;
        }
        doOpenNode(node, slide, on_finished);
        return this._saveState();
      }
    }
  };

  JqTreeWidget.prototype._loadFolderOnDemand = function(node, slide, on_finished) {
    if (slide == null) {
      slide = true;
    }
    node.is_loading = true;
    return this._loadDataFromUrl(null, node, (function(_this) {
      return function() {
        return _this._openNode(node, slide, on_finished);
      };
    })(this));
  };

  JqTreeWidget.prototype.closeNode = function(node, slide) {
    if (slide == null) {
      slide = null;
    }
    if (slide === null) {
      slide = this.options.slide;
    }
    if (node.isFolder()) {
      new FolderElement(node, this).close(slide);
      this._saveState();
    }
    return this.element;
  };

  JqTreeWidget.prototype.isDragging = function() {
    if (this.dnd_handler) {
      return this.dnd_handler.is_dragging;
    } else {
      return false;
    }
  };

  JqTreeWidget.prototype.refreshHitAreas = function() {
    this.dnd_handler.refresh();
    return this.element;
  };

  JqTreeWidget.prototype.addNodeAfter = function(new_node_info, existing_node) {
    var new_node;
    new_node = existing_node.addAfter(new_node_info);
    this._refreshElements(existing_node.parent);
    return new_node;
  };

  JqTreeWidget.prototype.addNodeBefore = function(new_node_info, existing_node) {
    var new_node;
    new_node = existing_node.addBefore(new_node_info);
    this._refreshElements(existing_node.parent);
    return new_node;
  };

  JqTreeWidget.prototype.addParentNode = function(new_node_info, existing_node) {
    var new_node;
    new_node = existing_node.addParent(new_node_info);
    this._refreshElements(new_node.parent);
    return new_node;
  };

  JqTreeWidget.prototype.removeNode = function(node) {
    var parent;
    parent = node.parent;
    if (parent) {
      this.select_node_handler.removeFromSelection(node, true);
      node.remove();
      this._refreshElements(parent);
    }
    return this.element;
  };

  JqTreeWidget.prototype.appendNode = function(new_node_info, parent_node) {
    var node;
    parent_node = parent_node || this.tree;
    node = parent_node.append(new_node_info);
    this._refreshElements(parent_node);
    return node;
  };

  JqTreeWidget.prototype.prependNode = function(new_node_info, parent_node) {
    var node;
    if (!parent_node) {
      parent_node = this.tree;
    }
    node = parent_node.prepend(new_node_info);
    this._refreshElements(parent_node);
    return node;
  };

  JqTreeWidget.prototype.updateNode = function(node, data) {
    var id_is_changed;
    id_is_changed = data.id && data.id !== node.id;
    if (id_is_changed) {
      this.tree.removeNodeFromIndex(node);
    }
    node.setData(data);
    if (id_is_changed) {
      this.tree.addNodeToIndex(node);
    }
    if (typeof data === 'object' && data.children && data.children.length) {
      node.removeChildren();
      node.loadFromData(data.children);
    }
    this.renderer.renderFromNode(node);
    this._selectCurrentNode();
    return this.element;
  };

  JqTreeWidget.prototype.moveNode = function(node, target_node, position) {
    var position_index;
    position_index = Position.nameToIndex(position);
    this.tree.moveNode(node, target_node, position_index);
    this._refreshElements();
    return this.element;
  };

  JqTreeWidget.prototype.getStateFromStorage = function() {
    return this.save_state_handler.getStateFromStorage();
  };

  JqTreeWidget.prototype.addToSelection = function(node) {
    if (node) {
      this.select_node_handler.addToSelection(node);
      this._getNodeElementForNode(node).select();
      this._saveState();
    }
    return this.element;
  };

  JqTreeWidget.prototype.getSelectedNodes = function() {
    return this.select_node_handler.getSelectedNodes();
  };

  JqTreeWidget.prototype.isNodeSelected = function(node) {
    return this.select_node_handler.isNodeSelected(node);
  };

  JqTreeWidget.prototype.removeFromSelection = function(node) {
    this.select_node_handler.removeFromSelection(node);
    this._getNodeElementForNode(node).deselect();
    this._saveState();
    return this.element;
  };

  JqTreeWidget.prototype.scrollToNode = function(node) {
    var $element, top;
    $element = $(node.element);
    top = $element.offset().top - this.$el.offset().top;
    this.scroll_handler.scrollTo(top);
    return this.element;
  };

  JqTreeWidget.prototype.getState = function() {
    return this.save_state_handler.getState();
  };

  JqTreeWidget.prototype.setState = function(state) {
    this.save_state_handler.setInitialState(state);
    this._refreshElements();
    return this.element;
  };

  JqTreeWidget.prototype.setOption = function(option, value) {
    this.options[option] = value;
    return this.element;
  };

  JqTreeWidget.prototype.moveDown = function() {
    if (this.key_handler) {
      this.key_handler.moveDown();
    }
    return this.element;
  };

  JqTreeWidget.prototype.moveUp = function() {
    if (this.key_handler) {
      this.key_handler.moveUp();
    }
    return this.element;
  };

  JqTreeWidget.prototype.getVersion = function() {
    return __version__;
  };

  JqTreeWidget.prototype._init = function() {
    JqTreeWidget.__super__._init.call(this);
    this.element = this.$el;
    this.mouse_delay = 300;
    this.is_initialized = false;
    this.options.rtl = this._getRtlOption();
    if (!this.options.closedIcon) {
      this.options.closedIcon = this._getDefaultClosedIcon();
    }
    this.renderer = new ElementsRenderer(this);
    if (SaveStateHandler != null) {
      this.save_state_handler = new SaveStateHandler(this);
    } else {
      this.options.saveState = false;
    }
    if (SelectNodeHandler != null) {
      this.select_node_handler = new SelectNodeHandler(this);
    }
    if (DragAndDropHandler != null) {
      this.dnd_handler = new DragAndDropHandler(this);
    } else {
      this.options.dragAndDrop = false;
    }
    if (ScrollHandler != null) {
      this.scroll_handler = new ScrollHandler(this);
    }
    if ((KeyHandler != null) && (SelectNodeHandler != null)) {
      this.key_handler = new KeyHandler(this);
    }
    this._initData();
    this.element.click($.proxy(this._click, this));
    this.element.dblclick($.proxy(this._dblclick, this));
    if (this.options.useContextMenu) {
      return this.element.bind('contextmenu', $.proxy(this._contextmenu, this));
    }
  };

  JqTreeWidget.prototype._deinit = function() {
    this.element.empty();
    this.element.unbind();
    if (this.key_handler) {
      this.key_handler.deinit();
    }
    this.tree = null;
    return JqTreeWidget.__super__._deinit.call(this);
  };

  JqTreeWidget.prototype._initData = function() {
    if (this.options.data) {
      return this._loadData(this.options.data);
    } else {
      return this._loadDataFromUrl(this._getDataUrlInfo());
    }
  };

  JqTreeWidget.prototype._getDataUrlInfo = function(node) {
    var data_url, getUrlFromString;
    data_url = this.options.dataUrl || this.element.data('url');
    getUrlFromString = (function(_this) {
      return function() {
        var data, selected_node_id, url_info;
        url_info = {
          url: data_url
        };
        if (node && node.id) {
          data = {
            node: node.id
          };
          url_info['data'] = data;
        } else {
          selected_node_id = _this._getNodeIdToBeSelected();
          if (selected_node_id) {
            data = {
              selected_node: selected_node_id
            };
            url_info['data'] = data;
          }
        }
        return url_info;
      };
    })(this);
    if ($.isFunction(data_url)) {
      return data_url(node);
    } else if ($.type(data_url) === 'string') {
      return getUrlFromString();
    } else {
      return data_url;
    }
  };

  JqTreeWidget.prototype._getNodeIdToBeSelected = function() {
    if (this.options.saveState) {
      return this.save_state_handler.getNodeIdToBeSelected();
    } else {
      return null;
    }
  };

  JqTreeWidget.prototype._initTree = function(data) {
    var doInit, must_load_on_demand;
    doInit = (function(_this) {
      return function() {
        if (!_this.is_initialized) {
          _this.is_initialized = true;
          return _this._triggerEvent('tree.init');
        }
      };
    })(this);
    this.tree = new this.options.nodeClass(null, true, this.options.nodeClass);
    if (this.select_node_handler) {
      this.select_node_handler.clear();
    }
    this.tree.loadFromData(data);
    must_load_on_demand = this._setInitialState();
    this._refreshElements();
    if (!must_load_on_demand) {
      return doInit();
    } else {
      return this._setInitialStateOnDemand(doInit);
    }
  };

  JqTreeWidget.prototype._setInitialState = function() {
    var autoOpenNodes, is_restored, must_load_on_demand, ref2, restoreState;
    restoreState = (function(_this) {
      return function() {
        var must_load_on_demand, state;
        if (!(_this.options.saveState && _this.save_state_handler)) {
          return [false, false];
        } else {
          state = _this.save_state_handler.getStateFromStorage();
          if (!state) {
            return [false, false];
          } else {
            must_load_on_demand = _this.save_state_handler.setInitialState(state);
            return [true, must_load_on_demand];
          }
        }
      };
    })(this);
    autoOpenNodes = (function(_this) {
      return function() {
        var max_level, must_load_on_demand;
        if (_this.options.autoOpen === false) {
          return false;
        }
        max_level = _this._getAutoOpenMaxLevel();
        must_load_on_demand = false;
        _this.tree.iterate(function(node, level) {
          if (node.load_on_demand) {
            must_load_on_demand = true;
            return false;
          } else if (!node.hasChildren()) {
            return false;
          } else {
            node.is_open = true;
            return level !== max_level;
          }
        });
        return must_load_on_demand;
      };
    })(this);
    ref2 = restoreState(), is_restored = ref2[0], must_load_on_demand = ref2[1];
    if (!is_restored) {
      must_load_on_demand = autoOpenNodes();
    }
    return must_load_on_demand;
  };

  JqTreeWidget.prototype._setInitialStateOnDemand = function(cb_finished) {
    var autoOpenNodes, restoreState;
    restoreState = (function(_this) {
      return function() {
        var state;
        if (!(_this.options.saveState && _this.save_state_handler)) {
          return false;
        } else {
          state = _this.save_state_handler.getStateFromStorage();
          if (!state) {
            return false;
          } else {
            _this.save_state_handler.setInitialStateOnDemand(state, cb_finished);
            return true;
          }
        }
      };
    })(this);
    autoOpenNodes = (function(_this) {
      return function() {
        var loadAndOpenNode, loading_count, max_level, openNodes;
        max_level = _this._getAutoOpenMaxLevel();
        loading_count = 0;
        loadAndOpenNode = function(node) {
          loading_count += 1;
          return _this._openNode(node, false, function() {
            loading_count -= 1;
            return openNodes();
          });
        };
        openNodes = function() {
          _this.tree.iterate(function(node, level) {
            if (node.load_on_demand) {
              if (!node.is_loading) {
                loadAndOpenNode(node);
              }
              return false;
            } else {
              _this._openNode(node, false);
              return level !== max_level;
            }
          });
          if (loading_count === 0) {
            return cb_finished();
          }
        };
        return openNodes();
      };
    })(this);
    if (!restoreState()) {
      return autoOpenNodes();
    }
  };

  JqTreeWidget.prototype._getAutoOpenMaxLevel = function() {
    if (this.options.autoOpen === true) {
      return -1;
    } else {
      return parseInt(this.options.autoOpen);
    }
  };


  /*
  Redraw the tree or part of the tree.
   * from_node: redraw this subtree
   */

  JqTreeWidget.prototype._refreshElements = function(from_node) {
    if (from_node == null) {
      from_node = null;
    }
    this.renderer.render(from_node);
    return this._triggerEvent('tree.refresh');
  };

  JqTreeWidget.prototype._click = function(e) {
    var click_target, event, node;
    click_target = this._getClickTarget(e.target);
    if (click_target) {
      if (click_target.type === 'button') {
        this.toggle(click_target.node, this.options.slide);
        e.preventDefault();
        return e.stopPropagation();
      } else if (click_target.type === 'label') {
        node = click_target.node;
        event = this._triggerEvent('tree.click', {
          node: node,
          click_event: e
        });
        if (!event.isDefaultPrevented()) {
          return this._selectNode(node, true);
        }
      }
    }
  };

  JqTreeWidget.prototype._dblclick = function(e) {
    var click_target;
    click_target = this._getClickTarget(e.target);
    if (click_target && click_target.type === 'label') {
      return this._triggerEvent('tree.dblclick', {
        node: click_target.node,
        click_event: e
      });
    }
  };

  JqTreeWidget.prototype._getClickTarget = function(element) {
    var $button, $el, $target, node;
    $target = $(element);
    $button = $target.closest('.jqtree-toggler');
    if ($button.length) {
      node = this._getNode($button);
      if (node) {
        return {
          type: 'button',
          node: node
        };
      }
    } else {
      $el = $target.closest('.jqtree-element');
      if ($el.length) {
        node = this._getNode($el);
        if (node) {
          return {
            type: 'label',
            node: node
          };
        }
      }
    }
    return null;
  };

  JqTreeWidget.prototype._getNode = function($element) {
    var $li;
    $li = $element.closest('li.jqtree_common');
    if ($li.length === 0) {
      return null;
    } else {
      return $li.data('node');
    }
  };

  JqTreeWidget.prototype._getNodeElementForNode = function(node) {
    if (node.isFolder()) {
      return new FolderElement(node, this);
    } else {
      return new NodeElement(node, this);
    }
  };

  JqTreeWidget.prototype._getNodeElement = function($element) {
    var node;
    node = this._getNode($element);
    if (node) {
      return this._getNodeElementForNode(node);
    } else {
      return null;
    }
  };

  JqTreeWidget.prototype._contextmenu = function(e) {
    var $div, node;
    $div = $(e.target).closest('ul.jqtree-tree .jqtree-element');
    if ($div.length) {
      node = this._getNode($div);
      if (node) {
        e.preventDefault();
        e.stopPropagation();
        this._triggerEvent('tree.contextmenu', {
          node: node,
          click_event: e
        });
        return false;
      }
    }
  };

  JqTreeWidget.prototype._saveState = function() {
    if (this.options.saveState) {
      return this.save_state_handler.saveState();
    }
  };

  JqTreeWidget.prototype._mouseCapture = function(position_info) {
    if (this.options.dragAndDrop) {
      return this.dnd_handler.mouseCapture(position_info);
    } else {
      return false;
    }
  };

  JqTreeWidget.prototype._mouseStart = function(position_info) {
    if (this.options.dragAndDrop) {
      return this.dnd_handler.mouseStart(position_info);
    } else {
      return false;
    }
  };

  JqTreeWidget.prototype._mouseDrag = function(position_info) {
    var result;
    if (this.options.dragAndDrop) {
      result = this.dnd_handler.mouseDrag(position_info);
      if (this.scroll_handler) {
        this.scroll_handler.checkScrolling();
      }
      return result;
    } else {
      return false;
    }
  };

  JqTreeWidget.prototype._mouseStop = function(position_info) {
    if (this.options.dragAndDrop) {
      return this.dnd_handler.mouseStop(position_info);
    } else {
      return false;
    }
  };

  JqTreeWidget.prototype._triggerEvent = function(event_name, values) {
    var event;
    event = $.Event(event_name);
    $.extend(event, values);
    this.element.trigger(event);
    return event;
  };

  JqTreeWidget.prototype.testGenerateHitAreas = function(moving_node) {
    this.dnd_handler.current_item = this._getNodeElementForNode(moving_node);
    this.dnd_handler.generateHitAreas();
    return this.dnd_handler.hit_areas;
  };

  JqTreeWidget.prototype._selectCurrentNode = function() {
    var node, node_element;
    node = this.getSelectedNode();
    if (node) {
      node_element = this._getNodeElementForNode(node);
      if (node_element) {
        return node_element.select();
      }
    }
  };

  JqTreeWidget.prototype._deselectCurrentNode = function() {
    var node;
    node = this.getSelectedNode();
    if (node) {
      return this.removeFromSelection(node);
    }
  };

  JqTreeWidget.prototype._getDefaultClosedIcon = function() {
    if (this.options.rtl) {
      return '&#x25c0;';
    } else {
      return '&#x25ba;';
    }
  };

  JqTreeWidget.prototype._getRtlOption = function() {
    var data_rtl;
    if (this.options.rtl !== null) {
      return this.options.rtl;
    } else {
      data_rtl = this.element.data('rtl');
      if ((data_rtl != null) && data_rtl !== false) {
        return true;
      } else {
        return false;
      }
    }
  };

  JqTreeWidget.prototype._notifyLoading = function(is_loading, node, $el) {
    if (this.options.onLoading) {
      return this.options.onLoading(is_loading, node, $el);
    }
  };

  return JqTreeWidget;

})(MouseWidget);

JqTreeWidget.getModule = function(name) {
  var modules;
  modules = {
    'node': node_module,
    'util': util_module
  };
  return modules[name];
};

SimpleWidget.register(JqTreeWidget, 'tree');

},{"./drag_and_drop_handler":1,"./elements_renderer":2,"./key_handler":3,"./mouse.widget":4,"./node":5,"./node_element":6,"./save_state_handler":7,"./scroll_handler":8,"./select_node_handler":9,"./simple.widget":10,"./util":12,"./version":13}],12:[function(require,module,exports){
var _indexOf, getBoolString, html_escape, indexOf, isInt;

_indexOf = function(array, item) {
  var i, j, len, value;
  for (i = j = 0, len = array.length; j < len; i = ++j) {
    value = array[i];
    if (value === item) {
      return i;
    }
  }
  return -1;
};

indexOf = function(array, item) {
  if (array.indexOf) {
    return array.indexOf(item);
  } else {
    return _indexOf(array, item);
  }
};

isInt = function(n) {
  return typeof n === 'number' && n % 1 === 0;
};

html_escape = function(string) {
  return ('' + string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
};

getBoolString = function(value) {
  if (value) {
    return 'true';
  } else {
    return 'false';
  }
};

module.exports = {
  _indexOf: _indexOf,
  getBoolString: getBoolString,
  html_escape: html_escape,
  indexOf: indexOf,
  isInt: isInt
};

},{}],13:[function(require,module,exports){
module.exports = '1.3.3';

},{}]},{},[11]);

/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright	Copyright (C) 2015 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		https://github.com/nooku/nooku-framework for the canonical source repository
 */

if(!Koowa) {
    /** @namespace */
    var Koowa = {};
}


/**
 * Polyfill for Function.prototype.bind, for older browsers that don't implement it natively
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

/*!
 * klass: a classical JS OOP façade
 * https://github.com/ded/klass
 * License MIT (c) Dustin Diaz & Jacob Thornton 2012
 */
var klass = (function () {
    var context = this
        , old = context.klass
        , f = 'function'
        , fnTest = /xyz/.test(function () {xyz}) ? /\bsupr\b/ : /.*/
        , proto = 'prototype';



    function klass(o) {
        return extend.call(isFn(o) ? o : function () {}, o, 1)
    }

    function isFn(o) {
        return typeof o === f
    }

    function wrap(k, fn, supr) {
        return function () {
            var tmp = this.supr;
            this.supr = supr[proto][k];
            var undef = {}.fabricatedUndefined;
            var ret = undef;
            try {
                ret = fn.apply(this, arguments)
            } finally {
                this.supr = tmp
            }
            return ret
        }
    }

    function process(what, o, supr) {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                what[k] = isFn(o[k])
                && isFn(supr[proto][k])
                && fnTest.test(o[k])
                    ? wrap(k, o[k], supr) : o[k]
            }
        }
    }

    function extend(o, fromSub) {
        // must redefine noop each time so it doesn't inherit from previous arbitrary classes
        function noop() {}
        noop[proto] = this[proto];
        var supr = this
            , prototype = new noop()
            , isFunction = isFn(o)
            , _constructor = isFunction ? o : this
            , _methods = isFunction ? {} : o;
        function fn() {
            if (this.initialize) this.initialize.apply(this, arguments);
            else {
                fromSub || isFunction && supr.apply(this, arguments);
                _constructor.apply(this, arguments);
            }
        }

        fn.methods = function (o) {
            process(prototype, o, supr);
            fn[proto] = prototype;
            return this
        };

        fn.methods.call(fn, _methods).prototype.constructor = fn;

        fn.extend = arguments.callee;
        fn[proto].implement = fn.statics = function (o, optFn) {
            o = typeof o == 'string' ? (function () {
                var obj = {};
                obj[o] = optFn;
                return obj
            }()) : o;
            process(this, o, supr);
            return this
        };

        return fn
    }

    klass.noConflict = function () {
        context.klass = old;
        return this
    };

    return klass
})();

(function($) {

/** @class */
Koowa.Class = klass({

    /**
     * @memberOf Koowa.Class#
     */
    options: {},
    /**
     * @returns {object}
     */
    getOptions: function() {
        return {};
    },

    /**
     * @constructs Koowa.Class
     * */
    initialize: function() {
        this.setOptions(this.getOptions());
    },
    setOptions: function(options) {
        if (typeof options === 'object') {
            this.options = $.extend(true, {}, this.options, options);
        }

        return this;
    }
});

})(window.kQuery);

/**
 * Koowa jqTree wrapper
 *
 * Customized instance of jqTree to render a list of categories in a tree structure.
 * It deals with turning a flat list into a hierarchy structure that jqTree understands.
 *
 * @copyright	Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		https://github.com/nooku/nooku-framework for the canonical source repository
 * @requires    Koowa.Class, jqTree plugin
 */

(function($){

    Koowa.Tree = Koowa.Class.extend({

        initialize: function(element, options){

            this.setOptions(options);

            this.element = $(element);

            if(this.options.onBeforeInitialize) this.options.onBeforeInitialize.call(this);

            // For scrollTo to work, needs to be position:relative;
            $(window).load($.proxy(function(){
                if(this.element.css('position') != 'relative') {
                    this.element.css('position', 'relative');
                    //Warn that a css optimization should be done
                    //if(window.console) console.warn('The element:', this.element, 'should have position:relative applied by css');
                }
            }, this));

            this.attachHandlers();

            if(this.options.data && this.options.data.length) this.options.data = this.parseData(this.options.data);

            // Shortcut for accessing tree apis, like this: selected = this.tree('getSelectedNode')
            this.tree = $.proxy(this.element.tree, this.element);

            // Instantiate the jqTree plugin with the parsed options
            this.tree(this.options);

            if(this.options.onAfterInitialize) this.options.onAfterInitialize.call(this);
        },

        getDefaults: function(){

            var self = this,
                defaults = {
                    selected: null, //The node id of a selected node on init, if any
                    data: [], //Default empty value to avoid errors when there are no items yet
                    autoOpen: 0, //Auto open just "All Categories" by default, this value is the nesting level not the node id
                    useContextMenu: false, //This allows us to right-click menu items again
                    toggler: [{folder: 'k-icon-folder'},//Styling options for toggler
                              {folder: 'k-icon-folder--open'}],
                    onCreateLi: function(node, $li){ //Method for customizing <li> markup

                        /**
                         * Adds a title attribute for the full title in case of overflow.
                         */
                        $li.find('.jqtree-element').attr('title', node.name);

                        if(node.isFolder()) {
                            // states variable is for easy toggling on the click event
                            var states = self.options.toggler,
                                state = states[node.is_open ? 1 : 0],
                                triangle = $('<span />', {
                                    'class': 'jqtree_common  jqtree-icon '+state.folder,
                                    on: {
                                        click: function(event){
                                            // making sure that select.node doesn't fire when clicking the open/close toggler
                                            event.preventDefault();
                                            event.stopPropagation();

                                            // display or hide children items and fire the tree.open or tree.close event
                                            self.element.tree('toggle', node);
                                        }
                                    }
                                });
                            // prepend the toggler triangle and the folder icon to the title
                            $li.find('.jqtree-title').before(triangle);
                        } else {
                            // prepend the folder icon, and an empty space for the triangle so the indendation is correct
                            $li.find('.jqtree-title').before('<i class="jqtree-whitespace"></i>')
                                .before('<span class="jqtree_common jqtree-icon '+self.options.toggler[0].folder+'"></span> ');
                        }

                        /**
                         * Generates indentation for each list item according to nesting level.
                         * @TODO the node.getLevel() property lookup isn't cached, submit patch on the jqTree github
                         */
                        var level = node.getLevel(),
                            parent = $li.find('.jqtree-title').parent();
                        for (var i = 1; i < level; ++i) {
                            parent.prepend('<i class="jqtree-whitespace"></i>');
                        }
                    }
                };

                return defaults;
        },

        setOptions: function(options){

            this.options = $.extend(true, {}, this.getDefaults(), options);

            return this;
        },

        /* Selects a node while opening all parent nodes, requiring the node to have a 'path' property in its data */
        selectNode: function(node, element){

            // the -1 value is the root node
            var nodes = [-1], state = element.tree('getState');

            // fetch parent node ids from path variable, map the array with parseInt to ensure each array item is an integer
            nodes.push.apply(nodes, node.path.split('/').map(function(item){return parseInt(item, 10)}));

            state.selected_node = node.id; // setting current selected node state to the new node
            state.open_nodes.push.apply(state.open_nodes, nodes); // set the root node, parent nodes and current node as open nodes

            // Using setState instead of selectNode allows selecting a node without firing tree.select
            element.tree('setState', state);
        },

        /**
         * Customizable parse data method
         *
         * Customize this method if the structure is a bit non-standard
         * or if you need to wrap all nodes in a root node
         *
         * The following code sample shows how to create a root node:
         * return [{
         *      label: 'All Categories',
         *      id: -1, //negative 1 used as jqTree isn't optimized to deal with zero integer ids, methods like selectNode fail
         *      children: this._parseData(list)
         *  }];
         */
        parseData: function(list){
            return this._parseData(list);
        },

        /**
         * Internal parse data method
         *
         * Only customize this method if you know what you're doing and if it's impossible to control the data format
         * that's passed to the script during initialization.
         *
         * @param list array
         *
         * The data objects in the list are required to have the following properties:
         * @property string|integer id          Required to be unique, integer or string is optional
         * @property string|integer parent      Integer or string is optional, zero when no parent
         * @property string         path        Containing parent ids descending left to right separated by '/'
         * @property string         label       The text to be displayed
         *
         * Nodes can contain any custom data properties passed to it, except the following reserved properties:
         * @property array      children
         * @property Element    element
         * @property string     name
         * @property Node       tree
         *
         * Simple data sample with unique ids:
         *  [
         *      {id: 1, parent: 0, path: '', label: 'Blog'},
         *      {id: 2, parent: 1, path: '1', label: 'News'},
         *      {id: 3, parent: 2, path: '1/2', label: 'Nooku Code Jam'},
         *      {id: 4, parent: 2, path: '1/2', label: 'Nooku Framework'},
         *      {id: 5, parent: 0, path: '', label: 'Tutorials'}
         *  ]
         *
         *  Advanced data sample with non-unique ids:
         *  [
         *      {id: 's1', section_id: 1, parent: 0, path: '', label: 'Blog'},
         *      {id: 's1c1', section_id: 1, category_id: 1, parent: 's1', path: 's1', label: 'News'},
         *      {id: 's1c2', section_id: 1, category_id: 2, parent: 's1c1', path: 's1/s1c1', label: 'Nooku Code Jam'},
         *      {id: 's1c3', section_id: 1, category_id: 3, parent: 's1c1', path: 's1/s1c1', label: 'Nooku Framework'},
         *      {id: 's2', section_id: 2, parent: 0, path: '', label: 'Tutorials'}
         *  ]
         */
        _parseData: function(list){

            var data = [], index = {}; // 'data' is an hierarchial list while 'index' is flat and used to lookup parents

            $.each(list, function(key,item){

                index[item.id] = item; // always add the item to the lookup index

                if(item.parent == 0 || !index.hasOwnProperty(item.parent)) {
                    data.push(item); // top level items are added directly to the new list or if orphan
                } else {
                    if(!index[item.parent].hasOwnProperty('children')) index[item.parent].children = [];
                    // changing items in 'index' changes the items in 'data' as they're not deep cloned
                    index[item.parent].children.push(item);
                }
            });

            //Return the data inside a 'root' node to replicate legacy mootree behavior
            return data;
        },

        // create a params object from a querystring
        unserialize: function (query) {
            var pair, params = {};
            query = query.replace(/^\?/, '').split(/&/);
            for (pair in query) {
                if(query.hasOwnProperty(pair)) {
                    pair = query[pair].split('=');
                    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
            }
            return params;
        },

        /**
         * Internal event handlers for customizing the jqTree markup and behavior to integrate better with bootstrap.
         *
         * DO NOT Customize this method to add your own events, use attachHandlers instead
         */
        _attachHandlers: function(){

            var options = this.options, self = this, states = options.toggler;

            this.element.bind({
                'tree.select': // The select event happens when a node is clicked
                    function(event) {
                        $(this).find('.active').removeClass('active');
                        if(event.node) { // When event.node is null, it's actually a deselect event
                            //Style the clicked element
                            $(this).find('.jqtree-selected').addClass('active');
                        }
                    },
                'tree.open':
                    function(event) {
                        // toggle classes and html on the triangle, and folder icon
                        var node = event.node, state = states[1], old = states[0], triangle = $(node.element).children('span').find('. jqtree-icon');
                        triangle.removeClass(old.folder).addClass(state.folder);

                        triangle.closest('span').find('.'+old.folder).removeClass(old.folder).addClass(state.folder);
                    },
                'tree.close':
                    function(event) {
                        // toggle classes and html on the triangle, and folder icon
                        var node = event.node, state = states[0], old = states[1], triangle = $(node.element).children('span').find('. jqtree-icon');
                        triangle.removeClass(old.folder).addClass(state.folder);

                        triangle.closest('span').find('.'+old.folder).removeClass(old.folder).addClass(state.folder);
                    },
                'tree.init':
                    function() {

                        // If a node should be preselected on init, select it right away
                        if(options.selected) {
                            var node = $(this).tree('getNodeById', options.selected);
                            $(this).tree('selectNode', node);
                            self.selectNode(node, $(this));
                        }
                    },
                'tree.refresh': //Refreshes reset the html, and happen on events like setState
                    function() {
                        $(this).find('.jqtree-selected').addClass('active');
                    }
            });

        },

        /**
         * Attach event handlers for jQtree events for behaviors and interactivity
         *
         * @link http://mbraak.github.io/jqTree/#events
         */
        attachHandlers: function(){

            this._attachHandlers(); // @NOTE Attach needed events, remember to call this if you customize this method

        },
        /**
         * Scroll the node and its children into view with a scroll transition
         * @param node      Node instance
         * @param viewport  HTMLElement with the scroll overflow, usually this.element
         * @param duration  Duration of animation, defaults to 900ms
         */
        scrollIntoView: function(node, viewport, duration){
            var element = $(node.element),
                viewportHeight = viewport.height(),
                viewportWidth = viewport.width(),
                offsetTop = element[0].offsetTop,
                height = element.height(),
                width = element.width(),
                scrollTo = Math.min(offsetTop, (offsetTop - viewportHeight) + height),
                animate = {};

            /**
             * Only scrolls if the element is out of bounds either from the top or bottom, with priority on the bottom
             */
            if(scrollTo > viewport.scrollTop()) {
                animate.scrollTop = scrollTo;
            } else if (offsetTop < viewport.scrollTop()) {
                animate.scrollTop = offsetTop;
            }

            /**
             * Support animating a horizontal scrollbar, if necessary
             */
            if(viewportWidth < width) {
                var title = element.find('.jqtree-title').filter(":first"),
                    whitespace = title.find('.icon-whitespace').last(),
                    scrollToLeft = whitespace.length ? whitespace[0].offsetLeft : 0;

                animate.scrollLeft = scrollToLeft;
            }

            if(animate.scrollTop || animate.scrollLeft) {
                clearTimeout(this._scroll_into_view);
                this._scroll_into_view = setTimeout(function(){
                    viewport.animate(animate, duration||900);
                }.bind(this), duration||900);

            }
        }
    });
}(window.kQuery));
(function($) {
    // Overflowing checker
    $.overflowing = function (element, options) {

        var defaults = {
                wrapInner: true,
                offset: 10
            },
            plugin = this;

        plugin.settings = {};

        var $element = $(element);

        plugin.init = function () {

            plugin.settings = $.extend({}, defaults, options);

            // Wrap content in a div
            if ($element.parent('.k-overflowing')[0] == undefined) {
                $element.wrap('<div class="k-overflowing">');
                if ($element.css('flex')) {
                    $('.k-overflowing').addClass('k-overflowing--flex');
                }

                // Add overflowing shadow divs
                $element.after('<div class="k-overflowing--top is-hidden">');
                $element.after('<div class="k-overflowing--right is-hidden">');
                $element.after('<div class="k-overflowing--bottom is-hidden">');
                $element.after('<div class="k-overflowing--left is-hidden">');
            }

            // Overflowing?
            function overflowing() {

                if (element.clientWidth != element.scrollWidth || element.clientHeight != element.scrollHeight) {

                    // Show top overflowing div
                    if (element.scrollTop >= plugin.settings.offset && element.scrollTop >= plugin.settings.offset) {
                        $('.k-overflowing--top').removeClass('is-hidden');
                    } else {
                        $('.k-overflowing--top').addClass('is-hidden');
                    }

                    // Show right overflowing div
                    if (element.scrollLeft <= (element.scrollWidth - element.clientWidth) - plugin.settings.offset) {
                        $('.k-overflowing--right').removeClass('is-hidden');
                    } else {
                        $('.k-overflowing--right').addClass('is-hidden');
                    }

                    // Show bottom overflowing div
                    if (element.scrollTop < ((element.scrollHeight - element.clientHeight) - plugin.settings.offset)) {
                        $('.k-overflowing--bottom').removeClass('is-hidden');
                    } else {
                        $('.k-overflowing--bottom').addClass('is-hidden');
                    }

                    // Show left overflowing div
                    if (element.scrollLeft >= plugin.settings.offset) {
                        $('.k-overflowing--left').removeClass('is-hidden');
                    } else {
                        $('.k-overflowing--left').addClass('is-hidden');
                    }
                }

                if (element.clientWidth == element.scrollWidth) {
                    $('.k-overflowing--left').addClass('is-hidden');
                    $('.k-overflowing--right').addClass('is-hidden');
                }

                if (element.clientHeight == element.scrollHeight) {
                    $('.k-overflowing--top').addClass('is-hidden');
                    $('.k-overflowing--bottom').addClass('is-hidden');
                }
            }

            $(window).on('load resize', overflowing);

            // Detect on scrolling
            $element.scroll(function () {
                overflowing();
            });

        };

        plugin.init();
    };

    // add the plugin to the jQuery.fn object
    $.fn.overflowing = function (options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('overflowing')) {
                // create a new instance of the plugin
                var plugin = new $.overflowing(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('overflowing', plugin);
            }
        });
    };
})(kQuery);
/*!
 * jQuery.tabbable 1.0 - Simple utility for selecting the next / previous ':tabbable' element.
 * https://github.com/marklagendijk/jQuery.tabbable
 *
 * Includes ':tabbable' and ':focusable' selectors from jQuery UI Core
 *
 * Copyright 2013, Mark Lagendijk
 * Released under the MIT license
 *
 */
(function($){

    /**
     * Focusses the next :focusable element. Elements with tabindex=-1 are focusable, but not tabable.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.focusNext = function(){
        selectNextTabbableOrFocusable(':focusable');
    };

    /**
     * Focusses the previous :focusable element. Elements with tabindex=-1 are focusable, but not tabable.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.focusPrev = function(){
        selectPrevTabbableOrFocusable(':focusable');
    };

    /**
     * Focusses the next :tabable element.
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.tabNext = function(){
        selectNextTabbableOrFocusable(':tabbable');
    };

    /**
     * Focusses the previous :tabbable element
     * Does not take into account that the taborder might be different as the :tabbable elements order
     * (which happens when using tabindexes which are greater than 0).
     */
    $.tabPrev = function(){
        selectPrevTabbableOrFocusable(':tabbable');
    };

    function selectNextTabbableOrFocusable(selector){
        var selectables = $(selector);
        var current = $(':focus');
        var nextIndex = 0;
        if(current.length === 1){
            var currentIndex = selectables.index(current);
            if(currentIndex + 1 < selectables.length){
                nextIndex = currentIndex + 1;
            }
        }

        selectables.eq(nextIndex).focus();
    }

    function selectPrevTabbableOrFocusable(selector){
        var selectables = $(selector);
        var current = $(':focus');
        var prevIndex = selectables.length - 1;
        if(current.length === 1){
            var currentIndex = selectables.index(current);
            if(currentIndex > 0){
                prevIndex = currentIndex - 1;
            }
        }

        selectables.eq(prevIndex).focus();
    }

    /**
     * :focusable and :tabbable, both taken from jQuery UI Core
     */
    $.extend($.expr[ ':' ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function(dataName){
                return function(elem){
                    return !!$.data(elem, dataName);
                };
            }) :
            // support: jQuery <1.8
            function(elem, i, match){
                return !!$.data(elem, match[ 3 ]);
            },

        focusable: function(element){
            return focusable(element);
        },

        tabbable: function(element){
            var tabIndex = $.attr(element, 'tabindex'),
                isTabIndexNaN = isNaN(tabIndex);
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable(element);
        }
    });

    /**
     * focussable function, taken from jQuery UI Core
     * @param element
     * @returns {*}
     */
    function focusable(element){
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase(),
            isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex'));
        if('area' === nodeName){
            map = element.parentNode;
            mapName = map.name;
            if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map'){
                return false;
            }
            img = $('img[usemap=#' + mapName + ']')[0];
            return !!img && visible(img);
        }
        return ( /input|select|textarea|button|object/.test(nodeName) ?
                !element.disabled :
                'a' === nodeName ?
                element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
            visible(element);

        function visible(element){
            return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function(){
                    return $.css(this, 'visibility') === 'hidden';
                }).length;
        }
    }
})(kQuery);
/* @preserve
 * Off canvas menu
 * Copyright 2015 Robin Poort
 * http://www.robinpoort.com
 */

(function($) {

    $.offCanvasMenu = function(element, options) {

        var defaults = {
                menu: $(element),
                position: 'left',
                menuExpandedClass: 'show-left-menu',
                openedClass: 'opened',
                noTransitionClass: 'no-transition',
                wrapper: $(element).parent(),
                container: $('.container'),
                menuToggle: [],
                expandedWidth: $(element).outerWidth(),
                offCanvasOverlay: 'k-off-canvas-overlay',
                ariaControls: null,
                opacity: .75
            },
            plugin = this;


        plugin.settings = {};

        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            var menu = plugin.settings.menu,
                position = plugin.settings.position,
                menuExpandedClass = plugin.settings.menuExpandedClass,
                openedClass = plugin.settings.openedClass,
                noTransitionClass = plugin.settings.noTransitionClass,
                wrapper = plugin.settings.wrapper,
                container = plugin.settings.container,
                menuToggle = plugin.settings.menuToggle,
                ariaControls = plugin.settings.ariaControls,
                expandedWidth = menu.outerWidth(),
                offCanvasOverlay = $('.' + plugin.settings.offCanvasOverlay),
                transitionDuration = Math.round(parseFloat(container.css('transition-duration')) * 1000),
                transitionElements = plugin.settings.transitionElements || plugin.settings.container,
                timeout;

            // Set proper menuExpandedClass if not set manually
            if ( position === 'right' && !options.menuExpandedClass ) {
                menuExpandedClass = 'show-right-menu';
            }

            // Set proper menuExpandedClass if not set manually
            if ( wrapper.is('body') ) {
                wrapper = $('html, body');
            }

            // Create overlay wrapper
            $.each(transitionElements, function() {
                if ($(this).find('.' + plugin.settings.offCanvasOverlay)[0] == undefined) {
                    $(this).append('<div class="' + plugin.settings.offCanvasOverlay + '">');
                    var newOverlay = $('.' + plugin.settings.offCanvasOverlay);
                    $.extend(offCanvasOverlay, newOverlay);
                }
            });

            function tabToggle(menu) {
                // When tabbing on toggle button
                menuToggle.bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        e.preventDefault();
                        if ( e.shiftKey ) {
                            menu.find(':tabbable').last().focus();
                        } else {
                            menu.find(':tabbable').first().focus();
                        }
                    }
                });

                // When tabbing on first tabbable menu item
                menu.find(':tabbable').first().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });

                // When tabbing on last tabbable menu item
                menu.find(':tabbable').last().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( !e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });
            }

            function openMenu(menu) {
                // Clear the timeout when user clicks open menu
                clearTimeout(timeout);

                // Set to expanded for accessibility
                menuToggle.attr({'aria-expanded': 'true'});

                // Add classes and CSS to the wrapper
                // All styling in CSS comes from this parent element
                wrapper.addClass(menuExpandedClass + ' ' + openedClass + '--' + position);

                // Enable tabbing within menu
                timeout = setTimeout(function() {
                    tabToggle(menu);
                }, transitionDuration);
            }

            function closeMenu() {
                // Clear the timeout when user clicks close menu
                clearTimeout(timeout);

                // Set to collapsed for accessibility
                menuToggle.attr({'aria-expanded': 'false'});

                // Remove the expanded class to activate the transition
                wrapper.removeClass(menuExpandedClass);

                // Remove style and class when transition has ended, so the menu stays visible on closing
                timeout = setTimeout(function() {
                    wrapper.removeClass(openedClass + '--' + position);
                }, transitionDuration);
            }

            function toggleMenu(menu) {
                var method = !wrapper.hasClass(menuExpandedClass) ? 'closed' : 'opened';
                if ( method === 'closed' ) { openMenu(menu); }
                if ( method === 'opened' ) { closeMenu(); }
            }

            // If we have a toggle button available
            if(menuToggle.length){

                // Set ARIA attributes
                menuToggle.attr({
                    'role': 'button',
                    'aria-controls': ariaControls,
                    'aria-expanded': 'false'
                });

                // Toggle button:
                menuToggle.click(function(event){
                    event.stopPropagation();
                    toggleMenu(menu);
                });

                // Close menu by clicking anywhere
                wrapper.click(function(event){
                    if ( wrapper.hasClass(menuExpandedClass) ) {
                        event.stopPropagation();
                        closeMenu();
                    }
                });

                // Don't close the menu when clicked on sidemenu
                menu.click(function(event){
                    event.stopPropagation();
                });

                // Close menu if esc keydown and menu is open and set focus to toggle button
                $(document).bind('keydown', function(event) {
                    if (event.keyCode === 27 && wrapper.hasClass(menuExpandedClass)) {
                        event.stopPropagation();
                        closeMenu();
                        menuToggle.focus();
                    }
                });
            }

            // Touch actions
            if ('ontouchstart' in document.documentElement) {
                wrapper.on('touchstart', onTouchStart);
                wrapper.on('touchmove', onTouchMove);
                wrapper.on('touchend', onTouchEnd);
            }

            // vars
            var started = null,
                start = {},
                deltaX,
                pageX,
                overlayOpacity,
                isScrolling = false;

            // Functions
            function currentPosition() {
                return position == 'left' ? menu.offset().left + expandedWidth
                    : menu.offset().left;
            }

            function inBounds(newPos) {
                return (position == 'left' && newPos >= -25 && newPos <= expandedWidth) ||
                    (position == 'right' && newPos >= -(expandedWidth) && newPos <= 25);
            }

            function onTouchStart(e) {

                if(!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                // Set started to true (used by touchend)
                started = true;

                // Get original starting point
                pageX = e.originalEvent.touches[0].pageX;

                // Setting the start object for 'move' and 'end'
                start = {
                    startingX: currentPosition(),
                    // get touch coordinates for delta calculations in onTouchMove
                    pageX: pageX,
                    pageY: e.originalEvent.touches[0].pageY
                };

                // reset deltaX
                deltaX = wrapper.position().left;

                // used for testing first onTouchMove event
                isScrolling = undefined;

                // Get the opacity of the overlay
                overlayOpacity = plugin.settings.opacity;

                // Add class to remove transition for 1-to-1 touch movement
                $.each(transitionElements, function() {
                    $(this).addClass(noTransitionClass);
                });
                $.each(offCanvasOverlay, function() {
                    $(this).addClass(noTransitionClass);
                });

                e.stopPropagation();

            }

            function onTouchMove(e) {

                if(!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                deltaX = e.originalEvent.touches[0].pageX - start.pageX;

                // determine if scrolling test has run - one time test
                if (typeof isScrolling == 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(deltaX) < Math.abs(e.originalEvent.touches[0].pageY - start.pageY));
                }

                // if user is not trying to scroll vertically
                if (!isScrolling) {

                    // prevent native scrolling
                    e.preventDefault();

                    var newPos = position == 'left' ? start.startingX + deltaX
                        : deltaX - ($(window).width() - start.startingX);

                    var opacity = (overlayOpacity / expandedWidth) * Math.abs(newPos);

                    if(!inBounds(newPos))
                        return;

                    // translate immediately 1-to-1
                    $.each(transitionElements, function() {
                        $(this).css({
                            '-webkit-transform' : 'translate(' + newPos + 'px, 0)',
                            '-moz-transform'    : 'translate(' + newPos + 'px, 0)',
                            '-ms-transform'     : 'translate(' + newPos + 'px, 0)',
                            '-o-transform'      : 'translate(' + newPos + 'px, 0)',
                            'transform'         : 'translate(' + newPos + 'px, 0)'
                        });
                    });
                    $.each(offCanvasOverlay, function() {
                        $(this).css('opacity', opacity);
                    });

                    e.stopPropagation();
                }
            }

            function onTouchEnd(e){

                // Escape if invalid start:
                if(!started)
                    return;

                // Escape if Menu is closed
                if(!wrapper.hasClass(menuExpandedClass))
                    return;

                var newPos = position == 'left' ? start.startingX + deltaX
                    : deltaX - ($(window).width() - start.startingX);

                // Converting to positive number
                var absNewPos = Math.abs(newPos);

                // if not scrolling vertically
                if (!isScrolling) {

                    $.each(transitionElements, function() {
                        container.removeAttr('style').removeClass(noTransitionClass);
                        $('.k-titlebar').removeAttr('style').removeClass(noTransitionClass);
                    });
                    $.each(offCanvasOverlay, function() {
                        $(this).removeAttr('style').removeClass(noTransitionClass);
                    });

                    if ( ( position == 'left' && ( absNewPos <= (expandedWidth * 0.66) || newPos <= 0 ) ) ||
                        ( position == 'right' && ( absNewPos <= (expandedWidth * 0.66) || newPos >= 0 ) ) ) {
                        closeMenu();
                    } else {
                        openMenu(menu);
                    }
                }

                // Reset start object and starting variable:
                started = null;
                start = {};

                e.stopPropagation();
            }

        };

        plugin.init();

    };


    // add the plugin to the jQuery.fn object
    $.fn.offCanvasMenu = function(options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('offCanvasMenu')) {
                // create a new instance of the plugin
                var plugin = new $.offCanvasMenu(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('offCanvasMenu', plugin);
            }
        });
    }

})(kQuery);
(function($) {

    $(document).ready(function () {

        // Variables
        var $wrapper = $('.k-wrapper'),
            $titlebar = $('.k-titlebar'),
            $mobiletitle = $('.k-mobile-title'),
            $toolbar = $('.k-toolbar'),
            $content = $('.k-content'),
            $fixedtable = $('.k-fixed-table-header'),
            $clickable = $('a, button'),
            $searchtoggle = $('.js-toggle-search'),
            $filtertoggle = $('.js-toggle-filters'),
            $footable = $('.footable'),
            $overflow = $('.k-sidebar-item--overflow'),
            resizeClass = 'k-is-resizing',
            $sidebarToggle = $('.k-sidebar-item--toggle');

        // Sidebar
        if ( ($toolbar.length || $titlebar.length || $mobiletitle.length) && $wrapper.length && $content.length)
        {
            var toggle_button = '<div class="off-canvas-menu-toggle-holder"><button class="off-canvas-menu-toggle" type="button">' +
                '<span class="bar1"></span>' +
                '<span class="bar2"></span>' +
                '<span class="bar3"></span>' +
                '</button></div>',
                sidebar_left  = $('.js-sidebar-left'),
                sidebar_right = $('.js-sidebar-right');

            function addOffCanvasButton(element, position) {
                // Variables
                var kContainer = '.koowa-container',
                    titlebar = element.closest(kContainer).find('.k-titlebar')[0],
                    mobiletitle = element.closest(kContainer).find('.k-mobile-title')[0],
                    toolbar = element.closest(kContainer).find('.k-toolbar')[0],
                    wrapper = element.closest(kContainer).find('.k-wrapper')[0],
                    content = element.closest(kContainer).find('.k-content')[0],
                    toggle = element.closest(kContainer).find('.off-canvas-menu-toggle-holder--' + position),
                    $toggle = $(toggle_button),
                    transitionElements = $(content);

                // Add proper class to toggle buttons
                $toggle.addClass('off-canvas-menu-toggle-holder--' + position);

                // Add toggle buttons
                if ( toggle[0] == undefined ) {
                    if ( titlebar != undefined ) {
                        if ( position == 'left' ) {
                            $(titlebar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(titlebar).append($toggle);
                        }
                        transitionElements = [$(content), $(titlebar)]
                    } else if ( mobiletitle != undefined ) {
                        if ( position == 'left' ) {
                            $(mobiletitle).prepend($toggle);
                        } else if ( position == 'right') {
                            $(mobiletitle).append($toggle);
                        }
                    } else if ( toolbar != undefined ) {
                        if ( position == 'left' ) {
                            $(toolbar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(toolbar).append($toggle);
                        }
                    }

                    // Initialize the offcanvas plugin
                    element.offCanvasMenu({
                        menuToggle: $toggle,
                        wrapper: $(wrapper),
                        container: $(content),
                        position: position,
                        transitionElements: transitionElements
                    });
                }
            }

            if (sidebar_left.length) {
                $.each(sidebar_left, function() {
                    addOffCanvasButton($(this), 'left');
                });
            }

            if (sidebar_right.length) {
                $.each(sidebar_right, function(i) {
                    addOffCanvasButton($(this), 'right');
                });
            }
        }

        // Overflowing items
        if ( $overflow.length ) {
            $overflow.overflowing();
        }

        // Footable
        if ( $footable.length ) {
            $footable.on('click', '.footable-toggle', function(event){
                event.stopPropagation();
            }).footable({
                toggleSelector: '.footable-toggle',
                breakpoints: {
                    phone: 400,
                    tablet: 600,
                    desktop: 800
                }
            }).bind('footable_resizing', function() {
                $fixedtable.floatThead('destroy');
            }).bind('footable_resized', function() {
                fixedTable();
                $fixedtable.floatThead('reflow');
            });
        }

        // Sticky table header and footer
        function fixedTable() {
            if ( $fixedtable.length ) {
                $fixedtable.floatThead({
                    scrollContainer: function($table){
                        return $table.closest('.k-table');
                    },
                    enableAria: true
                });
            }
        }

        fixedTable();

        // Clickable items
        if ( $clickable.length ) {
            $clickable.click(function() {
                $(this).toggleClass('k-opened');
            });
        }

        // Toggle search
        $searchtoggle.click(function() {
            $('.k-scopebar__item--search').slideToggle('fast');
        });

        // Filter search
        $filtertoggle.click(function() {
            $('.k-scopebar__filters').toggle('fast');
        });

        // Select2
        var kSelect2 = $('.k-select2');
        if ( kSelect2.length ) {
            kSelect2.select2({
                theme: "bootstrap"
            });
        }

        // jqTree
        var jqTree = $('#k-jqtree');
        if ( jqTree.length ) {

            var jqTreeData = [
                {
                    name: 'node1',
                    children: [
                        { name: 'child1' },
                        { name: 'child2' }
                    ]
                },
                {
                    name: 'node2',
                    children: [
                        { name: 'child3' }
                    ]
                }
            ];

            jqTree.tree({
                data: jqTreeData
            })
        }

        // Add a class during resizing event so we can hide overflowing stuff
        var resizeTimer;

        $(window).on('resize', function(e) {

            // Add the class
            $('body').addClass(resizeClass);

            // Remove the class when resize is done
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                $('body').removeClass(resizeClass);
                $fixedtable.floatThead('reflow');
            }, 250);

        });

        if ( $sidebarToggle.length )
        {
            $sidebarToggle.find('.k-sidebar-item__header').append('<div class="k-sidebar-item__toggle"><span class="visually-hidden">Toggle</span></div>');
            var $sidebarToggleHandler = $('.k-sidebar-item__toggle');
            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function() {
                $sidebarToggleHandler.toggleClass('is-active').parent().next().slideToggle(180);
            });
        }

    });

})(kQuery);


window.jQuery = globalCacheForjQueryReplacement;
globalCacheForjQueryReplacement = undefined;
webpackJsonp([35],{1604:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t){var n=this;this.snippets={compiled:{},raw:{}},t.keys().forEach(function(s){var a=s.replace("./","").replace(/\W+(\w)/g,function(t){return t[1].toUpperCase()}),e=t(s);e.snippet&&(n.snippets.compiled[a]=e.snippet),e.example&&(n.snippets.raw[a]=e.example)})}return t}();n.BaseDocumentationSection=a},2698:function(t,n,s){"use strict";var a=this&&this.__decorate||function(t,n,s,a){var e,o=arguments.length,p=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,n,s,a);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(p=(o<3?e(p):o>3?e(n,s,p):e(n,s))||p);return o>3&&p&&Object.defineProperty(n,s,p),p},e=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};Object.defineProperty(n,"__esModule",{value:!0});var o=s(0),p=s(23),i=s(314),c=s(167),l=s(315),u=s(2699),r=s(2704),d=s(2709),m=s(2714),k=s(317),f=s(316),h=[u.ComponentsTooltipsNg1Component,r.ComponentsOverflowTooltipNg1Component,d.ComponentsSingleLineOverflowTooltipNg1Component,m.ComponentsStaticTooltipNg1Component],v=[{path:"**",component:l.DocumentationCategoryComponent,data:{category:c.ResolverService.resolveCategoryData(c.DocumentationPage.Components,"Tooltips")}}],g=function(){function t(t,n){n.registerResolver(t)}return t}();g=a([o.NgModule({imports:[k.WrappersModule,f.TabsModule,i.DocumentationComponentsModule,p.RouterModule.forChild(v)],exports:h,declarations:h,entryComponents:h}),e("design:paramtypes",[o.ComponentFactoryResolver,c.ResolverService])],g),n.ComponentsTooltipsModule=g},2699:function(t,n,s){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])};return function(n,s){function a(){this.constructor=n}t(n,s),n.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=this&&this.__decorate||function(t,n,s,a){var e,o=arguments.length,p=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,n,s,a);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(p=(o<3?e(p):o>3?e(n,s,p):e(n,s))||p);return o>3&&p&&Object.defineProperty(n,s,p),p},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=s(0),i=s(313),c=s(1604),l=function(t){function n(){var n=t.call(this,s(2700))||this;return n.codepen={html:n.snippets.raw.sampleHtml,htmlAttributes:{"ng-controller":"TooltipsCtrl as vm"},js:[n.snippets.raw.sampleJs]},n}return a(n,t),n}(c.BaseDocumentationSection);l=e([p.Component({selector:"uxd-components-tooltips-ng1",template:s(2703),changeDetection:p.ChangeDetectionStrategy.OnPush}),i.DocumentationSectionComponent("ComponentsTooltipsNg1Component"),o("design:paramtypes",[])],l),n.ComponentsTooltipsNg1Component=l},2700:function(t,n,s){function a(t){return s(e(t))}function e(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./sample.html":2701,"./sample.js":2702};a.keys=function(){return Object.keys(o)},a.resolve=e,t.exports=a,a.id=2700},2701:function(t,n){t.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-sm-6 col-xs-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Button text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.buttonText<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Tooltip text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.tooltipText<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-primary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.buttonText ? vm.buttonText : <span class="token punctuation">\'</span>&amp;nbsp;<span class="token punctuation">\'</span><span class="token punctuation">"</span></span> <span class="token attr-name">tooltip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{{vm.tooltipText}}<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{{vm.buttonText}} {{vm.tooltipText}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<div class="row">\n    <div class="col-sm-6 col-xs-12">\n        <div class="form-group">\n            <label>Button text</label>\n            <input type="text" ng-model="vm.buttonText" class="form-control">\n        </div>\n        <div class="form-group">\n            <label>Tooltip text</label>\n            <input type="text" ng-model="vm.tooltipText" class="form-control">\n        </div>\n    </div>\n</div>\n<button type="button" class="btn button-primary" ng-bind="vm.buttonText ? vm.buttonText : \'&nbsp;\'" tooltip="{{vm.tooltipText}}" aria-label="{{vm.buttonText}} {{vm.tooltipText}}">\n</button>'}},2702:function(t,n){t.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">"TooltipsCtrl"</span><span class="token punctuation">,</span> TooltipsCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">TooltipsCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>buttonText <span class="token operator">=</span> <span class="token string">"Button with tooltip"</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>tooltipText <span class="token operator">=</span> <span class="token string">"Tooltip text"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:'angular.module("app").controller("TooltipsCtrl", TooltipsCtrl);\n\nfunction TooltipsCtrl() {\n    var vm = this;\n\n    vm.buttonText = "Button with tooltip";\n    vm.tooltipText = "Tooltip text";\n}'}},2703:function(t,n){t.exports='<uxd-tooltips-wrapper></uxd-tooltips-wrapper>\n\n<hr>\n\n<p>To put a tooltip on an element set the <code>tooltip</code> attribute with the required text. The tooltip is placed at the top by default. You can change the placement of the tooltip by setting the <code>tooltip-placement</code> attribute to “top”, “bottom”, “left” or “right”.</p>\n\n<p>To support users of assistive technologies, include an <code>aria-label</code> attribute on the button to convey the tooltip text.</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet language="javascript" [content]="snippets.compiled.sampleJs"></uxd-snippet>\n    </tab>\n</tabset>'},2704:function(t,n,s){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])};return function(n,s){function a(){this.constructor=n}t(n,s),n.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=this&&this.__decorate||function(t,n,s,a){var e,o=arguments.length,p=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,n,s,a);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(p=(o<3?e(p):o>3?e(n,s,p):e(n,s))||p);return o>3&&p&&Object.defineProperty(n,s,p),p},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=s(0),i=s(313),c=s(1604),l=function(t){function n(){var n=t.call(this,s(2705))||this;return n.codepen={html:n.snippets.raw.sampleHtml,css:[n.snippets.raw.sampleCss]},n}return a(n,t),n}(c.BaseDocumentationSection);l=e([p.Component({selector:"uxd-components-overflow-tooltip-ng1",template:s(2708),changeDetection:p.ChangeDetectionStrategy.OnPush}),i.DocumentationSectionComponent("ComponentsOverflowTooltipNg1Component"),o("design:paramtypes",[])],l),n.ComponentsOverflowTooltipNg1Component=l},2705:function(t,n,s){function a(t){return s(e(t))}function e(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./sample.css":2706,"./sample.html":2707};a.keys=function(){return Object.keys(o)},a.resolve=e,t.exports=a,a.id=2705},2706:function(t,n){t.exports={snippet:'<span class="token selector">.overflow-tooltip-demo</span> <span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 15px 0px #eee<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:".overflow-tooltip-demo {\n  box-shadow: 0px 0px 15px 0px #eee;\n  display: inline-block;\n  width: 25%;\n  height: 120px;\n  padding: 20px;\n  margin-top: 180px;\n}"}},2707:function(t,n){t.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>overflow-tooltip-demo<span class="token punctuation">"</span></span> <span class="token attr-name">overflow-tooltip</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec vero sum \n    nescius esse utilitatem in historia, non modo voluptatem. Si quicquam extra virtutem habeatur in bonis. Aliud igitur \n    esse censet gaudere, aliud non dolere. Tum ille timide vel potius verecunde: Facio, inquit. Quae hic rei publicae \n    vulnera inponebat, eadem ille sanabat. Hoc non est positum in nostra actione. Immo videri fortasse. Duo Reges: \n    constructio interrete. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. \n    Si longus, levis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',example:'<p class="overflow-tooltip-demo" overflow-tooltip>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec vero sum \n    nescius esse utilitatem in historia, non modo voluptatem. Si quicquam extra virtutem habeatur in bonis. Aliud igitur \n    esse censet gaudere, aliud non dolere. Tum ille timide vel potius verecunde: Facio, inquit. Quae hic rei publicae \n    vulnera inponebat, eadem ille sanabat. Hoc non est positum in nostra actione. Immo videri fortasse. Duo Reges: \n    constructio interrete. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. \n    Si longus, levis.</p>'}},2708:function(t,n){t.exports='<uxd-overflow-tooltip-wrapper></uxd-overflow-tooltip-wrapper>\n\n<hr>\n\n<p>The <code>overflow-tooltip</code> directive can be used to truncate text which may overflow its container, replacing the\n    overflow with an ellipsis. It is particularly suited for multi-line text where the ellipsis should come on the final\n    line. The text will always be truncated at the last full word, unless the text is a single word or the text has no spaces,\n    in which case words may be truncated between letters. The truncation position will be updated when the container resizes\n    or when the text content changes, and the tooltip will only be shown if the text has been truncated.</p>\n\n<p>The contents of the element to which this directive are applied can also contain HTML in addition to plain text, allowing\n    complex formatting to be retained. The <code>overflow-tooltip</code> directive is compatible with the <code>tooltip-placement</code>    attribute described above.</p>\n\n<uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>\n\n<p>The CSS used in the example above is as follows:</p>\n\n<uxd-snippet language="css" [content]="snippets.compiled.sampleCss"></uxd-snippet>'},2709:function(t,n,s){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])};return function(n,s){function a(){this.constructor=n}t(n,s),n.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=this&&this.__decorate||function(t,n,s,a){var e,o=arguments.length,p=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,n,s,a);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(p=(o<3?e(p):o>3?e(n,s,p):e(n,s))||p);return o>3&&p&&Object.defineProperty(n,s,p),p},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=s(0),i=s(313),c=s(1604),l=function(t){function n(){var n=t.call(this,s(2710))||this;return n.codepen={html:n.snippets.raw.sampleHtml,css:[n.snippets.raw.sampleCss]},n}return a(n,t),n}(c.BaseDocumentationSection);l=e([p.Component({selector:"uxd-components-single-line-overflow-tooltip-ng1",template:s(2713),changeDetection:p.ChangeDetectionStrategy.OnPush}),i.DocumentationSectionComponent("ComponentsSingleLineOverflowTooltipNg1Component"),o("design:paramtypes",[])],l),n.ComponentsSingleLineOverflowTooltipNg1Component=l},2710:function(t,n,s){function a(t){return s(e(t))}function e(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./sample.css":2711,"./sample.html":2712};a.keys=function(){return Object.keys(o)},a.resolve=e,t.exports=a,a.id=2710},2711:function(t,n){t.exports={snippet:'<span class="token selector">.single-line-overflow-tooltip-demo</span> <span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 15px 0px #eee<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 62px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:".single-line-overflow-tooltip-demo {\n  box-shadow: 0px 0px 15px 0px #eee;\n  display: inline-block;\n  width: 25%;\n  height: 62px;\n  padding: 20px;\n  margin-top: 180px;\n}"}},2712:function(t,n){t.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>single-line-overflow-tooltip-demo<span class="token punctuation">"</span></span> <span class="token attr-name">single-line-overflow-tooltip</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur \n    adipiscing elit. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Si quicquam extra \n    virtutem habeatur in bonis. Aliud igitur esse censet gaudere, aliud non dolere. Tum ille timide vel potius \n    verecunde: Facio, inquit. Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Hoc non est positum \n    in nostra actione. Immo videri fortasse. Duo Reges: constructio interrete. Nam aliquando posse recte fieri \n    dicunt nulla expectata nec quaesita voluptate. Si longus, levis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n',example:'<p class="single-line-overflow-tooltip-demo" single-line-overflow-tooltip>Lorem ipsum dolor sit amet, consectetur \n    adipiscing elit. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Si quicquam extra \n    virtutem habeatur in bonis. Aliud igitur esse censet gaudere, aliud non dolere. Tum ille timide vel potius \n    verecunde: Facio, inquit. Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Hoc non est positum \n    in nostra actione. Immo videri fortasse. Duo Reges: constructio interrete. Nam aliquando posse recte fieri \n    dicunt nulla expectata nec quaesita voluptate. Si longus, levis.</p>\n'}},2713:function(t,n){t.exports='<uxd-single-line-overflow-tooltip-wrapper></uxd-single-line-overflow-tooltip-wrapper>\n\n<hr>\n\n<p>The <code class="highlighter-rouge">single-line-overflow-tooltip</code> directive can be used to truncate text which may overflow a single line, replacing the overflow with an ellipsis. The truncation position will be updated when the container resizes or when the text content changes, and the tooltip will only be shown if the text has been truncated.</p>\n\n<p>The contents of the element to which this directive are applied can also contain HTML in addition to plain text, allowing complex formatting to be retained. The <code class="highlighter-rouge">single-line-overflow-tooltip</code> directive is compatible with the <code class="highlighter-rouge">tooltip-placement</code> attribute described above.</p>\n\n<uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>\n\n<p>The CSS used in the example above is as follows:</p>\n\n<uxd-snippet language="css" [content]="snippets.compiled.sampleCss"></uxd-snippet>'},2714:function(t,n,s){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])};return function(n,s){function a(){this.constructor=n}t(n,s),n.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=this&&this.__decorate||function(t,n,s,a){var e,o=arguments.length,p=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,n,s,a);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(p=(o<3?e(p):o>3?e(n,s,p):e(n,s))||p);return o>3&&p&&Object.defineProperty(n,s,p),p},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};Object.defineProperty(n,"__esModule",{value:!0});var p=s(0),i=s(313),c=s(1604),l=function(t){function n(){var n=t.call(this,s(2715))||this;return n.codepen={html:n.snippets.raw.sampleHtml,htmlAttributes:{"ng-controller":"StaticTooltipDemoCtrl as vm"},js:[n.snippets.raw.sampleJs]},n}return a(n,t),n}(c.BaseDocumentationSection);l=e([p.Component({selector:"uxd-components-static-tooltip-ng1",template:s(2718),changeDetection:p.ChangeDetectionStrategy.OnPush}),i.DocumentationSectionComponent("ComponentsStaticTooltipNg1Component"),o("design:paramtypes",[])],l),n.ComponentsStaticTooltipNg1Component=l},2715:function(t,n,s){function a(t){return s(e(t))}function e(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./sample.html":2716,"./sample.js":2717};a.keys=function(){return Object.keys(o)},a.resolve=e,t.exports=a,a.id=2715},2716:function(t,n){t.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-primary<span class="token punctuation">"</span></span> <span class="token attr-name">static-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.content<span class="token punctuation">"</span></span> <span class="token attr-name">dismiss-text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.dismissText<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.direction<span class="token punctuation">"</span></span>\n    <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.position<span class="token punctuation">"</span></span> <span class="token attr-name">offset-x</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.offsetX<span class="token punctuation">"</span></span> <span class="token attr-name">offset-y</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.offsetY<span class="token punctuation">"</span></span> <span class="token attr-name">z-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.zIndex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Static Tooltip Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="text-center">\n    <button type="button" class="btn button-primary" static-tooltip content="vm.content" dismiss-text="vm.dismissText" direction="vm.direction"\n    position="vm.position" offset-x="vm.offsetX" offset-y="vm.offsetY" z-index="vm.zIndex">Static Tooltip Example</button>\n</div>'}},2717:function(t,n){t.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">"StaticTooltipDemoCtrl"</span><span class="token punctuation">,</span> StaticTooltipDemoCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">StaticTooltipDemoCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token string">\'This is an example of a static tooltip. It will appear when the page is loaded until dismissed. It is useful for giving the user information about a specific control.\'</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>dismissText <span class="token operator">=</span> <span class="token string">\'HIDE TIPS\'</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>direction <span class="token operator">=</span> <span class="token string">\'up\'</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">\'middle\'</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>offsetX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>offsetY <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n    vm<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">9998</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:"angular.module(\"app\").controller(\"StaticTooltipDemoCtrl\", StaticTooltipDemoCtrl);\n\nfunction StaticTooltipDemoCtrl() {\n    var vm = this;\n\n    vm.content = 'This is an example of a static tooltip. It will appear when the page is loaded until dismissed. It is useful for giving the user information about a specific control.';\n    vm.dismissText = 'HIDE TIPS';\n    vm.direction = 'up';\n    vm.position = 'middle';\n    vm.offsetX = 0;\n    vm.offsetY = 5;\n    vm.zIndex = 9998;\n}"}},2718:function(t,n){t.exports='<uxd-static-tooltip-wrapper></uxd-static-tooltip-wrapper>\n\n<hr>\n\n<p>Static tooltips can be added to elements to give the user detailed instructions on the purpose of the control when they first\n    navigate to the page.</p>\n\n<p>Add the <code>static-tooltip</code> directive to an element to show a static tooltip.</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet language="javascript" [content]="snippets.compiled.sampleJs"></uxd-snippet>\n    </tab>\n</tabset>\n\n<p>The following attributes can be used to configure static tooltips:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table m-t">\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Binding</th>\n            <th>Description</th>\n            <th>Optional</th>\n        </tr>\n        <tr>\n            <td class="attribute">content</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>Specifies the text to be displayed within the tooltip.</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td class="attribute">dismiss-text</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>If specified will set the text of the dismiss all static tooltips option that will be displayed on hover. The\n                default is <code>\'HIDE TIPS\'</code>.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">direction</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>Specifies the direction the tooltip will point to the chosen element. Available options are: <code>up</code>,\n                <code>down</code>, <code>left</code> and <code>right</code>.</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td class="attribute">position</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>Specifies where the callout should be placed on the tooltip. Available options are: <code>start</code>, <code>middle</code>                and <code>end</code>.</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td class="attribute">offset-x</td>\n            <td>number</td>\n            <td>variable</td>\n            <td>Specifies the number of pixels to the left or right that the tooltip should be offset.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">offset-y</td>\n            <td>number</td>\n            <td>variable</td>\n            <td>Specifies the number of pixels up or down that the tooltip should be offset.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">z-index</td>\n            <td>number</td>\n            <td>variable</td>\n            <td>If specified will set the z-index of the tooltip. Default value is <code>10098</code>.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">tooltip-class</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>If specified will allow a custom class to be set on the tooltip offering more customization.</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">tooltip-hidden</td>\n            <td>boolean</td>\n            <td>variable</td>\n            <td>If set to true this tooltip will not be displayed initially</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td class="attribute">tooltip-id</td>\n            <td>string</td>\n            <td>variable</td>\n            <td>Can be used to set a custom id on the tooltip, these must be unique for each tooltip.</td>\n            <td>true</td>\n        </tr>\n    </table>\n</div>\n\n<p>The Static Tooltip Service, <code>$staticTooltip</code>, allows you to show and hide all tooltips or individual tooltips\n    and check if any tooltips are visible. The full API for this service is as follows:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n        <tr>\n            <td class="attribute">showAllTooltips</td>\n            <td>This function will hide all the tooltips.</td>\n        </tr>\n        <tr>\n            <td class="attribute">hideAllTooltips</td>\n            <td>This function will hide all the tooltips/</td>\n        </tr>\n        <tr>\n            <td class="attribute">showTooltip</td>\n            <td>\n                Arguments:\n                <ul>\n                    <li><code>id</code> - string</li>\n                </ul>\n                <p>This function will show the tooltip with the matching id.</p>\n            </td>\n        </tr>\n        <tr>\n            <td class="attribute">hideTooltip</td>\n            <td>\n                Arguments:\n                <ul>\n                    <li><code>id</code> - string</li>\n                </ul>\n                <p>This function will hide the tooltip with the matching id.</p>\n            </td>\n        </tr>\n        <tr>\n            <td class="attribute">tooltipsVisible</td>\n            <td>This function returns true if any tooltips are visible, otherwise returns false.</td>\n        </tr>\n    </table>\n</div>\n\n<blockquote>\n    <p>An example of how static tooltips can be used in an application can be found on <a routerLink="/showcase/listview1">List View 1</a>.</p>\n</blockquote>'}});
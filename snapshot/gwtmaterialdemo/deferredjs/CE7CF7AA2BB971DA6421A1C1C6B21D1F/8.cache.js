$wnd.gwtmaterialdemo.runAsyncCallback8("function $clinit_MaterialScrollfire(){\n  $clinit_MaterialScrollfire = emptyMethod;\n  debug?injectJs(($clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer() , scrollfireDebugJs), false, true):injectJs(($clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer() , scrollfireJs), true, false);\n}\n\nfunction apply_1(element, callback){\n  $clinit_MaterialScrollfire();\n  var uid;\n  uid = $createUniqueId($doc);\n  $setId(element, uid);\n  apply_2('#' + uid, callback);\n}\n\nfunction apply_2(selector, callback){\n  $wnd.jQuery(document).ready(function(){\n    var offset = 100;\n    var callbackFn = $entry(function(){\n      callback.run();\n    }\n    );\n    $wnd.apply(selector, offset, callbackFn);\n  }\n  );\n}\n\nvar scrollfireJs;\nfunction MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1461, 1, {}, MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_36(){\n  return 'scrollfireJs';\n}\n;\n_.getText = function getText_27(){\n  return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }';\n}\n;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfireClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1', 1461);\nfunction $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer(){\n  $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer = emptyMethod;\n  scrollfireJs = new MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nvar scrollfireDebugJs;\nfunction MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1460, 1, {}, MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_37(){\n  return 'scrollfireDebugJs';\n}\n;\n_.getText = function getText_28(){\n  return 'function apply(selector, offset, callback) {\\n    var didScroll = false;\\n    var done = false;\\n    var callbacks = $.Callbacks();\\n\\n    /*callbacks.fire();*/\\n\\n    window.addEventListener(\"scroll\", function() {\\n        didScroll = true;\\n    });\\n\\n\\n\\n    // Rate limit to 100ms\\n    // Rate limit to 100ms\\n    setInterval(function() {\\n        if(didScroll) {\\n            didScroll = false;\\n\\n            var windowScroll = window.pageYOffset + window.innerHeight;\\n\\n            var currentElement = document.querySelector(selector);\\n            if ( currentElement !== null) {\\n                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;\\n\\n                if (windowScroll > (elementOffset + offset)) {\\n                    if (done !== true) {\\n                        callbacks.add(callback);\\n                        callbacks.fire();\\n                        done = true;\\n                    }\\n                }\\n            }\\n        }\\n    }, 100);\\n}';\n}\n;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfireDebugClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator/1', 1460);\nfunction $clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer(){\n  $clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer = emptyMethod;\n  scrollfireDebugJs = new MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction ScrollFirePresenter(eventBus, view, proxy){\n  $clinit_ScrollFirePresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(674, 53, $intern_53, ScrollFirePresenter);\n_.onReveal = function onReveal_14(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Scrollfire', \"Executes callback functions depending on how far into the page you've scrolled.\"));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFirePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFirePresenter', 674);\nfunction ScrollFireView(){\n  var forImage, forListItems, forToast;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_9(new ScrollFireView_BinderImpl$Widgets(this)));\n  forToast = new ScrollFireView$1;\n  forListItems = new ScrollFireView$2(this);\n  forImage = new ScrollFireView$3(this);\n  apply_1(this.panel.element, forToast);\n  apply_1(this.listContainer.element, forListItems);\n  apply_1(this.image.element, forImage);\n}\n\ndefineClass(900, 56, $intern_54, ScrollFireView);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView', 900);\nfunction ScrollFireView$1(){\n}\n\ndefineClass(901, 1, $intern_51, ScrollFireView$1);\n_.run = function run_6(){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Toasted', $intern_64, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/1', 901);\nfunction ScrollFireView$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(902, 1, $intern_51, ScrollFireView$2);\n_.run = function run_7(){\n  animate_1(($clinit_Transition() , SHOW_STAGGERED_LIST), this.this$01.listContainer, 0, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/2', 902);\nfunction ScrollFireView$3(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(903, 1, $intern_51, ScrollFireView$3);\n_.run = function run_8(){\n  animate_1(($clinit_Transition() , FADE_IN_IMAGE), this.this$01.image, 0, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/3', 903);\nfunction ScrollFireView_BinderImpl(){\n}\n\ndefineClass(1188, 1, {}, ScrollFireView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl', 1188);\nfunction $build_f_HTMLPanel1_9(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, panel, f_PrettyPre3, listContainer, image, sb, f_ListItem4, f_MaterialTitle5, f_ListItem6, f_MaterialTitle7, f_ListItem8, f_MaterialTitle9, f_ListItem10, f_MaterialTitle11;\n  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Usage') , $setText_9(f_MaterialTitle2.paragraph, '') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (panel = new MaterialPanel , this$static.owner.panel = panel , panel), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML_0(f_PrettyPre3, (sb = new StringBuilder , sb.string += '\\u2003Runnable forToast = new Runnable() { <br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialToast.fireToast(\"Toasted\");<br> \\u2003}<br> };<br><br> Runnable forListItems = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0);<br> \\u2003}<br> };<br><br> Runnable forImage = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0);<br> \\u2003}<br> };<br><br> MaterialScrollfire.apply(panel.getElement(), forToast);<br> MaterialScrollfire.apply(listContainer.getElement(), forListItems);<br> MaterialScrollfire.apply(image.getElement(), forImage);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre3.element, 'lang-java', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (listContainer = new UnorderedList , listContainer.add_0((f_ListItem4 = new ListItem , $add_11(f_ListItem4, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML(f_MaterialTitle5.header.element, 'List Item') , $setText_9(f_MaterialTitle5.paragraph, 'List Item') , f_MaterialTitle5)) , $setOpacity(f_ListItem4.element.style, 0) , f_ListItem4)) , listContainer.add_0((f_ListItem6 = new ListItem , $add_11(f_ListItem6, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML(f_MaterialTitle7.header.element, 'List Item') , $setText_9(f_MaterialTitle7.paragraph, 'List Item') , f_MaterialTitle7)) , $setOpacity(f_ListItem6.element.style, 0) , f_ListItem6)) , listContainer.add_0((f_ListItem8 = new ListItem , $add_11(f_ListItem8, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML(f_MaterialTitle9.header.element, 'List Item') , $setText_9(f_MaterialTitle9.paragraph, 'List Item') , f_MaterialTitle9)) , $setOpacity(f_ListItem8.element.style, 0) , f_ListItem8)) , listContainer.add_0((f_ListItem10 = new ListItem , $add_11(f_ListItem10, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML(f_MaterialTitle11.header.element, 'List Item') , $setText_9(f_MaterialTitle11.paragraph, 'List Item') , f_MaterialTitle11)) , $setOpacity(f_ListItem10.element.style, 0) , f_ListItem10)) , this$static.owner.listContainer = listContainer , listContainer), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (image = new MaterialImage , $setOpacity(image.element.style, 0) , $setResource_1(image, (new MaterialResources_default_InlineClientBundleGenerator , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , $setAttribute(image.element, 'data-caption', 'I love Material Design') , this$static.owner.image = image , image), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction ScrollFireView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1189, 1, {}, ScrollFireView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl/Widgets', 1189);\nfunction $html2(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$) {\n    result = new ScrollFirePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$) {\n    result = new ScrollFireView(new ScrollFireView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$;\n}\n\ndefineClass(576, 1, $intern_92);\n_.onSuccess_0 = function onSuccess_9(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(8);\n\n//# sourceURL=gwtmaterialdemo-8.js\n")

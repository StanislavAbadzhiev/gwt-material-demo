$wnd.gwtmaterialdemo.runAsyncCallback22("function HelperPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(526, 50, $intern_38, HelperPresenter);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperPresenter', 526);\nfunction HelperView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_18(new HelperView_BinderImpl$Widgets));\n}\n\ndefineClass(664, 54, $intern_39, HelperView);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView', 664);\nfunction HelperView_BinderImpl(){\n}\n\ndefineClass(854, 1, {}, HelperView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl', 854);\nfunction $build_f_HTMLPanel1_18(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialTitle3, f_MaterialPanel4, f_MaterialTitle6, f_MaterialLabel7, f_MaterialLabel8, f_MaterialLabel9, f_MaterialTitle10, f_MaterialTitle11, f_MaterialTitle12, f_MaterialTitle13, f_MaterialPanel14, f_MaterialLabel5, f_MaterialLabel15;\n  f_HTMLPanel1 = new HTMLPanel($html1_19(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Alignment') , $setText_4(f_MaterialTitle2.paragraph, 'We have easy to use addStyleNames or classnames to help you align your content.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle3 = new MaterialTitle , $setText_4(f_MaterialTitle3.paragraph, 'Vertical Align - You can easily vertically center things by adding the class valign-wrapper to the container holding the items you want to vertically align.') , f_MaterialTitle3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialPanel4 = new MaterialPanel , $add_13(f_MaterialPanel4, (f_MaterialLabel5 = new MaterialLabel , setStyleName(f_MaterialLabel5.element, 'valign', true) , setStyleName(f_MaterialLabel5.element, 'center', true) , setStyleName(f_MaterialLabel5.element, 'KVUXRGB-l-c', true) , $setTextOrHtml(f_MaterialLabel5.directionalTextHelper, 'This should be vertically aligned') , $setFontSize_0(f_MaterialLabel5.fontSizeMixin, '2em') , f_MaterialLabel5)) , setStyleName(f_MaterialPanel4.element, 'valign-wrapper', true) , setStyleName(f_MaterialPanel4.element, 'KVUXRGB-l-b', true) , f_MaterialPanel4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle6 = new MaterialTitle , $setText_4(f_MaterialTitle6.paragraph, 'Text Align - These classes are for horizontally aligning content. We have .left-align, .right-align and .center-align') , f_MaterialTitle6), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel7 = new MaterialLabel , setStyleName(f_MaterialLabel7.element, 'left-align', true) , setStyleName(f_MaterialLabel7.element, 'KVUXRGB-l-a', true) , $setTextOrHtml(f_MaterialLabel7.directionalTextHelper, 'This should be left aligned') , $setFontSize_0(f_MaterialLabel7.fontSizeMixin, '1.5em') , f_MaterialLabel7), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel8 = new MaterialLabel , setStyleName(f_MaterialLabel8.element, 'right-align', true) , setStyleName(f_MaterialLabel8.element, 'KVUXRGB-l-a', true) , $setTextOrHtml(f_MaterialLabel8.directionalTextHelper, 'This should be right aligned') , $setFontSize_0(f_MaterialLabel8.fontSizeMixin, '1.5em') , f_MaterialLabel8), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel9 = new MaterialLabel , setStyleName(f_MaterialLabel9.element, 'center-align', true) , setStyleName(f_MaterialLabel9.element, 'KVUXRGB-l-a', true) , $setTextOrHtml(f_MaterialLabel9.directionalTextHelper, 'This should be center aligned') , $setFontSize_0(f_MaterialLabel9.fontSizeMixin, '1.5em') , f_MaterialLabel9), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle10 = new MaterialTitle , $setText_4(f_MaterialTitle10.paragraph, 'Quick Floats - Quickly float things by adding the class left or right to the element. !important is used to avoid specificity issues.') , f_MaterialTitle10), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Hiding Content') , $setText_4(f_MaterialTitle11.paragraph, 'We provide easy to use classes to hide content on specific screen sizes.') , f_MaterialTitle11), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'Formatting') , $setText_4(f_MaterialTitle12.paragraph, 'These classes help format various content on your site.') , f_MaterialTitle12), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle13 = new MaterialTitle , $setText_4(f_MaterialTitle13.paragraph, 'Truncation - To truncate long lines of text in an ellipsis, add the class truncate to the tag which contains the text. See an exaple below of a header being truncated inside a card.') , f_MaterialTitle13), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialPanel14 = new MaterialPanel , $add_13(f_MaterialPanel14, (f_MaterialLabel15 = new MaterialLabel , setStyleName(f_MaterialLabel15.element, 'truncate', true) , $setTextOrHtml(f_MaterialLabel15.directionalTextHelper, 'This is an extremely long title that will be truncated') , $setFontSize_0(f_MaterialLabel15.fontSizeMixin, '2.5em') , f_MaterialLabel15)) , setStyleName(f_MaterialPanel14.element, 'KVUXRGB-l-d', true) , $setShadow(f_MaterialPanel14.shadowMixin, 1) , f_MaterialPanel14), $get_0(this$static.domId11Element));\n  return f_HTMLPanel1;\n}\n\nfunction HelperView_BinderImpl$Widgets(){\n  this.style_0 = (new HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_12);\n  $ensureInjected_17(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n}\n\ndefineClass(855, 1, {}, HelperView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl/Widgets', 855);\nfunction HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1091, 1, {}, HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_12;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1091);\nfunction $ensureInjected_17(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.KVUXRGB-l-b{height:200px;background:#e9e9e9}.KVUXRGB-l-c{width:100%}.KVUXRGB-l-a{height:auto;margin-top:10px;background:#e9e9e9}.KVUXRGB-l-d{width:50%;padding:10px}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1092, 1, {}, HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_23(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1092);\nfunction $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_12 = new HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_19(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialPanel addStyleNames=\"valign-wrapper\"&gt;\\n      &lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"valign center\" text=\"This should be vertically aligned\"/&gt;\\n      &lt;/m:MaterialPanel&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"left-align\" text=\"This should be left aligned\"/&gt;\\n      &lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"right-align\" text=\"This should be right aligned\"/&gt;\\n      &lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"center-align\" text=\"This should be center aligned\"/&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialPanel addStyleNames=\"left\"/&gt;\\n      &lt;m:MaterialPanel addStyleNames=\"right\"/&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <table class='striped'> <thead> <tr> <th><\\/th> <th>Screen Range<\\/th> <\\/tr> <\\/thead> <tbody> <tr> <td><code class='language-markup'>.hide<\\/code><\\/td> <td>Hidden for all Devices<\\/td> <\\/tr> <tr> <td><code class='language-markup'>.hide-on-small-only<\\/code><\\/td> <td>Hidden for Mobile Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>.hide-on-med-only<\\/code><\\/td> <td>Hidden for Tablet Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>.hide-on-med-and-down<\\/code><\\/td> <td>Hidden for Tablet and Below<\\/td> <\\/tr> <tr> <td><code class='language-markup'>.hide-on-med-and-up<\\/code><\\/td> <td>Hidden for Tablet and Above<\\/td> <\\/tr> <tr> <td><code class='language-markup'>.hide-on-large-only<\\/code><\\/td> <td>Hidden for Desktop Only<\\/td> <\\/tr> <\\/tbody> <\\/table> <pre>\\n      &lt;m:MaterialPanel addStyleNames=\\\"hide-on-small-only\\\"/&gt;\\n    <\\/pre> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialPanel shadow=\"1\"&gt;\\n      &lt;m:MaterialLabel text=\"This is an extremely long title that will be truncated\" addStyleNames=\"truncate\" fontSize=\"2.5em\"/&gt;\\n      &lt;/m:MaterialPanel&gt;\\n    <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$) {\n    result = new HelperPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$) {\n    result = new HelperView(new HelperView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$;\n}\n\ndefineClass(483, 1, $intern_52);\n_.onSuccess_0 = function onSuccess_21(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(22);\n\n//# sourceURL=gwtmaterialdemo-22.js\n")

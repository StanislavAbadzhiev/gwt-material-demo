$wnd.gwtmaterialdemo.runAsyncCallback25("function ThemesPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(529, 50, $intern_35, ThemesPresenter);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesPresenter', 529);\nfunction ThemesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_19(new ThemesView_BinderImpl$Widgets));\n}\n\ndefineClass(667, 54, $intern_36, ThemesView);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView', 667);\nfunction ThemesView_BinderImpl(){\n}\n\ndefineClass(861, 1, {}, ThemesView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView_BinderImpl', 861);\nfunction $build_f_HTMLPanel1_19(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialTitle3, f_MaterialImage4;\n  f_HTMLPanel1 = new HTMLPanel($html1_22(this$static.domId0, this$static.domId1, this$static.domId2).html);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Customization') , $setText_4(f_MaterialTitle2.paragraph, 'Make sure you have checkout the development plugin (GWT Material) in github or in Maven to be able to modify the theme of your GWT App by editing inside gwt/material/design/public/GwtMaterialDesign.gwt.xml. See screenshot for more details and applications') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle3 = new MaterialTitle , $setText_4(f_MaterialTitle3.paragraph, 'You can pick the built-in colors (blue, green, orange, red, yellow). Also if you want to learn more about Material Integration with SASS you can read this link http://materializecss.com/sass.html.') , f_MaterialTitle3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialImage4 = new MaterialImage , $setResource(f_MaterialImage4, (new MaterialResources_default_InlineClientBundleGenerator_0 , $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_themeInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , ic_theme)) , $setType_4(f_MaterialImage4, ($clinit_ImageType() , MATERIALBOXED)) , f_MaterialImage4), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction ThemesView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(862, 1, {}, ThemesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView_BinderImpl/Widgets', 862);\nfunction $html1_22(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$) {\n    result = new ThemesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$) {\n    result = new ThemesView(new ThemesView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$;\n}\n\ndefineClass(489, 1, $intern_49);\n_.onSuccess_0 = function onSuccess_24(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nvar ic_theme;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_themeInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_themeInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  ic_theme = new ImageResourcePrototype('ic_theme', ($clinit_UriUtils() , new SafeUriString(externalImage7)), 1137, 709);\n}\n\n$entry(onLoad_0)(25);\n\n//# sourceURL=gwtmaterialdemo-25.js\n")

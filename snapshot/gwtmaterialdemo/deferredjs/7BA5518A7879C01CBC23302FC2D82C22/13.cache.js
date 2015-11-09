$wnd.gwtmaterialdemo.runAsyncCallback13("function NavBarPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(517, 50, $intern_38, NavBarPresenter);\n_.onReveal = function onReveal_18(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('NavBar', 'The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarPresenter', 517);\nfunction NavBarView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_13(new NavBarView_BinderImpl$Widgets));\n}\n\ndefineClass(654, 54, $intern_39, NavBarView);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView', 654);\nfunction NavBarView_BinderImpl(){\n}\n\ndefineClass(825, 1, {}, NavBarView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView_BinderImpl', 825);\nfunction $build_f_HTMLPanel1_13(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialNavBar3, f_MaterialTitle12, f_MaterialNavBar13, f_MaterialTitle20, f_MaterialRow21, f_MaterialTitle25, f_MaterialRow26, f_MaterialNavBrand4, f_MaterialNavSection5, f_MaterialLink6, f_MaterialLink7, f_MaterialTooltip8, f_MaterialTooltip10, f_MaterialNavBrand14, f_MaterialNavSection15, f_MaterialTooltip16, f_MaterialTooltip18, f_MaterialImage22, f_MaterialColumn23, sb, f_MaterialImage27, f_MaterialColumn28, sb_0, f_MaterialLink9, f_MaterialLink11, f_MaterialLink17, f_MaterialLink19;\n  f_HTMLPanel1 = new HTMLPanel($html3_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Links ,Icons, and Waves') , $setText_4(f_MaterialTitle2.paragraph, 'Based on material links you can add icons, link with icons or link only and apply ripple effect by adding waves attribute.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialNavBar3 = new MaterialNavBar , $add_22(f_MaterialNavBar3, (f_MaterialNavBrand4 = new MaterialNavBrand , f_MaterialNavBrand4.div.attached || $add_13(f_MaterialNavBrand4, f_MaterialNavBrand4.div) , $setInnerText($getElement(f_MaterialNavBrand4.div), 'Title') , $setFloat(f_MaterialNavBrand4, ($clinit_Style$Float() , LEFT)) , $setAttribute(f_MaterialNavBrand4.element, 'href', '#Test') , f_MaterialNavBrand4)) , $add_22(f_MaterialNavBar3, (f_MaterialNavSection5 = new MaterialNavSection , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialLink6 = new MaterialLink , $setIconPosition(f_MaterialLink6, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink6.span_0.setText('Account') , $add_13(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor(f_MaterialLink6.colorsMixin, 'white') , $setWaves(f_MaterialLink6, ($clinit_WavesType() , LIGHT)) , $setIconType(f_MaterialLink6, ($clinit_IconType() , ACCOUNT_CIRCLE)) , f_MaterialLink6))) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialLink7 = new MaterialLink , $setIconPosition(f_MaterialLink7, LEFT_4) , f_MaterialLink7.span_0.setText('Refresh') , $add_13(f_MaterialLink7, f_MaterialLink7.span_0) , $setTextColor(f_MaterialLink7.colorsMixin, 'white') , $setWaves(f_MaterialLink7, LIGHT) , $setIconType(f_MaterialLink7, AUTORENEW) , f_MaterialLink7))) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialTooltip8 = new MaterialTooltip , $add_25(f_MaterialTooltip8, (f_MaterialLink9 = new MaterialLink , $setTextColor(f_MaterialLink9.colorsMixin, 'white') , $setWaves(f_MaterialLink9, LIGHT) , $setIconType(f_MaterialLink9, SEARCH_0) , f_MaterialLink9)) , f_MaterialTooltip8.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip8.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip8).widget)) , $add_19(f_MaterialNavSection5, new ListItem_0((f_MaterialTooltip10 = new MaterialTooltip , $add_25(f_MaterialTooltip10, (f_MaterialLink11 = new MaterialLink , $setTextColor(f_MaterialLink11.colorsMixin, 'white') , $setWaves(f_MaterialLink11, LIGHT) , $setIconType(f_MaterialLink11, MORE_VERT) , f_MaterialLink11)) , f_MaterialTooltip10.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip10.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip10).widget)) , $setFloat(f_MaterialNavSection5, RIGHT) , f_MaterialNavSection5)) , $setBackgroundColor(f_MaterialNavBar3.colorsMixin, 'blue') , f_MaterialNavBar3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'Alignment') , $setText_4(f_MaterialTitle12.paragraph, \"Add align='right' to your nav brand and align='left' to your nav section\") , f_MaterialTitle12), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialNavBar13 = new MaterialNavBar , $add_22(f_MaterialNavBar13, (f_MaterialNavBrand14 = new MaterialNavBrand , f_MaterialNavBrand14.div.attached || $add_13(f_MaterialNavBrand14, f_MaterialNavBrand14.div) , $setInnerText($getElement(f_MaterialNavBrand14.div), 'App Title') , $setFloat(f_MaterialNavBrand14, RIGHT) , $setAttribute(f_MaterialNavBrand14.element, 'href', '#Test') , f_MaterialNavBrand14)) , $add_22(f_MaterialNavBar13, (f_MaterialNavSection15 = new MaterialNavSection , $add_19(f_MaterialNavSection15, new ListItem_0((f_MaterialTooltip16 = new MaterialTooltip , $add_25(f_MaterialTooltip16, (f_MaterialLink17 = new MaterialLink , $setTextColor(f_MaterialLink17.colorsMixin, 'white') , $setIconType(f_MaterialLink17, SEARCH_0) , f_MaterialLink17)) , f_MaterialTooltip16.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip16.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip16).widget)) , $add_19(f_MaterialNavSection15, new ListItem_0((f_MaterialTooltip18 = new MaterialTooltip , $add_25(f_MaterialTooltip18, (f_MaterialLink19 = new MaterialLink , $setTextColor(f_MaterialLink19.colorsMixin, 'white') , $setIconType(f_MaterialLink19, MORE_VERT) , f_MaterialLink19)) , f_MaterialTooltip18.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip18.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip18).widget)) , $setFloat(f_MaterialNavSection15, LEFT) , f_MaterialNavSection15)) , $setBackgroundColor(f_MaterialNavBar13.colorsMixin, 'blue') , f_MaterialNavBar13), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle20.header), 'Fixed Type') , $setText_4(f_MaterialTitle20.paragraph, \"You can make your navbar fixed by adding: type='FIXED'\") , f_MaterialTitle20), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow21 = new MaterialRow , $add_13(f_MaterialRow21, (f_MaterialImage22 = new MaterialImage , $setGrid(f_MaterialImage22.gridMixin, 's12 m12 l4') , $setUrl_2(f_MaterialImage22, ($clinit_UriUtils() , new SafeUriString('https://cloud.githubusercontent.com/assets/3138071/10072886/d4bb530e-6279-11e5-93ae-e3d8622a1236.gif'))) , f_MaterialImage22)) , $add_13(f_MaterialRow21, (f_MaterialColumn23 = new MaterialColumn , $add_13(f_MaterialColumn23, new HTMLPanel((sb = new StringBuilder , sb.string += '<pre>\\n            CODE\\n          <\\/pre>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html)) , $setGrid(f_MaterialColumn23.gridMixin, 's12 m12 l8') , f_MaterialColumn23)) , f_MaterialRow21), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle25 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle25.header), 'Tall Type') , $setText_4(f_MaterialTitle25.paragraph, \"You can make your navbar fixed by adding: type='TALL'\") , f_MaterialTitle25), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow26 = new MaterialRow , $add_13(f_MaterialRow26, (f_MaterialImage27 = new MaterialImage , $setGrid(f_MaterialImage27.gridMixin, 's12 m12 l4') , $setUrl_2(f_MaterialImage27, new SafeUriString('https://cloud.githubusercontent.com/assets/3138071/10072883/d2121638-6279-11e5-8e84-5fbcec8148f5.PNG')) , f_MaterialImage27)) , $add_13(f_MaterialRow26, (f_MaterialColumn28 = new MaterialColumn , $add_13(f_MaterialColumn28, new HTMLPanel((sb_0 = new StringBuilder , sb_0.string += '<pre>\\n            CODE\\n          <\\/pre>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html)) , $setGrid(f_MaterialColumn28.gridMixin, 's12 m12 l8') , f_MaterialColumn28)) , f_MaterialRow26), $get_0(this$static.domId7Element));\n  return f_HTMLPanel1;\n}\n\nfunction NavBarView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n}\n\ndefineClass(826, 1, {}, NavBarView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView_BinderImpl/Widgets', 826);\nfunction $html3_0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$) {\n    result = new NavBarPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$) {\n    result = new NavBarView(new NavBarView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$;\n}\n\ndefineClass(465, 1, $intern_52);\n_.onSuccess_0 = function onSuccess_12(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(13);\n\n//# sourceURL=gwtmaterialdemo-13.js\n")

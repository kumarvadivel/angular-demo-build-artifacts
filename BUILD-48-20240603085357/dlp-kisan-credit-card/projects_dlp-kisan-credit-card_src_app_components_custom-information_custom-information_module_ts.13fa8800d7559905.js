(self.webpackChunkintegreat=self.webpackChunkintegreat||[]).push([["projects_dlp-kisan-credit-card_src_app_components_custom-information_custom-information_module_ts"],{30429:(Y,p,n)=>{n.r(p),n.d(p,{CustomInformationModule:()=>k});var s=n(30820),l=n(60416),e=n(15742),h=n(99104),u=n(4223),g=n(73123),w=n(17905),f=n(28499),v=n(84641),S=n(75707),C=n(8543),y=n(54219),b=n(22637);const j=o=>({"w-1000":o}),x=o=>({"mb-20":o});function I(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275element(1,"carousel",16)(2,"app-dynamic-tabs",17),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("data",t.journey.carouselBanner[t.journey.productUserType].carouselImages),e.\u0275\u0275advance(),e.\u0275\u0275property("tabsData",t.tabsData)}}function _(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275element(1,"stepper",19),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,x,t.metaConfig.showStepper)),e.\u0275\u0275advance(),e.\u0275\u0275property("stepperData",t.journey.metaData.stepperData)}}function F(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275element(1,"app-substepper",19),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,x,t.metaConfig.showSubStepper)),e.\u0275\u0275advance(),e.\u0275\u0275property("stepperData",t.journey.metaData.substepperData)}}function D(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,I,3,2,"div",3),e.\u0275\u0275elementStart(2,"div",4),e.\u0275\u0275template(3,_,2,4,"div",5),e.\u0275\u0275elementStart(4,"div",6),e.\u0275\u0275template(5,F,2,4,"div",7),e.\u0275\u0275elementStart(6,"div",8)(7,"app-section-builder",9),e.\u0275\u0275listener("status",function(r){e.\u0275\u0275restoreView(t);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.sectionBuilderEmitter(r))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div",10)(9,"span",11),e.\u0275\u0275text(10," warning "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(11," We appreciate your effort for showing interest with our banking. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",12)(13,"a",13),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.goBack())}),e.\u0275\u0275text(14,"Go Back to Home"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275element(15,"img",14),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.metaConfig.showLeftContent&&!t.commonVariableService.appLayoutConfig.mobileView),e.\u0275\u0275advance(),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(6,j,!t.metaConfig.showLeftContent||t.commonVariableService.appLayoutConfig.mobileView)),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.metaConfig.showStepper),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.metaConfig.showSubStepper),e.\u0275\u0275advance(2),e.\u0275\u0275property("config",t.config),e.\u0275\u0275advance(8),e.\u0275\u0275property("src","assets/images/page-expired.webp",e.\u0275\u0275sanitizeUrl)}}function E(o,a){1&o&&e.\u0275\u0275element(0,"spinner")}let P=(()=>{class o{constructor(t,i,r,c,m){this.commonService=t,this.commonVariableService=i,this.theme1ApiService=r,this.ArrayMethods=c,this.route=m,this.showloader=!1,this.$scope={},this.pageCode="PRODUCT_ERROR",this.journey=this.commonService.getJourney(),this.commonService.bindHeaderFooterTypes(this.pageCode),this.config=this.commonService.fetchProductPageConfig(this.journey,this.pageCode),this.metaConfig=this.commonService.fetchProductMetaConfig(this.journey,this.pageCode)}ngOnInit(){this.tabsData=this.journey.tabsData,this.dataScopeFetchFlow()}ngOnDestroy(){this.scopeSubscriber.unsubscribe()}dataScopeFetchFlow(){this.metaConfig.dataScopeFetchFlow&&this.metaConfig.dataScopeFetchFlow.length?(this.showloader=!0,this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)):this.triggerAfterScopeEffect(),this.scopeSubscriber=this.commonVariableService.scopeSubject$.subscribe(t=>{this.$scope=t,this.triggerAfterScopeEffect()})}triggerAfterScopeEffect(){this.showloader=!1,this.customInitializerWithRespectToProduct()}customInitializerWithRespectToProduct(){"LA763"==this.journey.product.productCode&&(this.formdataPrepopulationWithRespectToProduct(),this.parameterSubscriberWithRespectToProduct(),this.contentModeratorWithRespectToProduct())}formdataPrepopulationWithRespectToProduct(){"LA763"==this.journey.product.productCode&&(this.config=this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig))}parameterSubscriberWithRespectToProductSimplify(){this.route.queryParams.subscribe(t=>{t.errorCode&&(this.config[1].sectionContent.paragraphData=this.metaConfig.errorCodes[t.errorCode]?this.metaConfig.errorCodes[t.errorCode]:this.journey.localisation[t.errorCode]?this.metaConfig.errorCodes[this.journey.localisation[t.errorCode]]:t.errorCode)})}parameterSubscriberWithRespectToProduct(){"LA763"==this.journey.product.productCode&&this.parameterSubscriberWithRespectToProductSimplify()}contentModeratorWithRespectToProduct(){"LA763"==this.journey.product.productCode&&(this.config=this.commonService.pageSectionContentModeration(this.config,{$scope:{...this.$scope},journey:{...this.journey},metaConfig:{...this.metaConfig}}))}continue(){this.submitValidationForProduct()}ContinueButtonStatus(){if("LA763"==this.journey.product.productCode)return this.commonService.SectionMandatoryValidationSystem(this.config)}submitValidationForProductSimply(){this.journey=this.commonService.getJourney(),this.commonService.SectionValidationSystem(this.config)&&(this.commonVariableService.globalLoaderState=!0,this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode),this.journey=this.commonService.getJourney(),this.formSubmitFlow())}submitValidationForProduct(){"LA763"==this.journey.product.productCode&&this.submitValidationForProductSimply()}formSubmitFlow(){this.journey=this.commonService.getJourney(),this.metaConfig.formSubmitFlow?(this.commonVariableService.globalLoaderState=!0,this.commonService.setJourney(this.journey),this.metaConfig.formSubmitFlow.length?this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope):(this.commonVariableService.globalLoaderState=!0,this.commonService.proceedJourney(this.pageCode,void 0,this.config))):(this.commonVariableService.globalLoaderState=!0,this.commonService.proceedJourney(this.pageCode,void 0,this.config))}goBack(){this.commonService.flushJourney()}static#e=this.\u0275fac=function(i){return new(i||o)(e.\u0275\u0275directiveInject(h.I),e.\u0275\u0275directiveInject(u.J),e.\u0275\u0275directiveInject(g.G),e.\u0275\u0275directiveInject(w.P),e.\u0275\u0275directiveInject(l.ActivatedRoute))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-product-error"]],decls:2,vars:2,consts:[["class","col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 commonStyle  brand-layout display-flex contact-branch-page-padding",4,"ngIf"],[4,"ngIf"],[1,"col-xxl-12","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","commonStyle","brand-layout","display-flex","contact-branch-page-padding"],["class","col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 float-left mobileWidt pl-0 pr-0 commonStyle",4,"ngIf"],[1,"col-lg-8","col-md-8","col-sm-12","col-12","float-left","mobileWidt","commonStyle","main-cnt-pad","w-50",3,"ngClass"],["class","w-100  pl-0 pr-0",3,"ngClass",4,"ngIf"],[1,"containerscroll"],["class","w-100",3,"ngClass",4,"ngIf"],[1,"w-100","mb-15"],[3,"status","config"],[1,"summary-error","mt-20"],[1,"material-symbols-outlined"],[1,"mt-50","link-space"],[1,"underscore-orange","active-icon-red",3,"click"],["alt","",1,"exp-img","steppermobileNone",3,"src"],[1,"col-xxl-4","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-xs-12","float-left","mobileWidt","pl-0","pr-0","commonStyle"],[3,"data"],[3,"tabsData"],[1,"w-100","pl-0","pr-0",3,"ngClass"],[3,"stepperData"],[1,"w-100",3,"ngClass"]],template:function(i,r){1&i&&e.\u0275\u0275template(0,D,16,8,"div",0)(1,E,1,0,"spinner",1),2&i&&(e.\u0275\u0275property("ngIf",!r.showloader),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",r.showloader))},dependencies:[s.NgClass,s.NgIf,f.t,v.g,S.d,C.K,y.D,b.d],encapsulation:2})}return o})();var V=n(4991),T=n(98483);const L=o=>({"w-100":o}),R=o=>({"mb-30":o}),$=o=>({"mb-15":o});function U(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",11),e.\u0275\u0275element(1,"carousel",12)(2,"app-dynamic-tabs",13),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("data",t.journey.carouselBanner[t.journey.productUserType].carouselImages),e.\u0275\u0275advance(),e.\u0275\u0275property("tabsData",t.tabsData)}}function A(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275element(1,"stepper",15),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,R,t.metaConfig.showStepper)),e.\u0275\u0275advance(),e.\u0275\u0275property("stepperData",t.journey.metaData.stepperData)}}function W(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275element(1,"app-substepper",15),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,$,t.metaConfig.showSubStepper)),e.\u0275\u0275advance(),e.\u0275\u0275property("stepperData",t.journey.metaData.substepperData)}}function J(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",26),e.\u0275\u0275element(1,"img",27),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("src","../../../assets/icons/tick.png",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate1(" ",t.branchConfig.status," ")}}function M(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,J,3,2,"div",17),e.\u0275\u0275elementStart(2,"div",18)(3,"div",19),e.\u0275\u0275text(4," Your branch details "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",20)(6,"div",21),e.\u0275\u0275element(7,"img",22),e.\u0275\u0275elementStart(8,"div",23),e.\u0275\u0275text(9),e.\u0275\u0275elementStart(10,"div",24)(11,"span",25),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd()()()()()()()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.branchConfig.status),e.\u0275\u0275advance(6),e.\u0275\u0275property("src","../../../assets/icons/building.png",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",t.branchConfig.branchDetails.name," "),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.branchConfig.branchDetails.address)}}function N(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,U,3,2,"div",3),e.\u0275\u0275elementStart(2,"div",4),e.\u0275\u0275template(3,A,2,4,"div",5),e.\u0275\u0275elementStart(4,"div",6),e.\u0275\u0275template(5,W,2,4,"div",7),e.\u0275\u0275elementStart(6,"div",8),e.\u0275\u0275element(7,"app-section-builder",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(8,M,13,4,"div",1),e.\u0275\u0275elementStart(9,"div",8)(10,"button",10),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.continue())}),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd()()()()()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.metaConfig.showLeftContent&&!t.commonVariableService.appLayoutConfig.mobileView),e.\u0275\u0275advance(),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,L,!t.metaConfig.showLeftContent||t.commonVariableService.appLayoutConfig.mobileView)),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.metaConfig.showStepper),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.metaConfig.showSubStepper),e.\u0275\u0275advance(2),e.\u0275\u0275property("config",t.config),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.metaConfig.showBranchSection),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",t.ContinueButtonStatus()),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate(t.metaConfig.fieldLabel)}}function O(o,a){1&o&&e.\u0275\u0275element(0,"spinner")}const B=[{path:"product-error",component:P},{path:"esign",component:(()=>{class o{constructor(t,i,r,c,m,d,K){this.commonService=t,this.theme1ApiService=i,this.commonVariableService=r,this.sharedService=c,this.environmentService=m,this.route=d,this.router=K,this.showloader=!1,this.showSubmit=!0,this.pageCode="ESIGN",this.journey=this.commonService.getJourney(),this.commonService.bindHeaderFooterTypes(this.pageCode),this.config=this.commonService.fetchProductPageConfig(this.journey,this.pageCode),this.metaConfig=this.commonService.fetchProductMetaConfig(this.journey,this.pageCode),this.branchConfig=this.metaConfig.branchConfig}ngOnInit(){this.tabsData=this.journey.tabsData,this.dataScopeFetchFlow()}ngOnDestroy(){this.scopeSubscriber.unsubscribe()}dataScopeFetchFlow(){this.metaConfig.dataScopeFetchFlow?.length?(this.showloader=!0,this.commonService.fetchDataScopeData(this.metaConfig.dataScopeFetchFlow[0],this.metaConfig.dataScopeFetchFlow.length,0,{},this.metaConfig.dataScopeFetchFlow,this.config,this.pageCode)):(this.$scope={},this.triggerAfterScopeEffect()),this.scopeSubscriber=this.commonVariableService.scopeSubject$.subscribe(t=>{this.$scope=t||{},this.triggerAfterScopeEffect()})}triggerAfterScopeEffect(){this.showloader=!1,this.customInitializerWithRespectToProduct()}customInitializerWithRespectToProduct(){this.formdataPrepopulationWithRespectToProduct(),this.contentModeratorWithRespectToProduct()}formdataPrepopulationWithRespectToProduct(){this.branchConfig.branchDetails.address=`${this.$scope.fetchLoanDetails.userHierarchyUnit.addressAssigned.line1Value}${this.$scope.fetchLoanDetails.userHierarchyUnit.addressAssigned.cityValue},${this.$scope.fetchLoanDetails.userHierarchyUnit.addressAssigned.stateValue},${this.$scope.fetchLoanDetails.userHierarchyUnit.addressAssigned.zipCodeValue}`,this.config=this.commonService.pageSectionContentModeration(this.config,{$scope:{...this.$scope},journey:{...this.journey},metaConfig:{...this.metaConfig}}),this.config=this.commonService.formDataEditDataPopulator(this.config,{...this.$scope,...this.journey},this.metaConfig)}contentModeratorWithRespectToProduct(){this.config=this.commonService.pageSectionContentModeration(this.config,{$scope:{...this.$scope},journey:{...this.journey},metaConfig:{...this.metaConfig}})}continue(){this.submitValidationForProduct()}ContinueButtonStatus(){return this.commonService.SectionMandatoryValidationSystem(this.config)}submitValidationForProduct(){this.journey=this.commonService.getJourney(),this.commonService.SectionValidationSystem(this.config)&&(this.commonVariableService.globalLoaderState=!0,this.commonService.saveSectionFormDataToJourney(this.config,this.pageCode),this.journey=this.commonService.getJourney(),this.formSubmitFlow())}formSubmitFlow(){this.journey=this.commonService.getJourney(),this.metaConfig.formSubmitFlow?(this.commonVariableService.globalLoaderState=!0,this.commonService.setJourney(this.journey),this.metaConfig.formSubmitFlow.length?this.commonService.apiCall(this.metaConfig.formSubmitFlow[0],0,this.metaConfig.formSubmitFlow.length,this.pageCode,this.metaConfig,this.config,this.$scope):(this.commonVariableService.globalLoaderState=!0,this.commonService.proceedJourney(this.pageCode,void 0,this.config))):(this.commonVariableService.globalLoaderState=!0,this.commonService.proceedJourney(this.pageCode,void 0,this.config))}initiateEsign(t){let i={access_token:this.journey.product.access_token,loanUuid:this.journey.product.loanUuid,contractUuid:this.$scope.fetchContracts.activeContracts[0].contractUuid,successUrl:this.returnPLUrl(t)+"?eSignStatus=success",errorUrl:this.returnPLUrl(t)+"?eSignStatus=error",f2f:!0};this.theme1ApiService.initiateEsign(i).then(r=>{this.journey.metaData.capturedData.ESIGN=r,this.commonService.setJourney(this.journey);let c=window.atob(r.docHtml),m=new Blob([c],{type:"text/html"}),d=URL.createObjectURL(m);window.open(d,"_self"),this.commonVariableService.globalLoaderState=!1},r=>{this.errorNavigate()})}readOrigin(){return window.origin.includes("localhost")?window.origin+"/#":window.origin+"kisan-credit-card/#"}returnPLUrl(t){return this.readOrigin()+this.router.url.split("?")[0]}acceptContract(){this.theme1ApiService.acceptContract({access_token:this.journey.product.access_token,loanId:this.journey.product.loanUuid,contractId:this.$scope.fetchContracts.activeContracts[0].contractUuid,activityStatus:"acceptContract"}).then(i=>{this.$scope.acceptContract=i,this.initiateEsign("personal-loan-express")},i=>{this.errorNavigate()})}errorNavigate(){this.commonService.NavigateJourney("PRODUCT_ERROR"),this.commonVariableService.globalLoaderState=!1,this.showloader=!1}static#e=this.\u0275fac=function(i){return new(i||o)(e.\u0275\u0275directiveInject(h.I),e.\u0275\u0275directiveInject(g.G),e.\u0275\u0275directiveInject(u.J),e.\u0275\u0275directiveInject(V.d),e.\u0275\u0275directiveInject(T.v),e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(l.Router))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-e-sign"]],decls:2,vars:2,consts:[["class","col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  integreat-layout  commonStyle",4,"ngIf"],[4,"ngIf"],[1,"col-xxl-12","col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","integreat-layout","commonStyle"],["class","col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 float-left mobileWidt commonStyle",4,"ngIf"],[1,"col-xxl-8","col-xl-8","col-lg-8","col-md-8","col-sm-12","col-12","commonStyle","mobileWidt","main-cnt-pad",3,"ngClass"],["class","w-100  pl-0 pr-0",3,"ngClass",4,"ngIf"],[1,"containerscroll"],["class","w-100",3,"ngClass",4,"ngIf"],[1,"w-100","mb-15"],[3,"config"],[1,"btn-orange","mt-4","mob-w-100",3,"click","disabled"],[1,"col-xxl-4","col-xl-4","col-lg-4","col-md-4","col-sm-12","col-xs-12","float-left","mobileWidt","commonStyle"],[3,"data"],[3,"tabsData"],[1,"w-100","pl-0","pr-0",3,"ngClass"],[3,"stepperData"],[1,"w-100",3,"ngClass"],["class","summary-status  ng-star-inserted",4,"ngIf"],[1,"row"],[1,"form-label-lg","mt-4"],[1,"medium"],[1,"mb-0","form-label-lg","d-flex","align-items-start"],["alt","",3,"src"],[1,"details-content"],[1,"address-content"],[1,"common-info"],[1,"summary-status","ng-star-inserted"],["alt","",1,"me-2",3,"src"]],template:function(i,r){1&i&&e.\u0275\u0275template(0,N,12,10,"div",0)(1,O,1,0,"spinner",1),2&i&&(e.\u0275\u0275property("ngIf",!r.showloader),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",r.showloader))},dependencies:[s.NgClass,s.NgIf,f.t,v.g,S.d,C.K,y.D,b.d],encapsulation:2})}return o})()}];let H=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:o});static#o=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.RouterModule.forChild(B),l.RouterModule]})}return o})();var z=n(60946),G=n(6836);let k=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:o});static#o=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.CommonModule,z.x,G.J,H]})}return o})()}}]);
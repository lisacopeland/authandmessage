/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './authentication.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/router/src/directives/router_link';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/router/src/directives/router_outlet';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from '@angular/core/src/security';
var renderType_AuthenticationComponent_Host:import0.RenderComponentType = (null as any);
class _View_AuthenticationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AuthenticationComponent_0_4:import3.AuthenticationComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent_Host0,renderType_AuthenticationComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-authentication',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AuthenticationComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AuthenticationComponent_0_4 = new import3.AuthenticationComponent(this.parentInjector.get(import8.AuthService));
    this._appEl_0.initComponent(this._AuthenticationComponent_0_4,[],compView_0);
    compView_0.create(this._AuthenticationComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AuthenticationComponent) && (0 === requestNodeIndex))) { return this._AuthenticationComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AuthenticationComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AuthenticationComponent_Host === (null as any))) { (renderType_AuthenticationComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_AuthenticationComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AuthenticationComponentNgFactory:import10.ComponentFactory<import3.AuthenticationComponent> = new import10.ComponentFactory<import3.AuthenticationComponent>('app-authentication',viewFactory_AuthenticationComponent_Host0,import3.AuthenticationComponent);
const styles_AuthenticationComponent:any[] = [];
var renderType_AuthenticationComponent:import0.RenderComponentType = (null as any);
class _View_AuthenticationComponent0 extends import1.AppView<import3.AuthenticationComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkActive_7_3:import11.RouterLinkActive;
  _query_RouterLink_7_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import12.QueryList<any>;
  _el_8:any;
  _RouterLinkWithHref_8_3:import13.RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import14.NgIf;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import14.NgIf;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _RouterOutlet_20_5:import15.RouterOutlet;
  _text_21:any;
  _text_22:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent0,renderType_AuthenticationComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'header',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','row spacing');
    this._text_2 = this.renderer.createText(this._el_1,'\n			',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'nav',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','col-md-8 col-md-offset-2');
    this._text_4 = this.renderer.createText(this._el_3,'\n				',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','nav nav-tabs');
    this._text_6 = this.renderer.createText(this._el_5,'\n					',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'li',(null as any));
    this.renderer.setElementAttribute(this._el_7,'routerLinkActive','active');
    this._RouterLinkActive_7_3 = new import11.RouterLinkActive(this.parentInjector.get(import16.Router),new import17.ElementRef(this._el_7),this.renderer);
    this._query_RouterLink_7_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import12.QueryList<any>();
    this._el_8 = this.renderer.createElement(this._el_7,'a',(null as any));
    this._RouterLinkWithHref_8_3 = new import13.RouterLinkWithHref(this.parentInjector.get(import16.Router),this.parentInjector.get(import18.ActivatedRoute),this.parentInjector.get(import19.LocationStrategy));
    this._text_9 = this.renderer.createText(this._el_8,'Signup',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n					',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_11 = new import2.AppElement(11,5,this,this._anchor_11);
    this._TemplateRef_11_5 = new import20.TemplateRef_(this._appEl_11,viewFactory_AuthenticationComponent1);
    this._NgIf_11_6 = new import14.NgIf(this._appEl_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_5,'\n					',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_13 = new import2.AppElement(13,5,this,this._anchor_13);
    this._TemplateRef_13_5 = new import20.TemplateRef_(this._appEl_13,viewFactory_AuthenticationComponent2);
    this._NgIf_13_6 = new import14.NgIf(this._appEl_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_5,'\n				',(null as any));
    this._text_15 = this.renderer.createText(this._el_3,'\n			',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n		',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_18 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','row spacing');
    this._text_19 = this.renderer.createText(this._el_18,'\n			',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'router-outlet',(null as any));
    this._appEl_20 = new import2.AppElement(20,18,this,this._el_20);
    this._RouterOutlet_20_5 = new import15.RouterOutlet(this.parentInjector.get(import21.RouterOutletMap),this._appEl_20.vcRef,this.parentInjector.get(import22.ComponentFactoryResolver),(null as any));
    this._text_21 = this.renderer.createText(this._el_18,'\n		',(null as any));
    this._text_22 = this.renderer.createText(parentRenderNode,'\n	',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3; }
    if (((token === import11.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_7_3; }
    if (((token === import20.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import14.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6; }
    if (((token === import20.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import14.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6; }
    if (((token === import15.RouterOutlet) && (20 === requestNodeIndex))) { return this._RouterOutlet_20_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_7_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_7_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('signup');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_8_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_8_3.ngOnChanges(changes); }
    const currVal_4:boolean = !this.context.isLoggedIn();
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_11_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.isLoggedIn();
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_13_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset([]);
        this._RouterLinkActive_7_3.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_8_3]);
        this._RouterLinkActive_7_3.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_8_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_8,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkActive_7_3.ngOnDestroy();
    this._RouterOutlet_20_5.ngOnDestroy();
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_8_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AuthenticationComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AuthenticationComponent> {
  if ((renderType_AuthenticationComponent === (null as any))) { (renderType_AuthenticationComponent = viewUtils.createRenderComponentType('C:/Users/lisac/Documents/Angular2andNodejs/seed-project/assets/app/auth/authentication.component.ts class AuthenticationComponent - inline template',0,import9.ViewEncapsulation.None,styles_AuthenticationComponent,{})); }
  return new _View_AuthenticationComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AuthenticationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import11.RouterLinkActive;
  _query_RouterLink_0_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import12.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import13.RouterLinkWithHref;
  _text_2:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent1,renderType_AuthenticationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'routerLinkActive','active');
    this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router),new import17.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import12.QueryList<any>();
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_2 = this.renderer.createText(this._el_1,'Signin',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3; }
    if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_0_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('signin');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_1_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_1_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset([]);
        this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
        this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_1_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_1,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_1_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AuthenticationComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AuthenticationComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_AuthenticationComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import11.RouterLinkActive;
  _query_RouterLink_0_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import12.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import13.RouterLinkWithHref;
  _text_2:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent2,renderType_AuthenticationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'routerLinkActive','active');
    this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router),new import17.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import12.QueryList<any>();
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_2 = this.renderer.createText(this._el_1,'Logout',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3; }
    if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_0_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('logout');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_1_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_1_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset([]);
        this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
        this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_1_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_1,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_1_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AuthenticationComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AuthenticationComponent2(viewUtils,parentInjector,declarationEl);
}
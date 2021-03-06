/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message-input.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/forms/src/directives/ng_form';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/forms/src/directives/default_value_accessor';
import * as import14 from '@angular/forms/src/directives/validators';
import * as import15 from '@angular/forms/src/directives/ng_model';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/forms/src/validators';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '@angular/forms/src/directives/control_container';
var renderType_MessageInputComponent_Host = null;
var _View_MessageInputComponent_Host0 = (function (_super) {
    __extends(_View_MessageInputComponent_Host0, _super);
    function _View_MessageInputComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageInputComponent_Host0, renderType_MessageInputComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageInputComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-message-input', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MessageInputComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MessageInputComponent_0_4 = new import3.MessageInputComponent(this.parentInjector.get(import8.MessageService));
        this._appEl_0.initComponent(this._MessageInputComponent_0_4, [], compView_0);
        compView_0.create(this._MessageInputComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MessageInputComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MessageInputComponent) && (0 === requestNodeIndex))) {
            return this._MessageInputComponent_0_4;
        }
        return notFoundResult;
    };
    _View_MessageInputComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MessageInputComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessageInputComponent_Host0;
}(import1.AppView));
function viewFactory_MessageInputComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageInputComponent_Host === null)) {
        (renderType_MessageInputComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_MessageInputComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MessageInputComponentNgFactory = new import10.ComponentFactory('app-message-input', viewFactory_MessageInputComponent_Host0, import3.MessageInputComponent);
var styles_MessageInputComponent = [];
var renderType_MessageInputComponent = null;
var _View_MessageInputComponent0 = (function (_super) {
    __extends(_View_MessageInputComponent0, _super);
    function _View_MessageInputComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageInputComponent0, renderType_MessageInputComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageInputComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'col-md-8 col-md-offset-2');
        this._text_2 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'form', null);
        this._NgForm_3_3 = new import11.NgForm(null, null);
        this._ControlContainer_3_4 = this._NgForm_3_3;
        this._NgControlStatusGroup_3_5 = new import12.NgControlStatusGroup(this._ControlContainer_3_4);
        this._text_4 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'form-group');
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'label', null);
        this.renderer.setElementAttribute(this._el_7, 'for', 'content');
        this._text_8 = this.renderer.createText(this._el_7, 'Content', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_10 = this.renderer.createElement(this._el_5, 'input', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_10, 'id', 'content');
        this.renderer.setElementAttribute(this._el_10, 'name', 'content');
        this.renderer.setElementAttribute(this._el_10, 'required', '');
        this.renderer.setElementAttribute(this._el_10, 'type', 'text');
        this._DefaultValueAccessor_10_3 = new import13.DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import14.RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3];
        this._NgModel_10_7 = new import15.NgModel(this._ControlContainer_3_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7;
        this._NgControlStatus_10_9 = new import12.NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_12 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_13 = this.renderer.createElement(this._el_3, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'btn btn-danger');
        this.renderer.setElementAttribute(this._el_13, 'type', 'button');
        this._text_14 = this.renderer.createText(this._el_13, 'Clear', null);
        this._text_15 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_16 = this.renderer.createElement(this._el_3, 'button', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_16, 'type', 'submit');
        this._text_17 = this.renderer.createText(this._el_16, 'Save', null);
        this._text_18 = this.renderer.createText(this._el_3, '\n	', null);
        this._text_19 = this.renderer.createText(this._el_1, '\n', null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_3_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_3, 'submit', this.eventHandler(this._handle_submit_3_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_3, 'reset', this.eventHandler(this._handle_reset_3_2.bind(this)));
        var subscription_0 = this._NgForm_3_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_3_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_10, 'input', this.eventHandler(this._handle_input_10_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_10, 'blur', this.eventHandler(this._handle_blur_10_1.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ], [subscription_0]);
        return null;
    };
    _View_MessageInputComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3;
        }
        if (((token === import14.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4;
        }
        if (((token === import17.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import15.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7;
        }
        if (((token === import19.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import12.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9;
        }
        if (((token === import11.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._NgForm_3_3;
        }
        if (((token === import20.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._ControlContainer_3_4;
        }
        if (((token === import12.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._NgControlStatusGroup_3_5;
        }
        return notFoundResult;
    };
    _View_MessageInputComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_11 = '';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._RequiredValidator_10_4.required = currVal_11;
            this._expr_11 = currVal_11;
        }
        changes = null;
        var currVal_13 = 'content';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._NgModel_10_7.name = currVal_13;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_13, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = ((this.context.message == null) ? null : this.context.message.content);
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._NgModel_10_7.model = currVal_14;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_14, currVal_14);
            this._expr_14 = currVal_14;
        }
        if ((changes !== null)) {
            this._NgModel_10_7.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._NgControlStatusGroup_3_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_3, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatusGroup_3_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_3, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_3_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_3, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_3_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_3, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_3_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_3, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_3_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_3, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_12 = (this._RequiredValidator_10_4.required ? '' : null);
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_10, 'required', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_15 = this._NgControlStatus_10_9.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_10, 'ng-untouched', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_10_9.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_10, 'ng-touched', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_10_9.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_10, 'ng-pristine', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_10_9.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_10, 'ng-dirty', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_10_9.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_10, 'ng-valid', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_10_9.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_10, 'ng-invalid', currVal_20);
            this._expr_20 = currVal_20;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MessageInputComponent0.prototype.destroyInternal = function () {
        this._NgModel_10_7.ngOnDestroy();
    };
    _View_MessageInputComponent0.prototype._handle_ngSubmit_3_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit(this._NgForm_3_3) !== false);
        return (true && pd_0);
    };
    _View_MessageInputComponent0.prototype._handle_submit_3_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_3_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_MessageInputComponent0.prototype._handle_reset_3_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_3_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_MessageInputComponent0.prototype._handle_input_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_10_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_MessageInputComponent0.prototype._handle_blur_10_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_10_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_MessageInputComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onClear(this._NgForm_3_3) !== false);
        return (true && pd_0);
    };
    return _View_MessageInputComponent0;
}(import1.AppView));
export function viewFactory_MessageInputComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageInputComponent === null)) {
        (renderType_MessageInputComponent = viewUtils.createRenderComponentType('C:/Users/lisac/Documents/Angular2andNodejs/seed-project/assets/app/messages/message-input.component.html', 0, import9.ViewEncapsulation.None, styles_MessageInputComponent, {}));
    }
    return new _View_MessageInputComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=message-input.component.ngfactory.js.map
import { Component } from '@angular/core';
import { ErrorService } from './error.service';
export var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-error',
                    templateUrl: './error.component.html',
                    styles: ["\n\t\t.backdrop {\n\t\t\tbackground-color: rgba(0,0,0,0.6);\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100vh;\n\t\t}\n\t"]
                },] },
    ];
    /** @nocollapse */
    ErrorComponent.ctorParameters = [
        { type: ErrorService, },
    ];
    return ErrorComponent;
}());
//# sourceMappingURL=error.component.js.map
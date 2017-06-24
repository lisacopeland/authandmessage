import { Component } from '@angular/core';
export var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n\t\t<header class=\"row\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messenger</a></li>\n\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Authentication</a></li>\n\t\t\t\t</ul>\t\n\t\t\t</nav>\n\t\t</header>\n\t"
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [];
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map
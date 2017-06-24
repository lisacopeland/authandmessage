import { Component } from '@angular/core';
import { AuthService } from './auth.service';
export var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    template: "\n\t\t<header class=\"row spacing\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n\t\t\t\t\t<li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n\t\t\t\t\t<li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t<div class=\"row spacing\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return AuthenticationComponent;
}());
//# sourceMappingURL=authentication.component.js.map
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
// Routes are relative to "/auth"
var auth_routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var AuthRouting = RouterModule.forChild(auth_routes);
//# sourceMappingURL=auth.routing.js.map
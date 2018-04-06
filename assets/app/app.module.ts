import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { AuthService } from "./auth/auth.service";
import { MessageModule } from "./messages/message.module";
import { AuthModule } from "./auth/auth.module";

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, routing, HttpModule, MessageModule, AuthModule],
  bootstrap: [AppComponent],
  providers: [AuthService, ErrorService]
})
export class AppModule {}

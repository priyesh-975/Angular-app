import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import "@angular/compiler";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorModuleComponent } from './error-module/error-module.component';
import{FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendserviceService } from './service/data/backendservice.service';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterService } from './service/http-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorModuleComponent,
    ListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [ {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterService,multi:true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

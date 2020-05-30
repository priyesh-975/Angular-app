import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorModuleComponent } from './error-module/error-module.component';
import { ListComponent } from './list/list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './service/router-guard.service';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [
  {path:'', component:LoginComponent},//making the loginComponent first component
  {path:'login', component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouterGuardService]},
  {path:'list',component:ListComponent ,canActivate:[RouterGuardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RouterGuardService]},
  {path:'todo/:id',component:TodoComponent, canActivate:[RouterGuardService]},
  {path:'**',component:ErrorModuleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

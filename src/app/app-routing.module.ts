import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PythonComponent } from './python/python.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { RectjsComponent } from './rectjs/rectjs.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PassresetComponent } from './passreset/passreset.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'passreset', component: PassresetComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'quizpage',
    component: QuizpageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'python', pathMatch: 'full' },
      { path: 'python', component: PythonComponent },
      { path: 'javascript', component: JavascriptComponent },
      { path: 'rectjs', component: RectjsComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { PythonComponent } from './python/python.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { RectjsComponent } from './rectjs/rectjs.component';
import { QuizdbComponent } from './quizdb/quizdb.component';
import { AuthGuard } from './auth.guard';
import { CertificateComponent } from './certificate/certificate.component';
import { ProfileComponent } from './profile/profile.component';
import { PassresetComponent } from './passreset/passreset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizpageComponent,
    RegistrationComponent,
    AboutComponent,
    PythonComponent,
    JavascriptComponent,
    RectjsComponent,
    QuizdbComponent,
    CertificateComponent,
    ProfileComponent,
    PassresetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

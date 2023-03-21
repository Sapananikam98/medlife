import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNfoundComponent } from './components/page-nfound/page-nfound.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNfoundComponent,
    SignInComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignupComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNfoundComponent } from './components/page-nfound/page-nfound.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

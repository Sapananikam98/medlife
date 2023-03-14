import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeeComponent } from './components/homee/homee.component';
import { PageNfoundComponent } from './core/components/page-nfound/page-nfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"homee",component:HomeeComponent},
  {path:"",redirectTo:"/homee",pathMatch:'full'},
  {path:"**",component:PageNfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

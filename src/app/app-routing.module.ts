import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeeComponent } from './components/homee/homee.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsCategoryComponent } from './components/top-deals-category/top-deals-category.component';
import { PageNfoundComponent } from './core/components/page-nfound/page-nfound.component';


const routes: Routes = [
  {path:"homee",component:HomeeComponent},
  {path:"medicine-home",component:MedicineHomeComponent},
  {path:"top-deals-category",component:TopDealsCategoryComponent},
  {path:"",redirectTo:"/homee",pathMatch:'full'},
  {path:"**",component:PageNfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

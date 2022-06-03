import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoDetailsComponent } from './components/moto-details/moto-details.component';
import { MotoMarqueComponent } from './components/moto-marque/moto-marque.component';
import { MotoTypeComponent } from './components/moto-type/moto-type.component';
import { MotosPharesComponent } from './components/motos-phares/motos-phares.component';

const routes: Routes = [
  {path:"",component:MotosPharesComponent},
  {path:"types",component:MotoTypeComponent},
  {path:"marques",component:MotoMarqueComponent},
  {path:":id",component:MotoDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

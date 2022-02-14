import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BeneficiarioComponent } from "./pages/beneficiario/beneficiario.component";
import { MunicipioComponent } from "./pages/municipio/municipio.component";

const routes: Routes = [
  { 
    path: 'beneficiario', 
    component: BeneficiarioComponent
  },
  { 
    path: 'municipio', 
    component: MunicipioComponent
  },
  { 
    path: '', 
    redirectTo: '/beneficiario', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/beneficiario', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

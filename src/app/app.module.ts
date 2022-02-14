import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from "ngx-bootstrap/accordion";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BeneficiarioComponent } from './pages/beneficiario/beneficiario.component';
import { MunicipioComponent } from './pages/municipio/municipio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCepComponent } from './components/search/search-cep/search-cep.component';
import { SearchLogradouroComponent } from './components/search/search-logradouro/search-logradouro.component';
import { SearchCpfNisComponent } from './components/search/search-cpf-nis/search-cpf-nis.component';


@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent,
    MunicipioComponent,
    NavbarComponent,
    SearchComponent,
    SearchCepComponent,
    SearchLogradouroComponent,
    SearchCpfNisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

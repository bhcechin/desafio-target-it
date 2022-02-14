import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cep } from "../../interfaces/cep";

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public getCepInfo(cep: string): Observable<Cep> {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    return this.http.get<Cep>(url);
  }

  public getCepInfoWithLogradouro(cidade: string, uf: string, logradouro: string) {
    
  }
}
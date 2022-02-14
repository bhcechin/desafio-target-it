import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from 'src/app/interfaces/municipio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  public getMunicipioInfo(ibge: string, mes: string, ano: string): Observable<Municipio[]> {
    // na api real provavelmente aplica como se fosse data após esse periodo
    // fazer no json-server?
    let mesAno = `${ano}-${mes}-14`;

    let url = `http://localhost:3000/municipios?municipio.codigoIBGE=${ibge}&dataReferencia=${mesAno}`;

    return this.http.get<Municipio[]>(url);
  }
}

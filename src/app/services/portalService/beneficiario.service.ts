import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiario } from 'src/app/interfaces/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  constructor(private http: HttpClient) { }

  public getbeneficiarioInfo(ibge: string, mes: string, ano: string): Observable<Beneficiario[]> {
    let mesAno = ano.concat(mes);
    let url = `http://localhost:3000/beneficiarios?municipio.codigoIBGE=${ibge}&mesDisponibilizacao=${mesAno}`;

    return this.http.get<Beneficiario[]>(url);
  }

  public getbeneficiarioInfoWithCpfNis(cpfNis: string, cpfNisResponsavel: string): Observable<Beneficiario[]> {
    cpfNis = cpfNis.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpfNisResponsavel = cpfNisResponsavel.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    let url = `http://localhost:3000/beneficiarios?beneficiario.cpfFormatado=${cpfNis}&responsavelAuxilioEmergencial.cpfFormatado=${cpfNisResponsavel}`;

    return this.http.get<Beneficiario[]>(url);
  }
}

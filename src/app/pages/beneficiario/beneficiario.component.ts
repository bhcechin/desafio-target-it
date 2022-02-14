import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cep } from '../../interfaces/cep';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss']
})
export class BeneficiarioComponent implements OnInit {

  cepInfo: Cep = {};
  ceps: Cep[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // userDetails(id: number) {
  //   this.router.navigate(['users', id]);
  //   console.log(id);

  // }
 
  getCepInfo(cepInfo: Cep) {
    this.cepInfo = cepInfo;
  }

}

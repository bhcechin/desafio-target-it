import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Cep } from '../../interfaces/cep';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss']
})
export class BeneficiarioComponent implements OnInit {

  beneInfo: Beneficiario[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // userDetails(id: number) {
  //   this.router.navigate(['users', id]);
  //   console.log(id);

  // }
 
  getBeneficiarioInfo(beneInfo: Beneficiario[]) {
    this.beneInfo = beneInfo;
  }
}

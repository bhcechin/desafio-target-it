import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/interfaces/cep';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss']
})
export class MunicipioComponent implements OnInit {

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

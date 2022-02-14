import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from 'src/app/interfaces/municipio';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss']
})
export class MunicipioComponent implements OnInit {

  muniInfo: Municipio[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // userDetails(id: number) {
  //   this.router.navigate(['users', id]);
  //   console.log(id);

  // }
 
  getMunicipioInfo(muniInfo: Municipio[]) {
    this.muniInfo = muniInfo;
  }
}

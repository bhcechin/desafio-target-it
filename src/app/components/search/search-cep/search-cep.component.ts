import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Cep } from 'src/app/interfaces/cep';
import { Municipio } from 'src/app/interfaces/municipio';
import { BeneficiarioService } from 'src/app/services/portalService/beneficiario.service';
import { MunicipioService } from 'src/app/services/portalService/municipio.service';
import { CepService } from 'src/app/services/viacepService/cep.service';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.scss']
})
export class SearchCepComponent implements OnInit {

  @Input() cep: string = "";
  @Output() beneficiarioCepEvent = new EventEmitter<Beneficiario[]>();
  @Output() municipioCepEvent = new EventEmitter<Municipio[]>();

  mes: string = "";
  ano: string = "";
  esteMesBool: boolean = false;

  constructor(private cepService: CepService, private beneficiarioService: BeneficiarioService, private municipioService: MunicipioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitCep(cepForm: NgForm) {
    let validaAno = /^[0-9]{4}$/;
    let validaMes = /^[0-9]{2}$/;
    let validacep = /^[0-9]{8}$/;

    if(!validaAno.test(this.ano)) {
      alert('Insira um ano válido!');
      return;
    }
    
    if(!validaMes.test(this.mes)) {
      alert('Insira um mês válido!');
      return;
    }

    if(!validacep.test(this.cep)) {
      alert('Insira um cep válido!');
      return;
    }

    this.cepService.getCepInfo(this.cep)
    .subscribe(data => {
      if(data == undefined) {
        alert('Cep inexistente no sistema.');
        return;
      }

      let cep = data as Cep;

      if(this.router.url === '/beneficiario') {
        this.beneficiarioService.getbeneficiarioInfo(cep.ibge as string, this.mes, this.ano)
        .subscribe(dataBene => {
          if(dataBene == undefined) {
            alert('beneficiario inexistente no sistema.');
            return;
          } 

          this.beneficiarioCepEvent.emit(dataBene as Beneficiario[]);

          cepForm.reset();
        });
      }

      if(this.router.url === '/municipio') {
        this.municipioService.getMunicipioInfo(cep.ibge as string, this.mes, this.ano)
        .subscribe(dataMuni => {
          if(dataMuni == undefined) {
            alert('municipio inexistente no sistema.');
            return;
          } 

          this.municipioCepEvent.emit(dataMuni as Municipio[]);

          cepForm.reset();
        });
      }
    });  
  }

  btnEsteMes(esteMes: boolean) {
    this.esteMesBool = esteMes;
    
    if(this.esteMesBool) {
      let date = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      this.mes = '0' + month.toString().slice(-2);
      this.ano = year.toString();
    }
    else {
      this.clearMesAno();
    }
  }

  clearMesAno() {
    this.mes = "";
    this.ano = "";
  }
}

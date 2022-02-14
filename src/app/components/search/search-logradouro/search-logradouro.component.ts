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
  selector: 'app-search-logradouro',
  templateUrl: './search-logradouro.component.html',
  styleUrls: ['./search-logradouro.component.scss']
})
export class SearchLogradouroComponent implements OnInit {

  @Input() cidade: string = "";
  @Input() uf: string = "";
  @Input() logradouro: string = "";
  @Output() beneficiarioLogradouroEvent = new EventEmitter<Beneficiario[]>();
  @Output() municipioLogradouroEvent = new EventEmitter<Municipio[]>();

  mes: string = "";
  ano: string = "";
  esteMesBool: boolean = false;

  constructor(private cepService: CepService, private beneficiarioService: BeneficiarioService, private municipioService: MunicipioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogradouro(cepForm: NgForm) {
    let validaAno = /^[0-9]{4}$/;
    let validaMes = /^[0-9]{2}$/;
    let validaUf = /^[a-zA-Z]{2}$/;

    if(!validaAno.test(this.ano)) {
      alert('Insira um ano válido!');
      return;
    }
    
    if(!validaMes.test(this.mes)) {
      alert('Insira um mês válido!');
      return;
    }

    if(!validaUf.test(this.uf)) {
      alert('Insira um cep válido!');
      return;
    }

    this.cepService.getCepInfoWithLogradouro(this.cidade, this.uf, this.logradouro)
    .subscribe(data => {
      if(data == undefined) {
        alert('Cep inexistente no sistema.');
        return;
      }

      let ceps = data as Cep[];
      let ibgesToSearch = [...new Set(ceps.map(cep => cep.ibge))];

      if(this.router.url === '/beneficiario') {
        let beneficiarios: Beneficiario[] = [];

        ibgesToSearch.forEach(ibge => {
          this.beneficiarioService.getbeneficiarioInfo(ibge as string, this.mes, this.ano)
          .subscribe(dataBene => {
            if(dataBene == undefined) {
              alert('beneficiario inexistente no sistema.');
              return;
            } 
  
            dataBene.forEach(beneficiario => {
              beneficiarios.push(beneficiario);
            });
          });
        });

        this.beneficiarioLogradouroEvent.emit(beneficiarios as Beneficiario[]);
        cepForm.reset();
      }

      if(this.router.url === '/municipio') {
        let municipios: Municipio[] = [];

        ibgesToSearch.forEach(ibge => {
          this.municipioService.getMunicipioInfo(ibge as string, this.mes, this.ano)
          .subscribe(dataMuni => {
            if(dataMuni == undefined) {
              alert('municipio inexistente no sistema.');
              return;
            } 
  
            dataMuni.forEach(municipio => {
              municipios.push(municipio);
            });
          });
        });

        this.municipioLogradouroEvent.emit(municipios as Municipio[]);
        cepForm.reset();
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

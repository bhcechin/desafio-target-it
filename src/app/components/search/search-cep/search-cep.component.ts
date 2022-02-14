import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cep } from 'src/app/interfaces/cep';
import { CepService } from 'src/app/services/viacepService/cep.service';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.scss']
})
export class SearchCepComponent implements OnInit {

  @Input() cep: string = "";
  @Output() cepFoundEvent = new EventEmitter<Cep>();

  mes: string = "";
  ano: string = "";
  esteMesBool: boolean = false;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  onSubmitCep(cepForm: NgForm) {
    let validacep = /^[0-9]{8}$/;

    if(validacep.test(this.cep)) {
      this.cepService.getCepInfo(this.cep)
        .subscribe(data => {
          this.cepFoundEvent.emit(data);
        })

      this.cep = "";
      
      cepForm.resetForm(cepForm.value);
      cepForm.reset();
    }
    else {
      cepForm.resetForm(cepForm.value);
      return;
    }
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
      this.mes = "";
      this.ano = "";
    }
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CepService } from 'src/app/services/viacepService/cep.service';
import { Cep } from "../../interfaces/cep";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() search = "";
  @Output() cepFoundEvent = new EventEmitter<Cep>();

  cep: string = "";

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  onSubmit(cepForm: NgForm) {
    let validacep = /^[0-9]{8}$/;

    if(validacep.test(this.cep)) {
      this.cepService.getCepInfo(this.cep)
        .subscribe(data => {
          console.log('SEARCH ', data);
          
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

}

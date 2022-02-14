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
  @Output() cepFoundEvent = new EventEmitter<Cep>(); //(cepFoundEvent)="getCepInfo($event)

  cep: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onEmitCep(cepInfo: Cep) {
    this.cepFoundEvent.emit(cepInfo);
  }

  onSubmitLogradouro(logradouroForm: NgForm) {

  }

  onSubmitCpfNis(cpfNisForm: NgForm) {

  }

}

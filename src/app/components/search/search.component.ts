import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Municipio } from 'src/app/interfaces/municipio';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() search = "";
  @Output() beneficiarioSearchEvent = new EventEmitter<Beneficiario[]>();
  @Output() municipioSearchEvent = new EventEmitter<Municipio[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onEmitBeneficiario(beneInfo: Beneficiario[]) {
    this.beneficiarioSearchEvent.emit(beneInfo as Beneficiario[]);
  }

  onEmitMunicipio(muniInfo: Municipio[]) {
    this.municipioSearchEvent.emit(muniInfo as Municipio[]);
  }

  onSubmitCpfNis(cpfNisForm: NgForm) {

  }

}

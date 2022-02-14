import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { BeneficiarioService } from 'src/app/services/portalService/beneficiario.service';

@Component({
  selector: 'app-search-cpf-nis',
  templateUrl: './search-cpf-nis.component.html',
  styleUrls: ['./search-cpf-nis.component.scss']
})
export class SearchCpfNisComponent implements OnInit {

  @Input() cpfNis: string = "";
  @Output() beneficiarioCpfNisEvent = new EventEmitter<Beneficiario[]>();

  constructor(private beneficiarioService: BeneficiarioService) { }

  ngOnInit(): void {
  }

  onSubmitCpfNis(cpfNisForm: NgForm) {
    let validaCpfNis = /^[0-9]{11}$/;

    if(!validaCpfNis.test(this.cpfNis)) {
      alert('Insira um CPF ou NIS válido!');
      return;
    }

    this.beneficiarioService.getbeneficiarioInfoWithCpfNis(this.cpfNis, this.cpfNis)
    .subscribe(data => {
      if(data == undefined) {
        alert('CPF ou NIS inexistente no sistema.');
        return;
      }

      this.beneficiarioCpfNisEvent.emit(data as Beneficiario[]);

      cpfNisForm.reset();
    })
  }

}

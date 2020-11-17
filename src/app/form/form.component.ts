import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cadastro } from '../interface/cadastro';
import { Router } from '@angular/router';
import { CadastroServiceService } from 'src/app/services/cadastro-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  constructor(private cadastroservice: CadastroServiceService, private router: Router) { }

  addCadastro(cadastro: Cadastro) {
    this.cadastroservice.addCadastro(cadastro)
      .subscribe(() => { this.router.navigateByUrl('/'); },);
  }

}
  
/*
  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Curso: ${form.value.curso}
    Data: ${form.value.data}
    Matricula: ${form.value.matricula}
    Assunto: ${form.value.assunto}`;
    

    console.log(dados);
  }

  @Input() cadastro: Cadastro = <Cadastro>{};
  @Output() outputCadastro: EventEmitter<Cadastro> = new EventEmitter();

  onSubmit() {
    this.outputCadastro.emit(this.cadastro);
  }*/
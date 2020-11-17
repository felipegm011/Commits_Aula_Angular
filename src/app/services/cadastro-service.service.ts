import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cadastro } from '../interface/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

constructor(private http: HttpClient) { }

  addCadastro(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${environment.agendamentoApiUrl}/cadastro/`;
    return this.http.post<Cadastro>(url, cadastro);
  }
}

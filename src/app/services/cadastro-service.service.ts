import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cadastro } from '../interface/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  resource = "api";
  api = environment.agendamentoApiUrl + '/' + this.resource;

constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 

    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization' : 'Basic YWRtaW46YWRtaW4=',  
    'Access-Control-Allow-Origin' : '*',     
    'Access-Control-Allow-Credentials' : 'true',           
    'Access-Control-Allow-Methods' : 'POST, GET, PUT, OPTIONS, DELETE',  
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization',  
    'Set-Cookie'  : 'HttpOnly;Secure;SameSite=Strict'   })
  }

  addCadastro(cadastro: Cadastro): Observable<Cadastro> {
    const url = this.api + '/produto';
    return this.http.post<Cadastro>(url, JSON.stringify(cadastro),this.httpOptions);
  }
}

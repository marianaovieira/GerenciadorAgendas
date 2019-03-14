import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from '../agendas/agendas';

@Injectable()
export class ContatosProvider {

  apiUrl = 'http://localhost:8080/api/contatos/';
  contatos: any;

  constructor(public http: HttpClient) {
    console.log('Hello ContatosProvider Provider');
  }

  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"")
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });

  }

  save(contato) {
    let data = JSON.stringify(contato);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json' }})
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(contato);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Contato{
  id: number;
  nome: string;
  telefone: string;
  email: string;
  agenda: Agenda;
}
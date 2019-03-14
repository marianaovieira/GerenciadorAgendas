import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContatosProvider } from '../../providers/contatos/contatos';
import { ContatosEditPage } from '../contatos-edit/contatos-edit';

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  contatos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public contatosProvider: ContatosProvider
    , private toast: ToastController) {
      this.getContatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');
  }

  ionViewWillEnter() {
    this.getContatos();
  }

  getContatos() {
    this.contatosProvider.findAll()
    .then(data => {
      this.contatos = data;
      console.log(this.contatos);
    });
  }
  removeContato(id: number) {
    this.contatosProvider.deleteById(id)
      .then( () => {
        this.getContatos();
        this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editContato(id: number) {
    this.navCtrl.push(ContatosEditPage, {id: id});
  }

  addContato() {
    this.navCtrl.push(ContatosEditPage);
  }


}
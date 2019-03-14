import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Contato, ContatosProvider } from '../../providers/contatos/contatos';


@IonicPage()
@Component({
  selector: 'page-contatos-edit',
  templateUrl: 'contatos-edit.html',
})
export class ContatosEditPage {
  contato: Contato;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private contatosProvider: ContatosProvider) {
      this.contato = new Contato();

      if (this.navParams.data.id) {
        this.convidadosProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.contato = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosEditPage');
  }

  save() {
    this.contatosProvider.save(this.contato)
      .then(() => {
        this.toast.create({ message: 'Contato salvo!', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
      });
  }


}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosEditPage } from './contatos-edit';

@NgModule({
  declarations: [
    ContatosEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatosEditPage),
  ],
})
export class ContatosEditPageModule {}
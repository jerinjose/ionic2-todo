import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular'
import { TodoListPage } from '../todo-list/todo-list';
import { ModalsContentPage } from '../modal/modal-ionic';


@Component({
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  selectedItem: any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped() {
    this.navCtrl.push(TodoListPage);
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalsContentPage, characterNum);
    modal.present();
  }

}

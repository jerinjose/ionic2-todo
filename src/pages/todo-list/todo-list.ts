import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  templateUrl: 'todo-list.html'
})

export class TodoListPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped() {
    this.navCtrl.push(ItemDetailsPage);
  }

}

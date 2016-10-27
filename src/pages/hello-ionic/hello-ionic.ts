import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular'
import { TodoListPage } from '../todo-list/todo-list';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { ModalsContentPage } from '../modal/modal-ionic';
import { _ } from 'underscore';


@Component({
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  selectedItem: any;
  companies : any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams
  ) {

      this.getCompanies();
  }

  getCompanies(){
    this.companies = [];
    this.storage.get("todoapp-todos").then((value) => {
        let companyList = _.groupBy(value, 'company');
        for(let company in companyList){
          let counts = _.countBy(companyList[company],'type');
          this.companies.push({
              company : company,
              urgent : (counts.Ugt) ? counts.Ugt : 0,
              important : (counts.Impt) ? counts.Impt : 0,
              followup : (counts.Fow) ? counts.Fow : 0
          });
        };
    });
  }

  itemTapped(company) {
    this.navCtrl.push(TodoListPage,{
      companyName : company.company
    });
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalsContentPage, characterNum);
    modal.present();
  }


  doRefresh(refresher) {
    this.getCompanies();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}

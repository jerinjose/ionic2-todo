import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { _ } from 'underscore';

@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  todoDetails : any;
  allTodos : any;

  constructor(
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
      this.todoDetails = navParams.get('tododetails');
  }

  updateTodo(){
      this.storage.get("todoapp-todos").then((value) => {
        this.allTodos = value;
        for(let i = 0;i<this.allTodos.length;i++){
            if(this.allTodos[i].id == this.todoDetails.id){
              let index = this.allTodos.indexOf(this.allTodos[i]);
              this.allTodos.splice(index, 1);
              this.allTodos.push(this.todoDetails);
              break;
            }
        }
        this.storage.set("todoapp-todos",this.allTodos).then((value) => {
          let toast = this.toastCtrl.create({
            message: 'Todo was updated successfully',
            duration: 3000
          });
          toast.present();
        });
      });
  }
}

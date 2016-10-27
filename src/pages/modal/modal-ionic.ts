import { Component } from '@angular/core';
import {Platform, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl : 'modal-ionic.html'
})

export class ModalsContentPage {
  submitted :boolean;
  todo : {
    id:number,
    company : string,
    header : string,
    description : string,
    type:string,
    completed : boolean
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.submitted = false;
    this.todo = {
      id : Math.floor(100000 + Math.random() * 900000),
      company : 'Abc',
      header : '',
      description : '',
      type : 'Ugt',
      completed : false
    };
  }


  addNewTodo(){

    this.storage.get("todoapp-todos").then((value) => {
       var todos = value || [];
       todos.push(this.todo);
       this.storage.set("todoapp-todos",todos);
       this.todo = {
         id : Math.floor(100000 + Math.random() * 900000),
         company : '',
         header : '',
         description : '',
         type : 'Ugt',
         completed : false
       };
       let toast = this.toastCtrl.create({
         message: 'Todo was added successfully',
         duration: 3000
       });
       toast.present();
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

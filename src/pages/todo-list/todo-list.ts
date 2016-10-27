import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { _ } from 'underscore';


@Component({
  templateUrl: 'todo-list.html'
})

export class TodoListPage {
  selectedItem: any;
  allTodos : any;
  todoList:any;
  companyName : string;
  ugtTodo : Array<{company:string,header:string,description:string,type:string,completed:boolean}>;
  imtTodo : Array<{company:string,header:string,description:string,type:string,completed:boolean}>;
  fowTodo : Array<{company:string,header:string,description:string,type:string,completed:boolean}>;
  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public storage: Storage,
  public toastCtrl: ToastController
  ) {
      this.companyName = navParams.get('companyName');
      this.getTodos();
  }

  updateValue(obj){
    this.storage.get("todoapp-todos").then((value) => {
      this.allTodos = value;
      for(let i = 0;i<this.allTodos.length;i++){
          if(this.allTodos[i].id == obj.id){
            let index = this.allTodos.indexOf(this.allTodos[i]);
            this.allTodos.splice(index, 1);
            this.allTodos.push(obj);
            break;
          }
      }
      this.storage.set("todoapp-todos",this.allTodos)
    });
  }

  itemTapped(todo) {
    this.navCtrl.push(ItemDetailsPage,{
      tododetails : todo
    });
  }

  getTodos(){
      this.todoList = [];
      this.ugtTodo = [];
      this.imtTodo = [];
      this.fowTodo = [];
      this.allTodos = [];

    this.storage.get("todoapp-todos").then((value) => {
      let allCompanies = _.groupBy(value, 'company');
      this.todoList = allCompanies[this.companyName];
      if(this.todoList && this.todoList.length > 0){
        for(let todo in this.todoList){
            if(this.todoList[todo].type == 'Ugt'){
              this.ugtTodo.push(this.todoList[todo]);
            }
            if(this.todoList[todo].type == 'Impt'){
              this.imtTodo.push(this.todoList[todo]);
            }
            if(this.todoList[todo].type == 'Fow'){
              this.fowTodo.push(this.todoList[todo]);
            }
          }
      }

    });

  }


  removeTodo(todo){
    this.storage.get("todoapp-todos").then((value) => {
      this.allTodos = value;
      for(let i = 0;i<this.allTodos.length;i++){
          if(this.allTodos[i].id == todo.id){
            let index = this.allTodos.indexOf(this.allTodos[i]);
            this.allTodos.splice(index, 1);
            break;
          }
      }
      this.storage.set("todoapp-todos",this.allTodos).then((value) => {
          this.getTodos();
      });

    });
  }

}

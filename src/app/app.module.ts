import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ModalsContentPage } from '../pages/modal/modal-ionic';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    TodoListPage,
    ModalsContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    TodoListPage,
    ModalsContentPage
  ],
  providers: []
})
export class AppModule {}

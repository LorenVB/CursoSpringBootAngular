import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listPendingTask: List[];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private alertCrtl: AlertController
  ) {
    this.listPendingTask = taskService.showListTask();
  }

  async addList() {

    const alert = await this.alertCrtl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            if(data.titulo.length ===0){
              return;
            }
            //I've to create the list
            const listId= this.taskService.createList(data.titulo);

            // I need to navigate to add list page
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }

 
}

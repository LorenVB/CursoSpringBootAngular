import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { List } from '../../models/list.model';
import { Router } from "@angular/router";
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
  list: List;
  @Input() terminada = true;

  constructor(public taskService: TaskService, private router: Router,private alertCrtl: AlertController) {}

  ngOnInit() {}

  listSelected(list: List) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  async editList(list:List){
    const alert = await this.alertCrtl.create({
      header: 'Editar lista',
      inputs: [{
          name: 'title',
          type: 'text',
          value: list.title,
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Actualizar',
          handler: (dataTitle) => {
            console.log(dataTitle);
            if(dataTitle.title.length===0){
              return;
            }
            list.title=dataTitle.title;
            this.taskService.saveStorage();
          }
        }
      ]
    });

    await alert.present();
  }


  deleteList(list:List){
    this.taskService.deleteList(list.id);
  }

  terminatedList(){
    return this.taskService.lists.filter(listTerminated=>{
      return listTerminated.terminated===false;
    })
  }
}

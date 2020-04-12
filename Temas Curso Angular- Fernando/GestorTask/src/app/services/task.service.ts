import { Injectable } from "@angular/core";
import { List } from '../models/list.model';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: "root",
})
export class TaskService {
  lists: List[] = [];

  constructor() {
    this.loadStorage();
  }

  public showListTask(): List[] {
    return this.lists;
  }

  public createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  public loadList(id: string | number){
    
    id=Number(id);

    return this.lists.find(listaData=> listaData.id===id)

  }

  public deleteList(id: string | number){
    
    id=Number(id);

    this.lists=this.lists.filter(listNotDeleted=> listNotDeleted.id!==id);
    
    this.saveStorage();
  }

  public saveStorage() {
    localStorage.setItem("dataList", JSON.stringify(this.lists));
  }

  public loadStorage() {
    if (localStorage.getItem("dataList")) {
      this.lists = JSON.parse(localStorage.getItem("dataList"));
    }
  }
}

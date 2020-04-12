import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { List } from "../../models/list.model";
import { ActivatedRoute } from "@angular/router";
import { ListItem } from "../../models/list-item.model";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  list: List;
  nameItem: string;

  constructor(
    private taskService: TaskService,
    private router: ActivatedRoute
  ) {
    const listId = this.router.snapshot.paramMap.get("listId");
    this.list = this.taskService.loadList(listId);

    console.log(this.list);
  }

  ngOnInit() {}

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }
    const nuevoItem = new ListItem(this.nameItem);
    this.list.items.push(nuevoItem);

    this.nameItem = "";
    this.taskService.saveStorage();
  }

  cambioCheck(item: ListItem) {
    const pendientes = this.list.items.filter((itemData) => !itemData.completed)
      .length;

    if (pendientes === 0) {
      this.list.terminatedIn = new Date();
      this.list.terminated = true;
    } else {
      this.list.terminatedIn = null;
      this.list.terminated = false;
    }
    this.taskService.saveStorage();

    console.log(this.list);
  }

  delete (i:number){
    this.list.items.splice(i,1);
    this.taskService.saveStorage();
  }
}

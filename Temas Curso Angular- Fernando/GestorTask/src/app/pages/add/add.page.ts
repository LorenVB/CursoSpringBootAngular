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
}

import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  createdIn: Date;
  terminatedIn: Date;
  terminated: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.title = title;

    this.createdIn = new Date();
    this.terminated = false;
    this.items = [];

    this.id = new Date().getTime();
  }
}

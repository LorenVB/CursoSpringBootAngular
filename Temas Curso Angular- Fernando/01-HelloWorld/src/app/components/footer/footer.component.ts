import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nombre:string;
  fecha:number;

  constructor() {
    this.nombre='Lorenzo Vidal Bellon';
    this.fecha=new Date().getFullYear();
   }

  ngOnInit() {
  }

}

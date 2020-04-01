import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  mostrar:boolean;

  frase: any ={
    frase: 'Un gran poder',
    autor: 'Ben Parker'
  };

  heroes:string [] = ['Spiderman','Venom', 'Doctor Octopus'];
  constructor() { 
    this.mostrar=true;
  }

  ngOnInit() {
  }

   mostrarYOcultar(): boolean {
    return !this.mostrar;
  };

}

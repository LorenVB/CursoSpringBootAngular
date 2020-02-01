import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso:string[] = ['TypeScript', 'Javascript', 'Java SE' , 'C#'];
  habilitar:boolean = true;

  setHabilitar(): void{
    this.habilitar=(this.habilitar)==true?false:true;
  }

 constructor() { }


}

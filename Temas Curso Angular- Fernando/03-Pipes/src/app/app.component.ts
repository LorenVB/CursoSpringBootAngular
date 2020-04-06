import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre:string="Capitán América";
    arreglo=[1,2,3,4,5,6,7,8];
    PI: number= Math.PI;
    videoUrl: "https://youtu.be/1i5ACGgoNoE?list=RD1i5ACGgoNoE";
    activar:boolean=true;
    nombre2:string= "lOrenzo ViDal bellÓN";


    cambiarEstadoContrasena(){
      return this.activar=!this.activar
    }
}


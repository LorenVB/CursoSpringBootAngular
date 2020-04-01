import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private _router:ActivatedRoute, private _heroeService:HeroesService) {
    this._router.params.subscribe( params =>  {
      console.log(params);
      this.heroe=this._heroeService.getHeroe(params['id']);
    })
   }

}

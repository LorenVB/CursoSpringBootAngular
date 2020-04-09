import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist:any=[];
  topTracks:any[]=[];
  loading:boolean;

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.router.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
    this.loading=true;
  }


  ngOnInit() {
  }

  public getArtist(id:string){
    this.spotify.getArtist(id).subscribe(artist=>{
      this.artist=artist;
      this.loading=false;
    })
  }
  public getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks=>{
      console.log(topTracks);
      this.topTracks=topTracks;
    })

  }



}

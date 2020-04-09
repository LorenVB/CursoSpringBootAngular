import { Component, OnInit } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError:string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      },
      (errorSubscribe) => {
        this.error = true;
        this.loading = false;
        this.mensajeError= errorSubscribe.error.error.message;
      }
    );
  }

  ngOnInit() {}
}

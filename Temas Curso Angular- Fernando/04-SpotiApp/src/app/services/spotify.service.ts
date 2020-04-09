import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Servicio Spotify Listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAPcDlMbM7hhcQQdPniZ1yhdHSVc3H0fizO-KZSEHpYbjz4MlXsvETqHkQW4q2gMJvtrBYvGw-URWn-SXc",
    });

    return this.http.get(url, { headers });
  }

  public getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }

  public getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }

  public getArtist(id: string) {
    return this.getQuery(`artists/${id}`);//.pipe(map((data) => data["id"]));
  }

  public getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data) => data["tracks"]));
  }
}

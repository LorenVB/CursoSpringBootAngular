import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Spotify Listo')

  }
  
  public getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQBnI_MOhc-Z0a1wkeEDTZOkvCJV9tEznzwh_oIUuIVWQPIOYx26KhaQbcTsuUpUZ5JIE-quhtdpF0BdD2g'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}

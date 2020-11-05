import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player/interfaces/interface';

const API: string = "http://localhost:3000/players"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): any {
    return this.http.get(API);
  }

  updatePlayer(player: Player): any {
    return this.http.put<Player>(API, player);
  }

  deletePlayer(playerId: number): any {
    return this.http.delete(API +  '/' + playerId);
  }
}

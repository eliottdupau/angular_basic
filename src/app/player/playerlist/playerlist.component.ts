import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../interfaces/interface';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  positions: string[] = ["gardien", "attaquant", "défenseur", "milieu"];
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
      .getPlayers()
      .subscribe((players: Player[]) => {
        this.players = players
      })
  }

  updatePlayer(index: number) {
    this.playerService
      .updatePlayer(this.players[index])
      .subscribe((res: any) => {
        console.log("Player updated")
    });
  }

  deletePlayer(index: number) {
    this.playerService
      .deletePlayer(this.players[index].id)
      .subscribe((res: any) => {
        this.players = [];
        this.getPlayers()
      })
  }

  onEdit(index: number){
    this.updatePlayer(index);
  }

  onDelete(index: number){
    this.deletePlayer(index);
  }

}

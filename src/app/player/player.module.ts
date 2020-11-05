import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayermanagerComponent } from './playermanager/playermanager.component';
import { FilterComponent } from './filter/filter.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerformComponent } from './playerform/playerform.component';

@NgModule({
  declarations: [PlayermanagerComponent, FilterComponent, PlayerlistComponent, PlayerformComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PlayermanagerComponent]
})
export class PlayerModule { }

import { Component, Input, OnInit } from '@angular/core';
import { Minion } from 'src/app/minions/minion.model';

@Component({
  selector: 'app-battle-item',
  templateUrl: './battle-item.component.html',
  styleUrls: ['./battle-item.component.css']
})
export class BattleItemComponent implements OnInit {
  @Input() minionA!: Minion;
  @Input() minionB!: Minion;
  loadInterval: number = 1;
  intervalId: any;
  battleProgress: number = 0;
  strongerMinion!: string;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.battleProgress += Math.floor(Math.random() * 50);
      if (this.battleProgress >= 100) {
        clearInterval(this.intervalId);
        this.getBattleResult();
      }
    }, this.loadInterval * 1000);
  }

  getBattleResult() {
    let lvlMinionA: number = this.minionA.level;
    let lvlMinionB: number = this.minionB.level;

    if (lvlMinionA > lvlMinionB) {
      this.strongerMinion = 'A';
    } else if (lvlMinionB > lvlMinionA) {
      this.strongerMinion = 'B';
    } else if (lvlMinionB == lvlMinionB) {
      this.strongerMinion = 'NONE';
    }
  }
}

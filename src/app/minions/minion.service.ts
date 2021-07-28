import { Minion } from './minion.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  minionsChanged: EventEmitter<Minion[]> = new EventEmitter();
  genericName = 'Placeholder';

  private minions: Minion[] = [
    new Minion(0, 'AGUMON', 7, 0),
    new Minion(1, 'PATAMON', 2, 0),
    new Minion(2, 'PIKACHU', 4, 1),
    new Minion(3, 'PIPPO', 9, 1)
  ];

  constructor() { }

  getMinionById(id: number) {
    let minionIndex = this.minions.map((minion) => {
      return minion.id;
    }).indexOf(id);

    return this.minions[minionIndex];
  }

  createNewId() {
    try {
      let lastIndex = this.minions.length - 1;
      let lastId = this.minions[lastIndex].id;
      let newId = lastId + 1;
      return newId;
    } catch (e) {
      return 0;
    }
  }

  createPlaceholderMinion() {
    return new Minion(-1, this.genericName, -1, -1);
  }

  getMinions(): Minion[] {
    return this.minions.slice();
  }

  updateMinion(minion: Minion) {
    let tmpMinion = this.getMinionById(minion.id);
    tmpMinion.name = minion.name;
    tmpMinion.level = minion.level;
    this.emitChange();
  }

  addMinion(minion: Minion) {
    let newId = this.createNewId();
    let newMinion = new Minion(newId, minion.name, minion.level, minion.teamId);
    this.minions.push(newMinion);
    this.emitChange();
  }

  deleteMinion(id: number) {
    this.minions.forEach((minion, i) => {
      if (minion.id == id) {
        this.minions.splice(i, 1);
      }
    });
    this.emitChange();
  }

  shiftTeam(minionId: number, destinationTeamId: number) {
    this.getMinionById(minionId).teamId = destinationTeamId;
    this.emitChange();
  }

  private emitChange() {
    this.minionsChanged.emit(this.getMinions());
  }
}

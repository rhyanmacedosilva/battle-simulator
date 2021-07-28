import { Team } from './team.model';
import { MinionService } from './../minions/minion.service';
import { Minion } from './../minions/minion.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams!: Team[];
  teamsChanged: EventEmitter<Team[]> = new EventEmitter();

  constructor(private minionService: MinionService) {
    this.updateTeams(this.minionService.getMinions());
    this.minionService.minionsChanged.subscribe(
      (minions: Minion[]) => {
        this.updateTeams(minions);
        this.emitChange();
      });
  }

  shift(minion: Minion, currentTeamId: number) {
    let lastTeam = this.teams[this.teams.length - 1];
    let destinationTeamId = currentTeamId == lastTeam.id ? 0 : currentTeamId + 1;
    this.minionService.shiftTeam(minion.id, destinationTeamId);
  }

  updateTeams(minions: Minion[]) {
    this.teams = [
      new Team(0, 'A', []),
      new Team(1, 'B', [])
    ];

    for (let minion of minions) {
      let teamIndex = this.teams.map((team) => {
        return team.id;
      }).indexOf(minion.teamId);

      this.teams[teamIndex].members.push(minion);
    }
  }

  private emitChange() {
    this.teamsChanged.emit(this.getTeams());
  }

  getTeams() {
    return this.teams.slice();
  }
}

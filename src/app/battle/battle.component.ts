import { TeamService } from './../teams/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../teams/team.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  starting: boolean = true;
  teams!: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.starting = false;
      this.teams = this.teamService.getTeams();
    }, 1000);
  }
}

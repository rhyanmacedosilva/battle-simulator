import { Team } from './team.model';
import { TeamService } from './team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams!: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();

    this.teamService.teamsChanged.subscribe(
      (teams: Team[]) => {
        this.teams = teams;
      });
  }
}

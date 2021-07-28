import { TeamService } from './../team.service';
import { Minion } from './../../minions/minion.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  @Input() minion!: Minion;
  @Input() teamId!: number;

  constructor(private teamService: TeamService) { }

  onShift() {
    this.teamService.shift(this.minion, this.teamId);
  }

  ngOnInit(): void { }
}

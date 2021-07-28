import { TeamService } from './../../teams/team.service';
import { Team } from './../../teams/team.model';
import { MinionService } from './../minion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Minion } from '../minion.model';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-minion-edit',
  templateUrl: './minion-edit.component.html',
  styleUrls: ['./minion-edit.component.css']
})
export class MinionEditComponent implements OnInit {

  loading: boolean = false;
  title!: string;
  editMode!: boolean;
  teamOptions!: Team[];
  @Input() minion!: Minion;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private minionService: MinionService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    let minionId = +this.route.snapshot.params['id'];
    let hasMinion = false;

    if (isNaN(minionId) == false) {
      this.minion = this.minionService.getMinionById(minionId);
      hasMinion = this.minion.name != this.minionService.genericName;
    }

    if (hasMinion == false) {
      this.router.navigate(['minions', 'new']);
    }

    this.editMode = hasMinion;

    // set title
    if (this.editMode == true) {
      this.title = 'EDITING-' + this.minion.name;
    } else {
      this.minion = this.minionService.createPlaceholderMinion();
      this.title = 'NEW'
    }

    // get team select options
    this.teamOptions = this.teamService.getTeams();
    this.teamService.teamsChanged.subscribe(
      (teams: Team[]) => {
        this.teamOptions = teams;
      }
    );
  }

  onCancel() {
    this.router.navigate(['minions']);
  }

  onSave(name: HTMLInputElement, level: HTMLInputElement, team: MatSelect) {
    this.loading = true;
    setTimeout(() => {
      this.minion.name = name.value.toUpperCase();
      this.minion.level = +level.value;
      this.minion.teamId = +team.value;

      if (this.editMode == true) {
        this.minionService.updateMinion(this.minion);
      } else {
        this.minionService.addMinion(this.minion);
      }

      this.router.navigate(['minions']);
      this.loading = false;
    }, 2000);
  }
}

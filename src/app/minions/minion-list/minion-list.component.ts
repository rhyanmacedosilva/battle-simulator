import { MinionService } from './../minion.service';
import { Minion } from './../minion.model';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-minion-list',
  templateUrl: './minion-list.component.html',
  styleUrls: ['./minion-list.component.css']
})
export class MinionListComponent implements OnInit {
  @ViewChild('minionList') minionList!: MatSelectionList;
  allowRemove = false;
  allowEdit = false;
  minions!: Minion[];
  editableMinion!: string;
  deletableMinions!: string[];

  constructor(private router: Router, private minionService: MinionService) { }

  ngOnInit(): void {
    this.minions = this.minionService.getMinions();
    this.minionService.minionsChanged.subscribe(
      (minions: Minion[]) => {
        this.minions = minions;
      });
  }

  onNew() {
    this.router.navigate(['minions', 'new']);
  }

  onUpdate() {
    this.router.navigate(['minions', 'edit', this.editableMinion]);
  }

  onDelete() {
    for (let id of this.deletableMinions) {
      this.minionService.deleteMinion(+id);
    }
  }

  onSelectionChange() {
    let selectedItems = this.minionList.selectedOptions.selected;
    this.allowEdit = selectedItems.length == 1;
    this.allowRemove = selectedItems.length > 0;

    if (this.allowEdit == true) {
      this.editableMinion = selectedItems[0].value;
    }

    if (this.allowRemove == true) {
      this.deletableMinions = [];
      selectedItems.forEach((selectedItem) => {
        this.deletableMinions.push(selectedItem.value);
      });
    }
  }
}

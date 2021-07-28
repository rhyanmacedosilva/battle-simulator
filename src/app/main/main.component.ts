import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  activeTabIndex: number = 0;
  tabs = ['minions', 'teams', 'battle'];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let currentTabOnRoute;

    try {
      currentTabOnRoute = this.route.snapshot.url[0].path;
    } catch (e) {
      currentTabOnRoute = 'minions';
    }

    this.activeTabIndex = this.tabs.indexOf(currentTabOnRoute);
  }

  onTabChange() {
    this.router.navigate([this.tabs[this.activeTabIndex]]);
  }
}
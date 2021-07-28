import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MinionsComponent } from './minions/minions.component';
import { MinionListComponent } from './minions/minion-list/minion-list.component';
import { MinionEditComponent } from './minions/minion-edit/minion-edit.component';
import { MainComponent } from './main/main.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMemberComponent } from './teams/team-member/team-member.component';
import { BattleComponent } from './battle/battle.component';
import { BattleItemComponent } from './battle/battle-item/battle-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MinionsComponent,
    MinionListComponent,
    MinionEditComponent,
    MainComponent,
    TeamsComponent,
    TeamMemberComponent,
    BattleComponent,
    BattleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

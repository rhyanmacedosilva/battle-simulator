import { MinionEditComponent } from './minions/minion-edit/minion-edit.component';
import { MinionListComponent } from './minions/minion-list/minion-list.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: MinionListComponent }
    ]
  },
  {
    path: 'minions', component: MainComponent, children: [
      { path: '', component: MinionListComponent },
      { path: 'new', component: MinionEditComponent },
      { path: 'edit/:id', component: MinionEditComponent }
    ]
  },
  { path: 'teams', component: MainComponent },
  { path: 'battle', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

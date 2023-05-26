import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { AssetsComponent } from './assets/assets.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';
import { BillsComponent } from './bills/bills.component';
import { GoalsComponent } from './goals/goals.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'budgets',
    component: BudgetsComponent
  },
  {
    path: 'assets',
    component: AssetsComponent
  },
  {
    path: 'liabilities',
    component: LiabilitiesComponent
  },
  {
    path: 'billing',
    component: BillsComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

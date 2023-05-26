import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ProfileSelectorComponent } from './shared/profile-selector/profile-selector.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';
import { GoalsComponent } from './goals/goals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BillsComponent } from './bills/bills.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetsTableComponent } from './assets/assets-table/assets-table.component';
import { UpdateAssetComponent } from './assets/update-asset/update-asset.component';
import { CreateAssetComponent } from './assets/create-asset/create-asset.component';
import { LiabilitiesTableComponent } from './liabilities/liabilities-table/liabilities-table.component';
import { UpdateLiabilityComponent } from './liabilities/update-liability/update-liability.component';
import { CreateLiabilityComponent } from './liabilities/create-liability/create-liability.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CreateProfileComponent } from './profiles/create-profile/create-profile.component';
import { UpdateProfileComponent } from './profiles/update-profile/update-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    ProfileSelectorComponent,
    LiabilitiesComponent,
    GoalsComponent,
    DashboardComponent,
    BudgetsComponent,
    BillsComponent,
    AssetsComponent,
    AssetsTableComponent,
    UpdateAssetComponent,
    CreateAssetComponent,
    LiabilitiesTableComponent,
    UpdateLiabilityComponent,
    CreateLiabilityComponent,
    ProfilesComponent,
    CreateProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

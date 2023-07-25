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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { BudgetTableComponent } from './budgets/budget-table/budget-table.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HouseholdManagerComponent } from './household-manager/household-manager.component';
import { IncomeComponent } from './income/income.component';

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
    UpdateProfileComponent,
    BudgetTableComponent,
    ConfirmDialogComponent,
    HouseholdManagerComponent,
    IncomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    ReactiveFormsModule,

  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

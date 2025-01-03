import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    imports:[MatDialogModule,MatProgressSpinnerModule,MatProgressBarModule,MatSelectModule,MatCardModule,MatTabsModule,MatListModule,MatToolbarModule,MatSidenavModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatButtonModule , MatIconModule , MatPaginatorModule,MatCheckboxModule   , MatSortModule ,MatTableModule, MatGridListModule , CommonModule],
    exports:[MatDialogModule,MatProgressSpinnerModule,MatProgressBarModule,MatSelectModule,MatCardModule,MatTabsModule,MatListModule,MatToolbarModule,MatSidenavModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatButtonModule , MatIconModule , MatPaginatorModule, MatCheckboxModule , MatSortModule , MatTableModule, MatGridListModule ,CommonModule],
})

export class MaterialModule { }
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

@NgModule({
    imports:[MatButtonModule , MatIconModule , MatPaginatorModule,MatCheckboxModule   , MatSortModule ,MatTableModule, MatGridListModule , CommonModule],
    exports:[MatButtonModule , MatIconModule , MatPaginatorModule, MatCheckboxModule , MatSortModule , MatTableModule, MatGridListModule ,CommonModule],
})

export class MaterialModule { }
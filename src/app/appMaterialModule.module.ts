import { NgModule } from '@angular/core';
//import { MatDatepickerModule } from '@angular/material/datepicker';
import {
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    exports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatGridListModule,
        MatCheckboxModule,
        MatAutocompleteModule,
    ],
    imports: [
        BrowserAnimationsModule,
    ],
    declarations: [],
    // providers: [
    //     MatDatepickerModule,
    // ],
})
export class AppMaterialModule { }
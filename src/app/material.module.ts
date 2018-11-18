import { NgModule } from "@angular/core";
import {
    MatButtonModule, 
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule {

}
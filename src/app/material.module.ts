import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatBadgeModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule
    ]
})

export class MaterialModule {

}
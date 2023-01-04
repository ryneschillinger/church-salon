import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulletGangComponent } from './mullet-gang.component';


@NgModule({
    declarations: [MulletGangComponent],
    imports: [CommonModule],
    exports: [MulletGangComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class MulletGangModule { }
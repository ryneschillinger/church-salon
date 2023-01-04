import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonInfoComponent } from './salon-info.component';


@NgModule({
    declarations: [SalonInfoComponent],
    imports: [CommonModule],
    exports: [SalonInfoComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class SalonInfoModule { }
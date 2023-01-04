import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylistComponent } from './stylist.component';


@NgModule({
    declarations: [StylistComponent],
    imports: [CommonModule],
    exports: [StylistComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class StylistModule { }
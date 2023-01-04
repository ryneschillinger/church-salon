import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';


@NgModule({
    declarations: [ServicesComponent],
    imports: [CommonModule],
    exports: [ServicesComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class ServicesModule { }
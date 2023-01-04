import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './policies.component';


@NgModule({
    declarations: [PoliciesComponent],
    imports: [CommonModule],
    exports: [PoliciesComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class PoliciesModule { }
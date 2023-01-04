import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './site-footer.component';


@NgModule({
    declarations: [SiteFooterComponent],
    imports: [CommonModule],
    exports: [SiteFooterComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class SiteFooterModule { }
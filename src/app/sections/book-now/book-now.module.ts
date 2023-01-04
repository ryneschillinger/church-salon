import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNowComponent } from './book-now.component';


@NgModule({
    declarations: [BookNowComponent],
    imports: [CommonModule],
    exports: [BookNowComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class BookNowModule { }
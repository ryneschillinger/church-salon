import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';


@NgModule({
    declarations: [HeroComponent],
    imports: [CommonModule],
    exports: [HeroComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class HeroModule { }
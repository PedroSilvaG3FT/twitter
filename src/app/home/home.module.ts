import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from "ngx-mask";
import {
    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    AccordionModule,
} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot(),

        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
    ],
    exports: [
        HomeComponent,

    ]
})
export class HomeModule { }

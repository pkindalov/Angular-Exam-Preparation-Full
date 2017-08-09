import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar.component'

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [NavbarComponent]
})


export class CoreModule{

}
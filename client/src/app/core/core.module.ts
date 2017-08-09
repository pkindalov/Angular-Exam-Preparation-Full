import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar.component'
import { MessageHandlerComponent } from './message-handler.component'

import { HttpService } from './http.service'

@NgModule({
    declarations: [
        NavbarComponent,
        MessageHandlerComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [HttpService],
    exports: [
        NavbarComponent,
        MessageHandlerComponent
    ]
})


export class CoreModule{

}
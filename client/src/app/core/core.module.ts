import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar.component'
import { MessageHandlerComponent } from './message-handler.component'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'

@NgModule({
    declarations: [
        NavbarComponent,
        MessageHandlerComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [
        HttpService,
        AuthService
    ],
    exports: [
        NavbarComponent,
        MessageHandlerComponent
    ]
})


export class CoreModule{

}
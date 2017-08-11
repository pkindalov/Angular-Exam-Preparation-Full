import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar.component'
import { MessageHandlerComponent } from './message-handler.component'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'
import { PrivateRoute } from './private-route'

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
        AuthService,
        PrivateRoute
    ],
    exports: [
        NavbarComponent,
        MessageHandlerComponent
    ]
})


export class CoreModule{

}
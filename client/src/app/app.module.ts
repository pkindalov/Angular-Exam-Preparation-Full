import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { Router } from '@angular/router'

import { NgReduxModule, NgRedux } from 'ng2-redux'
import { store, IAppState } from './store'


import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module' 
import { CoreModule } from './core/core.module'
import { CarRoutesModule } from './routes.module'

import { AuthService } from './core/auth.service'

import { config } from './core/config'
// import { ROUTES_CHANGE } from './store/core/core.actions'
// import { USER_LOGGED_IN } from './store/users/users.actions'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    CarRoutesModule,
    CoreModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(
    private ngRedux:NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router
  
  ){
    this.ngRedux.provideStore(store)
    config(ngRedux, router, authService)

    // this.router.events.subscribe(ev => {
    //   if( ev instanceof NavigationStart){
    //     this.ngRedux.dispatch({
    //       type: ROUTES_CHANGE
    //     })
    //   }
    // })


    // if(this.authService.isUserAuthenticated()){
    //     const token = this.authService.getToken()
    //     const username  = this.authService.getUser()

    //     this.ngRedux.dispatch({
    //       type: USER_LOGGED_IN,
    //       result: {
    //         success: true,
    //         token,
    //         user: {
    //           name: username
    //         }
    //       }

    //     })

    // }


  }

}

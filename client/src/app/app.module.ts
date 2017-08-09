import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { Router, NavigationStart } from '@angular/router'

import { NgReduxModule, NgRedux } from 'ng2-redux'
import { store, IAppState } from './store'


import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module' 
import { CoreModule } from './core/core.module'
import { CarRoutesModule } from './routes.module'

import { ROUTES_CHANGE } from './store/core/core.actions'

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
    private router: Router
  
  ){
    this.ngRedux.provideStore(store)

    this.router.events.subscribe(ev => {
      if( ev instanceof NavigationStart){
        this.ngRedux.dispatch({
          type: ROUTES_CHANGE
        })
      }
    })
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module' 
import { CoreModule } from './core/core.module'
import { CarRoutesModule } from './routes.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CarRoutesModule,
    CoreModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

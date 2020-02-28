import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadedComponent } from './eager-loaded/eager-loaded.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [ AppComponent, EagerLoadedComponent, HomeComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

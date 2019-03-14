import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { ConfigEffects, UserEffects } from './store/effects';
import { appReducers } from './store/reducers';
import { UsersComponent } from './users';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule.forRoot(),
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([ConfigEffects, UserEffects]),
		StoreRouterConnectingModule.forRoot(),
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

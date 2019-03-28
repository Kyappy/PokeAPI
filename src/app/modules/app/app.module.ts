import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {API_TOKEN} from '@application/configurations';
import {BlankLayout} from '../../pages';
import {ConfigurationModule} from '../utilities/configuration.module';
import {AppRoutingModule} from './app-routing.module';

/**
 * Application main module.
 */
@NgModule({
	bootstrap: [BlankLayout],
	declarations: [
		BlankLayout
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ConfigurationModule
	],
	providers: [
		{provide: API_TOKEN, useValue: {}}
	]
})
export class AppModule {}

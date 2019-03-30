import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SidebarComponent} from '@application/components/sidebar/sidebar.component';
import {NavbarComponent} from '../../components';
import {API_TOKEN} from '../../configurations';
import {BlankLayout, HomePage, MainLayout} from '../../pages';
import {ConfigurationModule} from '../utilities/configuration.module';
import {AppRoutingModule} from './app-routing.module';

/**
 * Application main module.
 */
@NgModule({
	bootstrap: [BlankLayout],
	declarations: [
		NavbarComponent,
		SidebarComponent,
		BlankLayout,
		MainLayout,
		HomePage
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

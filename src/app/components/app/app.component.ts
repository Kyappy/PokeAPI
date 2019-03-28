import {Component} from '@angular/core';

/**
 * Application main component.
 */
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	/**
	 * Application title.
	 */
	public title: string = 'poke-api';
}

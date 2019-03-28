import {browser, by, element} from 'protractor';

/**
 * Application page to test.
 */
export class AppPage {
	/**
	 * Gets the page title.
	 * @returns The text query promise.
	 */
	public async getTitleText(): Promise<string> {
		return element(by.css('app-root h1')).getText() as Promise<string>;
	}

	/**
	 * Navigates to the root page.
	 * @returns The navigation promise.
	 */
	public async navigateTo(): Promise<{}> {
		return browser.get('/');
	}
}

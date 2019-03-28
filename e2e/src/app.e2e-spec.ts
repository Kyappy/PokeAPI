import {browser, logging} from 'protractor';
import {AppPage} from './app.po';
import Entry = logging.Entry;

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getTitleText()).toEqual('Welcome to poke-api!');
	});

	afterEach(async() => {
		// Assert that there are no errors emitted from the browser
		const LOGS: Entry[] = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(LOGS).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE
		}));
	});
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BlankLayout} from './blank.layout';

describe('AppComponent', () => {
	// region global
	let component: BlankLayout;
	let fixture: ComponentFixture<BlankLayout>;
	// endregion

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BlankLayout
			],
			imports: [
				RouterTestingModule
			]
		}).compileComponents().catch(() => {
			throw new Error('AppComponent test initialization failure');
		});

		fixture = TestBed.createComponent(BlankLayout);
		component = fixture.componentInstance;
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'poke-api'`, () => {
		expect(component.title).toEqual('poke-api');
	});

	it('should render title in a h1 tag', () => {
		fixture.detectChanges();
		const ELEMENT: Element = fixture.debugElement.nativeElement;
		expect(ELEMENT.querySelector('h1').textContent).toContain('Welcome to poke-api!');
	});
});

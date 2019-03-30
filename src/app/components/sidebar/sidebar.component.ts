import {Component, Input, OnInit} from '@angular/core';

/**
 * Sidebar component.
 */
@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
	// region public fields
	/**
	 * The navbar links
	 */
	@Input() public links: {exact: boolean; label: string; path: string}[] = [];

	/**
	 * The navbar width;
	 */
	@Input() public width: number = 250;
	// endregion

	// region private fields
	/**
	 * The current width.
	 */
	private _currentWidth: number = 0;
	// endregion

	// region accessors
	/**
	 * Gets the current width.
	 */
	public get currentWidth(): number {
		return this._currentWidth;
	}
	// endregion

	// region public methods
	/**
	 * Initializes the component.
	 */
	public ngOnInit(): void {
		this._currentWidth = this.width;
	}

	/**
	 * Toggles the sidebar.
	 */
	public toggle(): void {
		this._currentWidth = this._currentWidth === 0 ? this.width : 0;
	}
	// endregion
}

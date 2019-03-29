import {Component, Input} from '@angular/core';
import {Type, TYPE_COLORS} from '../../models';

/**
 * Type item component.
 */
@Component({
	selector: 'app-type-item',
	templateUrl: './type-item.component.html'
})
export class TypeItemComponent {
	// region public fields
	/**
	 * The type to display.
	 */
	@Input() public type: Type;
	// endregion

	// region accessors
	/**
	 * Gets the type color.
	 */
	public get typeColor(): string {
		return TYPE_COLORS[this.type.name];
	}
	// endregion
}

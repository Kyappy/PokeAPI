import {Component, Input} from '@angular/core';
import {Pokemon} from '../../models';

/**
 * Pokemon item component.
 */
@Component({
	selector: 'app-pokemon-item',
	templateUrl: './pokemon-item.component.html'
})
export class PokemonItemComponent {
	// region public fields
	/**
	 * The pokemon to display.
	 */
	@Input() public pokemon: Pokemon;
	// endregion
}

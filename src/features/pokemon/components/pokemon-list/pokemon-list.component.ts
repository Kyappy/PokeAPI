import {Component, Input} from '@angular/core';
import {Pokemon} from '../../models';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent {
	/**
	 * THe list of pokemons to display.
	 */
	@Input() public pokemons: Pokemon[];
}

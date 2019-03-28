import {Component} from '@angular/core';
import {PokemonService} from '@features/pokemon';
import {Pokemon} from '@features/pokemon/models';
import {IRestQuery} from '@features/rest';

/**
 * Pokemon list page.
 */
@Component({
	templateUrl: './list.page.html'
})
export class ListPage {
	/**
	 * The pokemon list to display.
	 */
	public pokemons: Pokemon[];

	/**
	 * Creates a new {@link ListPage} instance.
	 * @param _POKEMON_SERVICE THe pokemon service to inject.
	 */
	public constructor(private readonly _POKEMON_SERVICE: PokemonService) {
		this._POKEMON_SERVICE.list$().subscribe((query: IRestQuery<Pokemon[]>) => this.pokemons = query.results);
	}
}

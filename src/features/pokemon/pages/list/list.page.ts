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
	// region public fields
	/**
	 * The pokemon list to display.
	 */
	public pokemonsQuery: IRestQuery<Pokemon[]>;
	// endregion

	/**
	 * Creates a new {@link ListPage} instance.
	 * @param _POKEMON_SERVICE THe pokemon service to inject.
	 */
	public constructor(private readonly _POKEMON_SERVICE: PokemonService) {
		this._POKEMON_SERVICE.list$().subscribe((query: IRestQuery<Pokemon[]>) => this.pokemonsQuery = query);
	}

	// region public methods
	/**
	 * Changes the page following the given url.
	 * @param url The page request url.
	 */
	public changePage(url: string): void {
		this._POKEMON_SERVICE.get$(url).subscribe((query: IRestQuery<Pokemon[]>) => this.pokemonsQuery = query);
	}
	// endregion
}

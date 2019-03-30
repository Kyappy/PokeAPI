import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Pokemon, PokemonService} from '@features/pokemon';
import {take} from 'rxjs/operators';

/**
 * Details page component.
 */
@Component({
	templateUrl: './details.page.html'
})
export class DetailsPage {
	// region public fields
	/**
	 * The pokemon to display.
	 */
	public pokemon: Pokemon;
	// endregion

	/**
	 * Creates a new {@link DetailsPage} instance.
	 * @param _ROUTE The activated route to inject.
	 * @param _POKEMON_SERVICE The pokemon service to inject.
	 */
	public constructor(private readonly _ROUTE: ActivatedRoute, private readonly _POKEMON_SERVICE: PokemonService) {
		this._ROUTE.params.pipe(take(1)).subscribe((params: Params) => {
			this._POKEMON_SERVICE.get$(params.id)
				.subscribe((query: Pokemon) => this.pokemon = query);
		});
	}
}

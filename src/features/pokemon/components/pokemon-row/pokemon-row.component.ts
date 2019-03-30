import {Component, Input, OnInit} from '@angular/core';
import {IRestQuery} from '@features/rest';
import {Pokemon} from '../../models';
import {PokemonService} from '../../services';

@Component({
	selector: '[appPokemonRow]',
	templateUrl: './pokemon-row.component.html'
})
export class PokemonRowComponent implements OnInit {
	// region public fields
	/**
	 * The pokemon to display.
	 */
	public pokemon: Pokemon;
	// endregion

	// region private fields
	/**
	 * The pokemon to fetch.
	 */
	@Input('appPokemonRow') private _pokemon: Pokemon;
	// endregion

	/**
	 * Creates a new {@link PokemonRowComponent} instance.
	 * @param _POKEMON_SERVICE THe pokemon service to inject.
	 */
	public constructor(private readonly _POKEMON_SERVICE: PokemonService) {}

	// region public methods
	public ngOnInit(): void {
		this._POKEMON_SERVICE.get$(this._pokemon.url).subscribe((pokemon: Pokemon) => this.pokemon = pokemon);
	}
	// endregion
}

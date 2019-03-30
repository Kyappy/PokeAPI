import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router, RouterEvent} from '@angular/router';
import {PokemonService} from '@features/pokemon';
import {Pokemon} from '@features/pokemon/models';
import {IRestQuery} from '@features/rest';
import {Subscription} from 'rxjs/internal/Subscription';
import {filter, take} from 'rxjs/operators';

/**
 * Default page limit.
 */
const LIMIT: number = 15;

/**
 * The parse number radix.
 */
const PARSE_RADIX: number = 10;

/**
 * Pokemon list page.
 */
@Component({
	templateUrl: './list.page.html'
})
export class ListPage implements OnDestroy {
	// region public fields
	/**
	 * The page limit.
	 */
	public limit: number;

	/**
	 * The current page displayed.
	 */
	public page: number;

	/**
	 * The pokemon list to display.
	 */
	public pokemonsQuery: IRestQuery<Pokemon[]>;
	// endregion

	// region private fields
	private _subscription: Subscription;
	// endregion

	/**
	 * Creates a new {@link ListPage} instance.
	 * @param _ROUTER The activated route to inject.
	 * @param _ROUTE The current activated route.
	 * @param _POKEMON_SERVICE The pokemon service to inject.
	 */
	public constructor(private readonly _ROUTER: Router, private readonly _ROUTE: ActivatedRoute, private readonly _POKEMON_SERVICE: PokemonService) {
		this._subscription = _ROUTER.events.pipe(filter((event: RouterEvent) => event instanceof NavigationEnd)).subscribe(() => {
			_ROUTE.queryParams.pipe(take(1)).subscribe((params: Params) => {
				this.page = Number.parseInt(params.page != null ? params.page : 0, PARSE_RADIX);
				this.limit = Number.parseInt(params.limit != null ? params.limit : LIMIT, PARSE_RADIX);

				this._POKEMON_SERVICE.list$(this.page, this.limit).subscribe((query: IRestQuery<Pokemon[]>) => this.pokemonsQuery = query);
			});
		});
	}

	// region public methods
	/**
	 * Destroys the component.
	 */
	public ngOnDestroy(): void {
		this._subscription.unsubscribe();
	}
	// endregion
}

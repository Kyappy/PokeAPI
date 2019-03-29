import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {IRestQuery, RestService} from '@features/rest';
import {Observable} from 'rxjs/internal/Observable';
import {Pokemon} from '../../models';

/**
 * Pokemon service.
 */
@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	/**
	 * The pokemon route.
	 */
	private readonly _route: string = 'pokemon';

	/**
	 * Create a new {@link PokemonService} instance.
	 * @param _HTTP The http service to inject.
	 * @param _REST_SERVICE The rest service to inject.
	 */
	public constructor(private readonly _HTTP: HttpClient, private readonly _REST_SERVICE: RestService) {}

	/**
	 * Performs a get query on the rest url.
	 * @param url The rest url to get.
	 * @returns The request result.
	 */
	public get$<T>(url: string): Observable<T> {
		return this._HTTP.get<T>(url);
	}

	/**
	 * List all of the Pokemons.
	 * @returns Pokemon collection observable.
	 */
	public list$(): Observable<IRestQuery<Pokemon[]>> {
		return this._HTTP.get<IRestQuery<Pokemon[]>>(this._REST_SERVICE.url(this._route));
	}
}

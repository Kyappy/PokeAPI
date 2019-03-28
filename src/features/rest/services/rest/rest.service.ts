import {Inject, Injectable} from '@angular/core';
import {API_TOKEN, IApiConfiguration} from '@application/configurations';

@Injectable({
	providedIn: 'root'
})
export class RestService {
	/**
	 * Create a new {@link RestService} instance.
	 * @param _API_TOKEN The api token configuration to inject.
	 */
	public constructor(@Inject(API_TOKEN) private readonly _API_TOKEN: IApiConfiguration) {}

	// region accessors
	/**
	 * Get the rest url.
	 * @param route The route to build.
	 */
	public url(route: string): string {
		return `${this._API_TOKEN.domain}/${this._API_TOKEN.prefix}/${route}`;
	}
	// endregion
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ENVIRONMENT} from 'environments/environment';

/**
 * Application configuration service.
 */
@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	/**
	 * Create a new {@link ConfigurationService} instance.
	 * @param _HTTP The http service to inject.
	 */
	public constructor(private readonly _HTTP: HttpClient) {}

	/**
	 * Loads the application configurations.
	 * @param tokens The tokens to initialize.
	 * @returns Promise resolved when the application configuration is loaded.
	 */
	public async load(tokens: {}): Promise<void> {
		const PROMISES: Promise<void>[] = [];

		for (const TOKEN in tokens) {
			if (!tokens.hasOwnProperty(TOKEN)) continue;
			PROMISES.push(this._HTTP.get(`./assets/configurations/${ENVIRONMENT}/${TOKEN}.json`).toPromise().then((data: {}) => {
				for (const CONFIGURATION in data[TOKEN]) {
					if (!data[TOKEN].hasOwnProperty(CONFIGURATION)) continue;
					tokens[TOKEN][CONFIGURATION] = data[TOKEN][CONFIGURATION];
				}
			}));
		}

		return Promise.all(PROMISES).then(() => null);
	}
}

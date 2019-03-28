import {APP_INITIALIZER, NgModule} from '@angular/core';
import {API_TOKEN, IApiConfiguration} from '@application/configurations';
import {ConfigurationService} from '@application/services';

/**
 * Loads the application configuration initialization using the given values.
 * @param configurationService - The configuration service to use.
 * @param apiToken - The api token to initialize.
 * @returns The configuration service resolved promise.
 */
export const applicationInitializer: (
	configurationService: ConfigurationService,
	apiToken: IApiConfiguration) => void = (
	configurationService: ConfigurationService,
	apiToken: IApiConfiguration): () => void => async(): Promise<void> =>
		configurationService.load({
			api: apiToken
		});

/**
 * Configuration module.
 */
@NgModule({
	providers: [
		{provide: APP_INITIALIZER, useFactory: applicationInitializer, deps: [ConfigurationService, API_TOKEN], multi: true}
	]
})
export class ConfigurationModule {}

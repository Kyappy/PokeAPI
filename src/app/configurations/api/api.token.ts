import {InjectionToken} from '@angular/core';
import {IApiConfiguration} from './i-api.configuration';

export const API_TOKEN: InjectionToken<IApiConfiguration> = new InjectionToken<IApiConfiguration>('api.configuration');

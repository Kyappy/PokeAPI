// tslint:disable:no-any

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

declare const require: any;

// First, initialize the Angular testing ENVIRONMENT.
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);
// Then we find all the tests.
const CONTEXT: any = require.context('../../', true, /\.spec\.ts$/);
// And load the modules.
CONTEXT.keys().map(CONTEXT);

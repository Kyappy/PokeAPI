import {NgModule} from '@angular/core';
import {GlobalModule} from '@application/modules/utilities/global.module';

/**
 * Application shared module.
 */
@NgModule({
	imports: [
		GlobalModule
	]
})
export class SharedModule {}

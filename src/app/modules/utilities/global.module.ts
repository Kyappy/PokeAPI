import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/**
 * Global module.
 * It exports modules used for both public and private core declarations.
 */
@NgModule({
	exports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule
	]
})
export class GlobalModule {}

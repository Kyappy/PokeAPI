import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PokemonCommonModule} from './pokemon-common.module';

/**
 * Pokemon module.
 */
@NgModule({
	exports: [
		PokemonCommonModule
	],
	imports: [
		CommonModule
	]
})
export class PokemonModule {}

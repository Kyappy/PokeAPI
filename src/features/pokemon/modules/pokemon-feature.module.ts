import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DetailsPage, ListPage} from '../pages';
import {PokemonCommonModule} from './pokemon-common.module';
import {PokemonRoutingModule} from './pokemon-routing.module';

/**
 * Pokemon feature module.
 */
@NgModule({
	declarations: [
		ListPage,
		DetailsPage
	],
	imports: [
		PokemonRoutingModule,
		PokemonCommonModule,
		CommonModule
	]
})
export class PokemonFeatureModule {}

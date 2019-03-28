import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PokemonItemComponent, PokemonListComponent} from '../components';

/**
 * Pokemon common module.
 */
@NgModule({
	declarations: [
		PokemonItemComponent,
		PokemonListComponent
	],
	exports: [
		PokemonItemComponent,
		PokemonListComponent
	],
	imports: [
		CommonModule
	]
})
export class PokemonCommonModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TypeModule} from '@features/type';
import {PokemonItemComponent, PokemonListComponent, PokemonRowComponent} from '../components';

/**
 * Pokemon common module.
 */
@NgModule({
	declarations: [
		PokemonItemComponent,
		PokemonListComponent,
		PokemonRowComponent
	],
	exports: [
		PokemonItemComponent,
		PokemonListComponent
	],
	imports: [
		CommonModule,
		TypeModule
	]
})
export class PokemonCommonModule {}

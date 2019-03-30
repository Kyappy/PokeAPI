import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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
		RouterModule,
		TypeModule
	]
})
export class PokemonCommonModule {}

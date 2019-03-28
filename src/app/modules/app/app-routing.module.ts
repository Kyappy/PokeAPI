import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
	// {
	// 	children: [
	// 		// {path: '', component: DashboardPage}
	// 	],
	// 	// component: MainLayout,
	// 	path: ''
	// },
	{
		loadChildren: '../../../features/pokemon/modules/pokemon-feature.module#PokemonFeatureModule',
		path: 'pokemons'
	}
];

/**
 * Application routing module.
 */
@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {}

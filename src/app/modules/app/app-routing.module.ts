import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage, MainLayout} from '../../pages';

const ROUTES: Routes = [
	{
		children: [
			{
				component: HomePage,
				path: ''
			},
			{
				loadChildren: '../../../features/pokemon/modules/pokemon-feature.module#PokemonFeatureModule',
				path: 'pokemons'
			}
		],
		component: MainLayout,
		path: ''
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

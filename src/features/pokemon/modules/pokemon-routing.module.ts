import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsPage, ListPage} from '../pages';

export const ROUTES: Routes = [
	{
		children: [
			{path: '', component: ListPage},
			{path: 'details/:id', component: DetailsPage}
		],
		path: ''
	}
];

/**
 * Pokemon routing module.
 */
@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(ROUTES)]
})
export class PokemonRoutingModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TypeItemComponent} from '../components';

@NgModule({
	declarations: [
		TypeItemComponent
	],
	exports: [
		TypeItemComponent
	],
	imports: [
		CommonModule
	]
})
export class TypeModule {}

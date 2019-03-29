import {ITypeColor} from '../contracts';

/**
 * Type color data.
 */
export const TYPE_COLORS: ITypeColor = {
	bug: '#a8b820',
	dark: '#705848',
	dragon: '#7038f8',
	electric: '#f8d030',
	fairy: '#f0b6bc',
	fighting: '#c03028',
	fire: '#f08030',
	flying: '#a890f0',
	ghost: '#705898',
	grass: '#78c850',
	ground: '#e0c068',
	ice: '#98d8d8',
	normal: '#a8a878',
	poison: '#a040a0',
	psychic: '#f85888',
	rock: '#b8a038',
	steel: '#b8b8d0',
	water: '#6890f0'
};

/**
 * Pokemon type model.
 */
export class Type {
	/**
	 * The type name.
	 */
	public name: string;

	/**
	 * The type url.
	 */
	public url: string;
}

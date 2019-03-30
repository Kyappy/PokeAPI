import {Type} from '@features/type';
import {Sprites} from './sprites';

/**
 * Pokemon model.
 */
export class Pokemon {
	/**
	 * The pokemon abilities.
	 */
	public abilities: {ability: { name: string}}[];

	/**
	 * Base experience.
	 */
	public base_experience: number;

	/**
	 * The pokemon name.
	 */
	public height: number;

	/**
	 * The pokemon id.
	 */
	public id: number;

	/**
	 * The pokemon moves.
	 */
	public moves: { move: { name: string } }[];

	/**
	 * The pokemon name.
	 */
	public name: string;

	/**
	 * The pokemon sprites.
	 */
	public sprites: Sprites;

	/**
	 * The pokemon sprites.
	 */
	public stats: { base_stat: number; effort: number; stat: {name: string}}[];

	/**
	 * The pokemon types.
	 */
	public types: {slot: number; type: Type}[];

	/**
	 * The pokemon url.
	 */
	public url: string;

	/**
	 * The pokemon weight.
	 */
	public weight: number;
}

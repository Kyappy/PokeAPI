import {Type} from '@features/type';
import {Sprites} from './sprites';

/**
 * Pokemon model.
 */
export class Pokemon {
	/**
	 * The pokemon name.
	 */
	public height: number;

	/**
	 * The pokemon id.
	 */
	public id: number;

	/**
	 * The pokemon name.
	 */
	public name: string;

	/**
	 * The pokemon order.
	 */
	public order: number;

	/**
	 * The pokemon sprites.
	 */
	public sprites: Sprites;

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

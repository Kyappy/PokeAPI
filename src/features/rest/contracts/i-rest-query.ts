/**
 * Rest query interface.
 */
export interface IRestQuery<T> {
	count: number;
	next: string;
	previous: string;
	results: T;
}

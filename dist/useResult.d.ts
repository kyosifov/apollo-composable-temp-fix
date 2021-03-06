import { Ref } from 'vue-demi';
import { ExtractSingleKey } from './util/ExtractSingleKey';
export declare type UseResultReturn<T> = Readonly<Ref<Readonly<T>>>;
/**
* Resolve a `result`, returning either the first key of the `result` if there
* is only one, or the `result` itself. The `value` of the ref will be
* `undefined` until it is resolved.
*
* @example
* const { result } = useQuery(...)
* const user = useResult(result)
* // user is `void` until the query resolves
*
* @param  {Ref<TResult>} result A `result` returned from `useQuery` to resolve.
* @returns Readonly ref with `void` or the resolved `result`.
*/
export declare function useResult<TResult, TResultKey extends keyof TResult = keyof TResult>(result: Ref<TResult>): UseResultReturn<void | ExtractSingleKey<TResult, TResultKey>>;
/**
 * Resolve a `result`, returning either the first key of the `result` if there
 * is only one, or the `result` itself. The `value` of the ref will be
 * `defaultValue` until it is resolved.
 *
 * @example
 * const { result } = useQuery(...)
 * const profile = useResult(result, {})
 * // profile is `{}` until the query resolves
 *
 * @param  {Ref<TResult>} result A `result` returned from `useQuery` to resolve.
 * @param  {TDefaultValue} defaultValue The default return value before `result` is resolved.
 * @returns Readonly ref with the `defaultValue` or the resolved `result`.
 */
export declare function useResult<TResult, TDefaultValue, TResultKey extends keyof TResult = keyof TResult>(result: Ref<TResult>, defaultValue: TDefaultValue): UseResultReturn<TDefaultValue | ExtractSingleKey<TResult, TResultKey>>;
/**
 * Resolve a `result`, returning the `result` mapped with the `pick` function.
 * The `value` of the ref will be `defaultValue` until it is resolved.
 *
 * @example
 * const { result } = useQuery(...)
 * const comments = useResult(result, undefined, (data) => data.comments)
 * // user is `undefined`, then resolves to the result's `comments`
 *
 * @param  {Ref<TResult>} result A `result` returned from `useQuery` to resolve.
 * @param  {TDefaultValue} defaultValue The default return value before `result` is resolved.
 * @param  {(data:TResult)=>TReturnValue} pick The function that receives `result` and maps a return value from it.
 * @returns Readonly ref with the `defaultValue` or the resolved and `pick`-mapped `result`
 */
export declare function useResult<TResult, TDefaultValue, TReturnValue, TResultKey extends keyof TResult = keyof TResult>(result: Ref<TResult>, defaultValue: TDefaultValue | undefined, pick: (data: TResult) => TReturnValue): UseResultReturn<TDefaultValue | TReturnValue>;

import { DocumentNode } from 'graphql';
import { MutationOptions, OperationVariables } from 'apollo-client';
import { Ref } from 'vue-demi';
import { FetchResult } from 'apollo-link';
import { ReactiveFunction } from './util/ReactiveFunction';
/**
 * `useMutation` options for mutations that don't require `variables`.
 */
export interface UseMutationOptions<TResult = any, TVariables = OperationVariables> extends Omit<MutationOptions<TResult, TVariables>, 'mutation'> {
    clientId?: string;
}
export declare type MutateOverrideOptions = Pick<UseMutationOptions<any, OperationVariables>, 'update' | 'optimisticResponse' | 'context' | 'updateQueries' | 'refetchQueries' | 'awaitRefetchQueries' | 'errorPolicy' | 'fetchPolicy' | 'clientId'>;
export declare type MutateResult<TResult> = Promise<FetchResult<TResult, Record<string, any>, Record<string, any>>>;
export declare type MutateFunction<TResult, TVariables> = (variables?: TVariables, overrideOptions?: MutateOverrideOptions) => MutateResult<TResult>;
export interface UseMutationReturn<TResult, TVariables> {
    mutate: MutateFunction<TResult, TVariables>;
    loading: Ref<boolean>;
    error: Ref<Error>;
    called: Ref<boolean>;
    onDone: (fn: (param?: FetchResult<TResult, Record<string, any>, Record<string, any>>) => void) => {
        off: () => void;
    };
    onError: (fn: (param?: Error) => void) => {
        off: () => void;
    };
}
/**
 * Use a mutation with variables.
 */
export declare function useMutation<TResult = any, TVariables extends OperationVariables = OperationVariables>(document: DocumentNode | ReactiveFunction<DocumentNode>, options?: UseMutationOptions<TResult, TVariables> | ReactiveFunction<UseMutationOptions<TResult, TVariables>>): UseMutationReturn<TResult, TVariables>;
/**
 * Use a mutation with variables, but without a default.
 */
export declare function useMutation<TResult = any, TVariables extends OperationVariables = OperationVariables>(document: DocumentNode | ReactiveFunction<DocumentNode>, options?: UseMutationOptions<TResult, undefined> | ReactiveFunction<UseMutationOptions<TResult, undefined>>): UseMutationReturn<TResult, TVariables>;

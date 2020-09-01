"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_demi_1 = require("vue-demi");
exports.DefaultApolloClient = Symbol('default-apollo-client');
exports.ApolloClients = Symbol('apollo-clients');
function resolveDefaultClient(providedApolloClients, providedApolloClient) {
    var resolvedClient = providedApolloClients ?
        providedApolloClients.default
        : providedApolloClient;
    if (!resolvedClient) {
        throw new Error('Apollo Client with id default not found');
    }
    return resolvedClient;
}
function resolveClientWithId(providedApolloClients, clientId) {
    if (!providedApolloClients) {
        throw new Error("No apolloClients injection found, tried to resolve '" + clientId + "' clientId");
    }
    var resolvedClient = providedApolloClients[clientId];
    if (!resolvedClient) {
        throw new Error("Apollo Client with id " + clientId + " not found");
    }
    return resolvedClient;
}
function useApolloClient(clientId) {
    var providedApolloClients = vue_demi_1.inject(exports.ApolloClients, null);
    var providedApolloClient = vue_demi_1.inject(exports.DefaultApolloClient, null);
    function resolveClient() {
        if (clientId) {
            resolveClientWithId(providedApolloClients, clientId);
        }
        return resolveDefaultClient(providedApolloClients, providedApolloClient);
    }
    return {
        resolveClient: resolveClient,
        get client() {
            return resolveClient();
        }
    };
}
exports.useApolloClient = useApolloClient;
//# sourceMappingURL=useApolloClient.js.map
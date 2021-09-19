import {
    ApolloClient,
    InMemoryCache,
    HttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const githubToken = ""; //TODO: Use your token

const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = "Bearer " + githubToken;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? token : null
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
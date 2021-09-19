import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RootStackParamList } from './navigator/RootStackPrams';

import {createStore} from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const githubToken = ""; //TODO: Use your token

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  const  store = createStore(allReducers);

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

  return (
    <Provider store = {store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
    
  );
}

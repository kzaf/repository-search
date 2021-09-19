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
import {ApolloProvider} from "@apollo/client";
import apolloClient from "./api/ApolloClient"

const Stack = createStackNavigator<RootStackParamList>();
const store = createStore(allReducers);


export default function App() {
  return (

    <Provider store = {store}>
      <ApolloProvider client={apolloClient}>
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

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackPrams';
import { FlatList } from 'react-native-gesture-handler';
import { gql, useLazyQuery } from "@apollo/client";


const GET_REPOSITORIES = gql`
  query SearchRepositories($userQuery: String!) {
    search(query: $userQuery, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            id
            url
            description
            stargazerCount
            nameWithOwner
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export default function ResultListComponent() {

    type searchScreenProp = StackNavigationProp<RootStackParamList, 'Details'>;
    const navigation = useNavigation<searchScreenProp>();

    const query = useSelector((state) => state.query.text);

    const [ getRepositories, { loading: loadingRepositories, data: repositoryData } ] = useLazyQuery(
        GET_REPOSITORIES, { 
            variables: { 
                userQuery: query 
            } 
        });

    useEffect(() => {
        const timeoutId = setTimeout(() => getRepositories(), 1000);
        return () => clearTimeout(timeoutId);
    }, [])

    const ItemView = ({ item }: { item: any }) => {
        return (
            <TouchableNativeFeedback onPress={() => navigation.navigate('Details')}>
                <Text style={{ padding: 15 }}>
                    {item.node.nameWithOwner.split("/")[1]}
                </Text>
            </TouchableNativeFeedback>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
            />
        )
    }

    return (
        <View style={styles.container}>
            {(loadingRepositories) && (
                <ActivityIndicator style={{ padding: 10 }} size="large" animating={true} />
            )}
            {(repositoryData) && (
                <FlatList
                    style={{
                        height: '100%'
                    }}
                    data={repositoryData.search.edges}
                    keyExtractor={(item) => item.node.id}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#DFE1E5'
    }
})
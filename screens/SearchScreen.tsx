
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { FlatList } from 'react-native-gesture-handler';


type searchScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
    const navigation = useNavigation<searchScreenProp>();

    const [filterdData, setfilterdData] = useState([]);
    const [masterData, setmasterData] = useState([]);

    useEffect(() => {
        fetchRepos();
        return()=>{

        }
    }, [])

    const fetchRepos = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response) => response.json() )
        .then((responseJson) => {
            setfilterdData(responseJson);
            setmasterData(responseJson);
        }).catch((error) => {
            console.error(error);
        })
    }

    const ItemView = ({item}:{item:any}) => {
        return (
            <TouchableNativeFeedback onPress={() => navigation.navigate('Details')}>
                <Text style={{padding: 15}}>
                    {item.id}{'. '}{item.title}
                </Text>
            </TouchableNativeFeedback>


        )
    }

    const ItemSeparatorView = () => {
        return(
            <View 
                style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} 
            />
        )
    }

    return (
        <View style={{backgroundColor: 'white'}}>
            <FlatList
                data={filterdData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
        </View>
        
    );
}

export default SearchScreen;
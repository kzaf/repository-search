
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';

type searchScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
    const navigation = useNavigation<searchScreenProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search Screen</Text>
            <Button title="Details Screen" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

export default SearchScreen;
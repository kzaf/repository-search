
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';

type detailsScreenProp = StackNavigationProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
    const navigation = useNavigation<detailsScreenProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default DetailsScreen;
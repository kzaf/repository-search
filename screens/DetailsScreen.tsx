
import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


function DetailsScreen() {

    const selectedRepo = useSelector((state) => state.selectedRepository.selectedRepo);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {console.log(JSON.stringify(selectedRepo.name))}
            <Text>{JSON.stringify(selectedRepo.name)}</Text>
            <Text>{JSON.stringify(selectedRepo.description)}</Text>
        </View>
    );
}

export default DetailsScreen;
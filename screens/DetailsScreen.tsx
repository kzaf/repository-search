import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { useSelector } from 'react-redux';


function DetailsScreen() {

    const selectedRepo = useSelector((state) => state.selectedRepository.selectedRepo);
    const repoName = selectedRepo.name;
    const repoDescription = selectedRepo.description;
    const repoLink = selectedRepo.url;

    return (
        <View style={styles.container}>
            <Text>{repoName}</Text>
            <Text>{repoDescription}</Text>
            <Text style={styles.hyperlink}
                onPress={() => Linking.openURL(repoLink)}>
                Repo URL
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    hyperlink: {
        color: 'blue'
    }
})

export default DetailsScreen;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchContainer from "../components/SearchBarComponent";
import ResultList from "../components/ResultListComponent";

function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchContainer />
            <ResultList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default SearchScreen;
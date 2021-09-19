import React from 'react';
import { View } from 'react-native';
import SearchContainer from "../components/SearchBarComponent";
import ResultList from "../components/ResultListComponent";

function SearchScreen() {
    return (
        <View style={{backgroundColor: 'white'}}>
            <SearchContainer />
            <ResultList />
        </View>
    );
}

export default SearchScreen;
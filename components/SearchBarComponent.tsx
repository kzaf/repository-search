import React from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBarComponent() {

    const dispatch = useDispatch();
    const query = useSelector<string>(state => state.query.text);

    const onChangeSearch = (newQuery: string) => dispatch({ type: "UPDATE_QUERY", payload: newQuery });

    return (
        <Searchbar
            placeholder="Search repositories"
            onChangeText={onChangeSearch}
            value={query}
            style={[styles.searchBarContainer]}
            inputStyle={styles.searchText}
            iconColor={"black"}
        />
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: 'white',
    },
    searchText: {
        color: 'black'
    }
})
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
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={query}
            style={[styles.container, styles.darkModeContainer]}
            inputStyle={styles.darkModeText}
            iconColor={"white"}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#DFE1E5'
    },
    darkModeContainer: {
        backgroundColor: 'black',
    },
    darkModeText: {
        color: 'white'
    }
})
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function RadioButtonContainer() {
    const dispatch = useDispatch();
    const option = useSelector((state) => state.searchOption.value);

    return (
        <RadioButton.Group
            onValueChange={(newValue) => {
                dispatch({ type: "TOGGLE_OPTION", payload: newValue })
                dispatch({ type: "RESET_QUERY" })
                }
            }
            value={option}
        >
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <View style={styles.container}>
                    <RadioButton value="C" uncheckedColor="gray" status={option === 'C' ? 'checked' : "unchecked"} />
                    <Text style={styles.radioButtonText}>C</Text>
                </View>
                <View style={styles.container}>
                    <RadioButton value="C#" uncheckedColor="gray" status={option === 'C#' ? 'checked' : "unchecked"} />
                    <Text style={styles.radioButtonText}>C#</Text>
                </View>
                <View style={styles.container}>
                    <RadioButton value="JavaScript" uncheckedColor="gray" status={option === 'JavaScript' ? 'checked' : "unchecked"} />
                    <Text style={styles.radioButtonText}>JavaScript</Text>
                </View>
                <View style={styles.container}>
                    <RadioButton value="Rust" uncheckedColor="gray" status={option === 'Rust' ? 'checked' : "unchecked"} />
                    <Text style={styles.radioButtonText}>Rust</Text>
                </View>
                <View style={styles.container}>
                    <RadioButton value="Go" uncheckedColor="gray" status={option === 'Go' ? 'checked' : "unchecked"} />
                    <Text style={styles.radioButtonText}>Go</Text>
                </View>
            </View>
        </RadioButton.Group>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    radioButtonText: {
        color: 'black'
    }
});
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CheckBox} from "react-native-web";
import Ionicons from "react-native-vector-icons/Ionicons";


const CustomCheckBox = ({ onChange, size, label }) => {

    const [isChecked, setIsChecked] = useState(false);

    // Toggle checkbox state
    const toggleCheckBox = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        if (onChange) {
            onChange(newState); // Pass the new state to the parent component
        }
    };
    // Set textbox size defaults
    const boxWidth = size?.width || 20;
    const boxHeight = size?.height || 20;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.CheckBox, { width: boxWidth, height: boxHeight}]}
                onPress={toggleCheckBox}
                activeOpacity={0.7}
            >
                    {isChecked && (
                        <Ionicons
                            name="checkmark"
                            size={boxWidth / 1.5} // Adjust checkmark size relative to box size
                            color="#4C55D9" // Checkmark color
                        />
                    )}
            </TouchableOpacity>
            {label && <Text style={styles.label}>{label}</Text>}
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    CheckBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4C55D9',
        marginRight: 5
    },
    label: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: '#fff',
    },
});

export default CustomCheckBox;

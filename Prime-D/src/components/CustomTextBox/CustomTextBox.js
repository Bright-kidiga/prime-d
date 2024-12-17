import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomTextBox = ({ placeholder, value, onChangeText, style, textStyle, size, secureTextEntry }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Set textbox size defaults
    const boxWidth = size?.width || 300; // Default to 300px width if not provided
    const boxHeight = size?.height || 50; // Default to 50px height if not provided
    const boxPadding = size?.padding || 10; // Default padding

    const toggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={[styles.textBox, { width: boxWidth, height: boxHeight, paddingVertical: boxPadding }]}>
            <TextInput
                style={[styles.input, textStyle]}  // Styling for the input field
                placeholder={placeholder}  // Placeholder text
                value={value}  // The current value of the input
                onChangeText={onChangeText}  // Callback to handle text changes
                secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle secure entry
                placeholderTextColor="#FFF"  // Color of the placeholder text
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={toggleVisibility}
                    style={styles.eyeIcon}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name={isPasswordVisible ? "eye-off" : "eye"} // Switch between eye icons
                        size={boxHeight * 0.5} // Icon size is responsive to box height
                        color="#4C55D9"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4C55D9',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        color: '#fff',  // Text color inside the textbox
        fontSize: 16,
        fontWeight: 'normal',
        border: null,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomTextBox;

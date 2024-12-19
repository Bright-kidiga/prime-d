import React, { useState, useRef } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomTextBox = ({
                           placeholder,
                           value,
                           onChangeText,
                           style,
                           textStyle,
                           size,
                           secureTextEntry
                       }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const animatedPlaceholder = useRef(new Animated.Value(0)).current;

    // Set textbox size defaults
    const boxWidth = size?.width || 300; // Default to 300px width if not provided
    const boxHeight = size?.height || 50; // Default to 50px height if not provided
    const boxPadding = size?.padding || 10; // Default padding

    const toggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(animatedPlaceholder, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false);
            Animated.timing(animatedPlaceholder, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const placeholderStyle = {
        top: animatedPlaceholder.interpolate({
            inputRange: [0, 1],
            outputRange: [15, -14], // Move up when focused
        }),
        left: animatedPlaceholder.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 7], // Adjust left position slightly
        }),
        fontSize: animatedPlaceholder.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 10], // Shrink font size
        }),
    };

    return (
        <View style={[styles.textBox, { width: boxWidth, height: boxHeight, paddingVertical: boxPadding }]}>
            <Animated.Text style={[styles.placeholder, placeholderStyle]}>
                {placeholder}
            </Animated.Text>
            <TextInput
                style={[styles.input, textStyle]}  // Styling for the input field
                value={value}  // The current value of the input
                onChangeText={onChangeText}  // Callback to handle text changes
                secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle secure entry
                placeholderTextColor="transparent"  // Set transparent to avoid double placeholder
                onFocus={handleFocus}
                onBlur={handleBlur}
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
        position: 'relative',
    },
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        color: '#fff',  // Text color inside the textbox
        fontSize: 16,
        fontWeight: 'normal',
    },
    placeholder: {
        position: 'absolute',
        color: '#aaa', // Placeholder color
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomTextBox;

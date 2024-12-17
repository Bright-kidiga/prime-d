import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, onPress, style, textStyle, disabled, size }) => {
    // Set button size defaults
    const buttonWidth = size?.width || 300; // Default to 250px width if not provided
    const buttonHeight = size?.height || 50; // Default to 50px height if not provided
    const buttonPadding = size?.padding || 10; // Default padding

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.touchable, disabled && styles.disabledButton, style]}
        >
            <LinearGradient
                colors={['#563F9D80', '#563F9D30', '#563F9D80']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.44, 1]}
                style={[styles.button, { width: buttonWidth, height: buttonHeight, paddingVertical: buttonPadding }]}
            >
                <Text style={[styles.buttonText, textStyle]}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        borderRadius: 6,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.2, // iOS shadow
        shadowRadius: 4, // iOS shadow
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4C55D9',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
    },
    disabledButton: {
        opacity: 0.6, // Dims the button for disabled state
    },
});

export default CustomButton;

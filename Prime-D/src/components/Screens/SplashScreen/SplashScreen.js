import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Splashscreen = ({ navigation }) => {
    useEffect(() => {
        // Navigate to SplashScreen2 after 3 seconds
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000); // 3 seconds

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <LinearGradient
            colors={['#1E1E1E', '#1E1637', '#563F9D']}
            locations={[0, 0.44, 1]}
            style={styles.container}
        >
            <Text style={styles.title}>PRIME-D</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: 64,
        fontWeight: '900',
        color: '#fff',
    },
});

export default Splashscreen;

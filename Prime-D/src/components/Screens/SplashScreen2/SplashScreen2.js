import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const carouselData = [
    {
        title: 'Slide 1: Welcome to PRIME-D!',
        description: 'This is the first slide with text description.',
    },
    {
        title: 'Slide 2: Features of PRIME-D',
        description: 'Here we explain the features of PRIME-D.',
    },
    {
        title: 'Slide 3: Get Started Now',
        description: 'This is the final slide encouraging users to start.',
    },
];

const TextCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.carouselContainer}>
            <Swiper
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                showsPagination={true}
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                index={activeIndex}
                onIndexChanged={setActiveIndex} // Simplified index change handling
            >
                {carouselData.map((item, index) => (
                    <View key={index} style={styles.slide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const SplashScreen2 = () => (
    <LinearGradient
        colors={['#1E1E1E', '#1E1637', '#563F9D']}
        locations={[0, 0.44, 1]}
        style={styles.container}
    >
        <TextCarousel />
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    carouselContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    pagination: {
        bottom: 10,
    },
    dot: {
        backgroundColor: '#bbb',
    },
    activeDot: {
        backgroundColor: '#F065A6', // Active dot color
    },
});

export default SplashScreen2;

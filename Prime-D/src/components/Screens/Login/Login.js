import React, { useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {Text, StyleSheet, ActivityIndicator, View, TextInput, TouchableOpacity} from "react-native";
import CustomButton from "../../CustomButton/CustomButton";
import CustomTextBox from "../../CustomTextBox/CustomTextBox";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Login = ({ navigation }) => {
    // useEffect(() => {
    //     // Directly navigate to Home without checking session
    //     navigation.navigate('Home');
    // }, [navigation]);

    return (
        <LinearGradient
            colors={['#1E1E1E', '#1E1637', '#563F9D']}
            locations={[0, 0.44, 1]}
            style={styles.container}
        >
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={styles.AltSignin}>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.btnIcon}>
                        <FontAwesome
                            name="google"
                            size={20} // Adjust icon size
                            color="#DB4437" // Google's red color
                        />
                    </View>
                    <Text style={styles.btnText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.btnIcon}>
                        <FontAwesome
                            name="apple"
                            size={20} // Adjust icon size
                            color="#fff" // Google's red color
                        />
                    </View>
                    <Text style={styles.btnText}>Apple</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.divText}>or continue with email</Text>
            <View style={styles.textBoxContainer}>
                <CustomTextBox
                    placeholder="Login"
                    // onPress={handlePress}
                />
                <CustomTextBox
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.checkBoxContainer}>
                <CustomCheckBox
                    label= "Remember me"
                />
                <TouchableOpacity style={styles.linkContainer}>
                    <Text style={styles.link}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
            <CustomButton
                title="Sign in"
                // onPress={handlePress}
            />
            <View style={styles.SignUpContainer}>
                <Text style={styles.divText}>Don't have an account yet? </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Sign ip</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        color: '#FFFFFF',
        fontSize: 16,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    AltSignin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    btn: {
        height: 50,
        width: 130,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#563F9D80',
        margin: 10,
    },
    btnText: {
        color: '#fff',  // Text color inside the textbox
        fontSize: 16,
        fontWeight: 'normal',
    },
    btnIcon: {
        marginRight: 10,
    },
    divText: {
        fontSize: 12,
        color: '#FFFFFF',
        marginBottom: 60,
    },
    textBoxContainer: {
        marginBottom: 25,
    },
    checkBoxContainer: {
        width: 300,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 25,
    },
    linkContainer: {
        alignItems: 'center',
        marginTop: 3,
    },
    link: {
        color: '#69D4F5',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    SignUpContainer: {
        marginTop: 80,
        flexDirection: 'row',
    }
});

export default Login;

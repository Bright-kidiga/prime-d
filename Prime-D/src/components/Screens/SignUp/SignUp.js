import React from 'react';
import PropTypes from 'prop-types';
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomTextBox from "../../CustomTextBox/CustomTextBox";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";
import CustomButton from "../../CustomButton/CustomButton";


const SignUp = ({ navigation }) => {
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
            <Text style={styles.title}>Get Started</Text>
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
                    placeholder="Full Name"
                    // onPress={handlePress}
                />
                <CustomTextBox
                    placeholder="Email"
                    // onPress={handlePress}
                />
                <CustomTextBox
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <CustomTextBox
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.checkBoxContainer}>
                <CustomCheckBox
                    label= " Agree with "
                />
                <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.link}>terms and conditions</Text>
                </TouchableOpacity>
            </View>
            <CustomButton
                title="Sign Up"
                // onPress={handlePress}
            />
            <View style={styles.SignUpContainer}>
                <Text style={styles.divText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Sign in</Text>
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
        justifyContent: 'center',
        width: 300,
        flexDirection: 'row',
        marginBottom: 25,
    },
    linkContainer: {
        alignItems: 'center',
        marginTop: 2,
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
export default SignUp;

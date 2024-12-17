import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from "./src/components/Screens/SplashScreen/SplashScreen";
import Home from "./src/components/Screens/Home/Home";
import SplashScreen2 from "./src/components/Screens/SplashScreen2/SplashScreen2";
import Login from "./src/components/Screens/Login/Login";
import SignUp from "./src/components/Screens/SignUp/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splashscreen">
          <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }} // Hide header for splash screen
          />
          <Stack.Screen
              name="SplashScreen2"
              component={SplashScreen2}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }} // Hide header for splash screen
          />
          <Stack.Screen
              name="Register"
              component={SignUp}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

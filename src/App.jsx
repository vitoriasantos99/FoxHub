import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./components/HomeScreen";
import MenuScreen from "./components/MenuScreen";

const Stack = createNativeStackNavigator()

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{
                        headerTitle:"",
                        headerTransparent:100,
                        headerStyle:{backgroundColor:"#f2f2f2"},
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
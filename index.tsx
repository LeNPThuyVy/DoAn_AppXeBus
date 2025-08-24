import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Account_Banlance from "./Account_Balance";
import History from "./History";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings";
import TravelDetail from "./TravelDetail";
import { Define } from "./types";


const Stack=createNativeStackNavigator<Define>();
export type RootStackParamList = Define;


export default function App(){
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Register" component={Register}></Stack.Screen>
                <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Account_Balance" component={Account_Banlance}></Stack.Screen>
                <Stack.Screen name="History" component={History}></Stack.Screen>
                <Stack.Screen name="TravelDetail" component={TravelDetail}></Stack.Screen>
                <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>
    )
}
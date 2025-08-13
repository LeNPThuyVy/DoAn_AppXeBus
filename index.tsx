import React from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationIndependentTree } from '@react-navigation/native';

import History from "./History";
import Account_Banlance from "./Account_Balance";
import { Define } from "./types";
import TravelDetail from "./TravelDetail";

const Stack=createNativeStackNavigator<Define>();


export default function App(){
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Account_Balance" component={Account_Banlance}></Stack.Screen>
                <Stack.Screen name="History" component={History}></Stack.Screen>
                <Stack.Screen name="TravelDetail" component={TravelDetail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>

        
    )
}
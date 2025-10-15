import React from "react";
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import Account_Banlance from "./Account_Balance";
import Style_AccBalance from "./Style_AccBalance";
import { FontAwesome5 } from "@expo/vector-icons";


type Input={
    icon:string;
    text:string;
    onPress:()=>void;
};

export default function MyButton({icon,text,onPress}:Input){
    return(
    <TouchableOpacity
        style={Style_AccBalance.container_function_acc}
        onPress={onPress}
    >
        <View style={Style_AccBalance.rect_function}>
            <FontAwesome5 name={icon} size={30} color='black'></FontAwesome5>
        </View>
        <Text style={Style_AccBalance.text_function}>{text}</Text>
    </TouchableOpacity>
)}
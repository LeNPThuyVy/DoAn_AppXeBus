import React from "react";
import {View,Text,Button} from "react-native";
import { FontAwesome5} from "@expo/vector-icons";
import Style_History from "./Style_History";
import Style_AccBalance from "./Style_AccBalance";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Define } from "./types";
import MyButton from "./MyButton"

type Props=NativeStackScreenProps<Define,'Account_Balance'>;


export default function Account_Banlance({navigation}:Props){
    return(
    <View style={Style_History.container}>
        <View style={Style_History.profile}>
            <View style={Style_History.avatar}></View>
            <Text style={Style_History.username}>Le Ngoc Thuy Vy</Text>
        </View>

        <View style={Style_History.title}>
            <Text style={Style_History.title_text}>YOUR WALLET</Text>
        </View>

        <View style={Style_AccBalance.container_acc_balance}>
            <FontAwesome5 name='wallet' size={40} color='black' ></FontAwesome5>
            <Text style={Style_AccBalance.text_acc_balance}>Account Balance:</Text>
            <Text style={Style_AccBalance.num_acc_balance}>500.000</Text>
        </View>

        <View style={Style_AccBalance.container_functions}>
            <MyButton
            text="Top up"
            icon="hand-holding-usd"
            onPress={()=>navigation.push('History')}
        />

            <MyButton
            text="Top up history"
            icon="receipt"
            onPress={()=>navigation.push('History')}
        />
      
            <MyButton
            text="Payment history"
            icon="ticket-alt"
            onPress={()=>navigation.push('History')}
        />
        </View>
    </View>
    );
}

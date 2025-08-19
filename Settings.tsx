import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { Define } from "./types";
import Style_Settings from "./Style_Settings";
import Style_History from "./Style_History";

type Props=NativeStackScreenProps<Define,'Settings'>;

export default function Settings({navigation}:Props){
    return(
    <View style={Style_Settings.container}>

    <View style = {Style_History.profile}> 
        <View style={Style_History.avatar}></View> 
        <Text style={Style_History.username}>Le Ngoc Thuy Vy</Text>
    </View>

    <View style={Style_Settings.rectangle}></View>

    {/*tài khoản */}
    <Text style={Style_History.username}>Tài khoản</Text>
      <View style={Style_Settings.AccoutLayout}>
        <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Mật khẩu và bảo mật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Khuôn mặt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Số điện thoại, OTP</Text>
        </TouchableOpacity>
      </View>
    {/*Giao dịch*/}
    <Text style={Style_History.username}>Giao dịch</Text>
    <View style={Style_Settings.TransactionLayout}>
    <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Quản lý lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Tài khoản ngân hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style_Settings.accountButton}>
          <Text style={Style_Settings.accountButtonText}>Số dư tài khoản</Text>
        </TouchableOpacity>      
    </View>

    </View>
    );
}

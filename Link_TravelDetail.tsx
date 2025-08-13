import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Style_History from "./Style_History";
import { HistoryList } from "./dataHistory";
import { Define } from "./types";


type Link_Detail={
    ticket_id:string;
    time:string;
    onPress:()=>void;
};

export default function Link_TravelDetail({ticket_id,time,onPress}:Link_Detail){
    return(
        <TouchableOpacity style={Style_History.one_line} onPress={onPress}>     
            <View style={Style_History.circle_in_list} ></View>
            <Text style={Style_History.text_in_line}> {`${ticket_id} --- ${time}`} </Text>
        </TouchableOpacity>
)}            
  
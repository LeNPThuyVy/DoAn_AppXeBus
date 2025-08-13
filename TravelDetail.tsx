import React from "react";
import {Text,View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import Style_History from "./Style_History";
import { Define } from "./types";
import { HistoryList } from "./dataHistory";
import { RouteProp } from "@react-navigation/native";

type Props=NativeStackScreenProps<Define,'TravelDetail'>;
type ParamsList={
    Detail:{
        ticket_id:string;
        time:string;
        from:string;
        to:string;
        bus_route_num:string;
        cost:number;
    }
}

type DetailRoute=RouteProp<ParamsList,'Detail'>

export default function TravelDetail({route}:Props)
{
    const HistoryDetail=route.params;
    return(
        <View style={Style_History.container}>
            <View style={Style_History.profile}>
                <View style={Style_History.avatar}></View>
                <Text style={Style_History.username}>Le Ngoc Thuy Vy</Text>
            </View>

            <View style={Style_History.title}>
                <Text style={Style_History.title_text}>Payment History</Text>
            </View>

            <View style={Style_History.travel_detail}>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>Ticket ID:</Text>
                    <Text>{HistoryDetail.ticket_id}</Text>
                </View>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>Time:</Text>
                    <Text>{HistoryDetail.time}</Text>
                </View>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>Bus route number:</Text>
                    <Text>{HistoryDetail.bus_route_num}</Text>
                </View>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>From:</Text>
                    <Text>{HistoryDetail.from}</Text>
                </View>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>To:</Text>
                    <Text>{HistoryDetail.to}</Text>
                </View>
                <View style={Style_History.element}>
                    <Text style={Style_History.name_element}>Cost:</Text>
                    <Text>{`${HistoryDetail.cost}`}</Text>
                </View>

            </View>

        </View>
    )
}
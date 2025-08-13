import React from "react";
import { View, Text,ScrollView, FlatList} from "react-native";
import Style_History from "./Style_History";
import {HistoryList}  from "./dataHistory";//Không được khai báo trùng tên với function trong file
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { Define } from "./types";
import Link_TravelDetail from "./Link_TravelDetail";

type Props=NativeStackScreenProps<Define,'History'>;

export default function History({navigation}:Props){
    return(
         <ScrollView>
        <View style={Style_History.container}>
            <View style={Style_History.profile}>
                <View style={Style_History.avatar}></View>
                <Text style={Style_History.username}>Le Ngoc Thuy Vy</Text>
            </View>

            <View style={Style_History.title}>
                <Text style={Style_History.title_text}>Payment History</Text>
            </View>

            <View style={Style_History.historyList}>
                {HistoryList.map(item=>(
                    <View
                        key={`${item.Id_customer}${item.ticket_id}`}
                        style={Style_History.one_line}
                    >
                    <Link_TravelDetail
                        ticket_id={`${item.ticket_id}`}
                        time={`${item.time}`}
                        onPress={()=>navigation.push('TravelDetail',{
                            ticket_id:item.ticket_id,
                            time:item.time,
                            bus_route_num:item.bus_route_num,
                            from:item.from,
                            to:item.to,
                            cost:item.cost,
                        }
                        )}
                    >
                    </Link_TravelDetail>
                    </View>
                ))}
             
            </View>
        </View>
        </ScrollView>
    );
}

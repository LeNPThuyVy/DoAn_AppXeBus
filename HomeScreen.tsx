import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { Define } from "./types";
import styles from "./Style_HomeScreen"
type Props=NativeStackScreenProps<Define,'HomeScreen'>;
import { RootStackParamList } from "./index";
import { customers } from "./dataCustomers";

export default function HomeScreen({ navigation, route }: Props) {
    const { Id_customer } = route.params || {};  
    const user = customers.find((c) => c.Id_customer === Id_customer);
    return (
        <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Thanh chào và icon */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Xin chào {user ? user.username : "Người dùng"}</Text>
          <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => alert("Thông báo clicked!")}>
            <Ionicons name="notifications" size={28} color="gold" style={{ marginRight: 10 }} />
          </TouchableOpacity>
            
          <TouchableOpacity onPress={() => navigation.push('Settings')}>
            <Ionicons name="settings" size={28} color="gray" />
          </TouchableOpacity>
          </View>
        </View>

        {/* Hình xe bus + tiền */}
        <View style={styles.busContainer}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/61/61088.png" }}
            style={styles.busImage}
          />
          <Ionicons name="logo-usd" size={50} color="gold" style={styles.moneyIcon} />
        </View>
  
        {/* Nút Liên kết ngân hàng + Nạp tiền */}
        <View style={styles.actionRow}>
            <TouchableOpacity style={[styles.mainButton, { flex: 0.65 }]}>
                <Text style={styles.mainButtonText}>Liên kết ngân hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mainButton, { flex: 0.32 }]}>
                <Text style={styles.mainButtonText}>Nạp tiền</Text>
            </TouchableOpacity>
        </View>
        {/* 4 nút nhỏ theo dạng grid */}
        <View style={styles.buttonGrid}>
  {/* Button 1 */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} onPress={() => navigation.push('History')}>
      <Ionicons name="time-outline" size={28} color="gray"/>
    </TouchableOpacity>
    <Text style={styles.smallButtonText}>Lịch sử thanh toán</Text>
  </View>

  {/* Button 2 */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} onPress={() => navigation.push('Account_Balance')}>
      <Ionicons name="wallet-outline" size={28} color="gray"/>
    </TouchableOpacity>
    <Text style={styles.smallButtonText}>Ví</Text>
  </View>

  {/* Button 3 */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton}>
      <Ionicons name="person-add-outline" size={28} color="gray"/>
    </TouchableOpacity>
    <Text style={styles.smallButtonText}>Thêm khuôn mặt</Text>
  </View>

  {/* Button 4 */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} onPress={() => navigation.push('Settings')}>
      <Ionicons name="settings-outline" size={28} color="gray"/>
    </TouchableOpacity>
    <Text style={styles.smallButtonText}>Cài đặt</Text>
  </View>
  {/* Button 5 - trống */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} />
    <Text style={styles.smallButtonText}></Text>
  </View>

  {/* Button 6 - trống */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} />
    <Text style={styles.smallButtonText}></Text>
  </View>

  {/* Button 7 - trống */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} />
    <Text style={styles.smallButtonText}></Text>
  </View>

  {/* Button 8 - trống */}
  <View style={styles.smallButtonWrapper}>
    <TouchableOpacity style={styles.smallButton} />
    <Text style={styles.smallButtonText}></Text>
  </View>
</View>

      </ScrollView>
        {/* Thanh menu dưới với  */}
        
        <View style={styles.bottomMenu}> 
            <TouchableOpacity style={styles.bottomMenuItem}> 
            <Text>Tài khoản</Text> 
            </TouchableOpacity> 
            <TouchableOpacity style={styles.bottomMenuItem}> 
                <Text>Lịch sử</Text> 
                </TouchableOpacity> 
        </View>
      </View>
    );
  }

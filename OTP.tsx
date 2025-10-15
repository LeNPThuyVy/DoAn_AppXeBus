import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { customers } from "./dataCustomers";
import { RootStackParamList } from "./index";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "OTP">;

export default function OTP({ route, navigation }: Props) {
  const { user } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp === user.otp) {
      customers.push({
        ...user,
        id: customers.length + 100, // ID bắt đầu từ 100
      });

      Alert.alert("Thành công", "Xác thực OTP thành công!");
      navigation.navigate("Login");
    } else {
      Alert.alert("Lỗi", "OTP không đúng!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác thực OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập OTP"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
}
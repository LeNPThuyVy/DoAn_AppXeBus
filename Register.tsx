import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "./index";
import styles from "./styles";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export default function Register({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    if (!username || !password || !email || !phone) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      // Lấy dữ liệu hiện tại từ AsyncStorage
      const storedData = await AsyncStorage.getItem("customers");
      const customers = storedData ? JSON.parse(storedData) : [];

      // Thêm user mới
      const newCustomer = {
        id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
        username,
        password,
        email,
        phone,
      };

      customers.push(newCustomer);

      // Ghi lại vào AsyncStorage
      await AsyncStorage.setItem("customers", JSON.stringify(customers));

      Alert.alert("Thành công", "Đăng ký thành công");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Lỗi", "Không thể lưu dữ liệu");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.settings}>⚙ Cài đặt</Text>
      <Text style={styles.title}>ĐĂNG KÝ TÀI KHOẢN</Text>

      <Text style={styles.label}>Tên đăng nhập</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />

      <Text style={styles.label}>Mật khẩu</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
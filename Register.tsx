import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Define } from "./types";

type Props = NativeStackScreenProps<Define, "Register">;

export default function Register({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const storedData = await AsyncStorage.getItem("customers");
      const customers = storedData ? JSON.parse(storedData) : [];

      // tạo id mới = max id + 1
      const newId =
        customers.length > 0
          ? Math.max(...customers.map((c: any) => c.Id_customer)) + 1
          : 1;

      const newUser = { Id_customer: newId, username, password };

      customers.push(newUser);

      await AsyncStorage.setItem("customers", JSON.stringify(customers));

      Alert.alert("Thành công", "Đăng ký thành công!");

      // 👉 sau khi đăng ký thì điều hướng sang HomeScreen
      navigation.replace("HomeScreen", { Id_customer: newId });
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Không thể đăng ký!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "white" },
  link: { marginTop: 15, textAlign: "center", color: "blue" },
});
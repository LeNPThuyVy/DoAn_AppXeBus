import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Define } from "./types";

type Props = NativeStackScreenProps<Define, "Login">;

export default function Login({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await AsyncStorage.getItem("customers");
      const customers = data ? JSON.parse(data) : [];

      const user = customers.find(
        (c: any) => c.username === username && c.password === password
      );

      if (user) {
        Alert.alert("Đăng nhập thành công!");
        navigation.navigate("HomeScreen", { Id_customer: user.Id_customer }); // ✅ truyền tham số
      } else {
        Alert.alert("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Chưa có tài khoản? Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: "gold", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold" },
  link: { marginTop: 15, textAlign: "center", color: "blue" },
});
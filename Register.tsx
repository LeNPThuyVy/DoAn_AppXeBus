import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Define } from "./types";
import * as FileSystem from "expo-file-system";

type Props = NativeStackScreenProps<Define, "Register">;

export default function Register({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");

  const fileUrl=FileSystem.documentDirectory + "dataCustomer.json";

  // //Reset dữ liệu - Hạn chế đụng vào vì khi dùng thì dữ liệu lưu được sẽ hoàn toàn mất :)))
  // async function resetData() {
  //   await FileSystem.writeAsStringAsync(fileUrl, JSON.stringify([], null, 2));
  //   console.log("Đã reset dữ liệu về rỗng");
  // }

  const handleRegister = async () => {
      try
      {
        //Xóa file documentDirectory
        //Đọc dữ liệu hiện có trong file
        let customers: any[]=[];//Nơi chứa danh sách khách hàng từ file dataCustomer.json
        const fileInfo=await FileSystem.getInfoAsync(fileUrl);

        //Kiểm tra tồn tại của file
        if(fileInfo.exists)//Nếu file tồn tại
        {
          const info=await FileSystem.readAsStringAsync(fileUrl);
          customers = info?JSON.parse(info):[];
        }

        //Tạo id mới (id mới = max id+1)
        let Id= (customers.length>0?Math.max(...customers.map((c)=>c.Id_customer))+1:1);
        let newId=Id.toString().padStart(10,"0");
        const newUser={
          Id_customer:newId,
          Username:username,
          Password:password,
          Name:name,
          Email:email,
          PhoneNumber:phoneNumber
        };
        customers.push(newUser);

        //Ghi lại vào file
        await FileSystem.writeAsStringAsync(fileUrl,JSON.stringify(customers,null,2));

        Alert.alert("Thành công","Đăng kí thành công");
        console.log("documentDirectory:", FileSystem.documentDirectory)
        const content = await FileSystem.readAsStringAsync(fileUrl);
        console.log("Nội dung file:", content);
        navigation.replace("HomeScreen",{Id_customer:newId});
      } catch(error)
      {
        console.error(error);
        Alert.alert("Lỗi","Đăng kí không thành công!");
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
      <TextInput
        style={styles.input}
        placeholder="Tên của bạn"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email của bạn"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại của bạn"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
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
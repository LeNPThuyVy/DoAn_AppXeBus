import React,{useState} from "react";
import { Text, TouchableOpacity, View,Alert } from "react-native";
import styles from "./styles"; // dùng file styles.ts chung
import * as ImagePicker from "expo-image-picker";

export default function FaceScan() {
  //Xin cấp quyền ảnh
  const [selectedImg,setSelectedImg]=useState<string|null>(null);
  const takeImg=async()=>
  {
  const {status} =await ImagePicker.requestMediaLibraryPermissionsAsync();

  if(status!="granted")
  {
      Alert.alert("Permission was denied!","Function needs to be allowed to connect the gallery!");
      return;
  }

  let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      quality:1,
  });

  if(!result.canceled)
  {
      setSelectedImg(result.assets[0].uri)
  }
  }

  //Xin cấp quyền camera
  const [takePhoto,setTakePhoto]=useState<string|null>(null);
  const takePicture=async()=>
  {
    const {status}=await ImagePicker.requestCameraPermissionsAsync();
    if(status!="granted")
    {
      Alert.alert("Permission was denied!","Function needs to be allowed to connect the gallery!");
      return;
    }
    let result=await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        quality:1,
    })
    if(!result.canceled)
    {
      setTakePhoto(result.assets[0].uri);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quét gương mặt</Text>

      <View style={styles.frame}></View>

      <Text style={styles.instruction}>Hãy đưa khuôn mặt vào trong khung</Text>

      <TouchableOpacity
       style={styles.buttonFS}
       onPress={takePicture}
      >
        <Text style={styles.buttonTextFS}>Bắt đầu</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.buttonFS}
       onPress={takeImg}
      >
        <Text style={styles.buttonTextFS}>Tải ảnh lên</Text>
      </TouchableOpacity>
    </View>
  );
}
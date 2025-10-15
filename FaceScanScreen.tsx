import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function FaceScan() {
  const [photo, setPhoto] = useState<string | null>(null);

  // Chụp ảnh bằng camera
  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Camera permission is required to take photos."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setPhoto(result.assets[0].uri); // Lưu ảnh vào state
    }
  };

  // Chọn ảnh từ thư viện
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Library permission is required to select photos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setPhoto(result.assets[0].uri); // Lưu ảnh vào state
    }
  };

  // Xác nhận → lưu ảnh vào documentDirectory
  const handleConfirm = async () => {
    if (!photo) {
      Alert.alert("Không có ảnh để lưu!");
      return;
    }

  const now = new Date();
  const timestamp = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}${now.getSeconds().toString().padStart(2,'0')}`;
  const fileName = `picture_${timestamp}.jpg`;
  const newPath = FileSystem.documentDirectory + "faces/" + fileName;

  try {
  // Tạo thư mục faces nếu chưa có
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "faces/", { intermediates: true });

  // Copy ảnh vào file mới
    await FileSystem.copyAsync({ from: photo, to: newPath });
    Alert.alert("Lưu thành công!", "Ảnh được lưu tại: " + newPath);
    setPhoto(null); // Xoá ảnh khỏi state sau khi lưu
  } catch (error) {
    console.log("Lỗi khi lưu ảnh:", error);
    Alert.alert("Lỗi lưu ảnh", String(error));
  }
  };

  // Huỷ → xoá ảnh khỏi state
  const handleCancel = () => {  
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quét gương mặt</Text>

      {photo ? (
        // Hiển thị ảnh vừa chụp/ chọn và 2 nút
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: photo }}
            style={{ width: 250, height: 300, borderRadius: 10, marginBottom: 15 }}
          />
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity style={styles.buttonFS} onPress={handleConfirm}>
              <Text style={styles.buttonTextFS}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFS} onPress={handleCancel}>
              <Text style={styles.buttonTextFS}>Huỷ</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // UI mặc định khi chưa có ảnh
        <>
          <View style={styles.frame}></View>
          <Text style={styles.instruction}>Hãy đưa khuôn mặt vào trong khung</Text>

          <TouchableOpacity style={styles.buttonFS} onPress={takePicture}>
            <Text style={styles.buttonTextFS}>Bắt đầu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFS} onPress={pickImage}>
            <Text style={styles.buttonTextFS}>Tải ảnh lên</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

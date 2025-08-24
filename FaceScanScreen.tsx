import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"; // dùng file styles.ts chung

export default function FaceScan() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quét gương mặt</Text>

      <View style={styles.frame}></View>

      <Text style={styles.instruction}>Hãy đưa khuôn mặt vào trong khung</Text>

      <TouchableOpacity style={styles.buttonFS}>
        <Text style={styles.buttonTextFS}>Bắt đầu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonFS}>
        <Text style={styles.buttonTextFS}>Tải ảnh lên</Text>
      </TouchableOpacity>
    </View>
  );
}
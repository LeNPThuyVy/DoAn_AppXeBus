import AsyncStorage from "@react-native-async-storage/async-storage";

// Dữ liệu mẫu
const initialCustomers = [
  { Id_customer: 123456, username: "admin", password: "123456" },
  { Id_customer: 234567, username: "user1", password: "matkhau01" },
  { Id_customer: 345678, username: "user2", password: "matkhau02" },
];

// Hàm khởi tạo dữ liệu mẫu vào AsyncStorage
export const initCustomers = async () => {
  try {
    const storedData = await AsyncStorage.getItem("customers");
    if (!storedData) {
      await AsyncStorage.setItem("customers", JSON.stringify(initialCustomers));
      console.log("Dữ liệu mẫu đã được khởi tạo!");
    }
  } catch (error) {
    console.error("Lỗi khi khởi tạo dữ liệu:", error);
  }
};

//Hàm lấy dữ liệu khách hàng từ AsyncStorage
export const getCustomers = async () => {
  try {
    const storedData = await AsyncStorage.getItem("customers");
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    return [];
  }
};
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f6f8",
        padding: 15,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      greeting: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#a3d4ff",
        padding: 8,
        borderRadius: 10,
      },
      headerIcons: {
        flexDirection: "row",
        alignItems: "center",
      },
      busContainer: {
        alignItems: "center",
        marginVertical: 10,
      },
      busImage: {
        width: 250,
        height: 120,
        resizeMode: "contain",
      },
      moneyIcon: {
        position: "absolute",
        right: 50,
        top: 30,
      },
      actionRow: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        },
        
        mainButton: {
          backgroundColor: "#44bfff",
          paddingVertical: 12,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        },
        
        mainButtonText: {
          color: "#fff",      
          fontWeight: "600",
          textAlign: "center",
          fontSize: 14,
        },
        
      buttonGrid: {
          width: '100%',
          backgroundColor: '#dde1e4',
          padding: 15,
          borderRadius: 12,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        
        smallButton: {
          width: '22%',       // 4 button/row
          aspectRatio: 1,     // đảm bảo vuông
          backgroundColor: '#a0d2eb',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginBottom: 10,   // khoảng cách dòng
        },
        
        smallButtonText: {
          color: '#000',
          textAlign: 'center',
          fontSize: 10,       // nhỏ hơn, gọn gàng
          lineHeight: 12,     // giảm khoảng cách dòng
        },
        
        
      bottomMenu: {
          position: "absolute",
          bottom: 20,             // cách đáy màn hình 20
          left: 50,               // canh lề trái
          right: 50,              // canh lề phải
          height: 50,             // chiều cao chữ nhật
          backgroundColor: "#a3d4ff", // xanh nhạt, hơi sáng
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
      },
  
      bottomMenuItem: { 
        padding: 8,
        borderRadius: 15,
        backgroundColor: "#ddd",
        minWidth: 60,
        alignItems: "center", 
      },
})
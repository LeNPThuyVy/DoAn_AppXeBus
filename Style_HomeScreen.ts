import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
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
            padding: 15,             // giảm padding, vừa đủ
            borderRadius: 12,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          },
          
          smallButtonWrapper: {
            width: '22%',            // 4 nút / hàng, vừa đủ
            alignItems: 'center',
            marginBottom: 20,        // khoảng cách dòng → kéo dài buttonGrid
          },
          
          smallButton: {
            width: '100%',           // full width của wrapper
            aspectRatio: 1,          // vuông
            backgroundColor: '#38b6ff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          },
          
          smallButtonText: {
            marginTop: 5,            // cách nút 1 chút
            textAlign: 'center',
            fontSize: 12,
            color: '#000',
            lineHeight: 14,
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
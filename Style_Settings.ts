import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f6f8",
        padding: 15,
      },
      rectangle: {
        width: "90%",
        height: 50,
        backgroundColor: "#a6a6a6",
        borderRadius: 25, // Bo góc nhiều hơn
        marginTop: 20,
        alignSelf: "center",
      },
      AccoutLayout: {
        width: "90%",
        height: 160,
        backgroundColor: "#dde1e4",
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center",
        justifyContent: "space-around", // Giãn đều các nút
        alignItems: "center", // Canh giữa theo chiều ngang
      },
      accountButton: {
        width: "85%",
        paddingVertical: 10,
        backgroundColor: "#a6a6a6",
        borderRadius: 25,
        alignItems: "center",
      },
      accountButtonText: {
        color: "#4f4c4c",
        fontSize: 16,
        fontWeight: "bold",
      },
      TransactionLayout :{
        width: "90%",
        height: 160,
        backgroundColor: "#dde1e4",
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center",
        justifyContent: "space-around", // Giãn đều các nút
        alignItems: "center", // Canh giữa theo chiều ngang
      }
})
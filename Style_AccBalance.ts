import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container_acc_balance:
    {
        marginTop:25,
        backgroundColor:'#dde1e4',
        flexDirection:'row',
        opacity:58,
        height:60,
        paddingTop:10,
        paddingLeft:15,
    },

    text_acc_balance:
    {
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:5,
        textAlign:'center',
    },

    num_acc_balance:
    {
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10,
        textAlign:'center',
        paddingTop:3,
        color:'orange'
    },

    container_functions:
    {
        flexDirection:'row',
        height:90,
        padding:'auto',
        justifyContent:'space-between',
    },

    container_function_acc:
    {
        marginTop:20,
        flexDirection:'column',
    },

    rect_function:
    {
        backgroundColor:'#cae1ee',
        height:70,
        width:120,
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
    },

    
    text_function:
    {
        fontSize:14,
        textAlign:'center',
        fontWeight:'bold',
    }

})
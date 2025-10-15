import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:
    {
        padding:20,
        backgroundColor:'white',
        marginTop:50,
        minHeight:1000,

    },

    profile:
    {
        alignItems:'center',
        flexDirection:'row',
    },

    avatar:
    {
        backgroundColor:'#38b6ff',
        borderRadius:50,
        marginRight:20,
        height:70,
        width:70,
    },

    username:
    {
        fontSize:25,
        color:'black',
    },

    title:
    {
        marginTop:20,
        backgroundColor:'#d1d1d1ff',
        textAlign:'center',
        borderRadius:40,
        height:50,
    },

    title_text:
    {
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
    },

    historyList:
    {
        backgroundColor:'#dde1e4',
        marginTop:30,
        marginBottom:30
    },

    one_line:
    {
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
    },

    text_in_line:
    {
        color:'black',
        fontSize:15,
    },

    circle_in_list:
    {
        height:20,
        width:20,
        marginRight:10,
        borderRadius:10,
        backgroundColor:'#4f4c4c',
    },

    travel_detail:
    {
        height:'auto',
        backgroundColor:'#f5f5f5',
        marginTop:25,
        padding:10,
        flexDirection:'column',
        justifyContent:'space-between',
        minHeight:230,
    },

    element:
    {
        flexDirection:'row',
    },

    name_element:
    {
        fontWeight:'bold',
        paddingRight:5,
    },
    
})
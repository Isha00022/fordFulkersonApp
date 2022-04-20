import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
     
    return(
        <View style={styles.header}>
            <Text style={styles.font}>Ford Fulkerson</Text>
        </View>
    )
}

const styles=StyleSheet.create({
     header:{
         paddingTop:50,
         height:100,
         backgroundColor:'coral',
        //  borderBottomLeftRadius:9,
        //  borderBottomRightRadius:9,

     },
     font:{
        fontWeight:'bold',
        fontSize:28,
        textAlign:'center',
        color:'#fff',



     },
});
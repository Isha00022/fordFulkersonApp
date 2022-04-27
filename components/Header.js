import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';

export default function Header(){

    // let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });
    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }
     
    return(
        <View style={styles.header}>
            <Text style={styles.font}>Algolator</Text>
        </View>
    )
}

const styles=StyleSheet.create({
     header:{
         paddingTop:50,
         height:100,
         backgroundColor:'#ED8D8D',
        //  borderBottomLeftRadius:9,
        //  borderBottomRightRadius:9,

     },
     font:{
        fontWeight:'bold',
        fontSize:28,
        textAlign:'center',
        color:'#fff',
        // fontFamily: 'Inter_900Black'



     },
});
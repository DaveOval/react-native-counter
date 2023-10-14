import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
        <View style={ styles.cajaAzul } />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28425B",
        justifyContent: "center",
        alignItems: "center",
        //flexDirection: "row"
        
    },
    cajaMorada: {
        width: 100,
        //flexGrow: 1,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6",
        position: "absolute",
        marginBottom: 300,
    },
    cajaNaranja: {
        width: 100,
        //flexGrow: 1,
        height: 100,
        //flexGrow: 2,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
        marginLeft: 200,
    },
    cajaAzul: {
        width: 100,
        //flexGrow: 2,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#28C4D9",
        
    },
    
});

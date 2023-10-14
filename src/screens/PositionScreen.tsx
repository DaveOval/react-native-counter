import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
      <View style={ styles.container }>
        <View style={ styles.cajaVerde } />
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* justifyContent: "center",
        alignItems: "center", */
        backgroundColor: "#28C4D9",
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: "#5856D6",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute", 
        top: 0,
        right: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: "#F0A23B",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        right: 0,
        bottom: 0
    },
    cajaVerde: {
        /* width: 100,
        height: 100, */
        backgroundColor: "green",
        borderWidth: 10,
        borderColor: "white",
        /* position: "absolute",
        left: 0,
        bottom: 0, 
        top: 0,
        right: 0,
        */
       //poner bottom, left, top, right en 0 y asi estirar el elemento
       ...StyleSheet.absoluteFillObject
    }
});
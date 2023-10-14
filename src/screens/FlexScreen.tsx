import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container } >
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 }>Caja 2</Text>
        <Text style={ styles.caja3 }>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#28C4D9",
        flexDirection: "row",
        //justifyContent: "flex-end",
        //alignItems: "flex-end"
    },
    caja1: {
        width: 100,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 20,
        alignSelf: "center"
    },
    caja2: {
        width: 100,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 20,
        alignSelf: "flex-start"
    },
    caja3: {
        width: 100,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 20,
        alignSelf: "flex-end"
    },
});

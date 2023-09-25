import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet, Platform, TouchableOpacity                           } from 'react-native'

interface Props {
    title: string,
    position?: "br" | "bl",
    onPress: () => void;
}

export const Fab = ( { title, onPress, position = "br" }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.5 }
                style={ 
                    ( position === "bl"  )
                        ? styles.fabLocation
                        : styles.fabLocation2
                }
            >
                <View style={ styles.fab}>
                    <Text style={styles.fabText}>{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={ 
                    ( position === "bl"  )
                        ? styles.fabLocation
                        : styles.fabLocation2
                }
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple("azure", false, 30) }
                >
                    <View style={ styles.fab}>
                        <Text style={styles.fabText}>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
          )
    }
    return Platform.OS == "ios" ? ios() : android()
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocation2: {
        position: "absolute",
        bottom: 25,
        left: 25
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

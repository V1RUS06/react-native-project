import React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

export const GrathButton = () => {

    return (
        <TouchableWithoutFeedback style={styles.dad}>
            <View style={styles.footer} >
                <View style={styles.back}>
                    <Text style={[styles.text, {color: '#d9111a'}]}>Назад</Text>
                </View>
                <View style={styles.logOut}>
                    <Text style={[styles.text, {color: 'white'}]}>Выйти из аккаунта</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    dad: {
        position: 'relative'
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    text: {
      fontSize: 14,
      textAlign:'center',
    },
    back: {
        backgroundColor: 'white',
        color: '#d9111a',
        width: '50%',
        height: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#d9111a',
        justifyContent: 'center',
    },
    logOut: {
        backgroundColor: '#d9111a',
        color: 'white',
        width: '50%',
        height: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#d9111a',
        justifyContent: 'center'
    }
})
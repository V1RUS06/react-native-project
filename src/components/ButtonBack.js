import React from "react";
import {StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const ButtonBack = () => {

    const navigation = useNavigation()

    return (
        <TouchableHighlight style={styles.footer} onPress={() => {navigation.goBack()}}>
            <View style={styles.back}>
                <Text style={[styles.text, {color: '#d9111a'}]}>Назад</Text>
            </View>
        </TouchableHighlight>

    )
}
const styles = StyleSheet.create({
    footer: {
        // flexDirection: 'row',
        // position: 'absolute',
        width: '50%'
    },
    text: {
        fontSize: 14,
        textAlign:'center',
    },
    back: {
        backgroundColor: 'white',
        color: '#d9111a',
        height: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#d9111a',
        justifyContent: 'center',
    }
})
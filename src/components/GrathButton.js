import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {ButtonBack} from "./ButtonBack";
import {useNavigation} from "@react-navigation/native";

export const GrathButton = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.dad}>
            <TouchableHighlight style={styles.footer} onPress={() => navigation.navigate('Start')}>
                <View style={styles.logOut}>
                    <Text style={[styles.text, {color: 'white'}]}>Выйти из аккаунта</Text>
                </View>
            </TouchableHighlight>
            <ButtonBack />
        </View>
    )
}

const styles = StyleSheet.create({
    dad: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 180

    },
    footer: {
        // flexDirection: 'row',
        // position: 'absolute',
        width: '50%'

    },
    text: {
      fontSize: 14,
      textAlign:'center',
    },
    logOut: {
        backgroundColor: '#d9111a',
        color: 'white',
        height: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#d9111a',
        justifyContent: 'center',

    }
})
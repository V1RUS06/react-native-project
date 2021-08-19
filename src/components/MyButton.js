import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const MyButton = ( {username} ) => {
    const navigation = useNavigation();

    const loadScene = () => {
        navigation.navigate('Second' , {
            login: username
        })
    }
    return (
        <TouchableWithoutFeedback  onPress={loadScene}>
            <View style={styles.button} >
                <Text style={styles.text}>Войти</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#d9111a',
        color: 'white',
        width: '65%',
        height: 50,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: '17%'
    },
    text: {
        color: 'white'
    }
})

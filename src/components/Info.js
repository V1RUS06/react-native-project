import React from "react";
import {Text, View, StyleSheet} from "react-native";


export const Form = () => {
    return (
        <View>
            <Text style={styles.header}>Вход</Text>
            <Text style={styles.info}>Согласно классификации М. Вебера, форма
                политического сознания предсказуема.
            Политическая психология, согласно традиционным
                представляениям, символизирует
                системный культ личности
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 65,
        textAlign: 'center',
        color: 'red',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 40
    },
    info: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 16
    }
})
import React from "react";
import {Text, View, StyleSheet} from "react-native";


export const Info = () => {
    return (
        <View>
            <Text style={styles.header}>Вход</Text>
            <Text style={styles.info}>
                Согласно классификации М. Вебера, форма{'\n'}
                политического сознания предсказуема.{'\n'}
            Политическая психология, согласно традиционным{'\n'}
                представляениям, символизирует{'\n'}
                системный культ личности
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 70,
        marginBottom: 30,
        textAlign: 'center',
        color: '#d9111a',
        fontSize: 50,
        fontWeight: 'bold'
    },
    info: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        opacity: .8
    }
})
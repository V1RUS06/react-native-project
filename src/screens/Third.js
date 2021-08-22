import React from "react";
import {StyleSheet, Text, View,} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
import {GrathButton} from "../components/GrathButton";



export const Third = ({ route }) => {
   const {birth, eyeColor, gender, height, mass} = route.params

    return (
        <View style={styles.container}>
            <SimpleLineIcons style={styles.icon} name="user" size={20} color="white" />
            <Text style={styles.account}>{route.params.login}</Text>


            <View style={styles.containerSecond}>
                <View style={styles.mainInfo}>
                    <Text style={styles.header}>{route.params.name}</Text>
                    <Text style={styles.text}>Рост: {height}</Text>
                    <Text style={styles.text}>Год: рождения{birth}</Text>
                    <Text style={styles.text}>Цвет глаз: {eyeColor}</Text>
                    <Text style={styles.text}>Пол: {gender}</Text>
                    <Text style={styles.text}>Вес: {mass}</Text>
                </View>
            </View>

            <GrathButton  />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        position:'relative',
    },
    containerSecond: {
        marginVertical: 15,
        marginHorizontal: 15
    },
    mainInfo: {},
    header: {
        fontSize: 18,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },

    icon: {
        position: 'absolute',
        transform: [
            {translateX: 320},
            {translateY: -37}
        ],
        zIndex: 2
    },
    account: {
        transform: [
            {translateX: 235},
            {translateY: -33}
        ],
        color: 'white',
        fontWeight: 'bold',
        zIndex: 3
    }
})


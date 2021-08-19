import React from "react";
import {StyleSheet, Text, View,} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
import {GrathButton} from "../components/GrathButton";
import {useNavigation} from "@react-navigation/native";

export const Third = ({ route }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <SimpleLineIcons style={styles.icon} name="user" size={20} color="white" />
            <Text style={styles.account}>{route.params.login}</Text>

            <View style={styles.containerSecond}>
                <View style={styles.mainInfo}>
                    <Text style={styles.header}>{route.params.name}</Text>
                    <Text style={styles.text}>"По поручению губернатора Московской области А.Ю Воробьёва, мы увеличили темпы работ по благоустройству дворов, - сообщил Евгений Хромушин. На этот год запланировано благоустройство 1440 дворовых территорий, работы уже выполнено на 1310 объектах, что состовляет 91% программы этого года. В 45 муниципалитетах программа благоустройства выполнена на 100%, в трех муниципалитетах на 100 и более процентво, благоустройство остальных дворов находится в разной степени готовности от 75% до 95% и будет завершено в установленные сроки"</Text>
                </View>
            </View>
            <GrathButton />
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


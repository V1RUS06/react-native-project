import React from "react";
import {UserList} from "../components/UserList";
import {SimpleLineIcons} from "@expo/vector-icons";
import {StyleSheet, Text, View} from "react-native";

export const Second = ({ route  }) => {
    const {login} = route.params

    return (
        <View>
            <View style={styles.icon}>
                <SimpleLineIcons  name="user" size={20} color="white" />
                <Text style={styles.account}>{login}</Text>
            </View>
            <UserList login={login}/>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {position: 'relative'},
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
            {translateX: -85},
            {translateY: -18}
        ],
        color: 'white',
        fontWeight: 'bold'
    }
})
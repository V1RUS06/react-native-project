import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, Alert} from "react-native";
import {MyButton} from "./MyButton";


export const Form = ()  => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.container}>
            <Text  style={[styles.login, {opacity: 0.5 , marginTop: 30}]}>Логин</Text>
            <TextInput
                style={styles.input}
                defaultValue={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[styles.input, {marginBottom: 25}] }
                placeholder="Пароль"
                defaultValue={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <MyButton username={username} />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10

    },
    login: {
        color: 'gray',
        fontSize: 12,
        opacity: 0.3,
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        marginBottom: 10,
        opacity: 0.7
    }
})
import React, {useEffect} from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {LOAD_USER, LOAD_USERS_SUCCESS} from "../redux/reducers/people/action";
import {delay} from "react-native-reanimated/src/reanimated2/animations";

export const MyButton = ( {username} ) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const loadScene = async () => {

        dispatch({type: LOAD_USER})
        console.log('dispatch отработал >>')

        navigation.navigate('Second' , {
            login: username
        })
    }



    // useEffect(() => {
    //     dispatch({type: LOAD_USERS_SUCCESS})
    //     console.log('dispatch отработал >>')
    // }, [loadScene])

    return (
        <TouchableWithoutFeedback  onPress={loadScene} >
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

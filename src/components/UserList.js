import React, {useState} from "react";
import {StyleSheet, TouchableHighlight, Text, FlatList, TouchableWithoutFeedback} from 'react-native'
import {useNavigation} from "@react-navigation/native";

export const UserList = ({ login }) => {
    const [listOfItems, setListOfItems] = useState([
        {text: 'Денис', key: '1'},
        {text: 'Борис', key: '2'},
        {text: 'Андрей', key: '3'},
        {text: 'Виталий', key: '4'}
    ])


    const nav = useNavigation()

    return (


        <TouchableHighlight>
            <FlatList data={listOfItems} renderItem={({item}) => (
                <TouchableWithoutFeedback onPress={() => {
                    nav.navigate('Third', {name: item.text, login})
                }}>
                    <Text style={styles.text}>{item.text} </Text>
                </TouchableWithoutFeedback>
                )}
            />

        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'left',
        borderRadius: 5,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginTop: 15,
        width: '95%',
        marginLeft: 5,
        fontSize: 18
    }
})
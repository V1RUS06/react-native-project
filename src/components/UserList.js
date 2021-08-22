import React, {useEffect, useState} from "react";
import {StyleSheet, TouchableHighlight, Text, FlatList, TouchableWithoutFeedback, View, ScrollView} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER, LOAD_USERS_SUCCESS} from "../redux/reducers/people/action";


export const UserList = ({ login }) => {
    const people = useSelector(state => state)

    // const [listOfItems, setListOfItems] = useState(state)
    //
    // const items = [];
    // const Name = listOfItems.arr.map((item) =>  items.push(item['name']))
    //
    // console.log('State: ', listOfItems)
    // console.log('StateARR: ', Name)


    console.log('People: >>',people)

    const nav = useNavigation();

    return (


        <ScrollView>
            {
                people?.data?.results.map((character, index) => {
                    return (
                            <TouchableWithoutFeedback key={index} onPress={() => {
                                nav.navigate('Third', {
                                    name: character.name,
                                    login,
                                    birth: character.birth_year,
                                    eyeColor: character.eye_color,
                                    gender: character.gender,
                                    height: character.height,
                                    mass: character.mass
                                })
                            }}>
                                <Text style={styles.text} >{character.name}  </Text>
                            </TouchableWithoutFeedback>
                    )
                }
            )
            }
        </ScrollView>


            // {/*<FlatList data={Name} renderItem={({item}) => (*/}
            // {/*    <TouchableWithoutFeedback onPress={() => {*/}
            // {/*        nav.navigate('Third', { Name : name , login})*/}
            // {/*            // { item.text, login}*/}
            // {/*    }}>*/}
            // {/*        <Text style={styles.text}>{item} </Text>*/}
            // {/*    </TouchableWithoutFeedback>*/}
            // {/*    )}*/}
            // {/*/>*/}

        // </TouchableHighlight>
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
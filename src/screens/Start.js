import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Info} from "../components/Info";
import {Form} from "../components/Form";



export const Start = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Info />
            <Form />
        </SafeAreaView>
    );
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
    }
})

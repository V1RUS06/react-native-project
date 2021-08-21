import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet} from "react-native";
import {Info} from "../components/Info";
import {Form} from "../components/Form";



export const Start = () => {

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Info />
            <Form />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

import React, {useEffect} from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet} from "react-native";
import {Info} from "../components/Info";
import {Form} from "../components/Form";
import {useDispatch} from "react-redux";
import {LOAD_USERS_SUCCESS} from "../redux/reducers/people/action";



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

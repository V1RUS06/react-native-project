import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Start} from "../screens/Start";
import {Second} from "../screens/Second";
import {Third} from "../screens/Third";


export const Navigator = ({login}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='App'>
            <Stack.Screen
                name={'Start'}
                component={Start}
                options={{
                    title: 'Вход в личный кабинет',
                    headerStyle: { backgroundColor: '#d9111a', height: 100},
                    headerTitleStyle: { color: 'white', fontSize: 16, marginTop: 20 }
                }}

            />
            <Stack.Screen
                name="Second"
                component={Second}
                options={{
                    title: 'Список',
                    headerStyle: { backgroundColor: '#d9111a', height: 100},
                    headerTitleStyle: { color: 'white', fontSize: 16, marginTop: 20 }
                }}
            />
            <Stack.Screen
                name="Third"
                component={Third}
                options={{
                    login,
                    title: 'График',
                    headerStyle: { backgroundColor: '#d9111a', height: 100},
                    headerTitleStyle: { color: 'white', fontSize: 16, marginTop: 20 }
                }}
            />
        </Stack.Navigator>
    )
}

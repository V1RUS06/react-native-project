import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Navigator} from "./src/navigation/Navigator";
import {Provider} from "react-redux";
import store from "./src/redux";

export default function App({login}) {


  return (
    <Provider store={store}>
        <NavigationContainer>
            <Navigator login={login}/>
        </NavigationContainer>
    </Provider>

  )
}

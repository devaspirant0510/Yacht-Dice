import React, {useContext, useState} from 'react';
import DiceScore from "./components/DiceScore";
import {DiceOptions} from "./common/DiceOptions";
import Dices from "./components/Dices";
import {MyContext, MyProvider} from "./context/provider";
import {useYachtDispatch, useYachtState} from "./hooks/ContextHooks";
import MainScreen from "./components/MainScreen";

function App() {
    return (
        <MyProvider>
            <MainScreen/>
        </MyProvider>
    );
}

export default App;

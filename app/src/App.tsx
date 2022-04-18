import React from 'react';
import { MyProvider} from "./context/provider";
import MainScreen from "./components/MainScreen";
import "./App.css"

function App() {
    return (
        <MyProvider>
            <div className={"App"}>
                <MainScreen/>
            </div>
        </MyProvider>
    );
}

export default App;

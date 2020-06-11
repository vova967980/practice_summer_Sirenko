import React, { useState } from 'react';
import './App.css';
import MainContainer       from "./components/MainContainer/MainContainer";
import AppContext          from './store';
import withContext from "./components/HoCs/withContext";

function App() {
    const [usernameValue,setUsernameValue] = useState( null );
    const contextValue = {
        usernameValue,
        setUsernameValue,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <MainContainer/>
        </AppContext.Provider>
    );
}

export default App;

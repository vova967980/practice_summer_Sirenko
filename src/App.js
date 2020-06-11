import React, { useState } from 'react';
import './App.css';
import MainContainer       from "./components/MainContainer/MainContainer";
import AppContext          from './store';

function App() {
    const [usernameValue,setUsernameValue] = useState( null );
    const [maleCount,setMaleCount] = useState( null );
    const [femaleCount,setFemaleCount] = useState( null );
    const contextValue = {
        usernameValue,
        setUsernameValue,
        maleCount,
        setMaleCount,
        femaleCount,
        setFemaleCount,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <MainContainer/>

        </AppContext.Provider>
    );
}

export default App;

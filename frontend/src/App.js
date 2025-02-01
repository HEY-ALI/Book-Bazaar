import React, { useEffect, useState } from 'react';
import { getWelcomeMessage } from './services/api';

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        async function fetchMessage() {
            const data = await getWelcomeMessage();
            setMessage(data);
        }
        fetchMessage();
    }, []);

    return (
        <div>
            <h1>Second-Hand Book Trading System</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;

import React, { useEffect } from "react";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const TON_WALLET = "UQAp3unngYVk9-T7nXjuqdE3Gk1WDXIojiCGzTAvDCwk_3FI"; // Твой TON-кошелек

const App = () => {
    useEffect(() => {
        if (window.Telegram) {
            window.Telegram.WebApp.expand();  // Разворачиваем Mini App в Telegram
        }
    }, []);

    const handleDonate = () => {
        window.open(`https://tonhub.com/transfer/${TON_WALLET}?amount=250000000`);
    };

    return (
        <TonConnectUIProvider manifestUrl="https://mini-app-umber.vercel.app/tonconnect-manifest.json">
            <div className="App">
                <h1>💰 Пожертвуй 0.25 TON</h1>
                <TonConnectButton />
                <button onClick={handleDonate} className="donate-button">Пожертвовать</button>
            </div>
        </TonConnectUIProvider>
    );
};

export default App;

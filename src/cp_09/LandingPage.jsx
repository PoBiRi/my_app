import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        isLoggedIn ? console.log("LogIn") : console.log("logOut");
    }, [isLoggedIn]);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>PoBiRi's react..</div>
        </div>
    );
}

export default LandingPage;
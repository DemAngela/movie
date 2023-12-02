import React from 'react';
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div style={{minHeight: '100vh'}}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
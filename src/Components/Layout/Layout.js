import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div style={{minHeight: '100vh'}}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
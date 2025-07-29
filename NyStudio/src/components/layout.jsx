import ScrollTop from "./scroll-top";
import React from "react";

function Layout({children}) {
    return (  
        <>
            <ScrollTop/>
            {children}
        </>
    );
}

export default Layout

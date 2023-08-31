import React, { useState } from 'react';
import AppHeader from "../components/AppHeader";
import SideMenu from "../components/SideMenu";

function InsideLayout({children}) {

    return (
        <div className="AppGlass">
            <AppHeader />
            <div className='SideMenu'>
                <SideMenu />
            </div>
            <div className="PageContent">
                {children}
            </div>
        </div>
    );
}

export default InsideLayout;

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from './../components/sidebar/Sidebar';

function Defautlayout({children}) {
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            {children}
        </div>
    );
}

export default Defautlayout;
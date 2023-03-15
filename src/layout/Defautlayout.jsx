import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from './../components/sidebar/Sidebar';
import Lazyloading from './../components/lazyloading/Lazyloading';
import { useSelector } from 'react-redux';
import { getuser } from '../redux/reducer/userSlice';

function Defautlayout({children}) {
    const user = useSelector(getuser)
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            {children}
            {user?.loading && <Lazyloading heading={'Loading...'}/>}
        </div>
    );
}

export default Defautlayout;
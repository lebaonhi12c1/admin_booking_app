import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
function Home(props) {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="home_container">
                <Navbar/>
            </div>
        </div>
    );
}

export default Home;
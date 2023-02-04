import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss'
function Home(props) {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="home_container">
                container
            </div>
        </div>
    );
}

export default Home;
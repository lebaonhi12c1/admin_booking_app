import React, {useState } from 'react';
import './sidebar.scss'
import PersonIcon from '@mui/icons-material/Person';
import  HotelIcon  from '@mui/icons-material/Hotel';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeSelector,darkModeOn, darkModeOff } from './../../redux/reducer/themeSlice';
function Sidebar(props) {
    const theme = useSelector(darkModeSelector)
    const dispatch = useDispatch()
    const [active, setactive] = useState('Dashboard')
    const handleActive = function(e){
        setactive(e.target.innerText)
    }
    const handleOnDarkMode = ()=>{
        dispatch(darkModeOn())
    }
    const handleOffDarkMode = ()=>{
        dispatch(darkModeOff())
    }
    return (
        <div className='sidebar'>
            <div className="top">
                logo
            </div>
            <div className="center">
                <ul className="control_box">
                    <div className="heading">Dashboard</div >
                    <Link to={'/'} className={`control_content ${active ==='Dashboard'&& 'active'}`} onClick={function(e){handleActive(e)}}>
                        <DashboardIcon className='icon'/>
                        <div>Dashboard</div>
                    </Link>
                </ul>
                <ul className="control_box">
                    <div className="heading">Lists</div>
                    <Link to={'/users'} className={`control_content ${active ==='User'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <PersonIcon className='icon'/>
                        <div>User</div>
                    </Link>
                    <Link to={'/hotels'} className={`control_content ${active ==='Hotel'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <HotelIcon className='icon'/>
                        <div>Hotel</div>
                    </Link>
                    <Link to={'/rooms'} className={`control_content ${active ==='Room'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <BedroomParentIcon className='icon'/>
                        <div>Room</div>
                    </Link>
                    <Link to={'/orders'} className={`control_content ${active ==='Order'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <CreditCardIcon className='icon'/>
                        <div>Order</div>
                    </Link>
                </ul>

                <ul className="control_box">
                    <div className="heading">useful</div>
                    <div className={`control_content ${active ==='Stats'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <QueryStatsIcon className='icon'/>
                        <div>Stats</div>
                    </div>
                    <div className={`control_content ${active ==='Notification'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <NotificationsNoneIcon className='icon'/>
                        <div>Notification</div>
                    </div>
                </ul>
                <ul className="control_box">
                    <div className="heading">service</div>
                    <div className={`control_content ${active ==='System Health'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <div>System Health</div>
                    </div>
                    <div className={`control_content ${active ==='Logs'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <PsychologyIcon className='icon'/>
                        <div>Logs</div>
                    </div>
                    <div className={`control_content ${active ==='Settings'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <SettingsIcon className='icon'/>
                        <div>Settings</div>
                    </div>
                </ul>
                <ul className="control_box">
                    <div className="heading">user</div>
                    <div className={`control_content ${active ==='Profile'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <AccountBoxIcon className='icon'/>
                        <div>Profile</div>
                    </div>
                    <div className={`control_content ${active ==='Logout'&& 'active'}`}onClick={function(e){handleActive(e)}}>
                        <LogoutIcon className='icon'/>
                        <div>Logout</div>
                    </div>
                </ul>
                <ul className='control_box'>
                    <div className='heading'>theme</div>
                    <div className='themes'>
                        <div className='theme_item' onClick={handleOnDarkMode}></div>
                        <div className='theme_item'onClick={handleOffDarkMode}></div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
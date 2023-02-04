import React from 'react';
import './sidebar.scss'
import PersonIcon from '@mui/icons-material/Person';
import  HotelIcon  from '@mui/icons-material/Hotel';
import  RoomIcon  from '@mui/icons-material/Room';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="top">
                logo
            </div>
            <div className="center">
                <ul className="control_box">
                    <div className="heading">Dashboard</div>
                    <div className="control_content">
                        <span></span>
                        <div>Dashboard</div>
                    </div>
                </ul>
                <ul className="control_box">
                    <div className="heading">Lists</div>
                    <div className="control_content">
                        <PersonIcon className='icon'/>
                        <div>User</div>
                    </div>
                    <div className="control_content">
                        <HotelIcon className='icon'/>
                        <div>Hotel</div>
                    </div>
                    <div className="control_content">
                        <RoomIcon className='icon'/>
                        <div>Room</div>
                    </div>
                    <div className="control_content">
                        {/* <CardIcon className='icon'/>
                        <div>Card</div> */}
                    </div>
                </ul>

                <ul className="control_box">
                    <div className="heading">useful</div>
                    <div className="control_content">
                        <span>icon</span>
                        <div>User</div>
                    </div>
                </ul>
                <ul className="control_box">
                    <div className="heading">service</div>
                    <div className="control_content">
                        <span>icon</span>
                        <div>User</div>
                    </div>
                </ul>
                <ul className="control_box">
                    <div className="heading">user</div>
                    <div className="control_content">
                        <span>icon</span>
                        <div>User</div>
                    </div>
                </ul>
            </div>
            <div className='bottom'>

            </div>
        </div>
    );
}

export default Sidebar;
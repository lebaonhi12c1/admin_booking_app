import  SearchIcon  from '@mui/icons-material/Search';
import React from 'react';
import './navbar.scss';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='search_box'>
                <input type="search" name="search" id="search" placeholder='Search...'/>
                <SearchIcon className='icon'/>
            </div>
            <div className='right_box'>
                <div className='language'>
                    <LanguageIcon className='icon'/>
                    <span className=''>English</span>
                </div>
                <div>
                    <CropFreeOutlinedIcon className='icon'/>
                </div>
                <div className='right_item'>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className="count">
                        1
                    </div>
                </div>
                <div className='right_item'>
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className="count">
                        1
                    </div>
                </div>
                <div>
                    <ListOutlinedIcon className='icon'/>
                </div>
                <div>
                    <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-sieu-nhan-mau-do.jpg" alt="" className='user_img' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
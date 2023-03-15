import  SearchIcon  from '@mui/icons-material/Search';
import React from 'react';
import './navbar.scss';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { getuser, getuserlogout, getuserrequest } from '../../redux/reducer/userSlice';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
    const user = useSelector(getuser)
    const ditpatch = useDispatch()
    const navigation = useNavigate()
    const handlelogout = ()=>{
        ditpatch(getuserrequest())
        setTimeout(() => {
            ditpatch(getuserlogout())
            navigation('/login')
        }, 1500);
    }
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
                <div className='user'>
                    <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-sieu-nhan-mau-do.jpg" alt="" className='user_img' />
                    <div className='user-controls'>
                        <div className='heading'>{user.user?.username}</div>
                        <div className='controls'>
                            <span>
                                Setting
                            </span>
                            <span onClick={handlelogout}>
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
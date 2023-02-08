import React from 'react';
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Feature(props) {
    return (
        <div className='feature'>
            <div className="heading">
                <div className='heading_title'>Total Revenue
                </div>
                <MoreVertIcon className='heading_icon'/>
            </div>
            <div className='proccess_bar'>
                <CircularProgressbar value={70} text="70%" strokeWidth={6} className='progress_item' styles={buildStyles({
                    textColor: '#2CB0EC',
                    pathColor: '#2CB0EC',
                })}/>
                <div className='title'>Total sales made today</div>
                <div className='price'>$<span>420</span></div>
                <div className='sub'>
                    Previous transactions processing. Last payments may not be included
                </div>
            </div>
            <div className='sub_proccess'>
                <div className='sub_proccess_item'>
                    <div className='title'>
                        Target
                    </div>
                    <div className={'sub_core'} style={{color: 'red'}}>
                        <KeyboardArrowDownIcon className='icon'/>
                        <span>$12.4k</span>
                    </div>
                </div>
                <div className='sub_proccess_item'>
                    <div className='title'>
                        Last Week
                    </div>
                    <div className={'sub_core'} style={{color: '#70B507'}}>
                        <KeyboardArrowUpIcon className='icon'/>
                        <span>$12.4k</span>
                    </div>
                </div>
                <div className='sub_proccess_item'>
                    <div className='title'>
                        Last Month
                    </div>
                    <div className={'sub_core'} style={{color: '#70B507'}}>
                        <KeyboardArrowUpIcon className='icon'/>
                        <span>$12.4k</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
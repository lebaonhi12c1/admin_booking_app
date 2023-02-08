import React, { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import './widget.scss'
function Widget({type}) {
    
    const getData = function(){
        switch(type){
            case 'users':
                return {
                    title: 'users',
                    count: '100',
                    precent: '20',
                    sub: 'see all users',
                    icon: <AccountBoxIcon style={{
                        borderRadius: '4px',
                        fontSize: '32px',
                        padding: '4px',
                        backgroundColor: 'red',
                        color:'rgb(171, 2, 2)'
                    }}/>,
                }
                
            case 'orders':
                return {
                    title: 'orders',
                    count: '100',
                    precent: '20',
                    sub: 'see all orders',
                    icon: <ShoppingCartOutlinedIcon style={{
                        borderRadius: '4px',
                        fontSize: '32px',
                        padding: '4px',
                        backgroundColor: 'yellow',
                        color:'rgb(163, 163, 2)'
                    }}/>,
                }
                
            case 'earnings':
                return {
                    title: 'earnings',
                    count: '100',
                    precent: '20',
                    sub: 'see all earnings',
                    icon: <PaidOutlinedIcon style={{
                        borderRadius: '4px',
                        fontSize: '32px',
                        padding: '4px',
                        backgroundColor: 'greenyellow',
                        color:' rgb(1, 108, 1)'
                    }}/>,
                }
                
            case 'balance':
                return {
                    title: 'balance',
                    count: '100',
                    precent: '20',
                    sub: 'see all balance',
                    icon:<AccountBalanceWalletOutlinedIcon style={{
                        borderRadius: '4px',
                        fontSize: '32px',
                        padding: '4px',
                        backgroundColor: 'violet',
                        color: 'rgb(175, 40, 175)'
                    }}/>,
                }
                
            default:
                break;
         }
    }
    const data = getData()
    return (
        <div className='widget'>
            <div className='top'>
                <div className='heading'>
                    {data.title}
                </div>
                <div className='precent'>
                    <KeyboardArrowUpOutlinedIcon className='icon'/>
                    <span>{data.precent}%</span>
                </div>
            </div>
            <div className='center'>
                {(type === 'earnings' || type === 'balance') && <span>$</span>}
                <span className='count'>{data.count}</span>
            </div>
            <div className='bottom'>
                <div className='more'>
                    {data.sub}
                </div>
                <div className='icon_box'>
                    {data.icon}
                </div>
            </div>
        </div>
    );
}

export default Widget;
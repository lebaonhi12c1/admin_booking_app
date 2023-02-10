import React from 'react';
import './single.scss'
import Chart from './../../components/chart/Chart';
import TableList from './../../components/TableList/TableList';
function Single(props) {
    return (
        <div className='center_elemnt'>
            <div className="heading">
                <div className='info'>
                    <div className='head'>
                        <span className='title'>Information</span>
                        <span className='btn_edit'>Edit</span>
                    </div>
                    <div className='content'>
                        <img src="https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-person-character-vector-illustration-185480517.jpg" alt="" className='img' />
                        <div className='content_info'>
                            <div className='head'>Username</div>
                            <ul className='content_list'>
                                <li className='item'>
                                    <span>Email:</span>
                                    <span>email@gmail.com</span>
                                </li>
                                <li className='item'>
                                    <span>Phone:</span>
                                    <span>0000000000</span>
                                </li>
                                <li className='item'>
                                    <span>Address:</span>
                                    <span>Ho Chi Minh City</span>
                                </li>
                                <li className='item'>
                                    <span>Country:</span>
                                    <span>VietNam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="chart_info">
                    <Chart aspect={3/1} title='User Spending (Last 6 months)'/>
                </div>
            </div>
            <div className='table'>
                    <TableList/> 
            </div>
        </div>
    );
}

export default Single;
import React from 'react';

import './home.scss'
import Widget from '../../components/widget/Widget';
import Chart from './../../components/chart/Chart';
import Feature from '../../components/Freature/Feature';
import TableList from '../../components/TableList/TableList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getuser } from '../../redux/reducer/userSlice';
function Home(props) {
    const navigation = useNavigate()
    const user = useSelector(getuser)
    useEffect(()=>{
        user?.user === null && navigation('/login')
    },[])
    return (
        <div className='home center_elemnt'>
            <div className='widget_box'>
                <Widget type = {'users'}/>
                <Widget type = {'orders'}/>
                <Widget type = {'earnings'}/>
                <Widget type = {'balance'}/>
            </div>
            <div className='chart_box'>
                <Feature/>
                <Chart aspect={2/1} title='All Spending (Last 6 months)'/>
            </div>
            <div className='table_list'>
                <TableList/>
            </div>
        </div>
    );
}

export default Home;
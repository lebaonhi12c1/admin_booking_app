import React from 'react';

import './home.scss'
import Widget from '../../components/widget/Widget';
import Chart from './../../components/chart/Chart';
import Feature from '../../components/Freature/Feature';
import TableList from '../../components/TableList/TableList';
function Home(props) {
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
                <Chart/>
            </div>
            <div className='table_list'>
                <TableList/>
            </div>
        </div>
    );
}

export default Home;
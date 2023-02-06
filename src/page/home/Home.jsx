import React from 'react';
import './home.scss'
import Widget from '../../components/widget/Widget';
function Home(props) {
    return (
        <div className='home center_elemnt'>
            <div className='widget_box'>
                <Widget type = {'users'}/>
                <Widget type = {'orders'}/>
                <Widget type = {'earnings'}/>
                <Widget type = {'balance'}/>
            </div>
        </div>
    );
}

export default Home;
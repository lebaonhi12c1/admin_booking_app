import React from 'react';
import './list.scss'
import Datatable from '../../components/datatable/Datatable';
function List(props) {
    return (
        <div className='list center_elemnt'>
            <Datatable/>
        </div>
    );
}

export default List;
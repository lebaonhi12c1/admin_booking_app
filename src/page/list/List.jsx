import React from 'react';
import './list.scss'
import Datatable from '../../components/datatable/Datatable';
import useSWR from 'swr'
import {useLocation } from 'react-router-dom';
const gethotels = async (url)=>{
    const res = await fetch(url)
    const data = await res.json()
    return data
}
function List(props) {
    const params= useLocation()
    const {data,isLoading,error} = useSWR(`/api${params.pathname}`,gethotels)
    return (
        <div className='list center_elemnt'>
            {isLoading ? 'Loading...': error ? <div>{error.toString()}</div> :<Datatable value= {data}/>}
        </div>
    );
}

export default List;
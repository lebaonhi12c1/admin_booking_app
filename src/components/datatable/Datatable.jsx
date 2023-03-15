import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { Link, useLocation } from 'react-router-dom';
import { hotelscolumns, roomscolumns } from '../../columndata';
import { useState } from 'react';
import { useEffect } from 'react';
 const renderAction = function(){

    return {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: ()=>{
            return (
                <div className="action">
                    <div className='btn_action view'>View</div>
                    <div className='btn_action delete'>Delete</div>
                </div>
            )
        }
    }
 }
// const rows = [
//   { id: 1,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Active' },
//   { id: 2,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Pending' },
//   { id: 3,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Active' },
//   { id: 4,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Passive' },
//   { id: 5,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'Active' },
//   { id: 6,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Melisandre', firstName: null, age: 150, status: 'Pending' },
//   { id: 7,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Active' },
//   { id: 8,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Passive' },
//   { id: 9,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Active' },
// ];

export default function Datatable({value}) {
  const location = useLocation()
  const [column, setcolumn] = useState([])
  const [row,setrow] = useState([])
  useEffect(()=>{
    const getcolumn = ()=>{
      switch (location.pathname) {
        case '/hotels':
          setcolumn(hotelscolumns)
          setrow(value.map(item=>{
            return {...item,id:item._id,cheapestPrice: '$'+item.cheapestPrice?.toFixed(1)}
          }))
          break;
        case '/rooms':
          setcolumn(roomscolumns)
          setrow(value.map(item=>{
            return {...item,price:'$'+ item.price?.toFixed(1), id: item._id}
          }))
          break;              
        default:
          break;
      }
    }
    getcolumn()
  },[location.pathname])
  return (
    <div className="">
        <div className="datatable_heading">
          <div className='title'>
            All your item
          </div>
          <Link to={`${location.pathname}/new`} className='btn_new'>
            New
          </Link>
        </div>
        <div style={{ height: '600px', width: '100%' }}>
        <DataGrid className='datagrid'
          rows={row}
          columns={column?.concat(renderAction())}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

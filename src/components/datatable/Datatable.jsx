import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { Link, useLocation } from 'react-router-dom';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'image', 
    headerName: 'Image', 
    width: 100,
    renderCell: params =>{
        return(
                <img src={params.row.image}alt="" style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }} />
            )
    }
 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status', 
    headerName: 'Status', 
    width: 200,
    renderCell: params =>{
        return(
                <div className={`status ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
    }
 },
];
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
const rows = [
  { id: 1,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Active' },
  { id: 2,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Pending' },
  { id: 3,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Active' },
  { id: 4,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Passive' },
  { id: 5,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'Active' },
  { id: 6,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Melisandre', firstName: null, age: 150, status: 'Pending' },
  { id: 7,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Active' },
  { id: 8,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Passive' },
  { id: 9,image:'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg', lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Active' },
];

export default function Datatable() {
  const location = useLocation()
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
          rows={rows}
          columns={columns.concat(renderAction())}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

const hotelscolumns = [
    {field: 'address', headerName: 'Address',width: 200},
    {
      field: 'photos', 
      headerName: 'Image', 
      width: 100,
      renderCell: params =>{
          return(
                  <img src={params.row.photos[0]}alt="" style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                  }} />
              )
      }
   },
    { field: 'cheapestPrice', headerName: 'Cheapest Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 230 },
    {
      field: 'name',
      headerName: 'Name',
      width: 100,
    },
    {
      field: 'rate',
      headerName: 'Rate',
      width: 80,
    },
//     {
//       field: 'status', 
//       headerName: 'Status', 
//       width: 200,
//       renderCell: params =>{
//           return(
//                   <div className={`status ${params.row.status}`}>
//                       {params.row.status}
//                   </div>
//               )
//       }
//    },
  ];
  const roomscolumns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 200
    },
    {
        field: 'maxPeople',
        headerName: 'maxPeople',
        width: 120
    },
    {
        field: 'numOfReviews',
        headerName: 'numberOfReviews',
        width: 150
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100
    },
    {
        field: 'rating',
        headerName: 'Rate',
        width: 100
    },
  ]
  export {hotelscolumns,roomscolumns}
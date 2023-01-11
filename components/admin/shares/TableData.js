import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'image', headerName: 'Image', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 90,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        valueGetter: (params) =>
            `${params.row.status ? 'Được đăng bán' : 'Không được đăng bán'}`,
    },
];

export default function DataTable(props) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
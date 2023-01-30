import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable(props) {
    function generateRandom() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    const handleChangeItm = (value) => {
        if (props.change) {
            props.change(value)
        }
    }

    return (
        <div style={{ height: 800, width: '100%' , marginTop: '20px' }}>
            <DataGrid
                rowHeight={120}
                getRowId={(row) =>  generateRandom()}
                rows={props.data}
                columns={props.columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={props.isCheckBox}
                onSelectionModelChange={itm => handleChangeItm(itm)}
            />
        </div>
    );
}
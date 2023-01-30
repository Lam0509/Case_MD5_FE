import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'

export default function UpdateStatusBtn(props) {
    const [status, setStatus] = React.useState(props.status);

    const handleChange = (event) => {
        function fetchData() {
            axios.put(`http://localhost:8000/admin/order/detail/${props.id}`, {status: event.target.value})
                .then(() => {
                    setStatus(event.target.value)
                })
        }
        fetchData()
    };

    return (
        <FormControl sx={{ minWidth: 120 }} size='small'>
            <Select
                value={status}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                    backgroundColor: status === 'Đã giao' ? 'forestgreen' : status === 'Đang giao' ? 'purple' : status === 'Đang xử lý' ? '#ffcc00' : 'dodgerblue',
                    color: 'white', fontSize: '14px' , width: '160px', height: '32px', '& .MuiSvgIcon-root': {
                        color: 'white'
                    }}}
            >
                {props.data.map(item => {
                    return <MenuItem key={item.status} value={item.status}>{item.status}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
}
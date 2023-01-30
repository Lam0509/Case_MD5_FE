import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectStatus(props) {
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
        props.search(event.target.value, 'status')
    };

    return (
        <>
            <FormControl sx={{ marginTop: 1, marginRight: 1, marginBottom: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Status</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="Status"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {props.data.map(item => {
                        return <MenuItem key={item.status} value={item.status}>{item.status}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    )
}
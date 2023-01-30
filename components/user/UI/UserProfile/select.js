import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGender() {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <FormControl style={{margin:'-10px'}} sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Gender</InputLabel>
            <Select
                style={{width:'250px'}}
                labelId="demo-select-small"
                id="demo-select-small"
                value={gender}
                label="Gender"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='male'>Nam</MenuItem>
                <MenuItem value='female'>Nữ</MenuItem>
            </Select>
        </FormControl>
    );
}
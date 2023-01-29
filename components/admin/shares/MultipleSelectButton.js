import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectCategories(props) {
    const [cates, setCates] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCates(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        props.search(value, 'category')
    };

    return (
        <div >
            <FormControl sx={{ m: 1, width: 300}} size='small'>
                <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={cates}
                    onChange={handleChange}
                    input={<OutlinedInput label="Category" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {props.data.map((category) => (
                        <MenuItem key={category.id} value={category.name}>
                            <Checkbox checked={cates.indexOf(category.name) > -1}/>
                            <ListItemText primary={category.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
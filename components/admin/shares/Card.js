import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";
import axios from "axios"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const options = [
    'Today',
    'This month',
    'This year'
];

const ITEM_HEIGHT = 48;

function LongMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChange = (value) => {
        props.func(value)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{marginLeft: '80px'}}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className='p-0'
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} value={option} onClick={() => {
                        handleChange(option)
                        handleClose()
                    }}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default function MyCard(props) {

    const [detail, setDetail] = useState({
        current: props.data.current,
        change: props.data.change,
        sub: props.data.sub
    })

    const handleChange = (value) => {
        if (value === 'This year') {
            axios.get(`http://localhost:8000/admin/reports/${props.for.toLowerCase()}/year`)
                .then((res) => {
                    setDetail(res.data)
                })
        }
        if (value === 'This month') {
            axios.get(`http://localhost:8000/admin/reports/${props.for.toLowerCase()}/month`)
                .then((res) => {
                    setDetail(res.data)
                })
        }
        if (value === 'Today') {
            axios.get(`http://localhost:8000/admin/reports/${props.for.toLowerCase()}/date`)
                .then((res) => {
                    setDetail(res.data)
                })
        }
    }

    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardContent>
                <div>
                    <div className='d-flex align-items-center' style={{float: "left"}}>
                        <img src={props.image} style={{width: '60px', height: "auto"}} alt=""/>
                        <div className='ms-2'>
                            <h5 className='mb-0 fs-6' style={{opacity: 0.6}}>{props.for}</h5>
                            <p className='mb-0 fs-4' style={{fontWeight: "bold"}}>{detail.current}</p>
                        </div>
                    </div>
                    <div style={{float: "right"}}>
                        <LongMenu func={handleChange}/>
                    </div>
                </div>
                <div className='mt-4 d-flex align-items-center' style={{ float: "left" , marginBottom: '12px' }}>
                    {detail.change > 0 ?
                        (
                            <>
                                <ArrowUpwardIcon style={{color: 'seagreen', fontSize: '20px'}} />
                                <span style={{color: 'seagreen'}}>{detail.change}%</span>
                            </>
                        )
                        :
                        (
                            <>
                                <ArrowDownwardIcon style={{color: 'red', fontSize: '20px'}} />
                                <span style={{color: 'red'}}>{Math.abs(detail.change)}%</span>
                            </>
                        )
                    }
                    <span className='ms-2'>Since {detail.sub}</span>
                </div>
            </CardContent>
        </Card>
    );
}
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import {useSelector} from "react-redux";

export default function ProfileList() {
    const user = useSelector(state => state.auth.currentUser)
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Name: {user.name}
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <Link href='/profile/update'>
                    <ListItemText primary="Profile Update" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <Link href='/profile/orders'>
                    <ListItemText primary="Order information" />
                </Link>
            </ListItemButton>
        </List>
    );
}
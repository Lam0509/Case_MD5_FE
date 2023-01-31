import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useSelector} from "react-redux";

export default function ImageAvatars() {
    const user = useSelector(state => state.auth.currentUser)
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt={user.name}
                src={user.image}
                sx={{ width: 126, height: 126 }}
            />
        </Stack>
    );
}
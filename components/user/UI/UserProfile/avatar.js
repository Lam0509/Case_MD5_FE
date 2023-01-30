import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="../../../../assets/user/images/ava-1.jpg"
                sx={{ width: 126, height: 126 }}
            />
        </Stack>
    );
}
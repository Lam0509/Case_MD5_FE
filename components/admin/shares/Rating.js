import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function AssessRating(props) {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={props.point} precision={0.5} readOnly />
        </Stack>
    );
}
import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,

} from 'mdb-react-ui-kit';
import ImageAvatars from "../../components/user/UI/UserProfile/avatar";
import UploadButtons from "../../components/user/UI/UserProfile/button";
import TextField from "@mui/material/TextField";
import SelectGender from "../../components/user/UI/UserProfile/select";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ProfilePageUpdate() {
    return (

        <MDBCardBody>
            <MDBRow>
                <MDBCol sm="3">
                    <p style={{color:'red', fontWeight: 900 }} className="fw-bold">Profile Information</p>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Update avatar</MDBCardText>
                    <ImageAvatars/>
                </MDBCol>
                <MDBCol sm="9" style={{marginTop: '40px'}}>
                    <UploadButtons/>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Name" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Age</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Age" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <SelectGender/>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Phone" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Address" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <Box
                        style={{margin:'-10px'}}
                        component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
                        noValidate
                        autoComplete="off">
                        <TextField style={{width:'250px',margin:'3px'}} size='small' id="outlined-basic" label="Password" variant="outlined" />
                    </Box>
                </MDBCol>
            </MDBRow>
            <hr/>
            <Stack spacing={2} direction="row">
                <Button type='submit' variant="contained">Update</Button>
            </Stack>
        </MDBCardBody>
    )
}
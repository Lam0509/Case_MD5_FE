import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,

} from 'mdb-react-ui-kit';
import ImageAvatars from "../../components/user/UI/UserProfile/avatar";
import {useSelector} from "react-redux";

export default function ProfilePageUpdate() {
    const user = useSelector(state => state.auth.currentUser)

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
                    <ImageAvatars/>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.name}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Age</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.age}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.gender}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.phone}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.email}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>{user.address}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText>*******</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
        </MDBCardBody>
    )
}
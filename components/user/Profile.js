import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import ProfileList from "../../components/user/UI/UserProfile/profile";
import ImageAvatars from "../../components/user/UI/UserProfile/avatar";
import UploadButtons from "../../components/user/UI/UserProfile/button";
import {Outlet} from "react-router-dom";
import ProfilePageUpdate from "./ProfileUpdate";

export default function ProfilePage({children}) {
    return (
        <section style={{backgroundColor: '#eee'}}>
            <MDBContainer className="py-0">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <ProfileList/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                {/*<Outlet/>*/}
                                {children}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
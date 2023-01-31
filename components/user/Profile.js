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

export default function ProfilePage({children}) {
    return (
        <section style={{backgroundColor: '#eee'}}>
            <MDBContainer className="py-0">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4" style={{marginTop: '30px'}}>
                            <MDBCardBody className="text-center">
                                <ProfileList/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4" style={{marginTop: '30px'}}>
                            <MDBCardBody>
                                {children}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
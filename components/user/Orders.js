import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,

} from 'mdb-react-ui-kit';
import DataTable from "../../components/user/UI/UserProfile/table";

export default function OrdersPage() {
    return (
        <MDBCardBody>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Address Information</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <DataTable/>
            </MDBRow>
        </MDBCardBody>
    )
}
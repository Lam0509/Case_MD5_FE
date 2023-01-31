import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import DataTable from "../../components/user/UI/UserProfile/table";
import Table from "@mui/material/Table";
import {MDBCardBody, MDBCardText, MDBCol, MDBRow} from "mdb-react-ui-kit";
import DataTable from "../admin/shares/TableData";

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
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Shipper</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </Table>
                {/*<DataTable/>*/}
            </MDBRow>
        </MDBCardBody>
    )
}
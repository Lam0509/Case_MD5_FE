import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";
import BasicRating from "../../components/user/UI/Rating";
import NavBar from "../../components/user/shares/NavBar";
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
import {cartActions} from "../../features/shopping-cart/cartSlice";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

export default function Reviews() {
    const [open, setOpen] = React.useState(false);

    const router = useRouter();
    const auth = useSelector(state => state.auth)

    const handleClickOpen = () => {
        if (auth.isLoggedIn) {
            setOpen(true);
        } else {
            router.push('/login')
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p style={{marginBottom:'7px',fontWeight:'bold', cursor: "pointer"}} variant="outlined" onClick={handleClickOpen}>
                Your reviews
            </p>

            <Dialog maxWidth='md' fullWidth='md' open={open} onClose={handleClose} style={{ zIndex:999999}}>
                <DialogTitle>Input your reviews</DialogTitle>
                <DialogContent >
                    <section style={{backgroundColor: '#eee'}}>
                        <MDBContainer className="py-5">
                            <MDBRow>
                                <MDBCol lg="4">
                                    <MDBCardImage
                                        src="https://cdn.tgdd.vn/Files/2020/04/21/1250680/cach-lam-banh-pizza-chay-bang-noi-chien-khong-dau-10.jpg"
                                        width='260px'
                                    />

                                    <MDBCard className="mb-3 mt-4 mb-lg-0">
                                        <MDBCardBody className="p-0">
                                            <MDBListGroup flush className="rounded-3">
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBRow> <MDBCardText style={{height:'360px',marginLeft:'55px'}}><b>0 Comments</b></MDBCardText></MDBRow>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody style={{height:'560px'}}>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText></MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText><b>Write your reviews about food here</b></MDBCardText>
                                                </MDBCol>

                                            </MDBRow>
                                            <MDBRow>
                                                <textarea style={{height:'350px'}} sm="3">

                                                </textarea>

                                            </MDBRow>
                                            <br/>
                                            <NavBar/>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </DialogContent>
            </Dialog>
        </div>
    );
}
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
                <DialogContent>
                    <section style={{ backgroundColor: '#eee' }}>
                        <MDBContainer className="py-5">
                            <MDBRow>
                                <MDBCol lg="4">
                                    <MDBCardImage
                                        src="https://cdn.tgdd.vn/Files/2020/04/21/1250680/cach-lam-banh-pizza-chay-bang-noi-chien-khong-dau-10.jpg"
                                        width='230px'
                                    />

                                    <MDBCard className="mb-4 mb-lg-0">
                                        <MDBCardBody className="p-0">
                                            <MDBListGroup flush className="rounded-3">
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fas icon="globe fa-lg text-warning" />
                                                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                                    <MDBCardText>mdbootstrap</MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                                    <MDBCardText>@mdbootstrap</MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                    <MDBCardText>mdbootstrap</MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                                    <MDBCardText>mdbootstrap</MDBCardText>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Full Name</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Email</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Phone</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Mobile</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Address</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                                    </MDBProgress>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol md="6">
                                            <MDBCard className="mb-4 mb-md-0">
                                                <MDBCardBody>
                                                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                                    </MDBProgress>

                                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                                    <MDBProgress className="rounded">
                                                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                                    </MDBProgress>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </DialogContent>
                {/*<DialogActions>*/}
                {/*    <Button onClick={handleClose}>Cancel</Button>*/}
                {/*    <Button onClick={handleClose}>Subscribe</Button>*/}
                {/*</DialogActions>*/}
            </Dialog>
        </div>
    );
}
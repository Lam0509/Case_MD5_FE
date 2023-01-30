import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

import BasicRating from "../../components/user/UI/Rating";
export default function RecentComments(props) {
    return (
        <section style={{ backgroundColor: "#df2020", padding:'20px' }}>
            <MDBContainer className="py-30" style={{ maxWidth: "1000px" }}>
                <MDBRow>
                    <MDBCol className="md=12">
                        <MDBCard className="text-dark">
                            <MDBCardBody className="p-3">
                                <MDBTypography tag="h4" className="mb-0">
                                    Recent reviews
                                </MDBTypography>
                                <p className="fw-light mb-4 pb-2">
                                    Latest comments and ratings by customers
                                </p>

                                <div className="d-flex flex-start">
                                    <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                    />
                                    <div>
                                        <MDBTypography tag="h6" className="fw-bold mb-1">
                                            Maggie Marsh
                                        </MDBTypography>
                                        <p className="mb-0">
                                            March 07, 2021
                                        </p>
                                        <BasicRating/>
                                        <p className="mb-0">
                                            Đồ ăn ngon tuyệt vời
                                        </p>
                                    </div>
                                </div>
                            </MDBCardBody>

                            <hr className="my-0" />

                            <MDBCardBody className="p-4">
                                <div className="d-flex flex-start">
                                    <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                    />
                                    <div>
                                        <MDBTypography tag="h6" className="fw-bold mb-1">
                                            Lara Stewart
                                        </MDBTypography>
                                        <p className="mb-0">
                                            March 15, 2021
                                        </p>
                                        <BasicRating/>
                                        <p className="mb-0">
                                            Tuyệt vời
                                        </p>
                                    </div>
                                </div>
                            </MDBCardBody>

                            <hr className="my-0" />

                            <MDBCardBody className="p-4">
                                <div className="d-flex flex-start">
                                    <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                    />
                                    <div>
                                        <MDBTypography tag="h6" className="fw-bold mb-1">
                                            Alexa Bennett
                                        </MDBTypography>
                                        <p className="mb-0">
                                            March 24, 2021
                                        </p>
                                        <BasicRating/>
                                        <p className="mb-0">
                                            Đồ ăn chất lượng
                                        </p>
                                    </div>
                                </div>
                            </MDBCardBody>

                            <hr className="my-0" />

                            <MDBCardBody className="p-4">
                                <div className="d-flex flex-start">
                                    <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                    />
                                    <div>
                                        <MDBTypography tag="h6" className="fw-bold mb-1">
                                            Alexa Bennett
                                        </MDBTypography>
                                        <p className="mb-0">
                                            March 30, 2021
                                        </p>
                                        <BasicRating/>
                                        <p className="mb-0">
                                            Tốt
                                        </p>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
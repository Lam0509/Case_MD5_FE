import React, { useRef } from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import Link from 'next/link'
import {useNavigate} from "react-router-dom";
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {useDispatch} from "react-redux";
import {loggedIn} from "../../features/auth/authSlice";
import {useRouter} from "next/router";

const Login = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate();
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values);

            function fetchData() {
                axios.post('http://localhost:8000/login', values)
                    .then(() => {
                        dispatch(loggedIn())
                        router.push("/home");
                    }).catch((error) => console.log(error)
                )
            }
            fetchData()
        }
    })
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={formik.handleSubmit}>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        name='email'
                                        value={formik.values.email}
                                        placeholder="Email"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <p>{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        name='password'
                                        value={formik.values.password}
                                        placeholder="Password"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p>{formik.errors.password}</p>
                                    )}
                                </div>
                                <button type="submit" className="addToCart__btn">
                                    Login
                                </button>
                            </form>
                            <Link href="/register">
                                Don't have an account? Create an account
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
import React, { useRef } from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import {useNavigate} from "react-router-dom";
import Link from 'next/link'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {useRouter} from "next/router";

const Register = () => {
    // const navigate = useNavigate();
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            gender: '',
            address: '',
            phone: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Your name must be at least 5 characters long')
                .max(25, 'Your name must be under 25 characters long')
                .required('Name is required'),
            age: Yup.number()
                .required('Age is required'),
            gender: Yup.string()
                .required('Gender is required'),
            address: Yup.string()
                .required('Address is required'),
            phone: Yup.string()
                .required('Phone is required'),
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
                axios.post('http://localhost:8000/register', values)
                    .then(() => {
                        router.push('/login')
                    }).catch((error) => console.log(error)
                )
            }
            fetchData()
        }

    });

    return (
        <Helmet title="Signup">
            <CommonSection title="Signup" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={formik.handleSubmit}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        placeholder="Full name"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.name && formik.touched.name && (
                                        <p>{formik.errors.name}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        name="age"
                                        value={formik.values.age}
                                        placeholder="Age"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.age && formik.touched.age && (
                                        <p>{formik.errors.age}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formik.values.gender}
                                        placeholder="Gender"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.gender && formik.touched.gender && (
                                        <p>{formik.errors.gender}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        name="address"
                                        value={formik.values.address}
                                        placeholder="Address"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.address && formik.touched.address && (
                                        <p>{formik.errors.address}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formik.values.phone}
                                        placeholder="Phone"
                                        required
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.phone && formik.touched.phone && (
                                        <p>{formik.errors.phone}</p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        name="email"
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
                                        name="password"
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
                                    Sign Up
                                </button>
                            </form>
                            <Link href="/login">Already have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;
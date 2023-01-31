import React, {useState} from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import {Container} from "reactstrap";
import Link from 'next/link'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {Backdrop, CircularProgress} from "@mui/material";
import {authActions} from "../../features/auth/authSlice";
import {
    MDBCheckbox, MDBContainer, MDBInput, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane
} from 'mdb-react-ui-kit';
import Button from "@mui/material/Button";

const Login = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    const [child, setChild] = useState(<Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={true}
    >
        <CircularProgress color="inherit"/>
    </Backdrop>)
    const dispatch = useDispatch()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        }, validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required')
        }), onSubmit: (values) => {
            function fetchData() {
                axios.post('http://localhost:8000/login', values)
                    .then((res) => {
                        localStorage.setItem('token',res.data.token);
                        dispatch(authActions.loggedIn())
                        router.push("/home");
                    }).catch((error) => console.log(error))
            }

            fetchData()
        }
    })
    return (<Helmet title="Login">
            <CommonSection title="Login"/>
            <section>
                <Container>

                    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                            <MDBTabsItem>
                                <MDBTabsLink className='text-bg-danger' onClick={() => handleJustifyClick('tab1')}
                                             active={justifyActive === 'tab1'}>
                                    Login
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                             active={justifyActive === 'tab2'}>

                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={justifyActive === 'tab1'}>
                                <form onSubmit={formik.handleSubmit}>
                                    <MDBInput wrapperClass='mb-4'
                                              type="email"
                                              name='email'
                                              value={formik.values.email}
                                              placeholder="Email"
                                              required
                                              onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)}
                                    <MDBInput wrapperClass='mb-4'
                                              type="password"
                                              name='password'
                                              value={formik.values.password}
                                              placeholder="Password"
                                              required
                                              onChange={formik.handleChange}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p>{formik.errors.password}</p>)}
                                    <div className="d-flex justify-content-between mx-4 mb-4">
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'
                                                     label='Remember me'/>
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <Button style={{marginLeft:'250px'}} type="submit" variant="contained" color="error" className="addToCart__btn">
                                        Sign In
                                    </Button>
                                </form>
                                <div className="text-center mt-3">Not a member? <Link href="/register">Register</Link></div>
                            </MDBTabsPane>

                        </MDBTabsContent>

                    </MDBContainer>
                </Container>
            </section>
        </Helmet>);
};
export default Login;
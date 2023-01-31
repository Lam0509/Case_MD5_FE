import React, {useState} from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import {Container} from "reactstrap";
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {
    MDBCheckbox, MDBContainer, MDBInput, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane
} from 'mdb-react-ui-kit';
import {useRouter} from "next/router";
import Button from "@mui/material/Button";
import Link from "next/link";

const Register = () => {
    const router = useRouter();
    const [justifyActive, setJustifyActive] = useState('tab2');
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    const formik = useFormik({
        initialValues: {
            name: '', age: '', gender: '', address: '', phone: '', email: '', password: ''
        }, validationSchema: Yup.object({
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
        }), onSubmit: (values) => {
            console.log(values);

            function fetchData() {
                axios.post('http://localhost:8000/register', values)
                    .then(() => {
                        router.push('/login')
                    }).catch((error) => console.log(error))
            }

            fetchData()
        }
    });
    return (<Helmet title="Signup">
        <CommonSection title="Signup"/>
        <section>
            <Container>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Login
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Register
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>

                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <form onSubmit={formik.handleSubmit}>
                                <MDBInput wrapperClass='mb-4'
                                          type="text"
                                          name="name"
                                          value={formik.values.name}
                                          placeholder="Full name"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.name && formik.touched.name && (<p>{formik.errors.name}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type="number"
                                          name="age"
                                          value={formik.values.age}
                                          placeholder="Age"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.age && formik.touched.age && (<p>{formik.errors.age}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type="text"
                                          name="gender"
                                          value={formik.values.gender}
                                          placeholder="Gender"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.gender && formik.touched.gender && (<p>{formik.errors.gender}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type="text"
                                          name="address"
                                          value={formik.values.address}
                                          placeholder="Address"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.address && formik.touched.address && (<p>{formik.errors.address}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type="text"
                                          name="phone"
                                          value={formik.values.phone}
                                          placeholder="Phone"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.phone && formik.touched.phone && (<p>{formik.errors.phone}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type='email'
                                          name="email"
                                          value={formik.values.email}
                                          placeholder="Email"
                                          required
                                          onChange={formik.handleChange}/>
                                {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)}
                                <MDBInput wrapperClass='mb-4'
                                          type='password'
                                          name="password"
                                          value={formik.values.password}
                                          placeholder="Password"
                                          required
                                          onChange={formik.handleChange}
                                />
                                {formik.errors.password && formik.touched.password && (<p>{formik.errors.password}</p>)}

                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault'
                                                 label='I have read and agree to the terms'/>
                                </div>
                                <div className='d-flex justify-content-center mb-4'>
                                    <span><Link href='/login'>You did have an account</Link></span>
                                </div>


                                <Button style={{marginLeft:'250px'}} type="submit" variant="contained" color="primary" className="addToCart__btn">
                                    Sign Up
                                </Button>
                            </form>

                        </MDBTabsPane>

                </MDBTabsContent>
            </MDBContainer>
        </Container>
    </section>
</Helmet>)
};
export default Register;
import {useFormik} from "formik";
import * as React from 'react';
import Box from '@mui/material/Box';
import axios from "axios";
import {Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Link from 'next/link'
import {useRouter} from "next/router";
import DropFileInput from "../shares/FileUploadButton";
import storage from '../../../configs/firebase'
import {ref, uploadBytesResumable , getDownloadURL } from "firebase/storage"

export default function Add(props) {

    const router = useRouter();

    const onFileChange = (files) => {
        formik.values.image = files
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            description: '',
            image: '',
            status: '',
            category: ''
        },
        onSubmit: values => {
            function fetchData() {
                const storageRef = ref(storage, `/product-upload/${formik.values.image[0].name}`)
                const uploadTask = uploadBytesResumable(storageRef, formik.values.image[0]);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                    },
                    (err) => console.log(err),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            formik.values.image = url
                            axios.post('http://localhost:8000/admin/product/add', values)
                                .then(res => {
                                    router.push('/admin/product')
                                })
                        });
                    }
                );
            }
            fetchData();
        }
    })

    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-md-4">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                    className='mt-4'
                >
                    <h1 className='mb-4' style={{marginLeft: '-6px'}}>Add product: </h1>
                    <div className='row'>
                        <div className='col-lg-4 border border-1 p-3 rounded mb-4 me-4'>
                            <div className='mb-2'>
                                <div className="form-group">
                                    <h5>Product Name</h5>
                                    <input type="text" name='name' className="form-control mt-2 mb-3" id="example1"
                                           aria-describedby="emailHelp" onChange={formik.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <h5>Price</h5>
                                    <input type="number" name='price' className="form-control mt-2 mb-3" id="example2"
                                           aria-describedby="emailHelp" onChange={formik.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <h5>Quantity</h5>
                                    <input type="number" name='quantity' className="form-control mt-2 mb-3" id="example3"
                                           aria-describedby="emailHelp" onChange={formik.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <h5>Description</h5>
                                    <textarea className="form-control mt-2" id="exampleFormControlTextarea1"
                                              rows="3" name='description' onChange={formik.handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 border border-1 p-3 rounded mb-4'>
                            <div className='row'>
                                <h5>Product Image</h5>
                                <div className='mt-3'>
                                    <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                </div>
                            </div>
                            <div className='row' style={{marginTop: '32px'}}>
                                <div className='col-lg-9 row'>
                                    <h5>Add Category</h5>
                                    {props.categories.map((category, index) => {
                                        return (
                                            <FormGroup className='col-md-6' key={`${category.id}+${index}`}>
                                                <FormControlLabel control={<Checkbox name='category' key={category.id} onChange={formik.handleChange} value={category.id}/>} label={category.name} />
                                            </FormGroup>
                                        )
                                    })}
                                </div>
                                <div className='col-lg-3'>
                                    <h5>Select Status</h5>
                                    <div className="form-check form-switch ms mb-3">
                                        <label className="form-check-label ms-2 fs-5" htmlFor="flexSwitchCheckDefault">{formik.values.status.length !== 0 ? 'Bán' : 'Ẩn'}</label>
                                        <input className="form-check-input" id="flexSwitchCheckDefault" name='status' onChange={formik.handleChange} style={{height: "1.4em",width: '2.6em'}} type="checkbox" role="switch"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{float: "right", marginRight: '54px', marginBottom: '40px'}}>
                        <Button variant="contained" type='submit' className='me-2'>Submit</Button>
                        <Button variant="contained" type='button' className='text-bg-danger'>
                            <Link className='text-decoration-none text-white' href='/admin/product'>
                                Cancel
                            </Link>
                        </Button>
                    </div>
                </Box>
            </main>
        </>
    )
}


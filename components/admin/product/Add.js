import {useFormik} from "formik";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Link from 'next/link'
import {useRouter} from "next/router";

export default function Add(props) {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            image: '',
            status: '',
            category: ''
        },
        onSubmit: values => {
            function fetchData() {
                axios.post('http://localhost:8000/admin/product/add', values)
                    .then(res => {
                        router.push('/admin/product')
                    })
            }
            fetchData();
        }
    })

    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                    className='mt-4'
                >
                    <h1>Add product: </h1>
                    <div>
                        <TextField id="name" label="Name" type='text' name='name' onChange={formik.handleChange}/>
                        <TextField id="price" label="Price" type='number' name='price' onChange={formik.handleChange}/>
                        <TextField id="quantity" label="Quantity" type='number' name='quantity' onChange={formik.handleChange}/>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    <div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch"
                                   id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch
                                    checkbox input</label>
                        </div>
                    </div>
                    <div className='ml-2'>
                        {props.categories.map((category, index) => {
                            return (
                                <FormGroup key={`${category.id}+${index}`}>
                                    <FormControlLabel control={<Checkbox name='category' key={category.id} onChange={formik.handleChange} value={category.id}/>} label={category.name} />
                                </FormGroup>
                            )
                        })}
                    </div>
                    <div>
                        <Button variant="contained" type='submit' className='me-2'>Submit</Button>
                        <Button variant="contained" type='button' className='btn btn-danger'>
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


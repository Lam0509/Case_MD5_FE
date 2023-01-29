import {Button} from "@mui/material";
import DataTable from "../shares/TableData";
import Link from 'next/link'
import {useEffect, useState} from "react";
import * as React from "react";
import {useRouter} from "next/router";
import axios  from "axios";
import SearchButton from "../shares/SearchButton";
import MultipleSelectCategories from "../shares/MultipleSelectButton";
import SelectStatus from "../shares/OneSelectButton";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function List(props) {

    const [myProducts, setMyProducts] = useState([])

    const [filter, setFilter] = useState({
        keyword: '',
        categories: '',
        sta: ''
    })

    const updateButton = (id) => {
        return (
            <>
                <Link href={`/admin/product/update/${id}`}>
                    <p className='text-black fs-10 btn mb-0' style={{backgroundColor: 'lightgrey', width: '64px'}}>
                     Edit
                    </p>
                </Link>
            </>
        )
    }

    const columns = [
        {
            field: 'name, image, description',
            headerName: 'PRODUCT DETAILS',
            width: 420,
            renderCell: (params) => {
                return (
                    <div className='d-flex justify-content-between align-items-center'>
                        <img style={{width: '100px', borderRadius: '4px'}} src={params.row.image} alt=""/>
                        <div style={{marginLeft: '16px'}}>
                            <p style={{fontWeight: "bold", fontSize: '16px', marginBottom: '8px'}}>{params.row.name}</p>
                            <p style={{width: '200px', marginBottom: 0, textOverflow: 'ellipsis', overflow: "hidden", whiteSpace: "nowrap"}}>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                )
            }
        },
        {
            field: 'categories',
            headerName: 'CATEGORY',
            width: 280,
            renderCell: (params) => {
                return (
                    <div className='flex-sm-wrap'>
                        {params.row.categories.map((category) => {
                            return <Chip label={category.name} className='mt-1 me-1 mb-1' />
                        })}
                    </div>
                )
            }
        },
        {
            field: 'price',
            headerName: 'PRICE',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
            width: 120,
        },
        {
            field: 'quantity',
            headerName: 'STOCK',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
            width: 120,
        },
        {
            field: 'id',
            headerName: 'ID',
            width: 120,

        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        {params.row.status ?
                            <div className='p-1' style={{border: '1px solid black', borderRadius: '4px', color: 'white', backgroundColor: 'dodgerblue'}}>
                                Được đăng bán
                        </div> :
                            <div className='p-1' style={{border: '1px solid black', borderRadius: '4px', color: 'white', backgroundColor: 'red'}}>
                                Ẩn
                        </div>}
                    </>
                )
            }
        },
        {
            field: 'assessments',
            headerName: 'RATE',
            width: 240,
            renderCell: (params) => {
                let rating = 0;
                params.row.assessments.map(item => {
                    rating += item.point
                })
                let avgRating = (rating/params.row.assessments.length).toFixed(1)
                return (
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="text-feedback"
                            value={avgRating}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 1, opacity: 0.7 }}>{avgRating} ({params.row.assessments.length})</Box>
                    </Box>
                )
            }
        },
        {
            field: 'action',
            headerName: 'ACTION',
            width: 120,
            renderCell: (params) => updateButton(`${params.row.id}`)
        },
    ];

    const router = useRouter()

    const [ids, setIds] = useState([])

    const hideProduct = () => {
        axios.get('http://localhost:8000/admin/product/hide', {
            params: {
                ids: ids
            }
        }).then(() => {
            router.push('/admin/product')
        })

    }

    const handleChange = (itm) => {
        setIds(itm)
    }

    const handleSearch = (value, id) => {
        if (id === 'name') {
            setFilter({...filter, keyword: value})
        }
        if (id === 'category') {
            setFilter({...filter, categories: value})
        }
        if (id === 'status') {
            setFilter({...filter, sta: value})
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/admin/product/search', {
            params: {
                product: filter.keyword,
                categories: filter.categories,
                status: filter.sta
            }
        }).then((res) => {
            setMyProducts(res.data)
        })
    }, [filter])

    if (myProducts.length !== 0) {
        return (
            <>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-md-4">
                    <div className='mt-4'>
                        <h1 className='mb-3'>Products</h1>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div style={{float: "left"}}>
                                <Button variant="contained" className='me-2'>
                                    <Link href='/admin/product/add' className='text-decoration-none text-white'>
                                        Add new product
                                    </Link>
                                </Button>
                                <Button variant="contained" className='text-bg-danger' onClick={hideProduct}>
                            <span className='text-white'>
                                Hide product
                            </span>
                                </Button>
                            </div>
                            <div className="d-flex align-items-center" style={{float: "right"}}>
                                <SearchButton search={handleSearch}/>
                                <MultipleSelectCategories data={props.caTes} search={handleSearch}/>
                                <SelectStatus data={props.sta} search={handleSearch}/>
                            </div>
                        </div>
                        <div style={{float: "left", width: '100%', marginBottom: '40px'}}>
                            <DataTable data={myProducts} change={handleChange} columns={columns} isCheckBox={true}/>
                        </div>
                    </div>
                </main>
            </>
        )
    } else {
        return (
            <>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className='mt-4'>
                        <h1 className='mb-4'>List of products</h1>
                        <Button variant="contained" className='mb-4 me-2'>
                            <Link href='/admin/product/add' className='text-decoration-none text-white'>
                                Add product
                            </Link>
                        </Button>
                        <Button variant="contained" className='mb-4 text-bg-danger' onClick={hideProduct}>
                            <span className='text-white'>
                                Hide product
                            </span>
                        </Button>
                        <div className="d-flex align-items-center">
                            <SearchButton search={handleSearch}/>
                            <MultipleSelectCategories data={props.caTes} search={handleSearch}/>
                            <SelectStatus data={props.sta} search={handleSearch}/>
                        </div>
                        <p>Không có sản phẩm</p>
                    </div>
                </main>
            </>
        )
    }
}
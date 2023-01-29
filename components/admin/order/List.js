import DataTable from "../shares/TableData";
import * as React from "react";
import MyDialog from "../shares/Dialog";
import MaterialUIPickers from "../shares/DateFilter";
import SearchButton from "../shares/SearchButton";
import SelectStatus from "../shares/OneSelectButton";
import axios from "axios";
import {useEffect, useState} from "react";
import UpdateStatusBtn from "../shares/UpdateStatusBtn";
import Avatar from '@mui/material/Avatar';
import ShipperDialog from "../shares/ShipperDialog";

export default function List(props) {

    const [myOrders, setMyOrders] = useState([])

    const [filter, setFilter] = useState({
        user: '',
        date: '',
        sta: ''
    })

    const columns = [
        {
            field: 'id',
            headerName: 'Order ID',
            align: 'left',
            width: 100,
            renderCell: (params) =>
                <MyDialog id={params.row.id}/>
        },
        {
            field: 'date',
            headerName: 'Created',
            width: 150,
            valueGetter: (params) => {
                return new Date(params.row.date).toLocaleDateString("en-GB")
            }
        },
        {
            field: 'name',
            headerName: 'User',
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Avatar alt="default" className='me-3' src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" />
                        <span>{params.row.name}</span>
                    </>
                )
            }
        },
        {
            field: 's_name',
            headerName: 'Shipper',
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        {params.row.status === 'Đã giao' ?
                            <ShipperDialog name={params.row.s_name}/>
                            :
                            <ShipperDialog name={params.row.s_name} orderId={params.row.id}/>
                        }
                    </>
                )
            }
        },
        {   field: 'status',
            headerName: 'Status',
            width: 200,
            renderCell: (params) => <UpdateStatusBtn status={params.row.status} id={params.row.id} data={props.allSta}/>
        },
    ];

    const handleSearch = async (value, id) => {
        if (id === 'name') {
            setFilter({...filter, user: value});
        }
        if (id === 'date') {
            setFilter({...filter, date: value});
        }
        if (id === 'status') {
            setFilter({...filter, sta: value});
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/admin/order/search', {
            params: {
                user: filter.user,
                date: filter.date ? filter.date.$d.toLocaleDateString('en-GB').split('/').reverse().join('-') : '',
                status: filter.sta
            }
        }).then((res) => {
            setMyOrders(res.data)
        })
    }, [filter])

    if (myOrders.length !== 0) {
        return (
            <>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-md-4" style={{marginBottom: '40px'}}>
                    <div className='mt-4'>
                        <h1 className='mb-4'>Orders list</h1>
                        <div className="d-flex align-items-center">
                            <MaterialUIPickers search={handleSearch}/>
                            <SelectStatus search={handleSearch} data={props.allSta}/>
                            <SearchButton search={handleSearch}/>
                        </div>
                        <DataTable data={myOrders} columns={columns} isCheckBox={false}/>
                    </div>
                </main>
            </>
        )
    } else {
        return (
            <>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-md-4">
                    <div className='mt-4'>
                        <h1 className='mb-4'>List of orders</h1>
                        <div className="d-flex align-items-center">
                            <MaterialUIPickers search={handleSearch}/>
                            <SelectStatus search={handleSearch} data={props.allSta}/>
                            <SearchButton search={handleSearch}/>
                        </div>
                        <p>Không có hóa đơn</p>
                    </div>
                </main>
            </>
        )
    }
}
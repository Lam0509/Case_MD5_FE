import * as React from 'react';
import {useSelector} from "react-redux";
import axios from "axios"
import {useRouter} from "next/router";
import Table from 'react-bootstrap/Table';
import MyDialog from "../../shares/Dialog";

export default function DataTable() {
    const router = useRouter()
    const user = useSelector(state => state.auth.currentUser)

    const handleChange = (value) => {
        console.log(value)
        axios.get(`http://localhost:8000/admin/order/delete/${value}`)
            .then(() => {
                router.push('/profile/orders')
            })
    }
    return (
        <div style={{height: 400, width: '100%'}}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Shipper</th>
                    <th>Status</th>
                    <th>Detail</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.orders.map((item, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.date}</td>
                            <td>{item.shipper.name}</td>
                            <td>{item.status}</td>
                            <td>{<MyDialog/>}</td>
                            {item.status === 'Đã giao' ?
                                <td>No action</td> :
                                item.status === 'Đang giao' ?
                                    <td>
                                        <button disabled={true} type='button'>Hủy đơn</button>
                                    </td> :
                                    <td>
                                        <button disabled={false} type='button' onClick={() => handleChange(item.id)}>Hủy đơn</button>
                                    </td>
                            }
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    );
}
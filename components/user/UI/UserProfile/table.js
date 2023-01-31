import * as React from 'react';
import {useSelector} from "react-redux";
import axios from "axios"
import {useRouter} from "next/router";

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
            <table>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {user.orders.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.status}</td>
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
            </table>
        </div>
    );
}
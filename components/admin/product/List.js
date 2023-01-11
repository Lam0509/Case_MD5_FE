import {Button} from "@mui/material";
import DataTable from "../shares/TableData";
import Link from 'next/link'

export default function List(props) {
    return (
        <>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className='mt-4'>
                    <h1 className='mb-4'>List of products</h1>
                    <Button variant="contained" className='mb-4'>
                        <Link href='/admin/product/add' className='text-decoration-none text-white'>
                            Add product
                        </Link>
                    </Button>
                    <DataTable products={props.products}/>
                </div>
            </main>
        </>
    )
}
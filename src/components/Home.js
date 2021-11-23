import React from 'react'
import { Table } from 'react-bootstrap'
import AddProduct from './AddProduct';
import data from './data';

export default function Home() {
    // const [data, setData] = useState(0)
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-8 mx-auto">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Title</th>
                                    <th>Product Image</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.ptitle}</td>
                                                <td>{item.pimg}</td>
                                                <td>{item.pprice}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <AddProduct />
                    </div>
                </div>
            </div>
        </>
    )
}

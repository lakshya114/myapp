import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function AddProduct() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto bg-light rounded">
                        <h1 className="text-center">Add Products</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product Title</Form.Label>
                                <Form.Control type="text" name="ptitle" placeholder="Product Title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="text" name="pimg" placeholder="Product Image" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" name="pprice" placeholder="Product Price" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mb-4">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

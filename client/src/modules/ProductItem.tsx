import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { IProduct } from '../store/ProductStore';
interface IProductItem {
    product: IProduct;
}
const ProductItem = (props: IProductItem) => {

    const [removed, setRemoved] = useState(false);
    return (
        <Col md={4}>
            <Card className='m-3 p-3'>
                <Card.Img variant="top" src="https://www.xn--90acgeplx0bf5g.xn--p1ai/wp-content/uploads/2022/02/95eab9b5832e11ec8f25a85e4510e1cd_95eab9b6832e11ec8f25a85e4510e1cd.jpg" />
                <Card.Body>
                    <Card.Title> {props.product.code}</Card.Title>
                    <Card.Text>
                        {props.product.name}
                    </Card.Text>
                </Card.Body>
                <Button variant={removed ? "success" : "danger"} onClick={() => setRemoved(!removed)}>
                    {removed ? "ОТМЕНИТЬ" : "УДАЛИТЬ"}
                </Button>
            </Card>
        </Col>
    );
};

export default ProductItem;
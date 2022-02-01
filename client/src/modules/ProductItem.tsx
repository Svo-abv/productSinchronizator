import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IProduct } from '../store/ProductStore';
interface IProductItem {
    product: IProduct;
}
const ProductItem = (props: IProductItem) => {
    return (
        <Col md={4}>
            <Card className='m-3 p-3'>
                <img src='' />
                {props.product.name}
            </Card>
        </Col>
    );
};

export default ProductItem;
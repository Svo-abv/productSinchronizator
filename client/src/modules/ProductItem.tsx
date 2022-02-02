import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { setDeletedProductApi } from '../httpApi/ProductApi';
import { IProduct } from '../store/ProductStore';
interface IProductItem {
    product: IProduct;
}
const ProductItem = (props: IProductItem) => {

    const [removed, setRemoved] = useState(props.product.deleted);

    const onClickHandler = (item: IProduct) => {

        setDeletedProductApi(item.uuid_1c, !removed).then(() => setRemoved(!removed));
    }
    return (
        <Col md={4}>
            <Card className='m-3 p-3'>
                <Card.Img variant="top" src={props.product.img} />
                <Card.Body>
                    <Card.Title> {props.product.code}</Card.Title>
                    <Card.Text>
                        {props.product.name}
                    </Card.Text>
                </Card.Body>
                <Button variant={removed ? "success" : "danger"} onClick={() => onClickHandler(props.product)}>
                    {removed ? "ОТМЕНИТЬ" : "УДАЛИТЬ"}
                </Button>
            </Card>
        </Col>
    );
};

export default ProductItem;
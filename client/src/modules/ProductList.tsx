import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem';

const ProductList = observer(() => {
    const { products } = useContext(Context);
    return (
        <Row>
            {
                products.get().map((item) =>
                    <ProductItem key={item.id} product={item} />
                )}
        </Row>
    );
});

export default ProductList;
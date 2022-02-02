import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem';
import SpinnerItem from './SpinnerItem';

const ProductList = observer(() => {
    const { products } = useContext(Context);
    const [loadingProducts, setLoadingProducts] = useState(true);
    useEffect(() => {
        setLoadingProducts(false);
    })
    return (
        <Row>
            {

                loadingProducts ? <SpinnerItem />
                    :
                    products.get().map((item) =>
                        <ProductItem key={item.id} product={item} />
                    )}
        </Row>
    );
});

export default ProductList;
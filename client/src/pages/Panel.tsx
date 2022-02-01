import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { getAllBrandsApi, getBrandsByUserApi } from '../httpApi/BrandApi';
import { getAllCatalogsApi, getCatalogeByUserApi } from '../httpApi/CatalogeApi';
import { getAllProductsApi, getAllProductsByBrendApi } from '../httpApi/ProductApi';
import BrandsBar from '../modules/BrandsBar';
import CatalogesBar from '../modules/CatalogesBar';
import ProductList from '../modules/ProductList';

const Panel = observer(() => {

    const { user, brands, cataloges, products } = useContext(Context);

    useEffect(() => {
        getCatalogeByUserApi(user.user.id).then((data) => {

            cataloges.set(data);

            getBrandsByUserApi(user.user.id).then((data) => {
                brands.set(data);

                getAllProductsByBrendApi(user.user.id).then((data) => {
                    products.set(data);
                })

            });
        })


    }, []);
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <CatalogesBar />
                </Col>
                <Col md={9}>
                    <BrandsBar />
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
});

export default Panel;
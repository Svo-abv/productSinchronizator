import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { getAllBrandsApi } from '../httpApi/BrandApi';
import { getAllCatalogsApi } from '../httpApi/CatalogeApi';
import { getAllProductsApi } from '../httpApi/ProductApi';
import BrandsBar from '../modules/BrandsBar';
import CatalogesBar from '../modules/CatalogesBar';
import ProductList from '../modules/ProductList';

const Panel = observer(() => {

    const { brands, cataloges, products } = useContext(Context);

    useEffect(() => {
        getAllCatalogsApi().then((data) => {

            cataloges.set(data);

            getAllBrandsApi().then((data) => {
                brands.set(data);

                getAllProductsApi().then((data) => {
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
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
import SpinnerItem from '../modules/SpinnerItem';

const Panel = observer(() => {

    const { user, brands, cataloges, products } = useContext(Context);
    const [loadingCataloge, setLoadingCataloge] = useState(true);
    const [loadingBrands, setLoadingBrands] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(true);
    useEffect(() => {
        getCatalogeByUserApi(user.user.id).then((data) => {

            cataloges.set(data);
            setLoadingCataloge(false);

            getBrandsByUserApi(user.user.id).then((data) => {
                brands.set(data);
                setLoadingBrands(false);

                getAllProductsByBrendApi(user.user.id).then((data) => {
                    products.set(data);
                    setLoadingProducts(false);
                })

            });
        })
        //.finally(() => setLoading(false));


    }, []);
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                </Col>
                <Col md={9}>
                    {loadingBrands ? <SpinnerItem /> : <BrandsBar />}
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col md={3}>
                    {loadingCataloge ? <SpinnerItem /> : <CatalogesBar />}
                </Col>
                <Col md={9}>
                    {loadingProducts ? <SpinnerItem /> : <ProductList />}
                </Col>
            </Row>
        </Container>
    );
});

export default Panel;
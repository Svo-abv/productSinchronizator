import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem';

const ProductList = observer(() => {
    const { products } = useContext(Context);
    return (
        <Row className='mt-3'>{
            products.get().map((item) =>
                <ProductItem key={item.id} product={item} />
            )}
        </Row>
    );
});

export default ProductList;
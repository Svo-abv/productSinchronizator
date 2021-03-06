import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Context } from '..';
import { getCatalogeByUserApi } from '../httpApi/CatalogeApi';
import { getAllProductsByBrendApi } from '../httpApi/ProductApi';
import { IBrand } from '../store/BrandStroe';

const BrandsBar = observer(() => {
    const { user, cataloges, brands, products } = useContext(Context);

    const onClikHandle = (item: IBrand) => {

        //
        // TODO снятие выбора
        // 
        // console.log(brands.selectedBrand);
        // if (brands.selectedBrand === undefined)
        //     brands.setSelectedBrand(item);
        // else
        //     brands.setSelectedBrand(undefined);

        brands.setSelectedBrand(item);

        getCatalogeByUserApi(user.user.id, item.id).then((data) => {
            cataloges.set(data)
            getAllProductsByBrendApi(user.user.id, item.id).then((data) =>
                products.set(data)
            );
        });
    }
    return (
        <Row className='d-flex ps-1'>
            <h4 className='mb-3'>Ваши бренды:</h4>
            {brands.get().map((item) =>
                <Card
                    style={{ width: 'auto' }}
                    className='mx-2 mb-4 p-2'
                    bg={brands.selectedBrand === item ? 'light' : ''}
                    key={item.id}
                    onClick={() => onClikHandle(item)}> {item.name}
                </Card>
            )}
        </Row >
    );
});

export default BrandsBar;
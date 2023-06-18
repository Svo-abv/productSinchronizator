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
        // TODO снятие выбора, badgs
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
    return ( //{window.innerWidth > 760 ? 'mb-3 w-auto' : 'mb-3'}
        <Row className='d-flex ps-1'>
            <h4 className={window.innerWidth > 760 ? 'mb-3 w-auto' : 'mb-3'}>Бренды:</h4>
            <ListGroup horizontal className='ms-3 w-auto'>
                {brands.get().map((item) =>
                    <ListGroup.Item
                        active={brands.selectedBrand === item}
                        variant="light"
                        className='p-2 w-auto'
                        action
                        key={item.id}
                        onClick={() => onClikHandle(item)}> {item.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Row >
    );
    // return (
    //     <Row className='d-flex ps-1'>
    //         <h4 className='mb-3'>Ваши бренды:</h4>
    //         {brands.get().map((item) =>
    //             <Card
    //                 style={{ width: 'auto' }}
    //                 className='mx-2 mb-4 p-2'
    //                 bg={brands.selectedBrand === item ? 'light' : ''}
    //                 key={item.id}
    //                 onClick={() => onClikHandle(item)}> {item.name}
    //             </Card>
    //         )}
    //     </Row >
    // );
});

export default BrandsBar;
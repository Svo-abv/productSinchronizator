import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandsBar = observer(() => {
    const { brands } = useContext(Context);
    return (
        <Row className='d-flex'>
            {brands.get().map((item) =>
                <Card
                    style={{ width: 'auto' }}
                    className='mx-2 mb-4 p-2'
                    border={brands.selectedBrand === item ? 'danger' : 'light'}
                    key={item.id}
                    onClick={() => brands.setSelectedBrand(item)}> {item.name}
                </Card>
            )}
        </Row >
    );
});

export default BrandsBar;
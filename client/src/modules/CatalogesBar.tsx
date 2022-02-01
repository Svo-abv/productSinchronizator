import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';
import { getAllProductsByBrendApi } from '../httpApi/ProductApi';
import { ICataloge } from '../store/CatalogeStroe';

const CatalogesBar = observer(() => {
    const { cataloges, products, user, brands } = useContext(Context);

    const onClikHandle = (item: ICataloge) => {

        getAllProductsByBrendApi(user.user.id, brands._brands.id, item.id).then((data) =>
            products.set(data)
        );
    }

    return (
        <ListGroup className='mb-3' >
            {cataloges.get().map((item) =>
                <ListGroup.Item
                    action
                    variant="light"
                    active={cataloges.selectedCataloge === item}
                    key={item.id}
                    onClick={() => onClikHandle(item)}>{item.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CatalogesBar;
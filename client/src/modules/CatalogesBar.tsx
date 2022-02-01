import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const CatalogesBar = observer(() => {
    const { cataloges } = useContext(Context);
    return (
        <ListGroup >
            {cataloges.get().map((item) =>
                <ListGroup.Item
                    action
                    variant="light"
                    active={cataloges.selectedCataloge === item}
                    key={item.id}
                    onClick={() => cataloges.setSelectedCataloge(item)}>{item.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CatalogesBar;
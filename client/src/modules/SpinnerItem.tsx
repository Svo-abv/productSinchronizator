import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerItem = () => {
    return (
        <div style={{ top: '50px', width: '100px', height: '200px', position: 'relative', margin: '0 auto' }}>
            <Spinner animation="border" role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default SpinnerItem;
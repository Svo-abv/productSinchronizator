import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from '..';
import PublicRoutes from './RoutesPablic';
import { AuthRoutes } from './RoutesPrivate';

const NavigationRouts = () => {
    const { user } = useContext(Context);
    return (
        <BrowserRouter>
            <Routes>
                {
                    AuthRoutes.map(({ path, component }) =>
                        <Route key={path} path={path} element={component} />
                    )}
                {
                    PublicRoutes.map(({ path, component }) =>
                        <Route key={path} path={path} element={component} />
                    )
                }
            </Routes>
        </BrowserRouter>
    );
};

export default NavigationRouts;
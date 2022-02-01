import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from '..';
import NavigationMenu from './NavigationMenu';
import PublicRoutes from './RoutesPablic';
import { AuthRoutes } from './RoutesPrivate';

const NavigationRouts = observer(() => {
    const { user } = useContext(Context);
    return (
        <BrowserRouter>
            <NavigationMenu />
            <Container className="p-3  mt-4 pt-5" >
                <Routes>
                    {
                        user.isAuth && AuthRoutes.map(({ path, component }) =>
                            <Route key={path} path={path} element={component} />
                        )}
                    {
                        PublicRoutes.map(({ path, component }) =>
                            <Route key={path} path={path} element={component} />
                        )
                    }

                </Routes>
            </Container>
        </BrowserRouter>
    );
});

export default NavigationRouts;
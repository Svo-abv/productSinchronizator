import React, { useContext } from 'react';
import { observer } from 'mobx-react'
import { Context } from '..';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { AUTH_ROUTE } from '../utils/constants';

const NavigationMenu = observer(() => {
    const { user } = useContext(Context);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">b2b portal</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end pe-2">
                        <Navbar.Text>
                            {user.isAuth ? `Вы вошли как: ${user.user.name}` : ""}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav >
                        <Button variant="secondary">{user.isAuth ? `Выйти` : "Войти"}</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
});

export default NavigationMenu;
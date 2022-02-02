import React, { useContext } from 'react';
import { observer } from 'mobx-react'
import { Context } from '..';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const NavigationMenu = observer(() => {
    const { user } = useContext(Context);
    const navi = useNavigate();

    const onClickHandler = () => {
        user.isAuth = false;
        localStorage.clear();
        navi("/");
    }
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/">ООО 	&#8220;ОбувьДетки&#8221;</Navbar.Brand>
                    <Navbar.Text>
                        b2b портал, тел: 8 (800) 511-59-92
                    </Navbar.Text>
                    <Nav.Link href="https://www.обувьдетки.рф/">обувьдетки.рф</Nav.Link>
                    <Navbar.Collapse className="justify-content-end pe-2">
                        <Navbar.Text>
                            {user.isAuth ? `Вы вошли как: ${user.user.name}` : ""}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav >
                        {user.isAuth ? <Button variant="secondary" onClick={onClickHandler}>Выйти</Button> : ""}
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
});

export default NavigationMenu;
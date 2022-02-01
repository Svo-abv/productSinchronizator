import { Container, Form, Card, Button } from 'react-bootstrap'
import React, { ChangeEvent, useContext, useState } from 'react';
import { loginApi } from '../httpApi/UserApi';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

interface IUser {
    id: number;
    name: string;
    role: string;
    iat: number;
    exp: number;
}

const Auth = () => {

    const { user } = useContext(Context);
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const navi = useNavigate();

    const click = async () => {
        try {
            const decodeUser = await loginApi(name, pwd);
            user.isAuth = true;
            user.user = decodeUser;
            navi("/panel");

        }
        catch (e) {
            alert("Ошибка авторизации!!");
        }
    }
    return (
        <Container>
            <Card>
                <h2>Авторизация</h2>
                <Form>
                    <Form.Control placeholder='Введите имя' value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                    <Form.Control type='password' placeholder='Введите пароль' value={pwd} onChange={(e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)} />
                    <Button onClick={click}>Войти</Button>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
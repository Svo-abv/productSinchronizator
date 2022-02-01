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
        <Container
            className='d-flex justify-content-center' >
            <Card style={{ width: 600, height: 300 }} className='px-5 pb-5 pt-2'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control placeholder='Введите имя...'
                        className='mt-2'
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                    <Form.Control type='password' placeholder='Введите пароль...'
                        className='mt-2'
                        value={pwd}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)} />
                    <Button className='mt-2'
                        onClick={click}>Войти</Button>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
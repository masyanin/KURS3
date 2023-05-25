import React from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container className="d-flex justify-content-center align-items-center"
         style = {{height:window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button variant="outline-dark" className="mb-2 ml-2">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Row>
                </Form>
            </Card>

            <Outlet/>
        </Container>
    );
};

export default Auth;
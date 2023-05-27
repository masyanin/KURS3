import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {COMPANIES_ROUTE, FINDJOB_ROUTE, WORKERS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import '../compstyles/Navstyle.css'
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";



const ROFL = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="navbar-brand mr-0 mr-md-2" style={{color:'white'}} to={FINDJOB_ROUTE}>НайдиРаботу</NavLink>
                <Nav>
                    <NavLink className="NavSt navbar-brand mr-0 mr-md-2" to={COMPANIES_ROUTE}>НАЙТИ РАБОТУ</NavLink>
                    <NavLink className="NavSt navbar-brand mr-0 mr-md-2" to={WORKERS_ROUTE}>НАЙТИ РАБОТНИКА</NavLink>
                </Nav>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} className="mx-lg-2" onClick={()=>logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default ROFL;
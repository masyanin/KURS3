import React, {useEffect,useState} from 'react';
import {Outlet} from "react-router-dom";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Cgraph from "../components/componentsFunc/Cgraph";
import Cstudy from "../components/componentsFunc/Cstudy";
import CworkE from "../components/componentsFunc/CworkE";
import CtypeW from "../components/componentsFunc/CtypeW";
import {useParams} from "react-router-dom";
import {fetchOneCompany} from "../http/CompanyAPI";
import '../compstyles/CompanyPstyle.css'



const Companypage = () => {
    const test=[{id:1,qe:'What is rofl',qe_ans:'rofl',qe_corans:'mem'},
        {id:2,qe:'What is mem',qe_ans:'mem',qe_corans:'rofl'}]

    const [company, setCompany] = useState({info: []})

    const {id} = useParams()


    useEffect(()=>{
        fetchOneCompany(id).then(data => setCompany(data))
        console.log(company)
    },[])


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image style={{borderRadius:15}} width={200} height={300} src={process.env.REACT_APP_API_URL + company.img}/>
                </Col>
                <Col md={4}>
                    <div className="Tx">
                        <h2 className="d-flex justify-content-start">
                            {company.name}
                        </h2>
                        <h4>
                            {company.salary} руб.
                        </h4>
                        <h5>
                            {company.name_c}
                        </h5>
                        <div>
                            зарплата: {company.salary}
                        </div>
                        <div>
                            График работы: {Cgraph({company})}
                        </div>
                        <div>
                            Требуемое образование: {Cstudy({company})}
                        </div>
                        <div>
                            Требуемый опыт работы: {CworkE({company})}
                        </div>
                        <div>
                            Вид работы: {CtypeW({company})}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3>Тест</h3>
                {test.map(info =>
                    <Row key={info.id}>
                        <h5>
                            {info.qe}
                        </h5>
                        <div>
                            <Button variant={"outline-dark"}>
                                {info.qe_ans}
                            </Button>
                            <Button className="m-lg-2" variant={"outline-dark"}>
                                {info.qe_corans}
                            </Button>
                        </div>
                    </Row>
                )}
            </Row>

            <Outlet/>
        </Container>
    );
};

export default Companypage;
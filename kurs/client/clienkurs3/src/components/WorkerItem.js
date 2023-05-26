import React from 'react';
import {Button, Container, Image, Row} from "react-bootstrap";
import '../compstyles/SCompanyItem.css'
import B from '../assets/A3.jpg'

import CWstudy from "./componentsFunc/CWstudy";
import CWtypeW from "./componentsFunc/CWtypeW";
import CWworkE from "./componentsFunc/CWworkE";
import CWfind from "./componentsFunc/CWfind";
//graph:0,study:0,workE:0,typeW:0

const WorkerItem = ({worker}) => {

    return (
        <div className="SItem">
            <div className="SItem_layout">
                <div className="p-2">
                    <h2 className="d-flex justify-content-start">
                        {worker.name}
                    </h2>
                    <h4>
                        {worker.salary} руб.
                    </h4>

                    <div>
                        Статус поиска:{CWfind({worker})}
                    </div>
                    <div>
                        Требуемое образование: {CWstudy({worker})}
                    </div>
                    <div>
                        Требуемый опыт работы: {CWworkE({worker})}
                    </div>
                    <div>
                        Вид работы: {CWtypeW({worker})}
                    </div>
                </div>
                <div className="justify-content-end p-2 mt-5">
                    <Container>
                        <Row className="mb-5 mt-4">

                        </Row>
                        <Row>
                            <Button className="SBut1" style={{cursor:"pointer"}} variant="outline-dark">Подробнее</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default WorkerItem;
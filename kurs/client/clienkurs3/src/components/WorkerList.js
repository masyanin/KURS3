import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import WorkerItem from "./WorkerItem";

const WorkerList = observer(() => {
    const {Worker} = useContext(Context)
    return (
        <Row>
            {Worker.Work.map(worker =>
                <WorkerItem key={worker.id} worker={worker}/>
            )}
        </Row>
    );
});

export default WorkerList;
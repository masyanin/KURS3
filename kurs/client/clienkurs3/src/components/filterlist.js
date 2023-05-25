import React from 'react';
import {Button,Form} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/SCFilter.css'


const Filterlist = () => {
    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const [stitem, setstItem] = useState({ St: "", another: "another" });

    const { kindOfStand } = item;
    const { St } = stitem;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        setItem(prevState => ({
            ...prevState,
            kindOfStand: e.target.value
        }));
    };
    const handleChangeSt = e => {
        e.persist();
        console.log(e.target.value);

        setstItem(prevState => ({
            ...prevState,
            St: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`${St}`+`${kindOfStand}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>График</h5>
            <Form.Group controlId="kindOfStand">
                <Form.Check
                    id="form_control"
                    value="0"
                    type="radio"
                    aria-label="radio 1"
                    label="Не указан"
                    onChange={handleChange}
                    checked={kindOfStand === "0"}
                />
                <Form.Check
                    id="form_control"
                    value="1"
                    type="radio"
                    aria-label="radio 2"
                    label="Удалённая работа"
                    onChange={handleChange}
                    checked={kindOfStand === "1"}
                />
                <Form.Check
                    id="form_control"
                    value="2"
                    type="radio"
                    aria-label="radio 3"
                    label="Полный день"
                    onChange={handleChange}
                    checked={kindOfStand === "2"}
                />
                <Form.Check
                    id="form_control"
                    value="3"
                    type="radio"
                    aria-label="radio 4"
                    label="Сменный график"
                    onChange={handleChange}
                    checked={kindOfStand === "3"}
                />
                <Form.Check
                    id="form_control"
                    value="4"
                    type="radio"
                    aria-label="radio 4"
                    label="Вахтовый метод"
                    onChange={handleChange}
                    checked={kindOfStand === "4"}
                />
                <Form.Check
                    id="form_control"
                    value="5"
                    type="radio"
                    aria-label="radio 4"
                    label="Гибкий график"
                    onChange={handleChange}
                    checked={kindOfStand === "5"}
                />
            </Form.Group>
            <h5>Образование</h5>
            <Form.Group controlId="St">
                <Form.Check
                    id="form_control"
                    value="0"
                    type="radio"
                    aria-label="radio 1"
                    label="Любое"
                    onChange={handleChangeSt}
                    checked={St === "0"}
                />
                <Form.Check
                    id="form_control"
                    value="1"
                    type="radio"
                    aria-label="radio 2"
                    label="Не нужно"
                    onChange={handleChangeSt}
                    checked={St === "1"}
                />
                <Form.Check
                    id="form_control"
                    value="2"
                    type="radio"
                    aria-label="radio 3"
                    label="Общее среднее"
                    onChange={handleChangeSt}
                    checked={St === "2"}
                />
                <Form.Check
                    id="form_control"
                    value="3"
                    type="radio"
                    aria-label="radio 4"
                    label="Не полное высшее"
                    onChange={handleChangeSt}
                    checked={St === "3"}
                />
                <Form.Check
                    id="form_control"
                    value="4"
                    type="radio"
                    aria-label="radio 4"
                    label="Высшее"
                    onChange={handleChangeSt}
                    checked={St === "4"}
                />
            </Form.Group>
            <h5>Тип работы</h5>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Filterlist;
import React from 'react';
import {Button,Form} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/SCFilter.css'


const WFilterlist = () => {
    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const [stitem, setstItem] = useState({ St: "", another: "another" });
    const [tyitem, settyItem] = useState({ Ty: "", another: "another" });
    const [weitem, setweItem] = useState({ We: "", another: "another" });
    const [saitem, setsaItem] = useState({ Sa: "", another: "another" });
    const [geitem, setgeItem] = useState({ Sa: "", another: "another" });

    const { kindOfStand } = item;
    const { St } = stitem;
    const { Ty } = tyitem;
    const { We } = weitem;
    const { Sa } = saitem;
    const { Ge } = geitem;

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
    const handleChangeTy = e => {
        e.persist();
        console.log(e.target.value);

        settyItem(prevState => ({
            ...prevState,
            Ty: e.target.value
        }));
    };
    const handleChangeWe = e => {
        e.persist();
        console.log(e.target.value);

        setweItem(prevState => ({
            ...prevState,
            We: e.target.value
        }));
    };
    const handleChangeSa = e => {
        e.persist();
        console.log(e.target.value);

        setsaItem(prevState => ({
            ...prevState,
            Sa: e.target.value
        }));
    };
    const handleChangeGe = e => {
        e.persist();
        console.log(e.target.value);

        setgeItem(prevState => ({
            ...prevState,
            Ge: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`${St}`+`${kindOfStand}`+`${Ty}`+`${We}`+`${Ge}`+'  '+`${Sa}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Фильтры</h4>
            <h5 className="mt-5">Уровень дохода соискателя</h5>
            <Form.Control
                style={{width:"250px"}}
                className="mt-3"
                placeholder="введите желаемый доход"
                onChange={handleChangeSa}
            />
            <h5 className="mt-3">Статус поиска</h5>
            <div>
                <Form.Group controlId="kindOfStand">
                    <Form.Check
                        id="form_control"
                        value="0"
                        type="radio"
                        aria-label="radio 1"
                        label="Без статуса"
                        onChange={handleChange}
                        checked={kindOfStand === "0"}
                    />
                    <Form.Check
                        id="form_control"
                        value="1"
                        type="radio"
                        aria-label="radio 2"
                        label="Активно ищет работу"
                        onChange={handleChange}
                        checked={kindOfStand === "1"}
                    />
                    <Form.Check
                        id="form_control"
                        value="2"
                        type="radio"
                        aria-label="radio 3"
                        label="Рассматривает предложения"
                        onChange={handleChange}
                        checked={kindOfStand === "2"}
                    />
                    <Form.Check
                        id="form_control"
                        value="3"
                        type="radio"
                        aria-label="radio 4"
                        label="Не ищет работу"
                        onChange={handleChange}
                        checked={kindOfStand === "3"}
                    />
                    <Form.Check
                        id="form_control"
                        value="4"
                        type="radio"
                        aria-label="radio 4"
                        label="Вышел на новое место"
                        onChange={handleChange}
                        checked={kindOfStand === "4"}
                    />
                </Form.Group>
            </div>
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
            <h5>Тип занятости</h5>
            <Form.Group controlId="Ty">
                <Form.Check
                    id="form_control"
                    value="0"
                    type="radio"
                    aria-label="radio 1"
                    label="Любая"
                    onChange={handleChangeTy}
                    checked={Ty === "0"}
                />
                <Form.Check
                    id="form_control"
                    value="1"
                    type="radio"
                    aria-label="radio 2"
                    label="Полная занятость"
                    onChange={handleChangeTy}
                    checked={Ty === "1"}
                />
                <Form.Check
                    id="form_control"
                    value="2"
                    type="radio"
                    aria-label="radio 3"
                    label="Частичная занятость"
                    onChange={handleChangeTy}
                    checked={Ty === "2"}
                />
                <Form.Check
                    id="form_control"
                    value="3"
                    type="radio"
                    aria-label="radio 4"
                    label="Стажировка"
                    onChange={handleChangeTy}
                    checked={Ty === "3"}
                />
                <Form.Check
                    id="form_control"
                    value="4"
                    type="radio"
                    aria-label="radio 4"
                    label="Проектная работа"
                    onChange={handleChangeTy}
                    checked={Ty === "4"}
                />
            </Form.Group>
            <h5>Опыт работы</h5>
            <Form.Group controlId="We">
                <Form.Check
                    id="form_control"
                    value="0"
                    type="radio"
                    aria-label="radio 1"
                    label="Не имеет значения"
                    onChange={handleChangeWe}
                    checked={We === "0"}
                />
                <Form.Check
                    id="form_control"
                    value="1"
                    type="radio"
                    aria-label="radio 2"
                    label="До 1 года"
                    onChange={handleChangeWe}
                    checked={We === "1"}
                />
                <Form.Check
                    id="form_control"
                    value="2"
                    type="radio"
                    aria-label="radio 3"
                    label="От 1 года"
                    onChange={handleChangeWe}
                    checked={We === "2"}
                />
                <Form.Check
                    id="form_control"
                    value="3"
                    type="radio"
                    aria-label="radio 4"
                    label="От 2 лет"
                    onChange={handleChangeWe}
                    checked={We === "3"}
                />
                <Form.Check
                    id="form_control"
                    value="4"
                    type="radio"
                    aria-label="radio 4"
                    label="От 3 лет"
                    onChange={handleChangeWe}
                    checked={We === "4"}
                />
                <Form.Check
                    id="form_control"
                    value="5"
                    type="radio"
                    aria-label="radio 4"
                    label="От 5 лет"
                    onChange={handleChangeWe}
                    checked={We === "5"}
                />
            </Form.Group>
            <h5>Пол</h5>
            <Form.Group controlId="Ge">
                <Form.Check
                    id="form_control"
                    value="0"
                    type="radio"
                    aria-label="radio 1"
                    label="Не имеет значения"
                    onChange={handleChangeGe}
                    checked={Ge === "0"}
                />
                <Form.Check
                    id="form_control"
                    value="1"
                    type="radio"
                    aria-label="radio 2"
                    label="Мужской"
                    onChange={handleChangeGe}
                    checked={Ge === "1"}
                />
                <Form.Check
                    id="form_control"
                    value="2"
                    type="radio"
                    aria-label="radio 3"
                    label="Женский"
                    onChange={handleChangeGe}
                    checked={Ge === "2"}
                />



            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Подтвердить
            </Button>
        </form>
    );
};

export default WFilterlist;
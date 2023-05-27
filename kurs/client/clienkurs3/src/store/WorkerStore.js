import {makeAutoObservable} from "mobx";

export default class WorkerStore{
    constructor() {
        this._us =[
            {id:1, email:'test@',passsword:'rofl',role:'USER'},
            {id:2, email:'test1@mail.ru',passsword:'rofl',role:'USER'}
        ]
        this._vac =[
            {id:1, vac_n:'JS'},
            {id:2, vac_n:'C++'}
        ]
        this._work = []
        makeAutoObservable(this)
    }

    setUs(user){
        this._us = user
    }
    setVac(vac){
        this._vac = vac
    }
    setWork(work){
        this._work = work
    }

    get Us(){
        return this._us
    }
    get Vac(){
        return this._vac
    }
    get Work(){
        return this._work
    }
}
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
        this._work = [
            {id:1,fio:'Яндекс',name:'Python programmer',salary: 100000,gender:0,grad:0,workE:0,typeW:1,statusF:0,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:2,fio:'Касперский',name:'C++ programmer',salary: 200000,gender:1,grad:3,workE:2,typeW:3,statusF:3,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:3,fio:'Касперский',name:'1C programmer',salary: 200000,gender:1,grad:4,workE:0,typeW:2,statusF:2,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:4,fio:'Касперский',name:'JS programmer',salary: 200000,gender:0,grad:2,workE:3,typeW:3,statusF:1,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:5,fio:'Касперский',name:'C++ programmer',salary: 200000,gender:0,grad:3,workE:0,typeW:3,statusF:0,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'}

        ]
        makeAutoObservable(this)
    }

    setUs(user){
        this._us = user
    }
    setVac(vac){
        this._vac = vac
    }
    setComp(work){
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
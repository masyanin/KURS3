import {makeAutoObservable} from "mobx";

export default class CpageStore{
    constructor() {
        this._us =[
            {id:1, email:'test@',passsword:'rofl',role:'USER'},
            {id:2, email:'test1@mail.ru',passsword:'rofl',role:'USER'}
        ]
        this._vac =[
            {id:1, vac_n:'JS'},
            {id:2, vac_n:'C++'}
        ]
        this._comp = [
            {id:1,nameC:'Яндекс',name:'Python programmer',salary: 100000,graph:2,study:0,workE:0,typeW:1,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:2,nameC:'Касперский',name:'C++ programmer',salary: 200000,graph:0,study:3,workE:0,typeW:3,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:3,nameC:'Касперский',name:'C++ programmer',salary: 200000,graph:0,study:3,workE:0,typeW:3,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:4,nameC:'Касперский',name:'C++ programmer',salary: 200000,graph:0,study:3,workE:0,typeW:3,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'},
            {id:5,nameC:'Касперский',name:'C++ programmer',salary: 200000,graph:0,study:3,workE:0,typeW:3,img:'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg'}

        ]
        makeAutoObservable(this)
    }

    setUs(user){
        this._us = user
    }
    setVac(vac){
        this._vac = vac
    }
    setComp(comp){
        this._comp = comp
    }

    get Us(){
         return this._us
    }
    get Vac(){
        return this._vac
    }
    get Comp(){
        return this._comp
    }
}

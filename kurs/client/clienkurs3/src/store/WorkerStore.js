import {makeAutoObservable} from "mobx";

export default class WorkerStore{
    constructor() {
        this._work = []
        this._page = 1
        this._limit = 4
        this._totalCount = 0
        this._sal={}
        this._gen={}
        this._gra={}
        this._wor={}
        this._typ={}
        this._stf={}
        makeAutoObservable(this)
    }

    setSal(Sa){
        this._sal = Sa
    }

    setGen(Ge){
        this._gen = Ge
    }

    setGra(St){
        this._gra = St
    }

    setWor(We){
        this._wor = We
    }

    setTyp(Ty){
        this._typ = Ty
    }

    setStf(Sf){
        this._stf = Sf
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setWork(work){
        this._work = work
    }

    get selectedSal(){
        return this._sal
    }

    get selectedGen(){
        return  this._gen
    }

    get selectedGra(){
        return  this._gra
    }

    get selectedWor(){
        return this._wor
    }

    get selectedTyp(){
        return this._typ
    }

    get selectedStf(){
        return this._stf
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get Work(){
        return this._work
    }
}
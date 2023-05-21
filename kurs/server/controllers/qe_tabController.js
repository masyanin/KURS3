const {Qe_tab}=require('../models/models');
const ApiError = require('../error/ApiError');
class qe_tabController{
    async create(req,res,next){
        try {
            const {qe_n,qe,qe_ans,testTabId} = req.body
            const qe_tab = await Qe_tab.create({qe_n,qe,qe_ans,testTabId})
            return res.json(qe_tab)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        const qe_tabs = await Qe_tab.findAll()
        return res.json(qe_tabs)
    }

}
module.exports = new qe_tabController()
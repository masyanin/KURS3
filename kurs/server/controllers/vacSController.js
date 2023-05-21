const {Vacansion,Skill}=require('../models/models');
const ApiError = require('../error/ApiError');
class vacSController{
    async createvac(req,res,next){
        console.log('mem')
        try {
            const {vac_n} = req.body
            const vacansion = await Vacansion.create({vac_n})
            return res.json(vacansion)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async createS(req,res,next){
        try {
            const {skill_n} = req.body
            const skill = await Skill.create({skill_n})
            return res.json(skill)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAllvac(req,res){
        const vacansions = await Vacansion.findAll()
        return res.json(vacansions)
    }
    async getAllS(req,res){
        const skills = await Skill.findAll()
        return res.json(skills)
    }

}
module.exports = new vacSController()
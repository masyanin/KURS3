const sequelize = require('../db')
const {DataTypes}=require('sequelize')
/*_e опыт работы
* _n название
* Весь этот файл инзициализация связей в бд
* */

// Блок инициализации таблиц из бд
const User = sequelize.define("user",{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, allowNull: false},
    password:{type: DataTypes.STRING, allowNull: false},
    role:{type: DataTypes.STRING, defaultValue: "USER"}
});

const Company = sequelize.define('company',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name_c:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    salary:{type: DataTypes.INTEGER, allowNull: false},
    graph:{type: DataTypes.INTEGER, allowNull: false},
    study:{type: DataTypes.INTEGER, allowNull: false},
    work_e:{type: DataTypes.INTEGER, allowNull: false},
    type_w:{type: DataTypes.INTEGER, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false}
});

const Test_tab = sequelize.define('test_tab',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    test_n:{type: DataTypes.STRING, allowNull: false}

});
const Qe_tab = sequelize.define('qe_tab',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    qe_n:{type: DataTypes.STRING, allowNull: false},
    qe:{type: DataTypes.STRING, allowNull: false},
    qe_ans:{type: DataTypes.STRING, allowNull: false}

});

const Skill = sequelize.define('skill',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    skill_n:{type: DataTypes.STRING, allowNull: false}

});
const Worker = sequelize.define("worker",{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    fio:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    salary:{type: DataTypes.INTEGER, allowNull: false},
    work_e:{type: DataTypes.INTEGER, allowNull: false},
    grad:{type: DataTypes.INTEGER, allowNull: false},
    type_w:{type: DataTypes.INTEGER, allowNull: false},
    status_f:{type: DataTypes.INTEGER, allowNull: false},
    gender:{type: DataTypes.INTEGER, allowNull: false},
    img:{type: DataTypes.STRING, allowNull: false}
});



const Vacansion = sequelize.define('vacansion',{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    vac_n:{type: DataTypes.STRING, allowNull: false}

});

//Блок связей из бд
User.hasMany(Worker); //User имеет связь 1к1 с Worker
Worker.belongsTo(User)  // worker подчиняется user

Skill.hasMany(Worker); //Skill имеет связь 1 к many с Worker
Worker.belongsTo(Skill) // worker подчиняется skill

User.hasMany(Company); //User имеет связь 1 к 1 с Company
Company.belongsTo(User) // Company подчиняется User

Company.hasMany(Test_tab,{as: 'test'}); //Company имеет связь 1 к many с Test_tab
Test_tab.belongsTo(Company) //Test_tab подчиняется  Company

Test_tab.hasMany(Qe_tab); //Test_tab имеет связь 1 к many с Qe_tab
Qe_tab.belongsTo(Test_tab) // Qe_tab подчиняется Test_tab

Vacansion.hasMany(Company); //Vacansion имеет связь 1 к many с Company
Company.belongsTo(Vacansion) // Company подчиняется Vacansion

Vacansion.hasMany(Worker); //Vacansion имеет связь 1 к many с Worker
Worker.belongsTo(Vacansion) // Worker подчиняется Vacansion

module.exports = {
    User,
    Skill,
    Worker,
    Company,
    Test_tab,
    Qe_tab,
    Vacansion
}

//Конец блока

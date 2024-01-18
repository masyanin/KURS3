const sequelize = require('../db')
const {DataTypes}=require('sequelize')
/*_e опыт работы
* _n название
* Весь этот файл инзициализация связей в бд
* */

// Блок инициализации таблиц из бд
const User = sequelize.define("user",{
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    login:{type: DataTypes.STRING, allowNull: false},
    password:{type: DataTypes.STRING, allowNull: false},
    role:{type: DataTypes.STRING, defaultValue: "USER"}
});

const User_data = sequelize.define('user_data',{
    id:{type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    coins:{type: DataTypes.INTEGER, allowNull: true},
    avatar:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    subject:{type: DataTypes.INTEGER,allowNull: true },
    child:{type: DataTypes.INTEGER, allowNull: true}
});

const Subj = sequelize.define('subj',{
    id:{type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull: false}
})

const Ass = sequelize.define('ass',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull: false}
})

const Preps = sequelize.define('preps',{

})

const Score = sequelize.define('score', {
    score:{type:DataTypes.INTEGER, allowNull:false}
})

const Score_now = sequelize.define('score_now', {
    score:{type:DataTypes.INTEGER, allowNull:false}
})

const Goods = sequelize.define('goods',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull: false},
    img:{type:DataTypes.STRING, allowNull:false}
})

const Owned_goods = sequelize.define('owned_goods', {

})

const In_class = sequelize.define('in_class',{
})

const Score_log = sequelize.define('score_log',{
    score:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATE, allowNull:false}
})

//Блок связей из бд


User.hasMany(User_data); //User имеет связь 1к1 с User_data
User_data.belongsTo(User)  // User_data подчиняется user

User.hasMany(Preps); //User имеет связь 1 к many с Preps
Preps.belongsTo(User) // Preps подчиняется User

Subj.hasMany(Preps); //Subject имеет связь 1 к 1 с Preps
Preps.belongsTo(Subj) // Preps подчиняется Subject

Ass.hasMany(Preps); //Class имеет связь 1 к many с Preps
Preps.belongsTo(Ass) //Preps подчиняется  Class

User.hasMany(Score); //User имеет связь 1 к many с Score
Score.belongsTo(User) // Score подчиняется User

Subj.hasMany(Score); //Subject имеет связь 1 к many с Score
Score.belongsTo(Subj) // Score подчиняется Subject

User.hasMany(Score_now); //User имеет связь 1 к many с Score
Score_now.belongsTo(User) // Score подчиняется User

Subj.hasMany(Score_now); //Subject имеет связь 1 к many с Score
Score_now.belongsTo(Subj) // Score подчиняется Subject

Subj.hasMany(Score_log); //Subject имеет связь 1 к many с Score
Score_log.belongsTo(Subj) // Score подчиняется Subject

User.hasMany(Score_log); //User имеет связь 1 к many с Score
Score_log.belongsTo(User) // Score подчиняется User

User.hasMany(Owned_goods);
Owned_goods.belongsTo(User)

Goods.hasMany(Owned_goods);
Owned_goods.belongsTo(Goods)

User.hasMany(In_class);
In_class.belongsTo(User)

Ass.hasMany(In_class);
In_class.belongsTo(Ass)

module.exports = {
    User,
    User_data,
    Subj,
    Ass,
    Preps,
    Score,
    Score_now,
    Goods,
    Owned_goods,
    In_class,
    Score_log
}

//Конец блока

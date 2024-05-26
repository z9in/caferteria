// 소담
let {Sequelize, DataTypes} = require('sequelize');
let sequelize1 = new Sequelize({
    dialect: 'sqlite',
    storage: 'menu.sqlite'
});
//소담
const Sodam = sequelize1.define('Sodam', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    menu1_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    date_start: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음"
    }
});
//프리미엄
const Premium = sequelize1.define('Premium', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    menu1_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu1_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu2_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu3_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu4_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_1: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_2: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_3: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_4: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_5: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    menu5_6: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음",
    },
    date_start: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "없음"
    }
});



module.exports = {sequelize1, Sodam, Premium};
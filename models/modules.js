const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const SubCategories = require('./subCategories');

class Modules extends Model {}

Modules.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        topics: {
            type: DataTypes.STRING,
            allowNull: false
        },
        letters: {
            type: DataTypes.STRING,
            allowNull: false
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_downloadable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        downloadLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        packageSize: {
            type: DataTypes.STRING,
            allowNull: false
        },
        redirect_module_id: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            references: {
              model: 'Modules',
              key: 'id',
            },
        },
    }, {
        sequelize,
        modelName: 'Modules',
        tableName: 'modules',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
);

Modules.belongsTo(Modules, { as: 'redirectedModule', foreignKey: 'redirect_module_id' });

// Modules.belongsToMany(SubCategories, { as: 'subCategories', through: 'module_subcategory', foreignKey: 'module_id' });

module.exports = Modules;
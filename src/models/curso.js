'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Categoria,{foreignkey: 'categoria_id'});
      Curso.belongsTo(models.Pessoa,{foreignkey: 'docente_id'});
      Curso.hasMany(models.Matricula,{foreignkey: 'curso_id'});
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};
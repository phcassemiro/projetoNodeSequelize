const dataSource  = require ('../models');

class Services{
  constructor(nomeDoModel){
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(){
    return dataSource[this.model].findAll();
  }

  // async pegaUmRegistroPorId(id){
  //   return dataSource[this.model].findByPk(id);
  // }

  // async criaRegistro(dadosRegistro){
  //   return dataSource[this.model].create(dadosRegistro);
  // }

  // async excluiRegistro(id){
  //   return dataSource[this.model].destroy({where: {id: id}});
  // }
}

module.exports = Services;
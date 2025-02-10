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

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  // async excluiRegistro(id){
  //   return dataSource[this.model].destroy({where: {id: id}});
  // }
}

module.exports = Services;
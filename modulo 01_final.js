dadosClientes = [
    {
      nome: "Lucas",
      sobrenome: "da Silva",
      idade: 21,
      genero: "Masculino",
      plano:"Full",
      carencia: false,
      aquisicao: "12/01/2019"
    },
    {
      nome: "Ana",
      sobrenome: "Lima",
      idade: 17,
      genero: "Feminino",
      plano:"Medium",
      carencia: false,
      aquisicao: "17/03/2019"
    },
    {
      nome: "Adriana",
      sobrenome: "Menezes",
      idade: 27,
       genero: "Fenminino",
      plano:"Full",
      carencia: true,
      aquisicao: "14/09/2020"
    }
  ]


//  retornaLista = (lista) => {
module.exports.retornaLista = (lista) => {

    var novaListaClientes = []

        for (var i=0; i<lista.length; i++){
            if (lista[i].idade  >= 18 && lista[i].idade <=26) {novaListaClientes.push(lista[i])}
        }
    return novaListaClientes
    }

    console.log(retornaLista(dadosClientes))

    function geraNovaListaClientes(lista) {

      var novaListaClientes = []
  
  
      for (var i=0; i<lista.length; i++){
          if (lista[i].idade  >= 18 && lista[i].idade <=26) {novaListaClientes.push(lista[i])}
      }
  return novaListaClientes
  }
  
  console.log(geraNovaListaClientes(dadosClientes))
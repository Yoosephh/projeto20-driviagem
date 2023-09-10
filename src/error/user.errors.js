
function joiError(message){
  return ({ 
    type: "joiError",
    message
  })
}
function queryNumberType(field){
  return({
    type: "queryNumberType",
    message: `O campo ${field} precisa ser um número inteiro e maior ou igual a um (1).`
  })
}
function queryDateValues(){
  return ({
    type: "queryDateValues",
    message: "Não é possível que o campo 'smaller-date' seja maior que o campo 'bigger-date'"
  })
}
function queryDateFormat(date){
  return ({
    type: "queryDateFormat",
    message: `Forneça uma data válida para o campo ${date}. Verifique se o formato é do tipo DD-MM-YYYY, com separação por hífen (-) e não barra (/).`
  })
}
function querySingleDate(given, notGiven){
  return({
    type: "singleDate",
    message: `O campo ${given} foi fornecido sem o campo ${notGiven}.`
  })
}
function dateError(){
  return ({
    type: "dateError",
    message: "Não é possível registrar uma viagem que já aconteceu. Forneça uma data maior que a data atual."
  })
}
function dateFormat(){
  return ({
    type: "dateError",
    message: "Verifique o tipo de dado enviado como data e tente novamente."
  })
}
function originDestination(){
  return({
    type: "originEqualDestination",
    message: "O id fornecido para a cidade de destino deve ser diferente do id da cidade de origem."
  })
}

export const userErrors = {joiError, dateError, dateFormat, originDestination, queryNumberType, queryDateValues, querySingleDate, queryDateFormat}
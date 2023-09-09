
function joiError(message){
  return ({ 
    type: "joiError",
    message
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

export const userErrors = {joiError, dateError, dateFormat}
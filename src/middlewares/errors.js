import httpStatus from "http-status"

export async function errors(error, req, res, next) {

  if(error.type === "joiError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: error.message})
  }

  if(error.type === "dateError"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: error.message})
  }

  if(error.type === "originEqualDestination"){
    return res.status(httpStatus.CONFLICT)
    .send({message: error.message})
  }

  if(error.type === "queryNumberType"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: error.message})
  }

  if(error.type === "queryDateValues"){
    return res.status(httpStatus.BAD_REQUEST)
    .send({message: error.message})
  }

  if(error.type === "queryDateFormat"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: error.message})
  }

  if(error.type === "singleDate"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: error.message})
  }

  if(error.code === "23505" && error.constraint === "cities_name_key") {
    return res.status(httpStatus.CONFLICT)
    .send({message: "Já existe uma cidade com o nome cadastrado!"})
  }

  if(error.code === "23503" && error.constraint === "flights_destination_fkey") {
    return res.status(httpStatus.NOT_FOUND)
    .send({message: "Não existe uma cidade de destino registrada com o id especificado."})
  }

  if(error.code === "23503" && error.constraint === "flights_origin_fkey") {
    return res.status(httpStatus.NOT_FOUND)
    .send({message: "Não existe uma cidade de origem registrada com o id especificado."})
  }

  if(error.code === "23503" && error.constraint === "travels_passengerId_fkey") {
    return res.status(httpStatus.NOT_FOUND)
    .send({message: "Não existe um passageiro(a) registrado(a) com o id especificado."})
  }

  if(error.code === "23503" && error.constraint === "travels_flightId_fkey") {
    return res.status(httpStatus.NOT_FOUND)
    .send({message: "Não existe um voo registrado com o id especificado."})
  }

  console.log(error)
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
}

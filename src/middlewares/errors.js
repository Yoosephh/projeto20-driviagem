import httpStatus from "http-status"

export async function errors(error, req, res, next) {

  if(error.type === "joiError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
    .send({message: `${error.message}`})
  }
  if(error.type === "dateError"){
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

  console.log(error)
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
}

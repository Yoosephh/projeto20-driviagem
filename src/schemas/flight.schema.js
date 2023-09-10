import joiBase from "joi";
import joiDate from "@joi/date"

const Joi = joiBase.extend(joiDate)
let biggerDate = 'bigger-date'
export const flightSchema = Joi.object({
  origin: Joi.number().integer().min(1).required().label("Origem").messages({
    'number.base': `Tipo de dado fornecido para o campo 'Origem' está incorreto. Deve ser do tipo number.`,
    'number.empty': `É obrigatório fornecer o campo 'Origem'.`,
    'number.min': `O id da cidade de origem deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de origem deve ser um número inteiro.`
  }),
  destination: Joi.number().integer().min(1).required().label("Destino").messages({
    'number.base': `Tipo de dado fornecido para o campo 'Destino' está incorreto. Deve ser do tipo number.`,
    'number.empty': `É obrigatório fornecer o campo 'Destino'.`,
    'number.min': `O id da cidade de destino deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de destino deve ser um número inteiro.`
  }),
  date: Joi.date().format("DD-MM-YYYY").required().label("Data").messages({
    'date.base': `O formato fornecido é invalido. Forneça uma data.`,
    'date.format': `Deve ser fornecida uma data válida no formato 'DD-MM-YYYY'`,
    'date.empty': `É obrigatório fornecer o campo 'date'`
  })
})

export const travelSchema = Joi.object({
  passengerId: Joi.number().integer().min(1).required().label("Id do passageiro").messages({
    'number.base': `Tipo de dado fornecido para o campo 'passengerId' está incorreto. Deve ser do tipo number.`,
    'any.required':`É obrigatório fornecer o campo 'passengerId'.`,
    'number.min': `O id do passageiro deve ser um número maior ou igual a 1.`,
    'number.integer': `O id do passageiro deve ser um número inteiro.`
  }),
  flightId: Joi.number().integer().min(1).required().label("Id do passageiro").messages({
    'number.base': `Tipo de dado fornecido para o campo 'flightId' está incorreto. Deve ser do tipo number.`,
    'any.required':`É obrigatório fornecer o campo 'flightId'.`,
    'number.min': `O id da viagem deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da viagem deve ser um número inteiro.`
  })
})

export const querySchemaFlights = Joi.object({
  origin: Joi.number().integer().min(1).messages({
    'number.base': `Tipo de dado fornecido para o campo 'Destino' está incorreto. Deve ser do tipo number.`,
    'number.min': `O id da cidade de destino deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de destino deve ser um número inteiro.`
  }),
  destination: Joi.number().integer().min(1).messages({
    'number.base': `Tipo de dado fornecido para o campo 'Destino' está incorreto. Deve ser do tipo number.`,
    'number.min': `O id da cidade de destino deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de destino deve ser um número inteiro.`
  }),
  'bigger-date': Joi.date().format("DD-MM-YYYY").label("bigger-date").messages({
    'date.base': `O formato fornecido para 'bigger-date' é invalido. Forneça uma data.`,
    'date.format': `Deve ser fornecida uma data válida no formato 'DD-MM-YYYY'. Verifique a data fornecida no campo bigger-date e tente novamente.`,
  }),
  'smaller-date': Joi.date().format("DD-MM-YYYY").label("smaller-date").messages({
    'date.base': `O formato fornecido para 'smaller-date' é invalido. Forneça uma data.`,
    'date.format': `Deve ser fornecida uma data válida no formato 'DD-MM-YYYY'. Verifique a data fornecida no campo smaller-date e tente novamente.`,
  })
})

import joiBase from "joi";
import joiDate from "@joi/date"

const Joi = joiBase.extend(joiDate)

export const flightSchema = Joi.object({
  origin: Joi.number().integer().min(1).required().messages({
    'number.base': `Tipo de dado fornecido para o campo 'Origem' está incorreto. Deve ser do tipo number.`,
    'number.empty': `É obrigatório fornecer o campo 'Origem'.`,
    'number.min': `O id da cidade de origem deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de origem deve ser um número inteiro.`
  }),
  destination: Joi.number().integer().min(1).required().invalid(Joi.ref('origin')).messages({
    'number.base': `Tipo de dado fornecido para o campo 'Destino' está incorreto. Deve ser do tipo number.`,
    'number.empty': `É obrigatório fornecer o campo 'Destino'.`,
    'number.min': `O id da cidade de destino deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de destino deve ser um número inteiro.`,
    'any.invalid': `O id fornecido para a cidade de destino deve ser diferente do id da cidade de origem.`
  }),
  date: Joi.date().format("DD-MM-YYYY").required().messages({
    'date.base': `O formato fornecido é invalido. Forneça uma data.`,
    'date.format': `Deve ser fornecida uma data válida no formato 'DD-MM-YYYY'`,
    'date.empty': `É obrigatório fornecer o campo 'date'`
  })
})
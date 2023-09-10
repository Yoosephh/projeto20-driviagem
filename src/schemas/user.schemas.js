import joiBase from "joi";
import joiDate from "@joi/date"

const Joi = joiBase.extend(joiDate)

export const nameSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required().label("Primeiro nome").messages({
    'string.base': `Tipo de dado fornecido para o campo 'Primeiro nome' está incorreto. Deve ser do tipo string.`,
    'string.empty': `O campo 'Primeiro nome' foi recebido como vazio.`,
    'any.required':`É obrigatório fornecer o campo 'Primeiro nome'.`,
    'string.min': `O primeiro nome deve ter entre no mínimo 2 caracteres.`,
    'string.max': `O primeiro nome deve ter no máximo 100 caracteres (incluindo espaços).`
  }),
  lastName: Joi.string().min(2).max(100).required().label("Ultimo nome").messages({
    'string.base': `Tipo de dado fornecido para o campo 'Ultimo nome' está incorreto. Deve ser do tipo string.`,
    'string.empty': `O campo 'Ultimo nome' foi recebido como vazio.`,
    'any.required':`É obrigatório fornecer o campo 'Ultimo nome'.`,
    'string.min': `O ultimo nome deve ter no mínimo 2 caracteres.`,
    'string.max': `O ultimo nome deve ter no máximo 100 caracteres (incluindo espaços).`
  })
})

export const citySchema = Joi.object({
  name: Joi.string().min(2).max(50).required().label("Nome da cidade").messages({
    'string.base': `Tipo de dado fornecido para o campo 'Nome da cidade' está incorreto. Deve ser do tipo string.`,
    'string.empty': `É obrigatório fornecer o campo 'Nome da cidade'.`,
    'string.min': `O nome da cidade deve ter no mínimo 2 caracteres.`,
    'string.max': `O nome da cidade deve ter no máximo 100 caracteres (incluindo espaços).`
  })
})


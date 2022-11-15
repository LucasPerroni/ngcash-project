import joi from "joi"

export const cashOutSchema = joi.object({
  username: joi.string().min(3).required(),
  amount: joi.number().integer().min(0).required(),
})

import Joi from 'joi';
// TODO: Not too sure about this. NW
const user = {
    email: Joi.string().email(),
    firstName: Joi.string(),
    lastName: Joi.string(),
}

export const userSchema = {
    create: {
        body: {
            email: user.email.required(),
            firstName: user.firstName.required(),
            lastName: user.lastName.required(),
        }
    },
    createMany: {
        body:
            Joi.array().items({
                email: user.email.required(),
                firstName: user.firstName.required(),
                lastName: user.lastName.required(),
            })
    }
}
const joi = require('joi');
const validateSchema = async (inputs, schema) => {
    try {
        let { error, value } = schema.validate(inputs);
        if (error) throw error.details ? error.details[0].message.replace(/['"]+/g, '') : "";
        else return false;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    studentValidate: async (req, property) => {
        let schema = joi.object().keys({
            StudentName:joi.string().required(),
            FatherName :joi.string().required(),
           DOB        : joi.date().min(10).required(),
            Address       : joi.string().optional(),
          State : joi.string().optional(),
          city :joi.string().optional(),
         Pin: joi.number().optional(),
         PhoneNumber : joi.string().max(10).required(),
            email: joi.string().trim().lowercase().required(),
            class : joi.string().required(),
            Marks : joi.number().min(5).max(10).optional(),
            Date : joi.date().optional()
        });
        return await validateSchema(req[property], schema);
    }

    
}
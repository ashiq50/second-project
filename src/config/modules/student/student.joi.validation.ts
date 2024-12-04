import Joi from 'joi';

// UserName Schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, 'capitalize format')
    .required()
    .messages({
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.name': '{#value} is not in the capitalize format',
      'any.required': 'First name is required',
    }),
  middleName: Joi.string().trim().required().messages({
    'any.required': 'Middle name is required',
  }),
  lastName: Joi.string()
    .trim()
    .regex(/^[A-Za-z]+$/, 'alphabetical')
    .required()
    .messages({
      'string.pattern.name': '{#value} is not valid',
      'any.required': 'Last name is required',
    }),
});

// Guardian Schema
const gurdianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'any.required': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'any.required': 'Father Contact Number is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'any.required': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'any.required': 'Mother Contact Number is required',
  }),
});

// Local Guardian Schema
const localGurdianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Local Guardian Name is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'any.required': 'Contact Number is required for a Local Guardian',
  }),
  occupation: Joi.string().trim().required().messages({
    'any.required': 'Occupation of Local Guardian is required',
  }),
  address: Joi.string().trim().required().messages({
    'any.required': 'Address of Local Guardian is required',
  }),
});

// Student Schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not valid',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.date().iso().messages({
    'date.format': 'Date of Birth must be in ISO format',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email type',
    'any.required': 'Email is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'any.required': 'Contact Number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'any.required': 'Emergency Contact Number is required',
  }),
  bloodGroup: Joi.string().valid('A+', 'A-', 'O+', 'O-').messages({
    'any.only': '{#value} is not valid',
  }),
  presentAddress: Joi.string().trim().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  gurdian: gurdianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGurdianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().uri().messages({
    'string.uri': 'Profile Image must be a valid URL',
  }),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': '{#value} is not valid',
  }),
});

export default studentValidationSchema;

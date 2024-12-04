import { z } from 'zod';

// Define UserNameValidationSchema
const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First Name can not be more than 20 characters')
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: 'First Name must be in capitalize format',
    }),
  middleName: z.string().trim().min(1, 'Middle name is required'),
  lastName: z
    .string()
    .trim()
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last Name must contain only letters',
    }),
});

// Define GurdianValidationSchema
const GurdianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is required'),
  fatherOccupation: z.string().trim().min(1, 'Father Occupation is required'),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, 'Father Contact Number is required'),
  motherName: z.string().trim().min(1, 'Mother Name is required'),
  motherOccupation: z.string().trim().min(1, 'Mother Occupation is required'),
  motherContactNo: z
    .string()
    .trim()
    .min(1, 'Mother Contact Number is required'),
});

// Define LocalGuardianValidationSchema
const LocalGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local Guardian Name is required'),
  contactNo: z.string().trim().min(1, 'Contact Number is required'),
  occupation: z
    .string()
    .trim()
    .min(1, 'Occupation of Local Guardian is required'),
  address: z.string().trim().min(1, 'Address of Local Guardian is required'),
});

// Define StudentValidationSchema
const StudentValidationSchema = z.object({
  id: z.string().min(1, 'Student ID is required'),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Gender must be male, female, or other' }),
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Email must be a valid email address')
    .min(1, 'Email is required'),
  contactNo: z.string().trim().min(1, 'Contact Number is required'),
  emergencyContactNo: z
    .string()
    .trim()
    .min(1, 'Emergency Contact Number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'O+', 'O-']).optional(), // This allows `bloodGroup` to be omitted but ensures the value is one of the valid options when provided.
  presentAddress: z.string().trim().min(1, 'Present Address is required'),
  permanentAddress: z.string().trim().min(1, 'Permanent Address is required'),
  gurdian: GurdianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().url('Profile Image must be a valid URL').optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({ message: 'Status must be active or blocked' }),
    })
    .default('active'),
});

export default StudentValidationSchema;

import { Schema, model, connect } from 'mongoose';
import validator from 'validator';
import {
  Gurdian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
    maxlength: [20, 'First Name can not be more than 20 characters'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     if (value !== firstNameStr) {
    //       return false;
    //     }
    //     return true;
    //   },
    //   message: '{VALUE} is not in the capitalize format',
    // },
  },
  middleName: {
    type: String,
    trim: true,
    required: [true, 'Middle name is required'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    // },
    message: '{VALUE} is not valid',
  },
});

const GurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'FatherName is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father Contact Number is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother Occupation is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother Contact Number is required'],
  },
});

const LocalGurdianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local Gurdian Name is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact Number is reqiuired of  a Local Gurdian'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Occupation of local gurdian is required'],
  },
  address: {
    type: String,
    required: [true, 'Address of local gurdian is  required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: UserNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    // },
    message: (props: any) => `${props.value} is not a valid email type`,
  },
  contactNo: {
    type: String,
    required: [true, 'ContactNo  is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact Number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'O+', 'O-'],
      message: '{VALUE} is not valid',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  gurdian: {
    type: GurdianSchema,
    required: true,
  },
  localGuardian: {
    type: LocalGurdianSchema,
    reuired: true,
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not valid',
    },
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);

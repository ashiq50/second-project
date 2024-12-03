import { StudentModel } from '../schema.model';
import { Student } from './student.interface';

const createStudentInToDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentInToDb,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};

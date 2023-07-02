import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentControllers } from './student.controller';
import { StudentValidation } from './student.validation';
const router = express.Router();

// Get Single Student
router.get('/:id', StudentControllers.getSingleStudent);

// Delete Student
router.delete('/:id', StudentControllers.deleteStudent);

// update Student
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentControllers.updateStudent
);

// Get All Student
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;

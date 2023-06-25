import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './department.controller';
import { AcademicDepartmentValidation } from './department.validation';

const router = express.Router();

// Create Department Route
router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createDepartment
);

// Get Single Department Router
router.get('/:id', AcademicDepartmentController.getSingleDepartment);
// get All Department Route
router.get('/', AcademicDepartmentController.getAllDepartments);

export const AcademicDepartmentRoutes = router;

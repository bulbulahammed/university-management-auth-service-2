import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './faculty.controller';
import { AcademicFacultyValidation } from './faculty.validation';
const router = express.Router();

// Create Faculty Route
router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

export const FacultyRoutes = router;

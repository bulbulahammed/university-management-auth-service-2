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
// Get Single Faculty Route
router.get('/:id', AcademicFacultyController.getSingleFaculty);

// Update Faculty Route
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

// Create Faculty Route
router.get('/', AcademicFacultyController.getAllFaculties);

export const FacultyRoutes = router;

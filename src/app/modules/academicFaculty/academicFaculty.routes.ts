import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
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
// Delete Faculty
router.delete('/:id', AcademicFacultyController.deleteFaculty);

// Create Faculty Route
router.get('/', AcademicFacultyController.getAllFaculties);

export const academicFacultyRoutes = router;

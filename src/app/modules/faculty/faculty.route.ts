import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

// Get All Faculties Route
router.get('/:id', FacultyController.getSingleFaculty);

// Update Faculty
router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty
);

// Delete Faculty
router.delete('/:id', FacultyController.deleteFaculty);

// Get Single Faculty
router.get('/', FacultyController.getAllFaculties);

export const FacultyRoutes = router;

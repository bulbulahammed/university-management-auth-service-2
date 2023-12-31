import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './semester.controller';
import { AcademicSemesterValidation } from './semester.validation';
const router = express.Router();

// Create Semester Route
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
// Update Single/Multiple Semester
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);
// Semester Delete Router
router.delete('/:id', AcademicSemesterController.deleteSemester);
// Get Single Semester Route
router.get('/:id', AcademicSemesterController.getSingleSemester);
// Get All Semester route
router.get('/', AcademicSemesterController.getAllSemesters);

export const SemesterRoutes = router;

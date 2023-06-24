import { IAcademicFaculty } from './faculty.interface';
import { AcademicFaculty } from './faculty.model';

// Create User Service
const createFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const AcademicFacultyService = {
  createFaculty,
};

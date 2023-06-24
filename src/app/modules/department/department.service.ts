import { IAcademicDepartment } from './department.interface';
import { AcademicDepartment } from './department.model';

// Create Department
const createDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment | null> => {
  const result = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty'
  );
  return result;
};

export const AcademicDepartmentService = {
  createDepartment,
};

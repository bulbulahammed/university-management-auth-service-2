import express from 'express';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/department/department.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { SemesterRoutes } from '../modules/semester/semester.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/semesters',
    route: SemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

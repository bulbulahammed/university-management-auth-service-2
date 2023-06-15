import express from 'express';
import { SemesterRoutes } from '../modules/semester/semester.routes';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

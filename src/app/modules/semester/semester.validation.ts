import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './semester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is Required',
    }),
    year: z.number({
      required_error: 'Year is Required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'code is Required',
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is Required',
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is Required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};

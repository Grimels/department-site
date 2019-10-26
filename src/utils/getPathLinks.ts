import { ComponentClass, FunctionComponent } from 'react';

import { AboutDepartment } from 'views/AboutDepartment';
import { ScientificActivities } from 'views/ScientificActivities';
import { Specialties } from 'views/Specialties';
import { ForStudents } from 'views/ForStudents';
import { ForEntrans } from 'views/ForEntrans';
import { HomePage } from 'views/HomePage/HomePage';

import {
  HOME,
  FOR_ENTRANS,
  SPECIALTIES,
  FOR_STUDENTS,
  ABOUT_DEPARTMENT,
  SCIENTIFIC_ACTIVITIES,
} from 'components/Navbar/constants';

import { LanguageMap } from 'stores/Language';

export interface IPathLink {
  label: LanguageMap<string>;
  path: string;
  component: ComponentClass<any, any> | FunctionComponent<any> | undefined;
}

export const getPathLinks = (): IPathLink[] => [
  { label: HOME, path: '/', component: HomePage },
  { label: FOR_ENTRANS, path: '/for-entrans', component: ForEntrans },
  //{ label: FOR_STUDENTS, path: '/for-students', component: ForStudents },
  { label: SPECIALTIES, path: '/specialties', component: Specialties },
  //{ label: SCIENTIFIC_ACTIVITIES, path: '/scientific-activities', component: ScientificActivities },
  { label: ABOUT_DEPARTMENT, path: '/about-department', component: AboutDepartment },
];

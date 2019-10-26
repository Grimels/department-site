import { ENG, UA, RU } from 'constants/languages';
import { LanguageMap } from 'stores/Language';

export const DEPARTMENT_NAME: LanguageMap<string> = {
  [UA]: 'Кафедра Стратегiчного Управлiння',
  [RU]: 'Кафедра Стратегического Управления',
  [ENG]: 'Strategic Management Department',
}

export const HOME: LanguageMap<string> = {
  [UA]: 'Головна',
  [RU]: 'Главная',
  [ENG]: 'Home',
};

export const FOR_ENTRANS: LanguageMap<string> = {
  [UA]: 'Абiтурiєнту',
  [RU]: 'Абитуриенту',
  [ENG]: 'For Entrans',
};

export const FOR_STUDENTS: LanguageMap<string> = {
  [UA]: 'Студентам',
  [RU]: 'Студентам',
  [ENG]: 'For Students',
};

export const SPECIALTIES: LanguageMap<string> = {
  [UA]: 'Спецiальностi',
  [RU]: 'Специальности',
  [ENG]: 'Specialties',
};

export const SCIENTIFIC_ACTIVITIES: LanguageMap<string> = {
  [UA]: 'Наукова Дiяльнiсть',
  [RU]: 'Научная Деятельность',
  [ENG]: 'Scientific Activities',
};

export const ABOUT_DEPARTMENT: LanguageMap<string> = {
  [UA]: 'Про Кафедру',
  [RU]: 'О Кафедре',
  [ENG]: 'About Department',
};
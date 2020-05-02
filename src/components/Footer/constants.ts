import { Language, RU, ENG, UA } from 'constants/language';

export const universityByLanguageMap: Map<Language, Array<String>> = new Map([
	[UA, ['Харків', 'вул. Кирпичева 2']],
	[RU, ['Харьков', 'ул. Кирпичева 2']],
	[ENG, ['Kharkiv', 'Kyrpychova str. 2']],
]);

export const departmentByLanguageMap: Map<Language, Array<String>> = new Map([
	[UA, ['Корпус У-2', 'НТУ «ХПІ» каб. 703 (7-й поверх)']],
	[RU, ['Корпус У-2', 'НТУ «ХПИ» каб. 703 (7-й этаж)']],
	[ENG, ['Building U-2', 'NTU "KhPI" office 703 (7th floor)']],
]);

export const DEPARTMENT_PHONE_NUMBER = '(057) 707-68-24';
export const DEPARTMENT_HEAD_PHONE_NUMBER = '(057) 707-67-35';

export const departmentContactsByLanguageMap: Map<Language, Array<String>> = new Map([
	[UA, ['Кафедра', DEPARTMENT_PHONE_NUMBER]],
	[RU, ['Кафедра', DEPARTMENT_PHONE_NUMBER]],
	[ENG, ['Department', DEPARTMENT_PHONE_NUMBER]],
]);

export const departmentHeadContactsByLanguageMap: Map<Language, Array<String>> = new Map([
	[UA, ['Завідуючий Кафедрою', DEPARTMENT_HEAD_PHONE_NUMBER]],
	[RU, ['Заведующий Кафедрой', DEPARTMENT_HEAD_PHONE_NUMBER]],
	[ENG, ['Department Head', DEPARTMENT_HEAD_PHONE_NUMBER]],
]);

export const EMAIL = 'igorvkononenko@gmail.com';

export const copyRights: Map<Language, String> = new Map([
	[UA, `© ${new Date().getFullYear()} Кафедра Стратегічного Управління.`],
	[RU, `© ${new Date().getFullYear()} Кафедра Стратегического Управления.`],
	[ENG, `© ${new Date().getFullYear()} Strategic Management Department.`],
]);

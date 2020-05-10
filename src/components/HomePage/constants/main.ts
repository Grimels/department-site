import { UA, RU, ENG } from 'constants/language';

export type MainTextData = {
	universityName: string;
	departmentName: string;
	facultyName: string;
	mainText: string;
	secondaryText: string;
	buttonText: string;
};

const MAIN_UA_VERSION: MainTextData = {
	universityName: 'НТУ "ХПІ"',
	departmentName: 'КАФЕДРА СТРАТЕГІЧНОГО УПРАВЛІННЯ',
	facultyName: "Факультет комп'ютерних наук і програмної інженерії",
	mainText: 'НАШІ СТУДЕНТИ ЗАРОБЛЯЮТЬ понад 2000$ В МІСЯЦЬ',
	secondaryText:
		'Наші випускники працюють у великих компаніях світового рівня. Подавай заявку на вступ і отримуй сучасну освіту, яка гарантуватиме працевлаштування',
	buttonText: 'поступити',
};

const MAIN_RU_VERSION: MainTextData = {
	universityName: 'НТУ "ХПИ"',
	departmentName: 'КАФЕДРА СТРАТЕГИЧЕСКОГО УПРАВЛЕНИЯ',
	facultyName: 'Факультет компьютерных наук и программной инженерии',
	mainText: 'НАШИ СТУДЕНТЫ ЗАРАБАТЫВАЮТ СВЫШЕ 2000$ В МЕСЯЦ',
	secondaryText:
		'Наши выпускники работают в крупных компаниях мирового уровня. Подавай заявку на поступление и получай современное образование, гарантирующее трудоустройство',
	buttonText: 'ПОСТУПИТЬ',
};

const MAIN_ENG_VERSION: MainTextData = {
	universityName: 'NTU "KhPI"',
	departmentName: 'DEPARTMENT OF STRATEGIC MANAGEMENT',
	facultyName: 'Faculty of Computer Science and Software Engineering',
	mainText: 'OUR STUDENTS EARN MORE THAN $2000 PER MONTH',
	secondaryText:
		'Our graduates work in large world-class companies. Submit an application for admission and receive a modern education guaranteeing employment',
	buttonText: 'APPLY NOW',
};

export const mainTextDataMap: Map<string, MainTextData> = new Map<string, MainTextData>([
	[UA, MAIN_UA_VERSION],
	[RU, MAIN_RU_VERSION],
	[ENG, MAIN_ENG_VERSION],
]);

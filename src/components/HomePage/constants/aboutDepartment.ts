import { Language, UA, RU, ENG } from 'constants/language';

export interface IAboutDepartmentTextData {
	name: string;
	text: string;
	title: string;
	button: string;
}

const UA_SECTION_NAME = 'Про Кафедру';
const RU_SECTION_NAME = 'О Кафедре';
const ENG_SECTION_NAME = 'About Department';

const UA_IMAGE_TITLE = 'НАШІ ВИКЛАДАЧІ';
const RU_IMAGE_TITLE = 'НАШИ ПРЕПОДАВАТЕЛИ';
const ENG_IMAGE_TITLE = 'OUR TEACHERS';

const UA_SECTION_TEXT =
	"Кафедра здійснює підготовку бакалаврів денної форми навчання за спеціальністю 122 - «Комп'ютерні науки» на освітній програмі «Комп'ютерні науки», за спеціалізацією «Управління проектами в сфері інформаційних технологій», а також магістрів денної та заочної форм навчання за фахом 122 - «Комп'ютерні науки» на освітній програмі «Управління проектами в сфері інформаційних технологій».";
const RU_SECTION_TEXT =
	'Кафедра осуществляет подготовку бакалавров дневной формы обучения по специальности 122 — «Компьютерные науки» на образовательной программе «Компьютерные науки», по специализации «Управление проектами в сфере информационных технологий», а также магистров дневной и заочной форм обучения по специальности 122 — «Компьютерные науки» на образовательной программе «Управление проектами в сфере информационных технологий».';
const ENG_SECTION_TEXT =
	'The department prepares full-time bachelors in the specialty 122 - “Computer Science” at the “Computer Science” educational program, in the specialization “Information Technology Project Management”, as well as full-time and part-time masters in the specialty 122 - “Computer Science” on the educational program "Project Management in the Field of Information Technology".';

const UA_BUTTON = 'Дізнатись більше';
const RU_BUTTON = 'Узнать больше';
const ENG_BUTTON = 'More';

export const aboutDepartmentTextDataMap: Map<Language, IAboutDepartmentTextData> = new Map([
	[UA, { name: UA_SECTION_NAME, text: UA_SECTION_TEXT, title: UA_IMAGE_TITLE, button: UA_BUTTON }],
	[RU, { name: RU_SECTION_NAME, text: RU_SECTION_TEXT, title: RU_IMAGE_TITLE, button: RU_BUTTON }],
	[
		ENG,
		{ name: ENG_SECTION_NAME, text: ENG_SECTION_TEXT, title: ENG_IMAGE_TITLE, button: ENG_BUTTON },
	],
]);

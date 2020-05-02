import { UA, RU, ENG, Language } from 'constants/language';

export const headerTextByLanguageMap: Map<Language, String> = new Map([
	[UA, 'Наші Партнери'],
	[RU, 'Наши Партнеры'],
	[ENG, 'Our Partners'],
]);

const uaContentText = `Кафедра здійснює підготовку бакалаврів денної форми навчання за спеціальністю 122 - «Комп'ютерні науки» на освітній програмі «Комп'ютерні науки», за спеціалізацією «Управління проектами в сфері інформаційних технологій», а також магістрів денної та заочної форм навчання за фахом 122 - «Комп'ютерні науки» на освітній програмі «Управління проектами в сфері інформаційних технологій».`;
const ruContentText = `Кафедра осуществляет подготовку бакалавров дневной формы обучения по специальности 122 — «Компьютерные науки» на образовательной программе «Компьютерные науки», по специализации «Управление проектами в сфере информационных технологий», а также магистров дневной и заочной форм обучения по специальности 122 — «Компьютерные науки» на образовательной программе «Управление проектами в сфере информационных технологий».`;
const engContentText = `The department prepares full-time bachelors in the specialty 122 - “Computer Science” at the “Computer Science” educational program, in the specialization “Information Technology Project Management”, as well as full-time and part-time Masters in the specialty 122 - “Computer Science” on the educational program "Project Management in the Field of Information Technology".`;

export const contentTextByLanguageMap: Map<Language, String> = new Map([
	[UA, uaContentText],
	[RU, ruContentText],
	[ENG, engContentText],
]);

import { Language, UA, ENG, RU } from 'constants/language';
import { SCIENTIFIC_ARTICLES_HEADER, SCIENTIFIC_DEVELOPMENTS_HEADER } from 'components/ScientificActivity';
import { METHODICAL_SUUPORT_HEADER } from 'components/Student/MethodicalSupport';
import { MASTERS_HEADER } from 'components/Applicants/Masters';
import { ABOUT_SPECIALITY } from 'components/AboutSpeciality/constants';

export interface NavigationLink {
	name: string;
	route: string;
	link?: string;
	routes?: NavigationLink[];
}

export const getUniversityName = (language: Language) => {
	switch (language) {
		case UA:
			return uaLinks[0].name;
		case RU:
			return ruLinks[0].name;
		case ENG:
			return engLinks[0].name;
		default:
			throw new Error('Invalid language');
	}
};

const uaLinks: NavigationLink[] = [
	{ name: 'НТУ "ХПІ"', route: '/' },
	{ name: 'Студенту', route: '/student', routes: [
			{
				name: 'Дисципліни вільного вибору',
				route: '/disciplines'
			},
			{
				name: METHODICAL_SUUPORT_HEADER[UA],
				route: '/methodics'
			}
		]
	},
	{ name: 'Абітурієнту', route: '/applicants', routes: [
			{
				name: MASTERS_HEADER[UA],
				route: '/magistracy'
			},
			{
				name: 'Бакалаврат',
				route: '/bach'
			},
		]
	},
	{ name: 'Про Кафедру', route: '/department' },
	{ name: ABOUT_SPECIALITY[UA], route: '/speciality' },
	{ name: 'Наукова Діяльність', route: '/scientific', routes: [
			{
				name: SCIENTIFIC_ARTICLES_HEADER[UA],
				route: '/articles'
			},
			{
				name: 'Участь в наукових заходах',
				route: '/events'
			},
			{
				name: SCIENTIFIC_DEVELOPMENTS_HEADER[UA],
				route: '/developments'
			},
			{
				name: 'Захищені Дисертації',
				route: '/dissertations'
			},
			{
				name: 'Конференція',
				route: '',
				link: 'http://www.imconf.com.ua/',
			},
			{
				name: 'Науковий журнал "Вісник НТУ «ХПІ»"',
				route: '',
				link: 'http://pm.khpi.edu.ua/',
			},
			{
				name: 'Наші Послуги',
				route: '/services',
				routes: [
					{
						name: 'Управлінський Консалтинг',
						route: '/consulting'
					},
					{
						name: 'Бізнес-Освіта та Навчання',
						route: '/training'
					},
					{
						name: 'Виконані Проєкти',
						route: '/projects'
					},
				]
			}
		]
	},
	{ name: 'Новини', route: '/news' },
];

const ruLinks: NavigationLink[] = [
	{ name: 'НТУ "ХПИ"', route: '/' },
	{ name: 'Студенту', route: '/student', routes: [
			{
				name: 'Дисциплины свободного выбора',
				route: '/disciplines'
			},
			{
				name: METHODICAL_SUUPORT_HEADER[RU],
				route: '/methodics'
			}
		]
	},
	{ name: 'Абитуриенту', route: '/applicants', routes: [
			{
				name: MASTERS_HEADER[RU],
				route: '/magistracy'
			},
			{
				name: 'Бакалаврат',
				route: '/bach'
			},
		]
	},
	{ name: 'О Кафедре', route: '/department' },
	{ name: ABOUT_SPECIALITY[RU], route: '/speciality' },
	{ name: 'Научная Деятельность', route: '/scientific', routes: [
			{
				name: SCIENTIFIC_ARTICLES_HEADER[RU],
				route: '/articles'
			},
			{
				name: 'Участие в научных событиях',
				route: '/events'
			},
			{
				name: SCIENTIFIC_DEVELOPMENTS_HEADER[RU],
				route: '/developments'
			},
			{
				name: 'Защищенные Дисертации',
				route: '/dissertations'
			},
			{
				name: 'Конференция',
				route: '',
				link: 'http://www.imconf.com.ua/',
			},
			{
				name: 'Научный журнал "Вестник НТУ «ХПИ»"',
				route: '',
				link: 'http://pm.khpi.edu.ua/',
			},
			{
				name: 'Наши Услуги',
				route: '/services',
				routes: [
					{
						name: 'Управленческий Консалтинг',
						route: '/consulting'
					},
					{
						name: 'Бизнес-Обучение и Тренинги',
						route: '/training'
					},
					{
						name: 'Реализованные Проекты',
						route: '/projects'
					},
				]
			}
		]
	},
	{ name: 'Новости', route: '/news' },
];

const engLinks: NavigationLink[] = [
	{ name: 'NTU "KhPI"', route: '/' },
	{ name: 'For Students', route: '/student', routes: [
			{
				name: 'Disciplines of free choice',
				route: '/disciplines'
			}
		]
	},
	{ name: 'For Applicants', route: '/applicants', routes: [
			{
				name: MASTERS_HEADER[ENG],
				route: '/magistracy'
			},
			{
				name: 'Bachelor’s degree',
				route: '/bach'
			},
		]
},
	{ name: 'About Department', route: '/department' },
	{ name: ABOUT_SPECIALITY[ENG], route: '/speciality' },
	{ name: 'Scientific Activity', route: '/scientific', routes: [
			{
				name: SCIENTIFIC_ARTICLES_HEADER[ENG],
				route: '/articles'
			},
			{
				name: 'Scientific Activities',
				route: '/events'
			},
			{
				name: SCIENTIFIC_DEVELOPMENTS_HEADER[ENG],
				route: '/developments'
			},
			{
				name: 'Defended Dissertations',
				route: '/dissertations'
			},
			{
				name: 'Conference',
				route: '',
				link: 'http://www.imconf.com.ua/',
			},
			{
				name: 'Scientific journal "Bulletin of NTU «KhPI»"',
				route: '',
				link: 'http://pm.khpi.edu.ua/',
			},
			{
				name: 'Our Services',
				route: '/services',
				routes: [
					{
						name: 'Management Consulting',
						route: '/consulting'
					},
					{
						name: 'Business Education and Training',
						route: '/training'
					},
					{
						name: 'Completed Projects',
						route: '/projects'
					},
				]
			}
		]
	},
	{ name: 'News', route: '/news' },
];

export const navLinksByLanguage: Map<Language, NavigationLink[]> = new Map([
	[UA, uaLinks],
	[RU, ruLinks],
	[ENG, engLinks],
]);

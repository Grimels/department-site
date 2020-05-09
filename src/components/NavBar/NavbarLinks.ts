import { Language, UA, ENG, RU } from 'constants/language';
import { SCIENTIFIC_ARTICLES_HEADER, SCIENTIFIC_DEVELOPMENTS_HEADER } from 'components/ScientificActivity';
import { METHODICAL_SUUPORT_HEADER } from 'components/Student/MethodicalSupport';
import { MASTERS_HEADER } from 'components/Applicants/Masters';

export interface NavigationLink {
	name: string;
	route: string;
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
	{ name: 'Наукова Діяльність', route: '/articles/scientific', routes: [
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
			}
		]
	},
	{ name: 'Новини', route: '/news' },
];

const ruLinks: NavigationLink[] = [
	{ name: 'НТУ "ХПИ"', route: '/' },
	{ name: 'Студенту', route: '/student', routes: [
			{
				name: 'Дисциплины свободного вибора',
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
	{ name: 'Научная Деятельность', route: '/articles/scientific', routes: [
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
			}
		]
	},
	{ name: 'Новости', route: '/news' },
];

const engLinks: NavigationLink[] = [
	{ name: 'NTU "KhPI"', route: '/' },
	{ name: 'For Students', route: '/student' },
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
	{ name: 'Scientific Activity', route: '/articles/scientific', routes: [
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

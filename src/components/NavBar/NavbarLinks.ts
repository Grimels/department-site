import { Language, UA, ENG, RU } from 'constants/language';

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
	{ name: 'Студенту', route: '/student' },
	{ name: 'Абітурієнту', route: '/applicants' },
	{ name: 'Про Кафедру', route: '/department' },
	{ name: 'Наукова Діяльність', route: '/articles/scientific' },
	{ name: 'Новини', route: '/news' },
];

const ruLinks: NavigationLink[] = [
	{ name: 'НТУ "ХПИ"', route: '/' },
	{ name: 'Студенту', route: '/student' },
	{ name: 'Абитуриенту', route: '/applicants' },
	{ name: 'О Кафедре', route: '/department' },
	{ name: 'Научная Деятельность', route: '/articles/scientific' },
	{ name: 'Новости', route: '/news' },
];

const engLinks: NavigationLink[] = [
	{ name: 'NTU "KhPI"', route: '/' },
	{ name: 'For Students', route: '/student' },
	{ name: 'For Applicants', route: '/applicants' },
	{ name: 'About Department', route: '/department' },
	{ name: 'Scientific Activity', route: '/articles/scientific' },
	{ name: 'News', route: '/news' },
];

export const navLinksByLanguage: Map<Language, NavigationLink[]> = new Map([
	[UA, uaLinks],
	[RU, ruLinks],
	[ENG, engLinks],
]);

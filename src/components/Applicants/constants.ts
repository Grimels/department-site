import { UA, Language, RU, ENG } from 'constants/language';
import { IDefaultPageTextData } from 'components/DefaultPage/DefaultPage';

export const applicantsTextDataByLanguage: Map<Language, IDefaultPageTextData> = new Map([
	[
		UA,
		{
			header: 'Бакалаврат',
			text:
				"Програма призначена для тих, хто хоче освоїти технології створення систем обробки інформації і управляти їх розробкою та впровадженням. У процесі навчання за програмою бакалаврів студенти освоюють необхідні математичні дисципліни, мови програмування С ++, С #, JAVA, PHP, опановують основи управління IT-проектами. Програма складена з урахуванням вимог Міжнародної асоціації з управління проектами (IPMA), SWEBOK, ISO 21500. Встановлено тісні зв'язки з спільнотою IT директорів України та окремими підприємствами. Навчання методам та засобам управління проектами поєднується з великим об'ємом практичної роботи, спрямованої на управління проектами, програми та портфелями.",
		},
	],
	[
		RU,
		{
			header: 'Бакалаврат',
			text:
				'Программа предназначена для тех, кто хочет освоить технологии создания систем обработки информации и управлять их разработкой и внедрением. В процессе обучения по программе бакалавров студенты осваивают необходимые математические дисциплины, языки программирования С ++, С #, JAVA, PHP, овладевают основами управления IT-проектами. Программа составлена с учетом требований Международной ассоциации по управлению проектами (IPMA), SWEBOK, ISO 21500. Установлены тесные связи с сообществом IT директоров Украины и отдельными предприятиями. Обучение методам и средствам управления проектами сочетается с большим объемом практической работы, направленной на управление проектами, программы и портфелями.',
		},
	],
	[
		ENG,
		{
			header: 'Bachelor’s',
			text:
				"The program is intended for those who want to master the technology of creating information processing systems and manage their development and implementation. In the process of studying under the bachelor's program, students master the necessary mathematical disciplines, the programming languages ​​C ++, C #, JAVA, PHP, master the basics of managing IT projects. The program has been compiled taking into account the requirements of the International Project Management Association (IPMA), SWEBOK, ISO 21500. Close ties have been established with the IT community of Ukrainian directors and individual enterprises. Training in project management methods and tools is combined with a large amount of practical work aimed at managing projects, programs and portfolios.",
		},
	],
]);

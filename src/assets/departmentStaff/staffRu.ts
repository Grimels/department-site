import { Staff } from 'components/StaffCard/StaffType';

import Kononenko from 'assets/departmentStaff/images/kononenko.jpg';
import Grinchenko from 'assets/departmentStaff/images/grinchenko.jpg';
import Lobach from 'assets/departmentStaff/images/lobach.jpg';
import Rogovoi from 'assets/departmentStaff/images/rogovoi.jpg';
import Bukreeva from 'assets/departmentStaff/images/bukreeva.jpg';
import Harazii from 'assets/departmentStaff/images/harazii.jpg';
import Scherbakova from 'assets/departmentStaff/images/scherbakova.jpg';
import Moshko from 'assets/departmentStaff/images/moshko.jpg';
import Lutsenko from 'assets/departmentStaff/images/lutsenko.jpg';

export const ruStaff: Staff[] = [
    {
        'name': 'КОНОНЕНКО Игорь Владимирович',
        'image': Kononenko,
        'information': [
            'Доктор технических наук, профессор, лауреат Государственной премии Украины в области науки и техники, заведующий кафедрой стратегического управления.',
            'Специалист в области стратегического управления, управления проектами, программами, портфелями.',
            'Автор 230 научных и 12 учебно-методических работ.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0002-1218-2791',
            'Scopus Author ID': [
                {
                    'id': '7004518939',
                    'link': 'http://www.scopus.com/inward/authorDetails.url?authorID=7004518939&partnerID=MN8TOARS'
                },
                {
                    'id': '57188536276',
                    'link': 'http://www.scopus.com/inward/authorDetails.url?authorID=57188536276&partnerID=MN8TOARS'
                }
            ],
            'ResearcherID': {
                'id': 'O-2252-2016',
                'link': 'http://www.researcherid.com/rid/O-2252-2016'
            },
            'googleAcademy': 'https://scholar.google.com.ua/citations?hl=uk&imq=Igor+Kononenko&user=J2AGBI4AAAAJ&cstart=0&pagesize=20'
        },
    },
    {
        'name': 'ГРИНЧЕНКО Марина Анатольевна',
        'image': Grinchenko,
        'information': [
            'Профессор кафедры стратегического управления, кандидат технических наук, доцент, заместитель заведующего кафедрой.',
            'Специалист в области долгосрочного прогнозирования развития социально-экономических систем и управления ИТ-проєктами.',
            'Автор 40 научных и 10 учебно-методических работ.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0002-8383-2675',
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=ltaubw4AAAAJ&hl=uk'
        },
        'disciplines': [
            'Алгоритмы и структуры данных',
            'Методологии управления проєктами в сфере информационных технологий',
            'Основы информационных систем управление проєктами',
            'Управление ИТ-проектами'
        ]
    },
    {
        'name': 'ЛОБАЧ Елена Владимировна',
        'image': Lobach,
        'information': [
            'Доцент кафедры стратегического управления, кандидат технических наук, доцент.',
            'Специалист в области планирования и управления проєктами.',
            'Автор 35 научных и 7 учебно-методических работ.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0001-7494-9997',
            'Scopus Author ID': [
                {
                    'id': '57203001952'
                }
            ],
            'googleAcademy': 'https://scholar.google.com.ua/citations?hl'
        },
        'disciplines': [
            'Методология и методы управления проектами',
            'Управление качеством в проектах',
            'Системный инжиниринг',
            'Экономика управления проектами'
        ]
    },
    {
        'name': 'РОГОВОЙ Антон Иванович',
        'image': Rogovoi,
        'information': [
            'Доцент кафедры стратегического управления, кандидат технических наук, доцент.',
            'Специалист в области прогнозирования развития машин и систем, маркетинга и управления проєктами.',
            'Автор более 30 научных и учебно-методических работ.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0002-8178-4585',
            'Scopus Author ID': [
                {
                    'id': '6507562534'
                }
            ]
        },
        'disciplines': [
            'Стратегическое управление и методы прогнозирования',
            'Интеллектуальный анализ данных',
            'Организация производства и маркетинг',
            'Современные WEB технологии',
            'Основы операционного менеджмента',
            'Исследование операций'
        ]
    },
    {
        'name': 'БУКРЕЕВА Карина Сергеевна',
        'image': Bukreeva,
        'information': [
            'Доцент кафедры стратегического управления, кандидат технических наук.',
            'Специалист в области управления проектами, портфелями проектов, бизнес-планирования.',
            'Автор 15 научных работ.'
        ]
    },
    {
        'name': 'ХАРАЗИЙ Анна Владимировна',
        'image': Harazii,
        'information': [
            'Кандидат технических наук, старший преподаватель.',
            'Специалист в области управления проектами, информационных систем в управлении проектами.',
            'Автор 16 научных работ.'
        ]
    },
    {
        'name': 'ЩЕРБАКОВА Татьяна Геннадиевна',
        'image': Scherbakova,
        'information': [
            'Ассистент кафедры стратегического управления, кандидат технических наук.',
            'Специалист в области управления проектами, реинжиниринга бизнес-процессов, эмоционального интеллекта.',
            'Количество научных публикаций: более 20, из них: 1 монография.'
        ],
        'contacts': {
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=C4EikqEAAAAJ&hl=uk'
        },
        'disciplines': [
            'Основы управления проєктами',
            'Основы реинжиниринга бизнес-процессов'
        ]
    },
    {
        'name': 'МОШКО Евгения Александровна',
        'image': Moshko,
        'information': [
            'Старший преподаватель, инженер I категории.',
            'Специалист в области теории вероятностей и математической статистики.',
            'Автор 2 научных работ.'
        ]
    },
    {
        'name': 'ЛУЦЕНКО Светлана Юрьевна',
        'image': Lutsenko,
        'information': [
            'Ассистент кафедры стратегического управления, аспирант.',
            'Магистр компьютерных наук и информационных технологий.',
            'Автор 7 научных работ.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0002-5072-9014',
            'Scopus Author ID': [
                {
                    'id': '57189391332'
                }
            ],
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=7MiEqmcAAAAJ&hl=uk'
        },
        'disciplines':
            [
                'Организация баз данных',
                'Проектирование баз данных',
                'Качество и тестирование программного обеспечения'
            ]
    }
];
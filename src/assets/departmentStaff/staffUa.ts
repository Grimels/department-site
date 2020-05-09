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

export const uaStaff: Staff[] = [
    {
        'name': 'КОНОНЕНКО Ігор Володимирович',
        'image': Kononenko,
        'information': [
            'Доктор технічних наук, професор, лауреат Державної премії України в галузі науки і техніки, завідувач кафедри стратегічного управління.',
            'Спеціаліст в галузі стратегічного управління, управління проєктами, програмами, портфелями.',
            'Автор 230 наукових та 12 навчально-методичних робіт.'
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
        'disciplines': []
    },
    {
        'name': 'ГРИНЧЕНКО Марина Анатоліївна',
        'image': Grinchenko,
        'information': [
            'Професор кафедри стратегічного управління, кандидат технічних наук, доцент, заступник завідувача кафедри.',
            'Спеціаліст в галузі довгострокового прогнозування розвитку соціально-економічних систем та управління ІТ-проєктами.',
            'Автор 40 наукових та 10 навчально-методичних робіт.'
        ],
        'contacts': {
            'orcidId': 'http://orcid.org/0000-0002-8383-2675',
            'Scopus Author ID': [
                {
                    'id': '57195064619'
                }
            ],
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=ltaubw4AAAAJ&hl=uk'
        },
        'disciplines': [
            'Алгоритми та структури даних',
            'Методології управління проєктами у сфері інформаційних технологій',
            'Основи інформаційних систем управління проєктами',
            'Управління ІТ- проєктами'
        ]
    },
    {
        'name': 'ЛОБАЧ Олена Володимирівна',
        'image': Lobach,
        'information': [
            'Доцент кафедри стратегічного управління, кандидат технічних наук, доцент.',
            'Спеціаліст в галузі планування та управління проєктами.',
            'Автор 35 наукових та 7 навчально-методичних робіт.'
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
            'Методологія і методи управління проєктами',
            'Управління якістю в проєктах',
            'Системний інженірінг',
            'Економіка управління проєктами'
        ]
    },
    {
        'name': 'РОГОВИЙ Антон Іванович',
        'image': Rogovoi,
        'information': [
            'Доцент кафедри стратегічного управління, кандидат технічних наук, доцент.',
            'Спеціаліст в галузі прогнозування розвитку машин і систем, маркетингу та управління проєктами.',
            'Автор більш 30 наукових та навчально-методичних робіт.'
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
            'Стратегічне управління і методи прогнозування',
            'Інтелектуальний аналіз даних',
            'Організація виробництва і маркетинг',
            'Сучасні WEB технології',
            'Основи операційного менеджменту',
            'Дослідження операцій'
        ]
    },
    {
        'name': 'БУКРЄЄВА Каріна Сергіївна',
        'image': Bukreeva,
        'information': [
            'Доцент кафедри стратегічного управління, кандидат технічних наук.',
            'Спеціаліст в галузі управління проєктами, портфелями проєктів, бізнес-планування.',
            'Автор 15 наукових робіт.'
        ]
    },
    {
        'name': 'ХАРАЗІЙ Анна Володимирівна',
        'image': Harazii,
        'information': [
            'Кандидат технічних наук, старший викладач.',
            'Спеціаліст в галузі управління проєктами, інформаційних систем в управлінні проєктами.',
            'Автор 16 наукових робіт.'
        ]
    },
    {
        'name': 'ЩЕРБАКОВА Тетяна Геннадіївна',
        'image': Scherbakova,
        'information': [
            'Асистент кафедри стратегічного управління, кандидат технічних наук.',
            'Спеціаліст в галузі управління проєктами, реінжинірингу бізнес-процесів, емоційного інтелекту.',
            'Кількість наукових публікацій: більше 20, з них: 1 монографія.'
        ],
        'contacts': {
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=C4EikqEAAAAJ&hl=uk'
        },
        'disciplines': [
            'Основи управління проєктами',
            'Основи реінжинірингу бізнес-процесів'
        ]
    },
    {
        'name': 'МОШКО Євгенія Олександрівна',
        'image': Moshko,
        'information': [
            'Старший викладач, інженер I категорії.',
            'Спеціаліст в галузі теорії ймовірностей та математичної статистики.',
            'Автор 2 наукових робіт.'
        ]
    },
    {
        'name': 'ЛУЦЕНКО Світлана Юріївна',
        'image': Lutsenko,
        'information': [
            'Асистент кафедри стратегічного управління, аспірант.',
            'Магістр комп’ютерних наук та інформаційних технологій.',
            'Автор 7 наукових робіт.'
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
                'Організація баз даних',
                'Проєктування баз даних',
                'Якість та тестування програмного забезпечення'
            ]
    }
];
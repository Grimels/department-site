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

export const engStaff: Staff[] = [
    {
        'name': 'Igor KONONENKO',
        'image': Kononenko,
        'information': [
            'Doctor of Technical Sciences, Professor, Laureate of the State prize of Ukraine in the field of Science and Technology, Head of the Strategic Management Department.',
            'Expert in the field of strategic management, project management, portfolio and programs management.',
            'Author of 230 scientific and 12 educational papers.'
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
        'name': 'Marina GRINCHENKO',
        'image': Grinchenko,
        'information': [
            'Professor of the Strategic Management Department, Associate Professor, Ph.D, Deputy Head of the Department.',
            'Expert in the field of long-term forecasting of socio-economic systems development and IT project management.',
            'Author of 40 scientific and 10 educational papers.'
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
            'Algorithms and Data Structures',
            'Project management methodologies in the field of information technology',
            'Fundamentals of Project Management Information Systems',
            'IT Project Management'
        ]
    },
    {
        'name': 'LOBACH Olena',
        'image': Lobach,
        'information': [
            'Associate Professor of the Department of Strategic Management, PhD (Engineering Sciences), Associate Professor.',
            'Specialist in project planning and management.',
            'Author of 35 scientific and 7 educational and methodical works.'
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
            'Project Management Methodology and Methods',
            'Project Quality Management',
            'System Engineering',
            'Project Management Economics'
        ]
    },
    {
        'name': 'Anton ROGOVYI',
        'image': Rogovoi,
        'information': [
            'Assistant professor of the Strategic Management Department, Assistant professor, Ph.D.',
            'Expert in the field of forecasting of machine and systems development, marketing and project management.',
            'Author of more than 30 scientific and educational papers.'
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
            'Strategic management and forecasting methods',
            'Data Mining',
            'Organization of production and marketing',
            'Modern WEB technologies',
            'Basics of Operations Management',
            'Operations research'
        ]
    },
    {
        'name': 'Karina BUKRIEIEVA',
        'image': Bukreeva,
        'information': [
            'Associate Professor of the Department of Strategic Management, PhD.',
            'Expert in the field of project management, portfolio management and business planning.',
            'Author of 15 scientific papers.'
        ]
    },
    {
        'name': 'Anna KHARAZII',
        'image': Harazii,
        'information': [
            'Teaching Assistant, Ph.D.',
            'Expert in the field of project management and information systems in project management.',
            'Author of 16 scientific papers.'
        ]
    },
    {
        'name': 'SHCHERBAKOVA Tatyana Gennadievna',
        'image': Scherbakova,
        'information': [
            'Assistant of the Department of Strategic Management, Ph.D.',
            'Specialist in project management, business process reengineering, emotional intelligence.',
            'The number of scientific publications is more than 20, of which: 1 monograph.'
        ],
        'contacts': {
            'googleAcademy': 'https://scholar.google.com.ua/citations?user=C4EikqEAAAAJ&hl=uk'
        },
        'disciplines': [
            'Fundamentals of project management',
            'Fundamentals of reengineering business processes'
        ]
    },
    {
        'name': 'Eugenia MOSHKO',
        'image': Moshko,
        'information': [
            'Teaching Assistant, Engineer of the first Category.',
            'Expert in the field of probability theory and mathematical statistics.',
            'Author of 2 scientific publications.'
        ]
    },
    {
        'name': 'Svitlana LUTSENKO\n',
        'image': Lutsenko,
        'information': [
            'Assistant of the Strategic Management Department, Ph.D. Student.',
            'Master of Computer Science and Information Technologies.',
            'Author of 7 scientific papers.'
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
                'Databases Organization',
                'Databases Designing',
                'Software Quality and Testing'
            ]
    }
];
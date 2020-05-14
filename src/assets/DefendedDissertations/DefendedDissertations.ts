import { ENG, RU, UA } from 'constants/language';

export interface IDefendedDissertation {
    name: {
        [UA]: string;
        [RU]: string;
        [ENG]?: string;
    };
    link: string;
    author: {
        [UA]: string;
        [RU]: string;
        [ENG]?: string;
    }
}

export const DefendedDissertationsList: IDefendedDissertation[] = [
    {
        name: {
            [UA]: 'Моделі і методи формування компонентного складу керівництва з управління проектом. Дис. канд. техн. наук: 05.13.22 – управління проектами та програмами. – Національний аерокосмічний університет ім. М.Є. Жуковського «Харківський авіаційний інститут» – Харків 2017.',
            [RU]: 'Модели и методы формирования компонентного состава руководства по управлению проектом. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Национальный аэрокосмический университет им. М.Е. Жуковского «Харьковский авиационный институт» — Харьков, 2017.',
            [ENG]: 'Models and methods of forming the component composition of project management guide. The thesis for the Candidate Degree of Technical Sciences, Specialty 05.13.22 – Project and Program Management. – National Aerospace University named after N. Ye. Zhukovsky “Kharkiv Aviation Institute”, 2017.',
        },
        link: 'https://drive.google.com/open?id=0BwHk8QAVHuwkN3VvMUp4Mk02TWduXzZLb0FtMWRYYXFkWkZr',
        author: {
            [UA]: 'Агаі Ахмад',
            [RU]: 'Агаи Ахмад',
            [ENG]: 'Agaee Ahmad',
        }
    },
    {
        name: {
            [UA]: 'Моделі і методи вибору методології управління проектом при різній інформованості команди. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.22 – управління проектами та програмами. – Харківський національний університет міського господарства ім. О.М.Бекетова, Харків, 2016.',
            [RU]: 'Модели и методы выбора методологии управления проектом при различной информированности команды. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Харьковский национальный университет городского хозяйства им. А.Н.Бекетова. — Харьков, 2016.',
            [ENG]: 'Models and methods of selection of project management methodologies with different team awareness. The thesis for the Candidate Degree of Technical Sciences, Specialty 05.13.22 – Project and Program Management. – O.M. Beketov Kharkiv National University of Urban Economy, Kharkiv, 2016.',
        },
        link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/Avtoreferat_Harazii-.pdf',
        author: {
            [UA]: 'Харазій А.В.',
            [RU]: 'Харазий А.В.',
            [ENG]: 'Kharazii A.V.',
        }
    },
    {
        name: {
            [UA]: 'Модель і метод оптимізації змісту проекту за критеріями прибуток, час, вартість, якість, ризики. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.22 – управління проектами та програмами. – Національний аерокосмічний університет ім. Н.Є. Жуковського «Харківський авіаційний інститут», Харків, 2014',
            [RU]: 'Модель и метод оптимизации содержания проекта по критериям прибыль, время, стоимость, качество, риски. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Национальный аэрокосмический университет им. Н.Е. Жуковского «Харьковский авиационный институт». — Харьков, 2014.',
            [ENG]: 'Model and method of project scope optimization on criteria profit, time, cost, quality, risk. Dissertation for Candidate of Technical Sciences degree by specialty 05.13.22 – Project and Program Management. – National Aerospace University “Kharkov Aviation Institute” named after M.E. Zhukovskyi, Kharkiv, 2014.',
        },
        link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/Avtoreferat_Kolisnik-M.E.pdf',
        author: {
            [UA]: 'Колісник М.Е.',
            [RU]: 'Колесник М.Э.',
            [ENG]: 'Kolisnyk M.E.',
        }
    },
    {
        name: {
            [UA]: 'Моделі і методи формування портфеля проектів підприємства для планового періоду. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.22 – управління проектами та програмами. – Національний аерокосмічний університет ім. Н.Є. Жуковського «Харківський авіаційний інститут», Харків, 2013',
            [RU]: 'Модели и методы формирования портфеля проектов предприятия для планового периода. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Национальный аэрокосмический университет им. Н.Е. Жуковского «Харьковский авиационный институт». — Харьков, 2013.',
            [ENG]: 'Models and methods for company project portfolio selection for the planning period. Dissertation for Candidate of Technical Sciences degree by speciality 05.13.22 ? Project and Program Management. ? National Aerospace University “Kharkov Aviation Institute” named after M. E. Zhukovskyi, Kharkiv, 2013.',
        },
        link: 'https://drive.google.com/open?id=0BwHk8QAVHuwkZC15Y3lIdFhRb01DT2RFelVQOGhlYTlJTGJ3',
        author: {
            [UA]: 'Букрєєва К.С.',
            [RU]: 'Букреева К.С.',
            [ENG]: 'Bukrieieva K.S.',
        }
    },
    {
        name: {
            [UA]: 'Моделі і методи управління змістом інвестиційних проектів з виробництва продукції. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.22 − управління проектами та програмами. − Національний аерокосмічний університет ім. М. Є. Жуковського «Харківський авіаційний інститут», Харків, 2012 р.',
            [RU]: 'Модели и методы управления содержанием инвестиционных проектов по производству продукции. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Национальный аэрокосмический университет им. Н.Е. Жуковского «Харьковский авиационный институт». — Харьков, 2012.',
            [ENG]: 'Models and methods of project scope management for investment projects in product manufacturing. . Thesis for a candidate of technical science degree by specialty 05.13.22 – project and program management. – National Aerospace University «Kharkiv aviation institute», Kharkіv, 2012.',
        },
        link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/Avtoreferat_Protasov.pdf',
        author: {
            [UA]: 'Протасов І.В.',
            [RU]: 'Протасов И.В.',
            [ENG]: 'Protasov I.V.',
        }
    },
    {
        name: {
            [UA]: 'Моделі та інформаційна технологія прогнозування процесів розвитку макроекономічних систем (на прикладі Харківської області). Дисертаційна робота на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.06 – інформаційні технології. – Національний технічний університет «Харківський політехнічний інститут», Харків. – 2012',
            [RU]: 'Модели и информационная технология прогнозирования процессов развития макроэкономических систем (на примере Харьковской области). Дис. канд. техн. наук: 05.13.06 — автоматизированные системы управления и прогрессивные информационные технологии. — Национальный технический университет «Харьковский политехнический институт». — Харьков, 2012.',
            [ENG]: 'Models and information technology of forecasting of the processes of the macroeconomic systems development (on the example of Kharkiv region). Thesis for a Candidate Degree in Technical Sciences, Specialty 05.13.06 – information technologies. – National Technical University «Kharkiv Polytechnic Institute», Kharkiv, – 2012.',
        },
        link: 'https://drive.google.com/open?id=1V7vsXGjJRnfaX1RobwnBnjPA2RVyM02Z',
        author: {
            [UA]: 'Гринченко М.А.',
            [RU]: 'Гринченко М.А.',
            [ENG]: 'Grinchenko M.A.',
        }
    },
    {
        name: {
            [UA]: 'Моделі та методи планування інноваційних проектів і програм з урахуванням альтернативних варіантів виконання робіт. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.22 − управління проектами та програмами. − Національний аерокосмічний університет ім. М.Є. Жуковського «Харківський авіаційний інститут», Харків, 2009 р.',
            [RU]: 'Модели и методы планирования инновационных проектов и программ с учетом альтернативных вариантов выполнения работ. Дис. канд. техн. наук: 05.13.22 — управление проектами и программами. — Национальный аэрокосмический университет им. Н.Е. Жуковского «Харьковский авиационный институт». — Харьков, 2009.',
        },
        link: 'https://drive.google.com/file/d/1tN8y1-yS1T1xzL7In-DiygN2z0LDEPem/view?usp=sharing',
        author: {
            [UA]: 'Ємельянова О.В.',
            [RU]: 'Емельянова Е.В.',
        }
    },
    {
        name: {
            [UA]: 'Моделі та інформаційна технологія формування стратегії розвитку підприємства (на прикладі цукробурякового виробництва). Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.06 – інформаційні технології. – Національний технічний університет “Харківський політехнічний інститут”. – Харків, 2008.',
            [RU]: 'Модели и информационная технология формирования стратегии развития предприятия (на примере свеклосахарного производства). Дис. канд. техн. наук: 05.13.06 — информационные технологии. — Национальный технический университет «Харьковский политехнический институт». — Харьков, 2008.',
            [ENG]: 'Shatokhina N.V. Models and informational technology for the enterprise development strategy (by the example of sugar-beet production).Thesis for competition of candidate of technical science by 05.13.06 speciality – informational technologies. – National Technical University “Kharkov Polytechnic Institute”, Kharkov, 2008.',
        },
        link: 'https://drive.google.com/open?id=10bQhcpm7WJW4Lv9rNvDU5C2KSukQRUtH',
        author: {
            [UA]: 'Шатохіна Н.В.',
            [RU]: 'Шатохина Н.В.',
            [ENG]: 'Shatokhina N.V.',
        }
    },
    {
        name: {
            [UA]: 'Моделі, методи та інформаційна технологія в управлінні розвитком виробництва сільськогосподарських тракторів. Дис. канд. техн. наук: 05.13.06 – автоматизовані системи управління та прогресивні інформаційні технології. – Харківський державний політехнічний університет. – Харків, 2001.',
            [RU]: 'Модели, методы и информационная технология в управлении развитием производства сельскохозяйственных тракторов. Дис. канд. техн. наук: 05.13.06 — автоматизированные системы управления и прогрессивные информационные технологии. — Харьковский государственный политехнический университет. — Харьков, 2001.',
            [ENG]: 'Models, methods and information technology in management of agricultural tractors production development. Dis. Cand. tech. Sciences: 05.13.06 – automated control systems and progressive information technologies. – Kharkov State Polytechnical University, Kharkiv, 2001.',
        },
        link: 'https://drive.google.com/open?id=19IezA_eptwsO-TJus0ZBViSf3-t0DjO6',
        author: {
            [UA]: 'Дерев’янченко Б.І.',
            [RU]: 'Деревянченко Б.И.',
            [ENG]: 'Derevyanchenko B.I.',
        }
    },
    {
        name: {
            [UA]: 'Автоматизація управління розвитком виробництва вантажних автомобілів. Дисертація на здобуття наукового ступеня кандидата технічних наук за спеціальністю 05.13.06 – автоматизовані системи управління та прогресивні інформаційні технології. – Харківський державний політехнічний університет, Харків, 2000.',
            [RU]: 'Автоматизация управления развитием производства грузовых автомобилей. Дис. канд. техн. наук: 05.13.06 — автоматизированные системы управления и прогрессивные информационные технологии. — Харьковский государственный политехнический университет. — Харьков, 2000.',
            [ENG]: 'Automatization of lorries production development management. Dissertation for scientific degree of candidate of technical sciences on specialty 05.13.06 – automated control systems and progressive information technologies. – Kharkiv State Politechnical University, Kharkiv, 2000.',
        },
        link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/Rogovii-A.I.-Avtomatizatsiya-upravlinnya-rozvitkom-virobnitstva-vantazhnih-avtomobiliv.pdf',
        author: {
            [UA]: 'Роговий А.І.',
            [RU]: 'Роговой А.И.',
            [ENG]: 'Rogoviy A.I.',
        }
    }
]
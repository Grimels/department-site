import { ENG, RU, UA } from 'constants/language';


export const HEADER = {
    [UA]: 'Реалізовані Проєкти',
    [RU]: 'Реализованные проекты',
    [ENG]: 'Completed Projects',
};

export const YEAR = {
    [UA]: 'Реалізований в',
    [RU]: 'Реализован в',
    [ENG]: 'Completed in',
};

export const TARGET = {
    [UA]: 'Ціллю було',
    [RU]: 'Целью было',
    [ENG]: 'The main goal was',
};

export const RESULT = {
    [UA]: 'Результати нашої роботи',
    [RU]: 'Результати нашей работи',
    [ENG]: 'The results of our work',
};

export const PROJECTS = [
    {
        image: 'https://fed.ua/wp-content/uploads/2019/04/FED_logo_color_1024x431.png',
        [UA]: {
            year: '2012',
            name: 'УПРАВЛІННЯ ПРОЕКТАМИ І ПРОГРАМАМИ РОЗВИТКУ ІНСТРУМЕНТАЛЬНОГО ВИРОБНИЦТВА (ПОЛІТИКА, СТРАТЕГІЯ, ПЛАНУВАННЯ)',
            target: 'підвищення ефективності управління проектами розвитку інструментального виробництва ДП ХМЗ «ФЕД»',
            results: [
                'Розроблені математичні моделі і методи однокритерійним і багатокритеріальної оптимізації змісту проектів за такими критеріями: прибуток, терміни, вартість, якість, ризики при наявності обмежень;',
                'Розроблена комп\'ютерна програма «PTCQR Optimization of Project Scope» для оптимізації змісту проекту за критеріями прибуток, терміни, вартість, якість, ризики з урахуванням обмежень;',
                'Розроблені моделі, методи і програмне забезпечення застосовані для вирішення задачі планування змісту проекту створення ділянки по нанесенню іонно-плазмового покриття для інструментального виробництва ДП ХМЗ «ФЕД».',
            ]
        },
        [RU]: {
            year: '2012',
            name: 'УПРАВЛЕНИЕ ПРОЕКТАМИ И ПРОГРАММАМИ РАЗВИТИЯ ИНСТРУМЕНТАЛЬНОГО ПРОИЗВОДСТВА (ПОЛИТИКА, СТРАТЕГИЯ, ПЛАНИРОВАНИЕ)',
            target: 'повышение эффективности управления проектами развития инструментального производства ГП ХМЗ «ФЭД»',
            results: [
                'разработаны математические модели и методы однокритериальной и многокритериальной оптимизации содержания проектов по следующим критериям: прибыль, сроки, стоимость, качество, риски при наличии ограничений;',
                'разработана компьютерная программа «PTCQR Optimization of Project Scope» для оптимизации содержания проекта по критериям прибыль, сроки, стоимость, качество, риски с учетом ограничений;',
                'разработанные модели, методы и программное обеспечение применены для решения задачи планирования содержания проекта создания участка по нанесению ионно-плазменного покрытия для инструментального производства ГП ХМЗ «ФЭД».',
            ]
        },
        [ENG]: {
            year: '2012',
            name: 'MANAGEMENT OF PROJECTS AND DEVELOPMENT PROGRAMS OF INSTRUMENTAL PRODUCTION (POLICY, STRATEGY, PLANNING)',
            target: 'improving the efficiency of project management development of tool production of GP KhMZ “FED”',
            results: [
                'developed mathematical models and methods for single-criterion and multicriteria optimization of the content of projects according to the following criteria: profit, timing, cost, quality, risks if there are restrictions;',
                'the computer program “PTCQR Optimization of Project Scope” was developed to optimize the project content according to the criteria of profit, time, cost, quality, risks, taking into account restrictions; ',
                'the developed models, methods and software were applied to solve the problem of planning the content of the project for creating a site for applying an ion-plasma coating for tool production of GP KhMZ “FED”.',
            ]
        },
    },
    {
        image: 'https://www.zhilstroj-2.ua/wp-content/uploads/2011/02/369.jpg',
        [UA]: {
            year: '2011/2012',
            name: 'ВДОСКОНАЛЕННЯ БІЗНЕС-ПРОЦЕСІВ, СТВОРЕННЯ ЗБАЛАНСОВАНОЇ СИСТЕМИ ПОКАЗНИКІВ І СИСТЕМИ МОТИВАЦІЇ ПРАЦІВНИКІВ БАЗИ ВКЦ АТ «ЖИТЛОБУД-2»',
            target: 'підвищення ефективності управління проектами розвитку інструментального виробництва ДП ХМЗ «ФЕД»',
            results: [
                'Розроблена ієрархічна модель бізнес-процесів бази ВКЦ «як є» та пропозиції щодо вдосконалення діючих бізнес-процесів;' ,
                'Розроблена і впроваджена нова схема бізнес-процесів бази ВКЦ «як треба» і розподіл відповідальності за ці бізнес-процеси;',
                'Розроблені положення про підрозділ бази ВКЦ і посадові інструкції співробітників даного підрозділу, відповідні затвердженої новою схемою бізнес-процесів;',
                'Розроблені нормативні значення показників збалансованої системи показників бази ВКЦ;',
                'Розроблена і випробувана система мотивації та стимулювання співробітників бази ВКЦ;',
                'Розроблена система розрахунку змінної частини заробітної плати співробітників бази ВКЦ.',
            ]
        },
        [RU]: {
            year: '2011/2012',
            name: 'СОВЕРШЕНСТВОВАНИЕ БИЗНЕС-ПРОЦЕССОВ, СОЗДАНИЕ СБАЛАНСИРОВАННОЙ СИСТЕМЫ ПОКАЗАТЕЛЕЙ И СИСТЕМЫ МОТИВАЦИИ СОТРУДНИКОВ БАЗЫ ПКЦ АО «ЖИЛСТРОЙ-2»',
            target: 'повышение эффективности работы компании и реализация стратегии развития АО «Жилстрой-2» путем разработки окончательной схемы бизнес-процессов базы ПКЦ предприятия и распределения ответственности за эти бизнес-процессы, разработки положения о подразделении и должностных инструкций сотрудников базы ПКЦ, внедрения сбалансированной системы показателей, а также системы мотивации и стимулирования сотрудников базы ПКЦ компании',
            results: [
                'разработана иерархическая модель бизнес-процессов базы ПКЦ «как есть» и предложения по совершенствованию действующих бизнес-процессов;',
                'разработана и внедрена новая схема бизнес-процессов базы ПКЦ «как надо» и распределение ответственности за эти бизнес-процессы;',
                'разработаны положение о подразделении базы ПКЦ и должностные инструкции сотрудников данного подразделения, соответствующие утвержденной новой схеме бизнес-процессов;',
                'разработаны нормативные значения показателей сбалансированной системы показателей базы ПКЦ;',
                'разработана и опробована система мотивации и стимулирования сотрудников базы ПКЦ;',
                'разработана система расчета переменной части заработной платы сотрудников базы ПКЦ.',
            ]
        },
        [ENG]: {
            year: '2011/2012',
            name: 'IMPROVEMENT OF BUSINESS PROCESSES, CREATION OF A BALANCED SYSTEM OF INDICATORS AND SYSTEM OF MOTIVATION OF EMPLOYEES OF THE BASIS OF THE BASIS OF THE PCC “ZHILSTROY-2” JSC',
            target: 'improving the efficiency of project management development of tool production of GP KhMZ “FED”',
            results: [
                'a hierarchical model of the business processes of the PAC base“ as is ”and proposals for improving existing business processes have been developed; ',
                'a new scheme of business processes of the PAC base “as needed” and the distribution of responsibility for these business processes were developed and implemented;',
                'a regulation has been developed on a subdivision of the PAC base and job descriptions for the employees of this subdivision corresponding to the approved new scheme of business processes;',
                'normative values ​​of indicators of a balanced scorecard of the PAC base have been developed;',
                'a system of motivation and incentives for the staff of the base of the MCC was developed and tested;',
                'a system has been developed for calculating the variable part of the salary of the staff of the base of the PAC.'
            ]
        },
    },
];

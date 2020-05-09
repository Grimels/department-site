import { ENG, Language, RU, UA } from 'constants/language';

export interface IMethodicalSupport {
    methodic: {
        name: string,
        link: string
    },
    year: string,
    author: string
}

export const MethodicalSupportListUa: IMethodicalSupport[] = [
    {
        methodic: {
            name: 'Навчальний посібник «Менеджмент якості в аспекті конкурентоспроможності об’єктів»',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/MENEDZHMENT-YAKOSTI.pdf'
        },
        author: 'Грінченко М. П., Лобач О.В., Гринченко М. А.',
        year: '2017',
    },
    {
        methodic: {
            name: 'Методичні вказівки по виконанню курсової роботи з дисципліни “Управління програмами і портфелями організацій” для студентів денної та заочної форми',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlinnya_proektami_ta_portfelyami_organizatsii.pdf'
        },
        author: 'Кононенко І.В., Лобач О.В.',
        year: '2015',
    },
    {
        methodic: {
            name: 'Методичні вказівки щодо виконання контрольної та самостійної роботи з дисципліни “Теорія інвестування” для студентів денної та заочної форми',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Teoriya-investirovaniya.pdf'
        },
        author: 'Єфременко Т.М., Грінченко М.П.',
        year: '2014',
    },
    {
        methodic: {
            name: 'Методичні вказівки до курсової роботи з дисципліни “Розробка проектів, планів і програм розвитку соціально-економічних об’єктів” для студентів денної та заочної форми навчання',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Rozrobka_proektiv_planiv_i_programkursovaya-kurs.pdf'
        },
        author: 'Кононенко І.В., Лобач О.В.',
        year: '2014',
    },
    {
        methodic: {
            name: 'Методичні вказівки до самостійної роботи до курсу “Основи інформаційно-керуючих систем управління проектами” для студентів денної та заочної форм навчання',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Osnovi_informatsionno-upravlyayushchih_sistem__upravleniya_proektami.pdf'
        },
        author: 'Чередніченко О.Ю., Гринченко М.А., Яковлева О.В.',
        year: '2013',
    },
    {
        methodic: {
            name: 'Методичні вказівки до розділу “Фінансове планування та аналізу ефективності інвестиційного проекту” з дисципліни “Економіка управління проектами” для студентів денної та заочної форм навчання',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Ekonomika_upravleniya_proektami.pdf'
        },
        author: 'Єфременко Т.М.',
        year: '2012',
    },
    {
        methodic: {
            name: 'Управління проектами з використанням Microsoft Project науково-методичний посібник',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlinnya_proektami_z_vikoristannyam_Microsoft_Project.pdf'
        },
        author: 'Гринченко М.А.',
        year: '2012',
    },
    {
        methodic: {
            name: 'Методичні вказівки до виконання контрольної роботи з дисципліни “Основи Мікро- та макро економіки” для студентів заочної форми навчання',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Osnovy-mikro-makro-ekonomiki.pdf'
        },
        author: 'Єфременко Т.М., Роговий А.І., Ємелянова О.В.',
        year: '2011',
    },
    {
        methodic: {
            name: 'Методичні вказівки до лабораторних робіт по курсу “Математичні методи дослідження операцій”',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Matematicheskie-metody-issledovaniya-operatsij.pdf'
        },
        author: 'Шатохіна Н.В.',
        year: '2010',
    },
    {
        methodic: {
            name: 'Методичні вказівки до лабораторних робіт і самостійної за курсом “Управління інформаційними проектами” і “Управління проектами розробки комп’ютерних технологій”',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlenie_informatsionnimi_proektami.pdf'
        },
        author: 'Шатохіна Н.В.',
        year: '2010',
    },
    {
        methodic: {
            name: 'Методичні вказівки по курсу “Організація виробництва та маркетинга”',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Organizatsiya_virobnitstva_i_marketing.pdf'
        },
        author: 'Роговий А.І.',
        year: '2010',
    },
    {
        methodic: {
            name: 'Методичні вказівки до лабораторних робіт і самостійної роботи з курсу “Управління інформаційними проектами” і “Управління проектами розробки інфомаційно комп’ютерних технологій”',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlenie_informatsionnimi_proektami.pdf'
        },
        author: 'Шатохіна Н.В.',
        year: '2010',
    }
]

export const MethodicalSupportListRu: IMethodicalSupport[] = [
    {
        methodic: {
            name: 'Навчальний посібник «Менеджмент якості в аспекті конкурентоспроможності об’єктів»',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2017/10/MENEDZHMENT-YAKOSTI.pdf'
        },
        author: 'Грінченко М. П., Лобач О.В., Гринченко М. А.',
        year: '2017',
    },
    {
        methodic: {
            name: 'Методические указания по выполнению курсовой работы по дисциплине «Управление программами и портфелями организаций» для студентов дневной и заочной формы',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlinnya_proektami_ta_portfelyami_organizatsii.pdf'
        },
        author: 'Кононенко И.В., Лобач Е.В.',
        year: '2015',
    },
    {
        methodic: {
            name: 'Методические указания по выполнению контрольной и самостоятельной работы по дисциплине «Теория инвестирования» для студентов дневной и заочной формы',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Teoriya-investirovaniya.pdf'
        },
        author: 'Ефременко Т.Н., Гринченко Н.П.',
        year: '2014',
    },
    {
        methodic: {
            name: 'Методические указания к курсовой работе по дисциплине «Разработка проектов, планов и программ развития социально-экономических объектов» для студентов дневной и заочной формы обучения',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Rozrobka_proektiv_planiv_i_programkursovaya-kurs.pdf'
        },
        author: 'Кононенко И.В., Лобач Е.В.',
        year: '2014',
    },
    {
        methodic: {
            name: 'Методические указания к самостоятельной работе к курсу «Основы информационно-управляющих систем управления проектами» для студентов дневной и заочной форм обучения',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Osnovi_informatsionno-upravlyayushchih_sistem__upravleniya_proektami.pdf'
        },
        author: 'Чередниченко О.Ю., Гринченко М.А., Яковлева О.В.',
        year: '2013',
    },
    {
        methodic: {
            name: 'Методические указания к разделу «Финансовое планирование и анализа эффективности инвестиционного проекта» по дисциплине «Экономика управления проектами» для студентов дневной и заочной форм обучения',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Ekonomika_upravleniya_proektami.pdf'
        },
        author: 'Ефременко Т.Н.',
        year: '2012',
    },
    {
        methodic: {
            name: 'Управление проектами с использованием Microsoft Project научно-методическое пособие',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlinnya_proektami_z_vikoristannyam_Microsoft_Project.pdf'
        },
        author: 'Гринченко М.А.',
        year: '2012',
    },
    {
        methodic: {
            name: 'Методические указания к выполнению контрольной работы по дисциплине «Основы Микро- и макро экономики» для студентов заочной формы обучения',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Osnovy-mikro-makro-ekonomiki.pdf'
        },
        author: 'Ефременко Т.Н., Роговой А.И., Емельянова Е.В.',
        year: '2011',
    },
    {
        methodic: {
            name: 'Методические указания к лабораторным работам по курсу «Математические методы исследования операций»',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Matematicheskie-metody-issledovaniya-operatsij.pdf'
        },
        author: 'Шатохина Н.В.',
        year: '2010',
    },
    {
        methodic: {
            name: 'Методические указания по курсу «Организация производства и маркетинг»',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Organizatsiya_virobnitstva_i_marketing.pdf'
        },
        author: 'Роговой А.И.',
        year: '2010',
    },
    {
        methodic: {
            name: 'Методичні вказівки до лабораторних робіт і самостійної роботи з курсу “Управління інформаційними проектами” і “Управління проектами розробки інфомаційно комп’ютерних технологій”',
            link: 'http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2016/03/Upravlenie_informatsionnimi_proektami.pdf'
        },
        author: 'Шатохіна Н.В.',
        year: '2010',
    }
]

export const MethodicalSupportList: { [key: string]: IMethodicalSupport[] } = {
    [UA]: MethodicalSupportListUa,
    [RU]: MethodicalSupportListRu,
    [ENG]: [],
}
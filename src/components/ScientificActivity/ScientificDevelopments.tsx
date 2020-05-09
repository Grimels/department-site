import React from 'react';
import { ENG, RU, UA } from 'constants/language';

import { useLanguage } from 'hooks/useLanguage';
import { Text } from 'styled/Text';
import { DefaultPage } from 'components/DefaultPage';

export const SCIENTIFIC_DEVELOPMENTS_HEADER = {
    [UA]: 'Інноваційні розробки кафедри',
    [RU]: 'Инновационные предложения кафедры',
    [ENG]: 'Scientific Developments\n',
};

const DEPLOYMENTS_UA = [
    {
        header: 'ІМІТАЦІЙНЕ МОДЕЛЮВАННЯ РОЗВИТКУ ПІДПРИЄМСТВ І ТЕРИТОРІЙ,' +
            'РОЗРОБКА ПОРТФЕЛІВ ПРОЕКТІВ ТА ОКРЕМИХ ПРОЕКТІВ,' +
            'ОПТИМІЗАЦІЯ ТИПАЖУ ПЕРСПЕКТИВНОЇ ПРОДУКЦІЇ',
        text: 'За останні роки вчені кафедри стратегічного управління НТУ «ХПІ» під керівництвом завідувача кафедри, професора, д.т.н. І.В. Кононенко розробили ряд моделей та методів підтримки прийняття рішень при управлінні розвитком територій та підприємств, а також виявили нову закономірність в економіці.\n' +
            'Найзначнішими з них є такі результати.',
    },
    {
        header: 'ІМІТАЦІЙНА МОДЕЛЬ НАУКОВО-ТЕХНОЛОГІЧНОГО РОЗВИТКУ ВИДІВ ЕКОНОМІЧНОЇ ДІЯЛЬНОСТІ УКРАЇНИ',
        texts: [
            'Ця модель була створена в рамках Державної програми прогнозування науково-технологічного розвитку України на 2008-2012 роки. Модель дозволяє моделювати 11 видів економічної діяльності України, об’єднаних в наступних галузях промисловості: електроенергетика, машинобудування; металургія; харчова промисловість.',
            'Ця імітаційна модель містить понад 2000 змінних і параметрів. Для будь-якого з модельованих видів економічної діяльності вона дозволяє отримувати середньострокові прогнози наступних параметрів: обсяг завершених НДР; обсяг завершених заходів в області розвитку; обсяг основних засобів; обсяг оборотних коштів; вартість нематеріальних активів; кількість співробітників, що беруть участь у виробництві; рівень браку персоналу у виробництві, чистий прибуток та багато інших.',
            'На основі експериментів з імітаційною моделлю були розроблені прогнози до 2017 і зроблені пропозиції щодо розвитку науково-технічного та кадрового забезпечення 11-ти видів економічної діяльності, щодо поліпшення інноваційної стратегії України. Різні сценарії розвитку цих видів економічної діяльності були розроблені та змодельовані. Були отримані прогнози ключових показників ефективності функціонування цих видів економічної діяльності України.',

        ],
    },
    {
        header: 'ЗАКОНОМІРНІСТЬ ВПЛИВУ ЗМІН ПРИРОСТУ ВВП КРАЇНИ НА ОБСЯГ КАПІТАЛЬНИХ ІНВЕСТИЦІЙ В ЇЇ ЕКОНОМІКУ',
        texts: [
            'Ця нова закономірність у світовій економіці була виявлена для залежностей між припливом інвестицій в економіку країни та зміною приросту ВВП за той же або за попередній рік.',
            'Закономірність була досліджена на основі економічних процесів в 32-х країнах Європи, а також в Японії, Канаді, Австралії та США. Країни були розділені на групи відповідно до класифікації Всесвітнього банку на основі ВВП на душу населення.',
            'У групі країн з високим рівнем валового національного доходу на душу населення (HI) були проаналізовані дані наступних країн: Австралія, Австрія, Бельгія, Канада, Кіпр, Данія, Фінляндія, Франція, Німеччина, Греція, Ісландія, Ірландія, Італія, Японія, Нідерланди, Норвегія, Португалія, Словенія, Іспанія, Швеція, Швейцарія, Сполучене Королівство та США (23 країни).',
            'У групі країн з рівнем валового національного доходу на душу населення вище середнього (UMI) були проаналізовані дані країн:',
            'Угорщина, Латвія, Литва, Польща, Російська Федерація, Румунія, Словаччина, Туреччина, Хорватія, Чеська Республіка, Естонія (11 країн)',
            'У групі країн з рівнем валового національного доходу на душу населення нижче середнього (LMI) були проаналізовані дані Болгарії та України.',
            'Сутність закономірності полягає в наступному.',
            'По-перше, це зростання інвестицій в економіку країни при прирості ВВП понад певного порогового значення, різного для кожної країни. Причому зростання інвестицій спостерігається і при збільшенні, і при зниженні приросту ВВП, якщо зміни приросту ВВП відбуваються в надпороговой зоні.',
            'По-друге, спостерігається зниження або стабілізація обсягів інвестицій в економіку при падінні приросту ВВП, якщо зменшення приросту ВВП відбувається в області нижче порогового значення.',
            'По-третє, спостерігається зростання обсягів інвестицій або їх стабілізація при збільшенні приросту ВВП, якщо таке збільшення відбувається в області підпорогових значень.',
            'По-четверте, якщо збільшення приросту ВВП відбувається в області негативних значень приросту, то цей процес супроводжується зниженням обсягів інвестицій в економіку, в рідкісних випадках — стабілізацією.',
            'По-п’яте, при збільшенні приросту ВВП в підпороговій зоні після періоду падіння приросту ВВП може спостерігатися зниження обсягів інвестицій.',
            'Слід зазначити, що виявлена закономірність може незначно порушуватися під впливом потужних факторів іншої природи, наприклад, з політичних міркувань в економіку країни можуть бути зроблені інвестиції навіть на етапі зменшення приросту ВВП в підпороговій зоні.',
        ],
    },
    {
        header: 'МЕТОД ОПТИМІЗАЦІЇ ПОРТФЕЛЯ ПРОЕКТІВ ПІДПРИЄМСТВА ДЛЯ ПЛАНОВОГО ПЕРІОДУ',
        texts: [
            'Розроблено метод оптимізації портфеля проектів підприємства для планового період.',
            'Метод враховує критерії, які характеризують досвід компанії в управлінні проектами, цілі компанії, а також проекти, з яких буде формуватися портфель проектів. Проекти оцінюються не тільки з точки зору їх здійсненності в умовах даної компанії, а й враховуються результати, які будуть отримані від реалізації проектів.',
            'Наявність фінансових ресурсів у компанії та відповідність результатів проектів цілям компанії з точки зору отримання прибутку та реалізації продукції розглядаються як обмеження при формуванні портфеля. Крім того враховується можливість компанії здійснити проект за допомогою наявних ресурсів (в тому числі, виробничих потужностей).',
            'Розроблені модель і метод дозволяють вибрати оптимальні варіанти портфелів проектів для кожного року заданого періоду діяльності підприємства.',
            'Вихідні дані для задачі оптимізації портфеля проектів підприємства часто є нечіткими. Запропоновано метод оптимізації портфеля проектів, який дозволяє задати критерії та обмеження нечітко.',
        ],
    },
    {
        header: 'МЕТОД ОПТИМІЗАЦІЇ ЗМІСТУ ПРОЕКТУ ЗА КРИТЕРІЯМИ ПРИБУТОК, ЧАС, ВАРТІСТЬ, ЯКІСТЬ, РИЗИКИ',
        texts: [
            'Озроблено математичні моделі та методи оптимізації змісту проекту за критеріями: прибуток, час, вартість, якість, ризики з урахуванням обмежень на наявність фінансових заборгованостей після виконання робіт на окремих етапах, за часом проекту та якості його продуктів. Методи дозволяють вирішувати завдання при чітких і нечітких вихідних даних.',
            'Запропоновані моделі та методи дозволяють вирішувати завдання планування змісту проектів в умовах, коли за допомогою мережевих моделей задані альтернативні варіанти виконання робіт та їх комплексів. Створена на основі розроблених методів комп’ютерна програма «PTCQR Project Scope Optimization» може бути застосована для вибору змісту проектів на підприємствах та в організаціях усіх галузей економіки.',
        ],
    },
    {
        header: 'МОДЕЛІ ТА МЕТОДИ ОПТИМІЗАЦІЇ ТИПАЖУ ПРОДУКЦІЇ',
        text: 'Розроблено математичні моделі та методи оптимізації типажу перспективної продукції. Моделі та методи призначені для вирішення завдань з точки зору економіки країни або окремої компанії, що працює на ринку. Запропоновані моделі та методи дозволяють вирішувати задачу оптимізації типажу продукції для деякого планового періоду на основі прогнозів попиту на продукцію. На основі розроблених моделей і методів створені комп’ютерні програми. Результати роботи застосовані для оптимізації типажу продукції на ряді підприємств України, Польщі, Канади, зокрема для оптимізації типажу верстатів, побутових електричних приладів, комп’ютерів.',
    },
];

const DEPLOYMENTS_RU = [
    {
        header: 'ИМИТАЦИОННОЕ МОДЕЛИРОВАНИЕ РАЗВИТИЯ ПРЕДПРИЯТИЙ И ТЕРРИТОРИЙ , РАЗРАБОТКА ПОРТФЕЛЕЙ ПРОЕКТОВ И ОТДЕЛЬНЫХ ПРОЕКТОВ',
        text: 'За последние годы в этой области исследований наша команда ученых разработала ряд моделей и методов для оптимизации управления развитием территорий и предприятий, а также обнаружила новую закономерность в экономике. Наиболее значимыми из них являются следующие результаты.',
    },
    {
        header: 'ИМИТАЦИОННАЯ МОДЕЛЬ НАУЧНО-ТЕХНОЛОГИЧЕСКОГО РАЗВИТИЯ ВИДОВ ЭКОНОМИЧЕСКОЙ ДЕЯТЕЛЬНОСТИ УКРАИНЫ',
        texts: [
            'Эта модель была создана в рамках Государственной программы прогнозирования научно- технологического развития Украины на 2008-2012 годы . Модель позволяет моделировать 11 видов экономической деятельности Украины, объединенных в следующих отраслях промышленности: электроэнергетика; машиностроение; металлургия; пищевая промышленность.',
            'Это имитационная модель содержит более 2000 переменных и параметров. Для любого из моделируемых видов экономической деятельности она позволяет получать среднесрочные прогнозы следующих параметров: объем завершенных НИР; объем завершенных мероприятий в области развития; объем основных средств; объем оборотных средств; стоимость нематериальных активов; количество сотрудников, участвующих в производстве; уровень нехватки персонала в производстве, чистая прибыль и многие другие.',
            'На основе экспериментов с имитационной моделью были разработаны прогнозы до 2017 и сделаны предложения по развитию научно-технического и кадрового обеспечения 11-ти видов экономической деятельности, по улучшению инновационной стратегии Украины. Различные сценарии развития этих видов экономической деятельности были разработаны и смоделированы. Были получены прогнозы ключевых показателей эффективности функционирования этих видов экономической деятельности Украины.',
        ],
    },
    {
        header: 'ЗАКОНОМЕРНОСТЬ ВЛИЯНИЯ ИЗМЕНЕНИЙ ПРИРОСТА ВВП СТРАНЫ НА ОБЪЕМ КАПИТАЛЬНЫХ ИНВЕСТИЦИЙ В ЕЕ ЭКОНОМИКУ',
        texts: [
            'Эта новая закономерность в мировой экономике была обнаружена для зависимостей между притоком инвестиций в экономику страны и изменением прироста ВВП за тот же или за предыдущий год.',
            'Закономерность была исследована на основе экономических процессов в 32-х странах Европы, а также в Японии, Канаде, Австралии и США. Страны были разделены на группы в соответствии с классификацией Всемирного банка на основе ВВП на душу населения.',
            'В группе стран с высоким уровнем валового национального дохода на душу населения (HI) были проанализированы данные следующих стран: Австралия, Австрия, Бельгия, Канада, Кипр, Дания, Финляндия, Франция, Германия, Греция, Исландия, Ирландия, Италия, Япония, Нидерланды, Норвегия, Португалия, Словения, Испания, Швеция, Швейцария, Соединенное Королевство и США (23 страны) .',
            'В группе стран с уровнем валового национального дохода на душу населения выше среднего (UMI) были проанализированы данные стран:',
            'Венгрия, Латвия, Литва, Польша, Российская Федерация, Румыния, Словакия , Турция, Хорватия, Чешская Республика, Эстония (11 стран)',
            'В группе стран с уровнем валового национального дохода на душу населения ниже среднего (LMI) были проанализированы данные Болгарии и Украины.',
            'Суть закономерности заключается в следующем.',
            'Во-первых, это рост инвестиций в экономику страны при приросте ВВП свыше определенного порогового значения, различного для каждой страны. Причем рост инвестиций наблюдается и при увеличении и при снижении прироста ВВП, если изменения прироста ВВП происходят в надпороговой зоне.',
            'Во-вторых, наблюдается снижение или стабилизация объемов инвестиций в экономику при падении прироста ВВП, если уменьшение прироста ВВП происходит в области ниже порогового значения.',
            'В-третьих, наблюдается рост объемов инвестиций или их стабилизация при увеличении прироста ВВП, если такое увеличение происходит в области подпороговых значений.',
            'В-четвертых, если увеличение прироста ВВП происходит в области отрицательных значений прироста, то этот процесс сопровождается снижением объемов инвестиций в экономику, в редких случаях — стабилизацией.',
            'В-пятых, при увеличении прироста ВВП в подпороговой зоне после периода падения прироста ВВП может наблюдаться снижение объемов инвестиций.',
            'Следует отметить, что выявленная закономерность может незначительно нарушаться под воздействием мощных факторов иной природы, например, по политическим соображениям в экономику страны могут быть сделаны инвестиции даже на этапе уменьшения прироста ВВП в подпороговой зоне.',
        ],
    },
    {
        header: 'МЕТОД ОПТИМИЗАЦИИ ПОРТФЕЛЯ ПРОЕКТОВ ПРЕДПРИЯТИЯ ДЛЯ ПЛАНОВОГО ПЕРИОДА',
        texts: [
            'Разработан метод оптимизации портфеля проектов предприятия для планового периода.',
            'Метод учитывает критерии, которые характеризуют опыт компании в управлении проектами, цели компании, а также проекты, из которых будет формироваться портфель проектов. Проекты оцениваются не только с точки зрения их выполнимости в условиях данной компании, но и учитываются результаты, которые будут получены от реализации проектов.',
            'Наличие финансовых ресурсов в компании и соответствие результатов проектов целям компании с точки зрения получения прибыли и реализации продукции рассматриваются как ограничения при формировании портфеля. Кроме того учитывается возможность компании осуществить проект с помощью имеющихся ресурсов (в том числе, производственных мощностей).',
            'Разработанные модель и метод позволяют выбрать оптимальные варианты портфелей проектов для каждого года заданного периода деятельности предприятия.',
            'Исходные данные для задачи оптимизации портфеля проектов предприятия часто являются нечеткими. Предложен метод оптимизации портфеля проектов, который позволяет задать критерии и ограничения нечетко.',
            'Для решения перечисленных задач разработано программное обеспечение «Portfolio Optimization».'
        ],
    },
    {
        header: 'МЕТОД ОПТИМИЗАЦИИ СОДЕРЖАНИЯ ПРОЕКТА ПО КРИТЕРИЯМ ПРИБЫЛЬ, ВРЕМЯ, СТОИМОСТЬ, КАЧЕСТВО, РИСКИ',
        texts: [
            'Разработаны математические модели и методы оптимизации содержания проекта по критериям: прибыль, время, стоимость, качество, риски с учетом ограничений по стоимости, времени проекта и качеству его продуктов. Методы позволяют решать задачи при четких и нечетких исходных данных.',
            'Предложенные модели и методы позволяют решать задачи планирования содержания проектов в условиях, когда с помощью сетевых моделей заданы альтернативные варианты выполнения работ и их комплексов. Созданая на основе разработанных методов компьютерная программа «PTCQR Project Scope Optimization» может быть применена для выбора содержания проектов на предприятиях и в организациях всех отраслей экономики.',
        ],
    },
    {
        header: 'МОДЕЛИ И МЕТОДЫ ОПТИМИЗАЦИИ ТИПАЖА ПРОДУКЦИИ',
        text: 'Разработаны математические модели и методы оптимизации типажа перспективной продукции. Модели и методы предназначены для решения задач с точки зрения экономики страны или отдельной компании, работающей на рынке. Предложенные модели и методы позволяют решать задачу оптимизации типажа продукции для некоторого планового периода на основе прогнозов спроса на продукцию. На основе разработанных моделей и методов созданы компьютерные программы. Результаты работы применены для оптимизации типажа продукции на ряде предприятий Украины, Польши, Канады, в частности для оптимизации типажа станков, бытовых электрических приборов, компьютеров.',
    },
];

const DEPLOYMENTS_ENG = [
    {
        header: 'MODELING OF TERRITORIAL AND ENTERPRISE DEVELOPMENT',
        text: 'Over recent years, our team of scientists has developed a number of models and methods for optimization of complex systems development management, as well as has opened a new dependency in the economy. The following developments are the most significant of them.',
    },
    {
        header: 'Simulation model of scientific and technological development of economic activity types of Ukraine',
        texts: [
            'This model was created within the State program of forecasting scientific and technological development of Ukraine for 2008-2012. The model allows simulating 11 types of economic activity of Ukraine, united in the following branches of industry: Power industry; Mechanical engineering; Metallurgy; Food industry.',
            'This simulation model contains over 2000 variables and parameters and provides a medium-term change forecast of the following parameters for any of the simulated economic activity: the volume of completed research engineering; the volume of completed development activities; the amount of fixed assets; the amount of working capital; the amount of intangible assets; the number of staff involved in production; the level of the staff shortage in production; net profit, and many others.',
            'On the basis of experiments with the simulation model forecasting and analytical research up to 2017 were carried out and proposals concerning the development of scientific, technological and staff support of 11 economic activity types of Ukraine and innovative strategy improvement were formulated. Different development scenarios of these economic activity types were designed and simulated and key performance indicators forecasts of their functioning were obtained.',
        ],
    },
    {
        header: 'Regularity of GDP growth rate change influence on fixed capital investments into the country’s economy',
        texts: [
            'This new tendency in the global economy has been established for dependencies between investment inflows into a country’s economy and GDP growth rate indicator as for the same year, so as for a one-year delay of the investment volume.',
            'The essence of the regularity is as following. First, when GDP growth rate is bigger, than certain threshold value, investments into a country’s economy increase. Moreover, the investment inflows increase regardless of the direction of GDP growth rate change as long as this rate remains above the threshold level. Secondly, the decline or stabilization of investment inflows can be expected if GDP growth rate decreases within the sub-threshold zone.',
            'The third scenario occurs when GDP growth rate increases within the sub-threshold zone subsequently entailing the growth or stabilization of investment inflows. If GDP growth rate increase occurs in the area of negative growth rate values, then this process can be followed by the investment inflows decrease. With the increase of GDP growth rate in the area of minor positive growth rate values (within the sub-threshold zone) the decrease of investment inflows can be also observed.',
            'The regularity has been established for dependencies between investment inflows into a country’s economy and GDP growth rate indicator as for the same year, so as for a one year delay of the investment volume.',
            'The regularity was investigated on economic processes in 32 countries of Europe, and also in Australia, Canada, Japan, and the USA. These countries were divided into groups according to the World Bank classification based on GNI per capita.',
            'We explored the dependencies in such countries of Europe: Austria, Belgium, Bulgaria, Czech Republic, Croatia, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Netherlands, Norway, Poland, Portugal, Romania, Russian Federation, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, and United Kingdom.',
        ],
    },
    {
        header: 'Simulation technique of the state-level projects introduction impact on Ukrainian industry',
        texts: [
            'This technique allows simulating the impact of the introduction of the newest technologies in the thematic direction „Energy and Energy Efficiency” on the state of Ukrainian industry.',
            'It makes it possible to predict the following impact indicators of the introduction of new technologies in the power industry and other affected industries: real output of innovative products; amount of production costs reduction due to the introduction of the newest technology; amount of the net profit increase for economic activity types affected by the implementation of the newest technology; economic efficiency of the implementation of the state project, and others.',
            'This technique is implemented as a separate unit in the previously mentioned simulation model.',
        ],
    },
    {
        header: 'МSTRATEGIC MANAGEMENT OF PROJECTS, PROGRAMS AND PORTFOLIOS OF BUSINESS AND TERRITORY DEVELOPMENT. Project portfolio selection methods',
        texts: [
            'A project portfolio selection method has been suggested, which is focused to systemic accounting for factors affecting the efficiency of a set of projects. In solving the task, the focus was on studying the impact of the human factor and the subjective component. The key point of the method is acquisition and assessment of information on the market, the organisation’s strategy, the projects, the organisation’s potential to implement the projects, and the influence of stakeholders. The set of projects selected for the portfolio is validated for admissibility in regard to the profit gained, income, financial feasibility, and the company’s resource load. A model for optimising the project portfolio with algorithmic constraints has been suggested. The method can be applied for large and medium businesses.',
            'In further research the fuzzy model and method of optimization of enterprise project portfolio for the planning period are developed. A process model of portfolio management of a company for the planning period is proposed . On the basis of this method a computer program „Portfolio optimization” is developed.',
            'Developed methods and software are used in selection of the portfolio of projects of modernization of engineering production and the selection of the portfolio of projects in the energy field.',
        ],
    },
    {
        header: 'Mathematical models and methods of the project scope optimization with precise and fuzzy input data',
        texts: [
            'A mathematical model and method of the project scope optimization has been suggested, which has fuzzy input data and includes five objective functions. One of the functions reflects the profit for the entire project product life cycle. The other reflects the time of its realization. The third is the cost of the project. The fourth is the value of the generalized indicator of project product quality and the fifth is a risk assessment associated with the project. The model and method takes into account the restrictions on the lack of financial debt after each phase completion, the duration of the project, the quality of the separate stages products.',
            'In solving the task a mathematical model and method of the project scope optimization has been suggested with precise input data and fuzzy input data.',
            'On the basis of this method a computer program „PTCQR Optimization of Project Scope” is developed.',
        ]
    },
];

const DEPLOYMENTS = {
    [UA]: DEPLOYMENTS_UA,
    [RU]: DEPLOYMENTS_RU,
    [ENG]: DEPLOYMENTS_ENG,
};

export const ScientificDevelopments: React.FC = () => {
    const { language } = useLanguage();
    const renderProps = () => ({
        simpleHeader: true,
        children: {
            header: SCIENTIFIC_DEVELOPMENTS_HEADER[language],
            renderElement: () => <>{DEPLOYMENTS[language].map((deployment: { header: string, text?: string, texts?: string[] }) =>
                <Text className='text'>
                    <h4>{deployment.header}</h4>
                    <br />
                    {(deployment.text && (
                    <Text className='text'>{deployment.text}</Text>
                    )) || (deployment.texts && (
                    <>
                        {deployment.texts.map(text => <Text className='text'>{text}</Text>)}
                    </>
                    )) || <div />}
                    <br />
                </Text>
            )}</>,
        },
    });

    return <DefaultPage {...renderProps()} />;
};
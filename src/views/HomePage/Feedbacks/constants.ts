import AnnaKishkinovaImg from 'styles/assets/images/AnnaKishkinova.jpg';
import VistoriyaSavelevaImg from 'styles/assets/images/VistoriyaSaveleva.jpg';
import YaroslavaKramarenkoImg from 'styles/assets/images/YaroslavaKramarenko.jpg';

import { UA, ENG, RU } from 'constants/languages';
import { LanguageMap } from 'stores/Language';

export interface Feedback {
  author: LanguageMap<string>;
  text: LanguageMap<string>;
  img: string;
}

export const FEEDBACKS: Feedback[] = [
  {
    author: {
      [UA]: 'Анна Кiшкiнова',
      [RU]: 'Анна Кишкинова',
      [ENG]: 'Anna Kishkinova',
    },
    text: {
      [UA]: `Через 3 роки після закінчення інституту я з теплотою згадую студентські роки і викладачів кафедри. Ці люди не тільки професіонали своєї справи, а й власники безцінного досвіду, яким завжди готові поділитися зі своїми студентами. Тим, хто хоче вивчати комп’ютерні науки спільно з управлінням проектами, я можу порадити тільки цю кафедру`,
      [RU]: `Через 3 года после окончания института я с теплотой вспоминаю студенческие годы и преподавателей кафедры. Эти люди не только профессионалы своего дела, но и владельцы бесценный опыт, которым всегда готовы поделиться со своими студентами. Тем, кто хочет изучать компьютерные науки совместно с управлением проектами, я могу посоветовать только эту кафедру`,
      [ENG]: `3 years after graduation, I warmly remember the student years and the teachers of the department. These people are not only professionals, but also owners of the invaluable experience they are always ready to share with their students. For those who want to study computer science in conjunction with project management, I can only advise this department`,
    },
    img: AnnaKishkinovaImg,
  },
  {
    author: {
      [UA]: 'Вікторія Савельєва (Мироненко)',
      [RU]: 'Виктория Савельева (Мироненко)',
      [ENG]: 'Victoria Savelyeva (Mironenko)',
    },
    text: {
      [UA]: `Кафедра стратегічного управління готує справжніх лідерів. Отримані під час навчання знання застосовні в різних галузях і проектах. В процесі роботи над дипломною роботою створюється бізнес-план і моделюється процес його реалізації, даний досвід дозволяє відчути всі етапи відкриття власного бізнесу. Викладачі кафедри зацікавлені в тому, щоб поділитися своїми знаннями і готові прийти на допомогу в будь-якій ситуації.`,
      [RU]: `Кафедра стратегического управления готовит настоящих лидеров. Полученные в ходе обучения знания применимы в различных отраслях и проектах. В процессе работы над дипломной работой создается бизнес-план и моделируется процесс его реализации, данный опыт позволяет почувствовать все этапы открытие собственного бизнеса. Преподаватели кафедры заинтересованы в том, чтобы поделиться своими знаниями и готовы прийти на помощь в любой ситуации.`,
      [ENG]: `The Department of Strategic Management prepares real leaders. The knowledge gained during training is applicable in various fields and projects. In the course of work on the diploma work is created business plan and simulated process of its implementation, this experience allows you to feel all the steps starting your own business. Teachers of the department are interested in sharing theirs knowledgeable and ready to come to the rescue in any situation.`,
    },
    img: VistoriyaSavelevaImg,
  },
  {
    author: {
      [UA]: `Ярослава Крамаренко`,
      [RU]: `Ярослава Крамаренко`,
      [ENG]: `Yaroslava Kramarenko`,
    },
    text: {
      [UA]: `Хочеться подякувати всім викладачам кафедри стратегічного управління за насичені та корисні 2 роки магістратури. Я отримала можливість вивчити останні тенденції в сфері управління проектами, а найголовніше – отримати практичні поради та рекомендації від викладачів кафедри, які застосовують свої знання на практиці`,
      [RU]: `Хочется поблагодарить всех преподавателей кафедры стратегического управления насыщенных и полезные 2 года магистратуры. Я получила возможность изучить последние тенденции в области управления проектами, а главное - получить практические советы и рекомендации от преподавателей кафедры, применяют свои знания на практици`,
      [ENG]: `I want to thank all the teachers of the Department of Strategic Management for a rich and useful 2 years of magistracy. I got the opportunity to study the latter project management trends, and most importantly get practical advice and recommendations from the teachers of the department who apply their knowledge in practice`,
    },
    img: YaroslavaKramarenkoImg,
  },
];

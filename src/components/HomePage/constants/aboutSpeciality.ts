import { Language, UA, RU, ENG } from 'constants/language';

export interface IAboutSpecialityTextData {
	name: string;
	text: string;
	title: string;
	button: string;
}

const UA_SECTION_NAME = 'про спеціальність';
const RU_SECTION_NAME = 'о специальности';
const ENG_SECTION_NAME = 'about specialty';

const UA_IMAGE_TITLE = 'про спеціальність';
const RU_IMAGE_TITLE = 'о специальности';
const ENG_IMAGE_TITLE = 'about specialty';

const UA_SECTION_TEXT =
	"Існують професії, вік яких порівняємо з періодом існування людства на нашій планеті. Саме до такими професіями відноситься Управління проектами. Якщо зробити екскурс в історію, то ми побачимо приклади грандіаозних проектів, які вдалося здійснити людству. Сім чудес світу, створені в древні століття, пам'ятники епохи Відродження, багато інших досягнень служать хорошою ілюстрацією успішної діяльності тих, хто керував даними проет сотні і тисячі років тому.";
const RU_SECTION_TEXT =
	'Существуют профессии, возраст которых соизмерим с периодом существования человечества на нашей планете. Именно к такими профессиям относится Управление проектами. Если совершить экскурс в историю, то мы увидим примеры грандиаозных проектов, которые удалось осуществить человечеству. Семь чудес света, созданные в древние века, памятники эпохи Возрождения, многие другие достижения служат хорошей иллюстрацией успешной деятельности тех, кто управлял данными проетами сотни и тысячи лет назад.';
const ENG_SECTION_TEXT =
	'There are professions whose age is commensurate with the period of the existence of humanity on our planet. These professions are Project Management. If you take an excursion into history, then we will see examples of grandiose projects that mankind has been able to implement. Seven wonders of the world created in ancient centuries, monuments of the Renaissance, many other achievements serve as a good illustration of the successful activities of those who managed these projects hundreds and thousands of years ago.';

const UA_BUTTON = 'Дізнатись більше';
const RU_BUTTON = 'Узнать больше';
const ENG_BUTTON = 'More';

export const aboutSpecialityTextDataMap: Map<Language, IAboutSpecialityTextData> = new Map([
	[UA, { name: UA_SECTION_NAME, text: UA_SECTION_TEXT, title: UA_IMAGE_TITLE, button: UA_BUTTON }],
	[RU, { name: RU_SECTION_NAME, text: RU_SECTION_TEXT, title: RU_IMAGE_TITLE, button: RU_BUTTON }],
	[
		ENG,
		{ name: ENG_SECTION_NAME, text: ENG_SECTION_TEXT, title: ENG_IMAGE_TITLE, button: ENG_BUTTON },
	],
]);

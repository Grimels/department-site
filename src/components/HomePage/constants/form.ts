import { ISubscribeFormValues } from 'components/HomePage/Form';
import { UA, RU, ENG, Language } from 'constants/language';

export const headerTextByLanguageMap: Map<Language, String> = new Map([
	[UA, 'ЯК Вступити?'],
	[RU, 'КАК ПОСТУПИТЬ?'],
	[ENG, 'HOW TO ENTER?'],
]);

export const subHeaderTextByLanguageMap: Map<Language, String> = new Map([
	[UA, 'Правила прийому'],
	[RU, 'Правила приема'],
	[ENG, 'Admission Rules'],
]);

const uaContentText = `Ми завжди раді вітати нових студентів на нашій кафедрі Стратегічного управління. Для отримання інформації про вступ заповніть форму нижче.`;
const ruContentText = `Мы всегда рады приветствовать новых студентов на нашей кафедре Стратегического управления. Для получения информации о поступлении заполните форму ниже.`;
const engContentText = `We are always happy to welcome new students to our Department of Strategic Management. For information about admission, fill out the form below.`;

export const contentTextByLanguageMap: Map<Language, String> = new Map([
	[UA, uaContentText],
	[RU, ruContentText],
	[ENG, engContentText],
]);

export const placeholdersMap: Map<Language, ISubscribeFormValues> = new Map([
	[
		UA,
		{
			name: "Ваше ім'я",
			surName: 'Ваше прізвище',
			email: 'Ваш Email',
			question: 'Ваше запитання',
		},
	],
	[
		RU,
		{
			name: 'Ваше имя',
			surName: 'Ваша фамилия',
			email: 'Ваш Email',
			question: 'Ваш вопрос',
		},
	],
	[
		ENG,
		{
			name: 'Your name',
			surName: 'Your surname',
			email: 'Your Email',
			question: 'Your question',
		},
	],
]);

export const buttonTextMap: Map<Language, string> = new Map([
	[UA, 'Відправити'],
	[RU, 'Отправить'],
	[ENG, 'Send'],
]);

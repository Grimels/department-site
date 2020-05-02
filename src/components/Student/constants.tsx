import * as React from 'react';

import { Text } from 'styled/Text';

import { UA, Language, RU, ENG } from 'constants/language';
import { IDefaultPageElementData } from 'components/DefaultPage/DefaultPage';

export const studentTextDatatByLanguage: Map<Language, IDefaultPageElementData> = new Map([
	[
		UA,
		{
			header: 'Студентам',
			renderElement: () => (
				<Text className='text'>
					<h2>Дисципліни вільного вибору</h2>
					<br />
					<p>
						Студентам другого курсу навчання програми підготовки бакалаврів пропонуються наступні
						дисципліни вільного вибору:
					</p>
					<span>
						в 5-му семестрі: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Osnovi-biznes-planuvannya_kaf.SU.pdf'
							target='_blank'
						>
							«Основи бізнес-планування»
						</a>
					</span>
					<span>
						<br />в 6-му семестрі: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Otsinka-biznesu-ekspertiza-ta-audit-proektiv_kaf.SU.pdf'
							target='_blank'
						>
							«Оцінка бізнесу, експертиза та аудит проектів»
						</a>
					</span>
					<br />
					<br />
					<p>
						Студентам третього курсу навчання програми підготовки бакалаврів пропонується наступна
						дисципліна вільного вибору:
					</p>
					<span>
						в 7-му семестрі: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Reinzhiniring-BP_kaf.SU.pdf'
							target='_blank'
						>
							«Основи реінжинірингу бізнес-процесів»
						</a>
					</span>
				</Text>
			),
		},
	],
	[
		RU,
		{
			header: 'Студентам',
			renderElement: () => (
				<Text className='text'>
					<h2>Дисциплины свободного выбора</h2>
					<br />
					<p>
						Студентам второго курса обучения программы подготовки бакалавров предлагаются следующие
						дисциплины свободного выбора:
					</p>
					<span>
						в 5-м семестре: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Osnovi-biznes-planuvannya_kaf.SU.pdf'
							target='_blank'
						>
							«Основы бизнес-планирования»
						</a>
					</span>
					<span>
						<br />в 6-м cеместре: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Otsinka-biznesu-ekspertiza-ta-audit-proektiv_kaf.SU.pdf'
							target='_blank'
						>
							«Оценка бизнеса, экспертиза и аудит проектов»
						</a>
					</span>
					<br />
					<br />
					<p>
						Студентам третьего курса обучения программы подготовки бакалавров предлагается следующая
						дисциплина свободного выбора:
					</p>
					<span>
						в 7-м семестре: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Reinzhiniring-BP_kaf.SU.pdf'
							target='_blank'
						>
							«Основы реинжиниринга бизнес-процессов».
						</a>
					</span>
				</Text>
			),
		},
	],
	[
		ENG,
		{
			header: 'For Students',
			renderElement: () => (
				<Text className='text'>
					<h2>Disciplines of free choice</h2>
					<br />
					<p>
						Second-year students are offered the following undergraduate training programs
						disciplines of free choice:
					</p>
					<span>
						In the 5th semester: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Osnovi-biznes-planuvannya_kaf.SU.pdf'
							target='_blank'
						>
							«Basics of business planning»
						</a>
					</span>
					<span>
						<br />
						In the 6th semester: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Otsinka-biznesu-ekspertiza-ta-audit-proektiv_kaf.SU.pdf'
							target='_blank'
						>
							«Business Valuation, Expertise and Project Audit»
						</a>
					</span>
					<br />
					<br />
					<p>
						Third-year students are offered the following bachelor's program discipline of free
						choice:
					</p>
					<span>
						In the 7th semester: &nbsp;
						<a
							href='http://web.kpi.kharkov.ua/pm/wp-content/uploads/sites/120/2020/03/Reinzhiniring-BP_kaf.SU.pdf'
							target='_blank'
						>
							«Basics of Business Process Reengineering»
						</a>
					</span>
				</Text>
			),
		},
	],
]);

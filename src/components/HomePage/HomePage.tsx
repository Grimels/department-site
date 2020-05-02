import * as React from 'react';

import { HomePageContainer } from 'styled/HomePage/HomePage';

import { Main } from './Main';
import { AboutSpeciality } from './AboutSpeciality';
import { AboutDepartment } from './AboutDepartment';
import { OurPartners } from './OurPartners';
import { Feedbacks } from './Feedbacks';
import { Form } from './Form';

import { useLanguage } from 'hooks/useLanguage';
import { Language } from 'constants/language';

export interface IHomePageSection {
	language: Language;
}

export const HomePage: React.FC = () => {
	const { language } = useLanguage();
	return (
		<HomePageContainer>
			<Main language={language}/>
			<AboutSpeciality language={language}/>
			<AboutDepartment language={language}/>
			<OurPartners language={language}/>
			<Feedbacks language={language}/>
			<Form language={language}/>
		</HomePageContainer>
	);
};

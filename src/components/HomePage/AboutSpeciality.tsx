import * as React from 'react';
import { useHistory } from 'react-router';

import { IHomePageSection } from '.';
import { aboutSpecialityTextDataMap } from './constants/aboutSpeciality';

import { AboutSpeciality as StyledAboutSpeciality } from 'styled/HomePage/AboutSpeciality';
import { Button } from 'styled/Button';

export const AboutSpeciality: React.FC<IHomePageSection> = ({ language }) => {
	const history = useHistory();

	const currentData = aboutSpecialityTextDataMap.get(language);
	const ButtonComponent = <Button onClick={() => history.push('/applicants')}>{currentData?.button}</Button>;
	return (
		<StyledAboutSpeciality
			header={currentData?.name || ''}
			imageTitle={currentData?.title || ''}
			button={ButtonComponent}
		>
			{currentData?.text}
		</StyledAboutSpeciality>
	);
};

import * as React from 'react';
import { useHistory } from 'react-router';

import { IHomePageSection } from '.';
import { aboutDepartmentTextDataMap } from './constants/aboutDepartment';

import { AboutDepartment as StyledAboutDepartment } from 'styled/HomePage/AboutDepartment';
import { Button } from 'styled/Button';

export const AboutDepartment: React.FC<IHomePageSection> = ({ language }) => {
	const history = useHistory();

	const currentData = aboutDepartmentTextDataMap.get(language);
	const ButtonComponent = <Button onClick={() => history.push('/department')}>{currentData?.button}</Button>;
	return (
		<StyledAboutDepartment
			header={currentData?.name || ''}
			imageTitle={currentData?.title || ''}
			button={ButtonComponent}
		>
			{currentData?.text}
		</StyledAboutDepartment>
	);
};

import * as React from 'react';

import {
	Section1Background,
	Block,
	MainTextStyle,
	DescriptionTextStyle,
	SecondaryTextStyle,
	Hr,
} from 'styled/HomePage/Main';
import { mainTextDataMap } from './constants/main';
import { Button } from 'styled/Button';

import { IHomePageSection } from './HomePage';

export const Main: React.FC<IHomePageSection> = ({ language }) => {
	return (
		<Section1Background>
			<Block marginTop='4.5em'>
				<SecondaryTextStyle>{mainTextDataMap.get(language)?.universityName}</SecondaryTextStyle>
				<MainTextStyle>{mainTextDataMap.get(language)?.departmentName}</MainTextStyle>
				<DescriptionTextStyle>{mainTextDataMap.get(language)?.facultyName}</DescriptionTextStyle>
			</Block>
			<Block marginTop='3em'>
				<MainTextStyle>{mainTextDataMap.get(language)?.mainText}</MainTextStyle>
			</Block>
			<Hr />
			<Block>
				<DescriptionTextStyle>{mainTextDataMap.get(language)?.secondaryText}</DescriptionTextStyle>
			</Block>
			<Block margin='5em'>
				<Button onClick={() => {
					const element = document.getElementById('apply-rules');
					if(!element) return;
					element.scrollIntoView();
				}}>{mainTextDataMap.get(language)?.buttonText}</Button>
			</Block>
		</Section1Background>
	);
};

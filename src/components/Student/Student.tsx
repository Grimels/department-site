import * as React from 'react';
import { DefaultPage } from 'components/DefaultPage';

import { useLanguage } from 'hooks/useLanguage';
import { studentTextDatatByLanguage } from './constants';

import Image from 'assets/images/screen_5.png';

export const Student: React.FC = () => {
	const { language } = useLanguage();

	return <DefaultPage image={Image}>{studentTextDatatByLanguage.get(language)}</DefaultPage>;
};

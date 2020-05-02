import * as React from 'react';

import { useLanguage } from 'hooks/useLanguage';
import { Footer as StyledFooter } from 'styled/Footer';
import {
	universityByLanguageMap,
	departmentByLanguageMap,
	EMAIL,
	departmentContactsByLanguageMap,
	copyRights,
	departmentHeadContactsByLanguageMap,
} from './constants';

export const Footer: React.SFC = () => {
	const { language } = useLanguage();

	const universityAddress = universityByLanguageMap.get(language) || [];
	const departmentAddress = departmentByLanguageMap.get(language) || [];
	const departmentContact = departmentContactsByLanguageMap.get(language) || [];
	const departmentHeadContact = departmentHeadContactsByLanguageMap.get(language) || [];

	return (
		<StyledFooter
			universityAddress={universityAddress}
			departmentAddress={departmentAddress}
			departmentContact={departmentContact}
			departmentHeadContact={departmentHeadContact}
			email={EMAIL}
			copyRight={copyRights.get(language) || ''}
		></StyledFooter>
	);
};

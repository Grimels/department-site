import * as React from 'react';

import { DefaultPage } from 'components/DefaultPage';

import { useLanguage } from 'hooks/useLanguage';
import { aboutDepartmentByLanguage } from './constants';

import Image from 'assets/images/about_department.jpg';

export const AboutDepartment: React.FC = () => {
    const { language } = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultPage image={Image} textData={aboutDepartmentByLanguage.get(language)}/>
    );
};

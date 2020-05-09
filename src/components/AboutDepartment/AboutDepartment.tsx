import * as React from 'react';
import styled from 'styled-components';

import { DefaultPage } from 'components/DefaultPage';

import { useLanguage } from 'hooks/useLanguage';
import { aboutDepartmentByLanguage } from './constants';

import { uaStaff } from 'assets/departmentStaff/staffUa';

import Image from 'assets/images/about_department.jpg';
import { StaffCard } from 'components/StaffCard';
import { ENG, RU, UA } from 'constants/language';
import { ruStaff } from 'assets/departmentStaff/staffRu';
import { engStaff } from 'assets/departmentStaff/staffEng';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const header = {
    [UA]: 'Склад кафедри',
    [RU]: 'Состав кафедры',
    [ENG]: 'Department Staff',
};

const langStaff = {
    [UA]: uaStaff,
    [RU]: ruStaff,
    [ENG]: engStaff,
};


export const AboutDepartment: React.FC = () => {
    const { language } = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teachers = {
        header: header[language],
        renderElement: () => <>{langStaff[language].map(staff => <StaffCard staff={staff}/>)}</>,
    };

    return (
        <StyledContainer>
            <DefaultPage image={Image} textData={aboutDepartmentByLanguage.get(language)}/>
            <DefaultPage>{teachers}</DefaultPage>
        </StyledContainer>
    );
};

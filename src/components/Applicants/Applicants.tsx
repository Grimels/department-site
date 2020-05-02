import * as React from 'react';

import { DefaultPage } from 'components/DefaultPage';
import { FlexContainer } from 'styled/FlexContainer';

import { useLanguage } from 'hooks/useLanguage';
import { applicantsTextDataByLanguage } from './constants';

import Image from 'assets/images/applicants.jpg';

export const Applicants: React.FC = () => {
    const {language} = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <FlexContainer>
            <DefaultPage image={Image} textData={applicantsTextDataByLanguage.get(language)}/>
            <div>

            </div>
        </FlexContainer>
    );
};

import * as React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import {
    ABOUT_SPECIALITY,
    HEADER,
    Image1,
    Image2,
    Image3,
    PART_1,
    PART_2,
    PART_3,
    PART_4,
    PART_5
} from 'components/AboutSpeciality/constants';
import { DefaultPage } from 'components/DefaultPage';
import styled from 'styled-components';
import { Text } from 'styled/Text';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  h3 {
    text-align: center;
  }
  
  p {
    text-indent: 2em;
    text-align: justify;
  }
`;

export const AboutSpeciality: React.FC = () => {
    const { language } = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderProps = () => ({
        header: ABOUT_SPECIALITY[language],
        renderElement: () => (
            <StyledContainer>
                <br />
                <Text><h3>{HEADER[language]}</h3></Text>
                <br />
                <Text><span dangerouslySetInnerHTML={{ __html: PART_1[language] }}/></Text>
                <Image1 language={language} />
                <Text><span dangerouslySetInnerHTML={{ __html: PART_2[language] }}/></Text>
                <Image2 language={language} />
                <Text><span dangerouslySetInnerHTML={{ __html: PART_3[language] }}/></Text>
                <Text><span dangerouslySetInnerHTML={{ __html: PART_4[language] }}/></Text>
                <Image3 language={language} />
                {PART_5[language].map(part => <Text><span dangerouslySetInnerHTML={{ __html: part }}/></Text>)}
            </StyledContainer>
        ),
    });

    return <DefaultPage>{renderProps()}</DefaultPage>
}
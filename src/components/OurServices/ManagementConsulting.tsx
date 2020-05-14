import React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import { Text } from 'styled/Text';
import { DefaultPage } from 'components/DefaultPage';
import styled from 'styled-components';
import {
    HEADER, HEADER_2, HEADER_3,
    LIST_1, LIST_2,
    PAGE_HEADER,
    PARAGRAPH_1,
    PARAGRAPH_2,
    PARAGRAPH_3,
    PARAGRAPH_4
} from 'components/OurServices/ManagementConstants';

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

export const ManagementConsulting: React.FC = () => {
    const {language} = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderProps = () => ({
        header: HEADER[language],
        renderElement: () => (
            <StyledContainer>
                <br />
                <Text><h3>{PAGE_HEADER[language]}</h3></Text>
                <br />
                <Text>{PARAGRAPH_1[language]}</Text>
                <Text>{PARAGRAPH_2[language]}</Text>
                <br />
                <ul>
                    {LIST_1[language].map(item => <Text>
                        <li>{item}</li>
                    </Text>)}
                </ul>
                <br />

                <Text>{PARAGRAPH_3[language]}</Text>
                <br />

                <Text><strong>{HEADER_2[language]}</strong> {PARAGRAPH_4[language]}</Text>
                <br />

                <Text><strong>{HEADER_3[language]}</strong></Text>
                <br />

                <ul>
                    {LIST_2[language].map(item => <Text>
                        <li>{item}</li>
                    </Text>)}
                </ul>
                <br />

            </StyledContainer>
        ),
    });

    return <DefaultPage>{renderProps()}</DefaultPage>
}
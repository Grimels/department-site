import React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import { MethodicContainer } from 'components/Student/MethodicalSupport';
import DocumentImage from 'assets/icons/course.png';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';
import { DefaultPage } from 'components/DefaultPage';
import {
    CONNECTOR, COUCH, COUCH_DESC,
    DURATION,
    HEADER, PROGRAM, PROGRAM_ITEMS,
    TARGET,
    TRAINING_HEADER, TRAINING_RESULTS, TRAINING_SUBTITLE,
    TRAINING_TITLE
} from 'components/OurServices/BusinessConstants';
import { Text } from 'styled/Text';
import styled from 'styled-components';
import {RESULT} from './ProjectsConstants';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  h3, .connector {
    text-align: center;
  }
  
  h3 {
    text-transform: uppercase;
    &.training-header {
        font-size: 1.5rem;
    }
  }
  
  .connector {
    font-size: 24px;
  }
  
  p {
    text-indent: 2em;
    text-align: justify;
  }
  
  .trainer {
    margin-left: 2em;
  }
`;

export const BussinessEducation: React.FC = () => {
    const { language } = useLanguage();

    const props = {
        header: HEADER[language],
        renderElement: () => (
            <StyledContainer>
                <br/>
                <br/>
                <Text><h3 className='training-header'>{TRAINING_HEADER[language]}</h3></Text>
                <Text><h3>"{TRAINING_TITLE[language]}"</h3></Text>
                <br />

                <Text className='connector'>{CONNECTOR[language]}</Text>
                <br />

                <Text><h3>{TRAINING_SUBTITLE[language]}</h3></Text>
                <br />
                <br />
                <Text><h4>{TRAINING_RESULTS[language].header}:</h4></Text>
                <ul>
                    {TRAINING_RESULTS[language].results.map(item => <Text>
                        <li>{item}</li>
                    </Text>)}
                </ul>
                <br />
                <Text><strong>{TARGET[language]}</strong></Text>
                <br />
                <Text><h4>{PROGRAM[language]}</h4></Text>
                <br />
                {PROGRAM_ITEMS.map((item, index) => (
                    <>
                    <Text><strong>{index + 1}. {item[language].name}</strong></Text>
                    {
                        !item[language].targets ? <Text>{item[language].target}</Text> :
                            <ul>
                                {(item[language].targets || []).map(element => <Text>
                                    <li>{element}</li>
                                </Text>)}
                            </ul>
                    }
                    <br/>
                </>
                )
                )}

                <Text><strong>{DURATION[language]}</strong></Text>
                <br />
                <br />
                <Text><h4>{COUCH[language]}:</h4></Text>
                <Text  className='trainer'><i>{COUCH_DESC[language]}</i></Text>
            </StyledContainer>
        ),
    };
    return <DefaultPage>{props}</DefaultPage>;
};
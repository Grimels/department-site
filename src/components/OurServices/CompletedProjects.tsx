import React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import { Text } from 'styled/Text';
import { DefaultPage } from 'components/DefaultPage';
import styled from 'styled-components';
import { HEADER, PROJECTS, RESULT, TARGET, YEAR } from 'components/OurServices/ProjectsConstants';

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

const StyledMain = styled.main`
  display: flex;
  img {
    width: 10em;
    height: 10em;
    float: right;
  }
`;

export const CompletedProjects: React.FC = () => {
    const { language } = useLanguage();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderProps = () => ({
        header: HEADER[language],
        renderElement: () => (<>
            {PROJECTS.map(project => (
                <StyledContainer>
                    <br/>
                    <Text><h3>{project[language].name}</h3></Text>
                    <br/>
                    <Text>{YEAR[language]} {project[language].year}</Text>
                    <Text><strong>{TARGET[language]}</strong> {project[language].target}</Text>
                    <br/>
                    <Text><strong>{RESULT[language]}</strong>:</Text>
                    <br/>
                    <ul>
                        {project[language].results.map(item => <Text>
                            <li>{item}</li>
                        </Text>)}
                    </ul>

                </StyledContainer>
            ))}
        </>),
    });

    return <DefaultPage>{renderProps()}</DefaultPage>;
};
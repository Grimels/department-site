import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CardImg, Card, CardBody, CardTitle } from 'reactstrap';

import { IArticle } from 'components/ScientificActivity/Article';
import { extractImgSrc } from 'utils/extractImgSrc';
import { Button } from 'styled/Button';
import { READ_MORE_TEXT } from 'components/News/constants';
import { useLanguage } from 'hooks/useLanguage';

const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 20px 25px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  justify-content: center;
`;

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardImg = styled(CardImg)`
  align-self: center;
`;

export const NewsContainer: React.FC<{ news: IArticle[] }> = ({ news }) => {
    const { language } = useLanguage();

    const renderItem = (newsItem: IArticle) => {
        const firstImgSrc = extractImgSrc(newsItem.text) || 'https://www.kpi.kharkov.ua/rus/wp-content/uploads/sites/3/2018/06/logo.png';

        return (
            <NavLink to={`news/${newsItem.id}`} key={newsItem.id}>
            <StyledCard>
                <StyledCardImg top width="100%" height="200px" style={{ objectFit: 'cover' }} src={firstImgSrc} alt="Card image cap" />
                <StyledCardBody>
                    <CardTitle>{newsItem.subject.length >= 40 ?
                        `${newsItem.subject.substr(0, 40)}...` : newsItem.subject
                    }
                    </CardTitle>
                    <Button>{READ_MORE_TEXT[language]}</Button>
                </StyledCardBody>
            </StyledCard>
            </NavLink>
        );
    };

    return <StyledContainer>{news.map(renderItem)}</StyledContainer>;
};
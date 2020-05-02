import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CardImg, Card, CardBody, CardTitle } from 'reactstrap';

import { IArticle } from 'components/ScientificActivity/Article';
import { extractImgSrc } from 'utils/extractImgSrc';
import { Button } from 'styled/Button';

const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 20px 25px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
`;

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardImg = styled(CardImg)`
  max-width: 200px;
  max-height: 200px;
  align-self: center;
`;

export const NewsContainer: React.FC<{ news: IArticle[] }> = ({ news }) => {
    const renderItem = (newsItem: IArticle) => {
        const firstImgSrc = extractImgSrc(newsItem.text) || (
            "http://vstup.kpi.kharkov.ua/wp-content/uploads/2017/10/ua_s_c_w-e1508288269384-64x63.png"
        );

        return (
            <NavLink to={`news/${newsItem.id}`} key={newsItem.id}>
            <StyledCard>
                <StyledCardImg top width="100%" src={firstImgSrc} alt="Card image cap" />
                <StyledCardBody>
                    <CardTitle>{newsItem.subject.length >= 40 ?
                        `${newsItem.subject.substr(0, 40)}...` : newsItem.subject
                    }
                    </CardTitle>
                    <Button>Читать далее</Button>
                </StyledCardBody>
            </StyledCard>
            </NavLink>
        );
    };

    return <StyledContainer>{news.map(renderItem)}</StyledContainer>;
};
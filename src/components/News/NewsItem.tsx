import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Spinner } from 'styled/Spinner';

import { StoreState } from 'store';
import { postsDataService } from 'dataServices/PostsDataService';

const StyledNewsItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 40px;
  padding: 0 40px;
`;

const StyledH3 = styled.h3`
  text-align: left;
  margin-bottom: 20px;
`;

export const NewsItem: React.FC<{ match: { params: { id: string } } }> = ({ match: { params: { id } } }) => {
    const { news } = useSelector((state: StoreState) => state.postsReducer);
    const [ newsItem, setNewsItem ] = React.useState((news || []).find(item => item.id === id));

    React.useEffect(() => {
        console.log(id)
        if (!newsItem) {
            postsDataService.getNewsItem(id)
                .then(returnedNewsItem => setNewsItem(returnedNewsItem));
        }
    }, []);

    if (!newsItem) {
        return <Spinner/>;
    }

    return (
        <StyledNewsItem>
            <StyledH3>{newsItem.subject}</StyledH3>
            <div dangerouslySetInnerHTML={{ __html: newsItem.text }}/>
        </StyledNewsItem>
    );
};
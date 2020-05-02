import React from 'react';
import styled from 'styled-components';

import { BeatLoader } from 'react-spinners';
import { MAIN_COLOR } from 'styled/constants';

const SpinnerContainer = styled.div`
  width: 100%;
  height: 60vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner: React.FC = () => (
    <SpinnerContainer>
        <BeatLoader color={MAIN_COLOR}/>
    </SpinnerContainer>
);
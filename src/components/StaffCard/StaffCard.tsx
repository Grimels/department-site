import React from 'react';
import { Staff } from 'components/StaffCard/StaffType';
import styled from 'styled-components';
import { Card, CardBody, CardImg } from 'reactstrap';
import { ENG, RU, UA } from 'constants/language';
import { useLanguage } from 'hooks/useLanguage';

const StyledCard = styled(Card)`
  margin: 15px;
  display: flex;
  flex-direction: row;
`;

const StyledCardImg = styled(CardImg)`
  width: 230px;
  height: 340px;
  object-fit: cover;
`;

const StyledInfo = styled.p`
  margin: 0.5em 0;
`;

const DISCIPLINE = {
    [UA]: 'Дисципліни',
    [RU]: 'Дисциплины',
    [ENG]: 'Disciplines'
};

export const StaffCard: React.FC<{ staff: Staff }> = ({ staff }) => {
    const { language } = useLanguage();
    return (
        <StyledCard>
            <StyledCardImg left src={staff.image}/>
            <CardBody>
                <h3>{staff.name}</h3>
                <div>
                    {staff.information.map(info => <StyledInfo>{info}</StyledInfo>)}
                </div>
                {
                    (staff.disciplines && staff.disciplines.length) ? (
                        <p><strong>{DISCIPLINE[language]}: </strong>
                            {staff.disciplines.map((discipline, index) =>
                                <span>"{discipline}"{index < (staff?.disciplines || []).length ? ', ' : ''}</span>)}
                        </p>
                    ) : null
                }
                {
                    staff?.contacts?.googleAcademy && (
                        <>
                            <br/>
                            <p><strong>Google Academy: </strong><a target='_blank'
                                                                   href={staff.contacts.googleAcademy}>link</a></p>
                        </>
                    )
                }

            </CardBody>
        </StyledCard>
    );
};
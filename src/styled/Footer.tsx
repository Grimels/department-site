import * as React from 'react';
import styled from 'styled-components';

import { FlexContainer } from './FlexContainer';

import { MAIN_COLOR, WHITE_COLOR } from './constants';

import OfficeBuildingIcon from 'assets/icons/office-building.png';
import OfficeIcon from 'assets/icons/office.png';
import PhoneCallIcon from 'assets/icons/phone-call.png';
import TelegramIcon from 'assets/icons/telegram.png';

const FooterText = styled.span`
	color: ${WHITE_COLOR};
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	word-wrap: wrap;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const FooterContainer = styled(FlexContainer)`
	background-color: ${MAIN_COLOR};
`;

const AddressContainer = styled(FlexContainer)`
	width: 96%;
	flex-wrap: wrap;

	border-bottom: 1px solid ${WHITE_COLOR};
	padding: 40px 5px 30px 5px;

	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media only screen and (min-width: 810px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: space-between;
	}

	@media only screen and (min-width: 1320px) {
		flex-direction: row;
		justify-content: center;
	}
`;

const AddressSubContainer = styled(FlexContainer)`
	flex-direction: column;
	align-items: flex-start;

	@media only screen and (min-width: 1320px) {
		flex-direction: row;
		justify-content: space-around;

		* {
			margin: 0 0.25em;
		}
	}
`;

const FooterTextWithIcon = styled(FooterText)`
	display: flex;
	flex-direction: column;

	* {
		margin-left: ${15 + 18}px;
		text-align: left;
	}

	&::before {
		position: absolute;
		width: 15px;
		height: 15px;
	}
`;

const UniversityAddress = styled(FooterTextWithIcon)`
	&::before {
		content: url(${OfficeBuildingIcon});
	}
`;

const DepartmentAddress = styled(FooterTextWithIcon)`
	&::before {
		content: url(${OfficeIcon});
	}
`;

const ContactInfo = styled(FooterTextWithIcon)`
	&::before {
		content: url(${PhoneCallIcon});
	}
`;

const Email = styled(FooterTextWithIcon)`
	&::before {
		content: url(${TelegramIcon});
	}
`;

const Strong = styled.strong`
	margin: 0;
`;

const CopyRights = styled(FooterText)`
	padding: 22px 0;
`;

export interface IStyledFooter {
	email: String;
	universityAddress: String[];
	departmentAddress: String[];
	departmentContact: String[];
	departmentHeadContact: String[];
	copyRight: String;
}

const Footer: React.SFC<IStyledFooter> = ({
	universityAddress,
	departmentAddress,
	departmentContact,
	departmentHeadContact,
	copyRight,
	email,
}) => (
	<FooterContainer>
		<AddressContainer>
			<AddressSubContainer>
				<UniversityAddress>
					<span>{universityAddress[0]}</span>
					<span>{universityAddress[1]}</span>
				</UniversityAddress>
				<DepartmentAddress>
					<span>{departmentAddress[0]}</span>
					<span>{departmentAddress[1]}</span>
				</DepartmentAddress>
			</AddressSubContainer>
			<AddressSubContainer>
				<ContactInfo>
					<span>
						<Strong>{departmentContact[0]}</Strong>: {departmentContact[1]}
					</span>
					<span>
						<Strong>{departmentHeadContact[0]}</Strong>: {departmentHeadContact[1]}
					</span>
				</ContactInfo>
				<Email>
					<span>{email}</span>
				</Email>
			</AddressSubContainer>
		</AddressContainer>
		<CopyRights>{copyRight}</CopyRights>
	</FooterContainer>
);

export { Footer };

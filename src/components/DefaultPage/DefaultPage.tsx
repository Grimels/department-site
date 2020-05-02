import * as React from 'react';

import { ImageContainer, renderSectionImage } from 'styled/ImageContainer';
import { Text } from 'styled/Text';
import {
	DefaultPage as StyledDefaultPage,
	DefaultPageContainer,
	DefaultPageTextContainer,
} from 'styled/DefaultPage';
import { Header } from 'styled/HomePage/About';

export interface IDefaultPageTextData {
	header: string;
	text: string[] | string;
}

export interface IDefaultPageElementData {
	header: string;
	renderElement: () => JSX.Element;
}

export interface IDefaultPage {
	image?: string;
	textData?: IDefaultPageTextData;
	children?: IDefaultPageElementData;
}

export const DefaultPage: React.FC<IDefaultPage> = ({ image, textData, children }) => {
	const SectionImage = image && renderSectionImage(image, '35vw', '65vw');
	const renderText = () => {
		if (textData && Array.isArray(textData.text)) {
			return (textData.text as string[]).map((textItem: string) => (
				<Text className='text'>{textItem}</Text>
			));
		}
		if (textData && textData.text && textData.text === textData.text.toString()) {
			return <Text className='text'>{textData.text}</Text>;
		}

		return children?.renderElement();
	};
	return (
		<StyledDefaultPage>
			<Header className='header'>{textData?.header || children?.header || ''}</Header>
			<DefaultPageContainer>
				{SectionImage && (
					<ImageContainer>
						<SectionImage />
					</ImageContainer>
				)}
				<DefaultPageTextContainer>{renderText()}</DefaultPageTextContainer>
			</DefaultPageContainer>
		</StyledDefaultPage>
	);
};

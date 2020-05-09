import * as React from 'react';

import { ImageContainer, renderSectionImage } from 'styled/ImageContainer';
import { Text } from 'styled/Text';
import {
    DefaultPage as StyledDefaultPage,
    DefaultPageContainer, DefaultPageContainerWithoutImage,
    DefaultPageTextContainer,
} from 'styled/DefaultPage';
import { Header } from 'styled/HomePage/About';
import { Header as SimpleHeader } from 'styled/HomePage/OurPartners';

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
    simpleHeader?: boolean;
    textData?: IDefaultPageTextData;
    children?: IDefaultPageElementData;
}

export const DefaultPage: React.FC<IDefaultPage> = ({ simpleHeader = false, image, textData, children }) => {
    const SectionImage = image && renderSectionImage(image, '25em', '65em');
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
            {simpleHeader ? (
                    <SimpleHeader className='header'>{textData?.header || children?.header || ''}</SimpleHeader>)
                : (<Header className='header'>{textData?.header || children?.header || ''}</Header>)}

            {
                SectionImage ? (
                    <DefaultPageContainer>
                        <ImageContainer>
                            <SectionImage/>
                        </ImageContainer>
                        <DefaultPageTextContainer>{renderText()}</DefaultPageTextContainer>
                    </DefaultPageContainer>
                ) : (
                    <DefaultPageContainerWithoutImage>
                        <DefaultPageTextContainer>{renderText()}</DefaultPageTextContainer>
                    </DefaultPageContainerWithoutImage>
                )
            }
        </StyledDefaultPage>
    );
};

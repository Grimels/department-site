import React, { useState } from 'react';
import {
    Carousel as StrapCarousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import styled from 'styled-components';

import LeftArrow from 'assets/icons/left-arrow.png';

const StyledCarousel = styled(StrapCarousel)``;

const Container = styled.div`
	display: flex;
	justify-content: center;

	@media only screen and (min-width: 810px) {
		.carousel-inner {
			height: 375px;
		}
	}
`;

const StyledCarouselControl = styled(CarouselControl)`
	position: relative;
	.carousel-control-next-icon,
	.carousel-control-prev-icon {
		display: none;
	}

	@media only screen and (min-width: 810px) {
		.carousel-control-next-icon,
		.carousel-control-prev-icon {
			display: block;

			width: 40px;
			height: 40px;

			margin: 0 40px;
		}

		.carousel-control-next-icon {
			content: url(${LeftArrow});
			transform: rotate(180deg);
		}

		.carousel-control-prev-icon {
			content: url(${LeftArrow});
		}
	}
`;

const StyledCarouselItem = styled(CarouselItem)`
	height: 100%;
	@media only screen and (min-width: 810px) {
		padding: 20px 60px;
	}
`;

export type CarouselType<T = any> = React.SFC<{
    items: T[];
    children: (item: T) => React.ReactNode;
}>;

export const Carousel: CarouselType = ({items, children}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => {
        return (
            <StyledCarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={`carousel-item-${index}`}
            >
                {children(item)}
            </StyledCarouselItem>
        );
    });

    return (
        <Container>
            <StyledCarouselControl direction='prev' directionText='Previous' onClickHandler={previous}/>
            <StyledCarousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
            </StyledCarousel>
            <StyledCarouselControl direction='next' directionText='Next' onClickHandler={next}/>
        </Container>
    );
};

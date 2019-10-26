import React from 'react';

import { Carousel, CarouselType } from 'components/Carousel';

import { useLanguage } from 'hooks/useLanguage';

import { Feedback, FEEDBACKS } from './constants';

import './Feedbacks.scss';

const FeedbackCarousel = Carousel as CarouselType<Feedback>

export const Feedbacks: React.FC = ({ }) => {
  const { language } = useLanguage();

  return (
    <div className="feedbacks">
      <FeedbackCarousel items={FEEDBACKS}>
        {
          (feedback: Feedback) => (
            <div className="feedback">
              <img className="author-img" src={feedback.img} alt="" />
              <div className="text-block">
                <p className="quote">{feedback.text[language]}</p>
                <p className="author">{feedback.author[language]}</p>
              </div>
            </div>
          )
        }
      </FeedbackCarousel>
    </div>
  );
}

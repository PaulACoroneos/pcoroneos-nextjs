import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Blogpost } from '..';
import { Hero } from '../hero';

const blogPosts = [
  {
    header: 'Hello World',
    date: '2019-08-19',
    body:
      'Hi there. My name is Paul. I am a fairly new web developer with a primary focus on front end. My background before becoming a full-time software dev was 7.5 years in the semiconductor industry as a test engineer. I\'ve been helped quite a bit by posts on the web as I have continued to improve my javascript accumen. So I want to give back and give everyone some perspective as I learn new and cool things. Check back as I make occasional posts on things I learn. Take care!'
  }
];

export const HomePage: React.FC = () =>
  <>

    <HomePageWrapper>
      <Hero />
      <StyledSection>
        <h2>Recent Blog Posts</h2>
        {blogPosts.map(blogpost =>
          <Blogpost key={blogpost.header} blogpost={blogpost} />
        )}
      </StyledSection>
    </HomePageWrapper>
  </>
  ;

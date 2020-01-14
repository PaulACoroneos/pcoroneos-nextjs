import * as React from 'react';
import { AboutWrapper, AboutMeContent, CaptionedImageContainer } from './about-page.styles';
import { Hero } from '../hero';

const header = 'About Me';
const subHeader = 'A little bit about myself.'

export const AboutPage: React.FC = () =>
  <AboutWrapper>
    <Hero header={header} subHeader={subHeader} />
    <AboutMeContent>
      <h2>
        My journey. And my history!
      </h2>
      <p>{'My name is Paul Coroneos. I have been a professional front-end web developer since January of 2019. The journey up to this point was rather long. I hope you\'ll let me indulge a bit with my history getting to this point.'}</p>
      <p> In 2007 I decided to apply to be an electrical engineer in 2007. I spent 2007-2011 studying and graduated with BS in EE and Applied Mathematics. I landed my dream job at the time working at a little known company called Texas Instruments.</p>
      <CaptionedImageContainer>
        <img alt='Image of Texas Instruments TI-83 calculator' src='/ti83.png' />
        <span>{'Little known fact: Calculators generate less than 4% of TI\'s overall revenue.'}</span>
      </CaptionedImageContainer>
      <p> My first 2 and a half years of my career I spent working as a process engineer in one of the oldest wafer fabrication sites in the company (DFAB). I worked with and extremely talented group of engineers and technicians cutting my teeth in the world of semiconductors.</p>
      <p> A common trend in my life is my inability to not be learning something at all times. Around 2012 I started my Masters in Electrical Engineering while working full time. Let me tell you this is not easy. I think I would rank it second to my bootcamp experience (more on this later) but it came darn close. I had thoughts of being an integrated circuit designer and focused heavily on circuit design. After a lot of late nights and hard work I managed to graduate in 2016</p>
      <CaptionedImageContainer>
        <img alt='Paul Coroneos graduation day with family in formal atire' src='/graduation.jpg' />
        <span>{'Graduating with my Masters in EE in 2016 with my family at Southern Methodist University'}</span>
      </CaptionedImageContainer>
      <p>{'During this time I started to realize programming was my passion. I applied for a few months trying to get a full time test engineering role and eventually accepted one supporting the DC/DC converter team with a now defunct group called Analog Engineering Operations.'}</p>
      <p>{'It was here that I finally was able to start coding in a C++ environment or more modern tools. I cut my teeth in somewhat modern coding using visual studio code 2005 and 2010 on tools such as the Eagle ETA364 and ETS88. I designed PCB\'s for testing semiconductors, did customer return analysis, performed qualifications, and even provided remote factory support for a variety of issues.'}</p>
      <CaptionedImageContainer>
        <img alt='An Eagle test systems ETS364' src='/ets364.png' />
        <span>{'What and ETS364 looks like. It\'s a massive electronics cabinet with electronic resources in the range of 100\'s of thousands of dollars'}</span>
      </CaptionedImageContainer>
      <p style={{ textAlign: 'center' }}>To be continued!</p>
    </AboutMeContent>

  </AboutWrapper>;

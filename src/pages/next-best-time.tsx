import * as React from 'react';
import BlogPost from '../components/blog-post/blog-post';

const NextBestTime = () => <BlogPost header='The next best time is now' date='2020-01-22' src='frustration.jpg' alt='man frustrated in front of laptop' desc='Probably what I look like on a daily basis'>
  <p>{'Procrastination and imposter theory are real things. It\'s so easy to convince yourself you aren\'t ready for something. But these are simply excuses. The best time to have started something was yesterday. The next best time is now.'}</p>
  <p>{'For over a decade I told myself I would build a blog and write articles that people might read. At this time I was a budding electrical engineer. I was ready to start working on my circuit design and post articles about what I learned. I came up with grandiose ideas of what such a blog might look like. And I was all in on the idea of picking up HTML/CSS/JS to accomplish this.'}</p>
  <p style={{textAlign:'center',fontWeight:'bold', fontSize:'28px'}}>{'Instead I did nothing'}</p>
  <p>{'You see it turns out gradiose ideas without implementation are just grandiose ideas. They are fragments that reside in your head that will not result in anything. Until an idea is physically formed and put into practice (a writer writing, an artist painting, or even as developer coding) it is useless to both the person with the idea and the people who might benefit.'}</p>
  <p>{'We all procrastinate from time to time. It\'s natural to put off something and leave it for tomorrow. You might even be doing it right now reading this blogpost  (don\'t stop yet and thank you for visiting!). But procrastination is a dead end. You can spend hours, days, months, or even years telling yourself you will make that idea once you have had time to polish it up and present it like a flawless pearl from the ocean blue.'}</p>
  <p style={{textAlign:'center',fontWeight:'bold', fontSize:'28px'}}>{'It\'ll never happen.'}</p>
  <p>{'No idea is perfect. Smartphones were terrible when they were first implemented. Cars were unreliable and considered terrible replacements for the traditional horse. But today if you ask whether the smartphone or car are invaluable ideas the answer would be yes from nearly every person you asked. But that didn\'t stop people from trying. They created something while not perfect had potential. And they iterated on that idea until it truly became great. You too can be these pioneers'}</p>
  <p>{'My current blog you are reading is passable at best. It\'s pretty clear I am not designer (but I am working on trying different colors,spacings and fonts). My writing style is possibly a bit verbose and non-sensical (I will keep writing to improve over time). And I am missing features that many blogs likely have (I have an issue backlog on the github repository for this site I am tackling/adding ideas to). But these are all obstacles that can be overcome with perseverence. And I plan to work hard on this page moving forward.'}</p>
  <p style={{textAlign:'center',fontWeight:'bold', fontSize:'28px'}}>{'The best time to have started something was yesterday. The next best time is now.'}</p>
  <p>{'Finally working on that idea you\'ve had for ages is hard. Trust me. It took me almost 4 years from realization I no longer wanted to be an electrical engineer to become a front end developer. It should have happened much sooner than that. But all I can focus on is what I can do now that I am here and with passion for what I do. And I hope you too can pursue your ideas with the passion I try to pursue mine.'}</p>
  <p>
    <span>{'I want to give a shoutout to '}</span>
    <a href='https://twitter.com/swyx' target='_blank' rel='noopener noreferrer'>@swyx</a>
    <span>{' as a large part of the motivation for this post. His message of '}</span>
    <a href='https://www.swyx.io/writing/learn-in-public/' target='_blank' rel='noopener noreferrer'>Learn in public</a>
    <span>{' really hit home for me. I suggest you read his article to learn more about what he means by this. Best of luck with your ideas! '}</span>
  </p>
</BlogPost>

export default NextBestTime;

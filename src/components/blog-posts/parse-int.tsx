import * as React from 'react';
import { BlogpostWrapper } from './blog-posts.styles';

export const ParseInt = () => <BlogpostWrapper>
  <h3>{'Big trouble with parseInt()'}</h3>
  <h4>{'Date Posted: 2019-11-28'}</h4>
  <p>{'The need for input validation is important. In my case I was wanting to validate that a URL parameter was infact a valid integer. I went on MDN and found a handy function called parseInt(). I pushed the feature and it appeared to work just fine.'}</p>
  <p>{'However my QA engineer pointed out that when she tried to use a URL param of 123wlkdfasdfasdf that infact the number 123 was parsed. I re-read MDN and realized that it turns out parseInt will actually parse an integer happily until it hits something thats not an integer. Then it discards the rest of the input.'}</p>
  <p>{'The solution I went to instead involved using a regex where I basically looks for characters only between 0 - 9.'}</p>
</BlogpostWrapper>

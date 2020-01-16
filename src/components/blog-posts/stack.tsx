import * as React from 'react';
import { BlogpostWrapper } from './blog-posts.styles';
import styled from 'styled-components';

const StyledImage = styled.img`
  display: block;
  width:100%;
  margin: 0 auto;
`;


export const Stack = () => <BlogpostWrapper>
  <h3>{'My first stack'}</h3>
  <h4>{'Date Posted: 2020-01-15'}</h4>
  <p>{'For a long time i\'ve wanted to learn data structures and algorithms. I decided with the new year it was finally time to get started. After all the best time to start something is yesterday. The next best time is today.'}</p>
  <p>{'The first stop in learning data structures is stacks. You can technically use an array as the base of building a stack in JavaScript but I instead elected to start with an object. This is my version of the implementation:'}</p>
  <StyledImage alt='My implementation of a stack with explanation below' src='/stack.png' />
  <p>{'The implementation starts out by using a class object. The constructor method is used to initialize the class with a known state. In this case we initialize two variables.'}</p>
  <ol>
    <li>_storage</li>
    <li>_length</li>
  </ol>
  <p>{'_storage represents an empty object. This will be our primary data storage element. Whenever we take an action to add, remove or view data from the stack this will hold the data. _length represents the amount of elements inside the _storage object. This is useful as it allows us to index elements throughout the class. Now that we\'ve covered the constructor variables we can move onto the methods!'}</p>
  <p>{'First up is push(). The push method takes a value and simply adds it to our _storage object at the end of the "length" of the stack. We then increase our length by one by immediately incrementing _length after we use it to mark where are putting it in the _storage object. So for example if I push("hello") and push("world") my stack will contain {"hello","world"}. Stacks are known as LIFO or last in, first out data structures. We will see why in a moment.'}</p>
  <p>{'Peek() does what it sort of implies. It allows us to look at the last element in our _storage object. This is a pretty useful operation as you may want to see what value it at the top of your stack but not necessarily want to remove it. Early I mentioned that stacks are LIFO. Therefore peek will look at the last element in storage because the last item placed into the stack will be the first item that can be popped off as we will discuss in a bit.'}</p>
  <p>{'The object reference is _length-1 because the object is zero reference. This means that in a stack of length two like our hello and world stack each element is in the 0th and 1th place respectively. Finally if you follow along peek() will indeed reference "world". But it is almost important to recognize that this will not remove the value of "world". To do that requires the use of pop()'}</p>
  <p>{'Finally pop() as it implies removes an item from the stack and returns it. After the value is removed from the stack we then immediately decrement _length. So for example if we call pop() on our stack it will return the word "world" and length will update to a value of one. An additional pop will return a value of "Hello" and set _length to a value of 0. Finally another pop will yield the value of undefined. This is because in javascript you cannot return a value with an object for an index that does not exit (less than 0) so instead javascript tells you that such as value is undefined.'}</p>
  <p>{'Now a shrewd reader would point out that this stack implementation has a fatal flaw. If the stack is already of length of 0 we really should be trying to pop values because our _length value will become negative and subsequently pushing on the stack will place values at negative indices which doesnt really make sense. A small change is to simply add a check of _length at the beginning of the pop() function to valid _length is at least 0.'}</p>
  <p>{'I hope you found this description helpful! As I implement more data structures I will also work to describe their fundamentals as well!'}</p>
</BlogpostWrapper>

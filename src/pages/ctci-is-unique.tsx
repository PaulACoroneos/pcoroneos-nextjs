import * as React from 'react';
import BlogPost from '../components/blog-post/blog-post';
import { BlogPostImage } from '../components/blog-post/blog-post.styles';

const CTCIIsUnique = () => <BlogPost header='Cracking the Code Interview - IsUnique' date='2020-01-24' src='code.jpg' alt='minified code on a laptop screen' desc='A nice warmup for algorithms in JavaScript'>
  <p>{'When I was formally in school I majored in Electrical Engineering and Mathematics. I had two formal semesters of c++. But after I did a small amount of OOP and a binary search tree implementation I basically was relegated to machine level coding (think assembly). So unlike my friends in the CS department I really had no formal training in data structures, algorithms, or any of the other fundamentals software developers likely take for granted in their education'}</p>
  <p>{'Thus in 2020 I plan to work all the way through Cracking the Code Interview (yes that infamous green textbook) to catch up to my fellow developers and be able to continue my technical growth. As I solve algorithms I will be posting my solutions and explaining my thought process. I don\'t expect them to be perfect initially. And in fact I probably will write follow-up posts as I make revisions or additional implementations. But as as a nice warmp up today I thought we might start with example 1.1 from CTCI'}</p>
  <p>{'Example 1.1 from CTCI can be summarized as basically creating an algorithm that verifies that all of the characters in a string are unqiue. If this criteria is met the function returns true. Else it returns false. There are many approaches to this of various space and time complexities (as I get better at these things I will be making subsequent posts as well). Arrays are a natural first choice for this problem. Essentially one could split a string (or spread into an array with Babel) and create a running count of how many instances of a character are seen. Then one would simply check to see whether any of these char counters exceeded 1.'}</p>
  <p>{'That being said I instead elected to use a data structure in JavaScript that is well suited for handling duplicates. A Set in JavaScript is a data structure that only can hold unique values. That is to say if I try to add a value to a set that already exists the duplicated value is not added. So a somewhat naive solution I have implemented is as follows'}</p>
  <BlogPostImage>
    <img src='isUnique.png' alt='an implement of isUnique using the Set data structure' />
  </BlogPostImage>
  <p>{'I instantiate a Set by spreading the values from the string into an array which is passed into the Set. I then compare the length of the set using .size versus the length of the original string. If the numbers match this means the string had all unique values. Otherwise if there is a mismatch the string has at least 1 duplicate.'}</p>
  <p>{'Now there are some downsides to this approach. In other for this to work I essentially check the entire string for duplicates at the same time. In order to spread the string will cost me O(n). Theoretically the first duplication could happen at any time (say the second character). In this case the best case time would be closer to constant time and the average case likely lower as well. However even with checking at each iteration the worst case time would still be O(n).'}</p>
  <p>
    <span>{'My implementation (including unit tests) may be found '}</span>
    <a href='https://github.com/PaulACoroneos/javascript-data-structures-and-algorithms/tree/master/algorithms/Cracking-The-Code-Interview/chapter-1/1-1' target='_blank' rel='noopener noreferrer'>here. </a>
    <span>{'Thanks for reading and see you next time!'}</span>
  </p>
</BlogPost>

export default CTCIIsUnique;

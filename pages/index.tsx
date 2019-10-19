import { Header, Blogpost } from "../components";
import * as React from "react";

const blogPosts = [
  {
    header: 'Insert clever "Hello World" blog title here',
    date: "2019-08-19",
    body:
      "Hi there. My name is Paul. I am a fairly new web developer with a primary focus on front end. My background before becoming a full-time software dev was 7.5 years in the semiconductor industry as a test engineer. I've been helped quite a bit by posts on the web as I have continued to improve my javascript accumen. So I want to give back and give everyone some perspective as I learn new and cool things. Check back as I make occasional posts on things I learn. Take care!",
  },
];

export default const Blog = () => (
  <div className="container">
    <Header />
    <title>Blog</title>
    {blogPosts.map(blogpost => (
      <Blogpost blogpost={blogpost} />
    ))}
  </div>
);

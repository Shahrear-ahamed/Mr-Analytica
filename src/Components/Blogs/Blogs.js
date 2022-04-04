import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="ques-ans-section">
      <div className="questions question-one">
        <h2>What is Context API? How it work?</h2>
        <p>
          In react js we can transfer one component to another using props. If
          we have a child of child elements and we want to transfer a data end
          element, in this case, we have only one option to transfer this data
          using props. Now the context API solve this problem of props drilling.
          Context API We can transfer data anywhere, we just need to do 3
          things.
          <p>1. We need to declare the context API using createContext().</p>
          <p>
            2. Then we should wrap the whole container to supply another
            container.
          </p>
          <p>3. And the last one is defined in this context.</p>
        </p>
      </div>
      <div className="questions question-two">
        <h2>What is Semantic tag?</h2>
        <p>
          A semantic tag describes what is inside this tag. Semantic tags are
          easy to understand by browsers and developers. A developer can easily
          understand why this tag has been used. Semantic tags are used for
          search engine optimization (SEO) These tags help to navigate visually
          impaired persons by using a screen reader. for example header and
          footer tag are semantic tags, this tag are using on the top and bottom
          of a page.
        </p>
      </div>
      <div className="questions question-three">
        <h2>Difference between Block, Inline and Inline-block?</h2>
        <p>
          Display properties can specify the behavior of an element, and what
          this element will perform. Basically, HTML has two types of display
          behavior, one is inline, and the other is blocked. In CSS we can
          manipulate this display property.
          <p>
            1. The inline elements will not affect the height and width
            properties, this height and width are not changeable.
          </p>
          <p>
            2. Block elements are contained The full width of a page. height and
            width of a page can be changeable.
          </p>
          <p>
            3. Inline-block is a CSS property, this property can help access the
            height and width of an inline element, and block elements can use
            inline behavior.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4 text-neutral">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-neutral">
        A React app to search GitHub profiles and see profile details. This
        project is part of my learning.
        <p>
          This App can blah blah blah blah Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sed odit minus doloribus possimus
          architecto ratione mollitia molestias deleniti et repellendus
          veritatis adipisci, omnis quasi, distinctio eum perspiciatis. Numquam,
          doloribus quos!
        </p>
      </p>
      <p className="text-lg text-neutral">
        Source Code:
        <a
          className="shadow-lg bg-neutral text-neutral-content rounded-lg p-1 ml-2"
          href="https://github.com/dhanushrao12/Github_Finder"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default About;

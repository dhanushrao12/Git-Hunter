import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4 text-neutral">Git-Hunter</h1>
      <div className="mb-4 text-2xl font-light text-neutral">
        A React app to search GitHub profiles and see profile details. You can
        also find the links and details of the recent repos created by the user.
        <p>
          This project is part of my learning. It has been built using ReactJs
          and uses Tailwaind CSS and Daisy UI for design aspect.
        </p>
      </div>
      <div className="text-lg text-neutral">
        Source Code:
        <a
          className="shadow-lg bg-neutral text-neutral-content rounded-lg p-1 ml-2"
          href="https://github.com/dhanushrao12/Github_Finder"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default About;

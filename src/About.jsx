// About.jsx
import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <img
          src="/IMG_3862.jpg"
          alt="headshot"
          className="w-80 border-2 border-gray-300 dark:border-gray-500 rounded-lg mr-4"
        />
        <div className="max-w-md">
          {" "}
          {/* Limit the width of the text */}
          <h1 className="text-2xl font-bold mb-2">About Me</h1>
          <p>
            I'm passionate about web development and creating user experiences.
            When I'm not coding and learning new technologies, I enjoy playing
            guitar and spending time with my family. I'm currently working on a
            mortgage calculator app. Check out my projects below!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

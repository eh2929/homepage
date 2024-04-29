// Blog.jsx
import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Navigating the JSON Server: POST, PATCH, and _embed",
      link: "https://medium.com/@ethanhough29/navigating-the-json-server-post-patch-and-embed-8152c4b9926e",
      excerpt:
        "In this article, we will explore how to use the JSON Server to create, update, and delete data. We will also learn how to use the _embed feature to include related resources in our API responses.",
    },
    {
      title: "Understanding Props and States in React",
      link: "https://medium.com/@ethanhough29/understanding-props-and-states-in-react-3377f67a2773",
      excerpt:
        "In this article, we will explore how to use props and states in React. We will learn how to pass data from parent components to child components using props and how to manage component-specific data using states.",
    },
    {
      title:
        "Mastering Lambda Functions in Python: A Comprehensive Guide for Beginners",
      link: "https://medium.com/@ethanhough29/mastering-lambda-functions-in-python-a-comprehensive-guide-for-beginners-b0133bb1f220",
      excerpt:
        "In this article, we will explore lambda functions in Python. We will learn what lambda functions are, how to define them, and how to use them in various contexts.",
    },
    {
      title: "Building Secure Web Apps with Flask-SQLAlchemy",
      link: "https://medium.com/@ethanhough29/building-secure-web-apps-with-flask-sqlalchemy-cef2bf012c76",
      excerpt:
        "In this article, we will explore how to build secure web applications with Flask-SQLAlchemy. We will learn how to use SQLAlchemy to interact with databases and how to implement security best practices to protect our applications from common vulnerabilities.",
    },
    {
      title: "ADHD and Software Engineering Bootcamps",
      link: "https://medium.com/@ethanhough29/adhd-and-software-engineering-bootcamps-119746439628",
      excerpt:
        "In this article, we will explore how ADHD can impact your experience in a software engineering bootcamp. We will discuss strategies for managing ADHD symptoms and optimizing your learning experience.",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen p-10">
      <h1 className="text-2xl font-bold mb-4">My blog posts</h1>
      <div className="grid gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="border p-4 ">
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <p className="mt-2 text-xl font-bold">{blog.title}</p>
              <p className="mt-2">{blog.excerpt}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

import React from "react";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ProjectDisplay from "./ProjectDisplay";
import MortgageApp from "./MortgageApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Blog from "./Blog";

function MainContent() {
  return (
    <div className="h-screen">
      <div className="h-1/2 flex justify-center items-center">
        <div className="body-content flex items-center mt-10">
          <div className="ml-4">
            <div className="text-4xl flex justify-center">Hi, I'm Ethan.</div>
            <div className="flex justify-center">
              I'm a web developer. I'm passionate about creating simple apps
              with powerful functions.
            </div>
            Checkout my latest projects below!
          </div>
        </div>
      </div>
      <div className="h-1/2 flex justify-center">
        <ProjectDisplay />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />{" "}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects/mortgage-app" element={<MortgageApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

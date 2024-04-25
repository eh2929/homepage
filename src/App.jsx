import React from "react";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ProjectCarousel from "./Project-Carousel";
import MortgageApp from "./MortgageApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainContent() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <NavBar />
      </div>
      <div className="flex justify-center items-center">
        <div className="body-content flex items-center mt-10">
          <img
            src="src/assets/IMG_3933.jpg"
            alt="headshot"
            className="w-80 border-2 border-gray-300 dark:border-gray-500 rounded-lg"
          />
          <div className="ml-4">
            <div className="text-4xl">Hi, I'm Ethan.</div>
            <div>I'm a web developer. I love creating apps and websites!</div>
            {/* Add your body content here */}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <ProjectCarousel />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects/mortgage-app" element={<MortgageApp />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

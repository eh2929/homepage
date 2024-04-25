import React from "react";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center items-center">
        <NavBar />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="body-content flex items-center">
          <img src="src/assets/IMG_3933.jpg" alt="headshot" className="w-80" />
          <div className="ml-4">
            <div className="text-4xl">Hi, I'm Ethan</div>
            <div>I'm a web developer. I love creating apps and websites!</div>
            {/* Add your body content here */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">Projects</div>
    </ThemeProvider>
  );
}

export default App;

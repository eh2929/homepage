import React from "react";

function MortgageApp() {
  return (
    <div>
      <div
        className="banner"
        style={{ backgroundImage: "url(/path/to/banner.jpg)" }}
      >
        {" "}
        {/* Replace with the path to your banner image */}
        <h1>Mortgage App</h1>
      </div>
      <div className="description">
        <p>This is a short description of the Mortgage App project.</p>
        <a
          href="https://github.com/eh2929/Mortgage-Client-Communications"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>{" "}
        {/* Replace with the actual GitHub URL of your Mortgage App project */}
      </div>
    </div>
  );
}

export default MortgageApp;

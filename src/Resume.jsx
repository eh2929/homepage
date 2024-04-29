// Resume.jsx
import React from "react";

function Resume() {
  return (
    <div className="flex justify-center items-center h-screen">
      <embed
        src="src/assets/Ethan_Hough_Resume.pdf"
        type="application/pdf"
        width="80%"
        height="80%"
      />
    </div>
  );
}

export default Resume;

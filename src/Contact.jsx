// Contact.jsx
import React, { useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

init("lkZhs-nSIjHa0VtWJ"); // Replace with your public key

function Contact() {
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm("contact_service", "contact_form", event.target).then(
      () => {
        console.log("SUCCESS!");
        setEmailSent(true);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-2">Contact Me</h1>
        <p>
          If you have any questions or would like to discuss a project, feel
          free to contact me at:
        </p>
        <p>Email: ethanhough29@gmail.com</p>
        <p>Phone: 269-271-0058</p>

        <form className="mt-4" onSubmit={sendEmail}>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full mb-4 p-2 border rounded"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full mb-4 p-2 border rounded"
          />

          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            className="w-full mb-4 p-2 border rounded text-black"
            rows="4"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded"
          />
        </form>
        {emailSent && (
          <p>Message sent successfully. Thank you for reaching out!</p>
        )}
      </div>
    </div>
  );
}

export default Contact;

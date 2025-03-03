import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Email sent successfully!");
        onClose();
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-opacity-50">
      <div className="bg-zinc-900 p-20 rounded-lg w-1/2 h-auto shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-white">Send Me an Email</h2>
        <form onSubmit={sendEmail} className="flex flex-col gap-3">
            <h1 className="text-sm text-white font-semibold">Name</h1>
          <input type="text" name="name" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange} required />
          <h1 className="text-sm text-white font-semibold">Email</h1>
          <input type="email" name="email" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange} required />
          <h1 className="text-sm text-white font-semibold">Company (optional)</h1>
          <input type="text" name="company" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange} />
          <h1 className="text-sm text-white font-semibold">Project Details</h1>
          <textarea name="message" className="text-white border border-gray-600 p-2 rounded h-40" onChange={handleChange} required></textarea>
          <div className="flex flex-row w-full gap-2 items-end justify-end">
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 hover:cursor-pointer duration-300" onClick={onClose}>
          Cancel
            </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer duration-300">Send Query</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
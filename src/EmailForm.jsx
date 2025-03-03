import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMessage(true); // Show success message
        setTimeout(() => {
          setSuccessMessage(false); // Hide success message after 3s
          onClose(); // Now close the form
        }, 3000);
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <>
      {/* Email Form Overlay */}
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
        <div className="bg-zinc-900 p-10 rounded-lg w-auto lg:w-1/3 h-auto shadow-lg relative">
          <h2 className="text-xl font-bold mb-4 text-white">Tell me about your project</h2>
          <form onSubmit={sendEmail} className="flex flex-col gap-3">
            <h1 className="text-sm text-white font-semibold">Name</h1>
            <input type="text" name="name" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange} required />
            <h1 className="text-sm text-white font-semibold">Email</h1>
            <input type="email" name="email" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange} required />
            <h1 className="text-sm text-white font-semibold">Company (optional)</h1>
            <input type="text" name="company" className="text-white border border-gray-600 p-2 rounded" onChange={handleChange}/>
            <h1 className="text-sm text-white font-semibold">Message</h1>
            <textarea name="message" className="text-white border border-gray-600 p-2 rounded h-40" onChange={handleChange} required></textarea>
            <div className="flex flex-row w-full gap-2 items-end justify-end">
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 hover:cursor-pointer" onClick={onClose}>Cancel</button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer">Send Query</button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Message Overlay */}
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold">✅ Email Sent Successfully!</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailForm;
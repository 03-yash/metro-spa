import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const Form = () => {
  // useState variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required!");
      return;
    }

    const serviceId = "service_dkxwqq2";
    const templateId = "template_em1ejbo";
    const publicKey = "6Q-kBkV3Ti4iCmtoQ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rohit Verma",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <hr className="border-8 border-pink-400 bg-pink-400 mt-2 h-9 w-full" />

      <div className="w-full text-center px-6">
        <h1 className="pt-16 text-xl text-black font-bold sm:text-4xl lg-text-8xl font-heading">
          Have Questions? We’re Here to Help!
        </h1>
      </div>

      <form
        id="form-field"
        className="flex flex-col items-start space-y-10 mt-14 sm:w-3/4 px-10 sm:px-16 lg:px-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-highlight">ASK US ANYTHING</h1>

        <input
          type="text"
          placeholder="Enter your name here..."
          className="w-full border py-2 pl-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Message Here..."
          className="border w-full pb-24 pl-2 text-start justify-start resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input
          type="email"
          placeholder="Enter email here..."
          className="w-full border py-2 pl-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="relative font-body mt-8 w-48 h-10 font-bold text-pink-500 border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out overflow-hidden group"
        >
          <span className="absolute inset-0 bg-pink-500 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10">SEND MESSAGE</span>
        </button>
      </form>
    </div>
  );
};

export default Form;

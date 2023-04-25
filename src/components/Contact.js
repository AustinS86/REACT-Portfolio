import React, { useState } from "react";
import Container from "./Container";

const Contact = () => {
  const [nameError, setNameError] = useState("false");
  const [emailError, setEmailError] = useState("false");
  const [messageError, setMessageError] = useState("false");
  const [submitted, setSubmitted] = useState("false");

  const customizeValidationMessage = (event) => {
    event.target.setCustomValidity("");
    if (!event.target.validity.valid) {
      event.target.setCustomValidity("Please enter a valid email");
    }
  };

  const handleBlur = (e) => {
    if (!submitted) return;
    if (e.target.id === "grid-first-name" && e.target.value === "") {
      setNameError("true");
    } else if (e.target.id === "grid-email" && e.target.value === "") {
      setEmailError("true");
    } else if (e.target.id === "grid-message" && e.target.value === "") {
      setMessageError("true");
    } else {
      setNameError("false");
      setEmailError("false");
      setMessageError("false");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted("true");
    if (
      document.getElementById("grid-first-name").value === "" ||
      document.getElementById("grid-email").value === "" ||
      document.getElementById("grid-message").value === ""
    ) {
      return;
    }
  };
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Container width="max-w-lg">
        <div>
          <section id="contact" className="contact mb-10">
            <h1 className="text-4xl font-bold text-white">Contact</h1>
          </section>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  required
                  onBlur={handleBlur}
                />
                {nameError === "true" && (
                  <p className="text-red-500 text-xs italic font-bold text-lg">
                    Please enter your name.
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="Email"
                  required
                  onBlur={handleBlur}
                  onInvalid={customizeValidationMessage}
                  onInput={customizeValidationMessage}
                />
                {emailError === "true" && (
                  <p className="text-red-500 text-xs italic font-bold text-lg">
                    Please enter your email.
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                  id="grid-message"
                  placeholder="Message"
                  required
                  onBlur={handleBlur}
                ></textarea>
                {messageError === "true" && (
                  <p className="text-red-500 text-xs italic font-bold text-lg">
                    Please enter your message.
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

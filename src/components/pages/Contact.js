import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  let flex = "contact-flex";
  let contactClass = "contact-container";
  let ulClass = "contact-ul";
  let contactLi = "contact-li plain";
  let form = "form";
  let messageInput = "message-input";

  return (
    <div className={flex}>
      <div className={contactClass}>
        <h2 id="contact" class>
          Contact Me
        </h2>
        <ul className={ulClass}>
          <li className={contactLi}>
            <a href="mailto:malicea0783@gmail.com">malicea0783@gmail.com</a>
          </li>
          <li className={contactLi}>
            <a href="tel:3052970112">305.297.0112</a>
          </li>
          <li className={contactLi}>
            <a href="https://www.linkedin.com/in/malicea0783">LinkedIn</a>
          </li>
          <li className={contactLi}>
            <a href="https://github.com/malicea0783">GitHub</a>
          </li>
        </ul>
        <a
          class="resume"
          href="https://docs.google.com/document/d/1-mXU_BaJjK7HiIpri6gVOkoUlCzCk_g47W71WeD1LbU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          download my resume
        </a>
      </div>

      <div className={form}>
        <div>
          <h2>say hi</h2>
        </div>
        <form method="POST">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Type message here..."
            className={messageInput}
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

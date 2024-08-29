import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    helpType: "",
    details: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own EmailJS service ID, template ID, and public key
    emailjs
      .send(
        "service_m48jv7r",
        "template_adbvkwg",
        formData,
        "p7oN8NqSYov4ZfxyP"
      )
      .then(
        (response) => {
          console.log("Email successfully sent:", response);
          setIsSubmitted(true);
          setFormData({
            name: "",
            helpType: "",
            details: "",
            email: "",
            phone: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="contact-me-container">
      <div className="contact-me">
        <div className="col">
          <h2>Let's get Together. Yeah, yeah, yeah...</h2>
          <p>
            Use this little form right here to get in touch with me. Add a
            little info, if you please, so I know what you’re all about and I’ll
            be emailing you back A.S.A.P.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="My name is..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <select
              name="helpType"
              value={formData.helpType}
              onChange={handleChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Web design">Web design</option>
              <option value="Web development">Web development</option>
              <option value="Branding">Branding</option>
              <option value="Digital marketing">Digital marketing</option>
            </select>

            <textarea
              name="details"
              placeholder="Here's a few more specific details about me and my project..."
              value={formData.details}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="And you can reach me at this email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Or this phone number..."
              value={formData.phone}
              onChange={handleChange}
            />
            <button type="submit">SEND TO JORDAN</button>
          </form>
        </div>
        {isSubmitted && (
          <div className="col">
            <h1>
              Thanks for the mail.
              <br />I can't wait to read it!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

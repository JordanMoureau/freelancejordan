import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./popup.css";

export default function PopUp() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    honeypot: "",
  }); // Add honeypot field
  const [isSent, setIsSent] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) return null;

  const services = [
    "Illustration",
    "SEO Optimization",
    "Commercial Photography",
    "Websites",
    "Print Media/Merc",
    "Branding",
    "Marketing Campaigns",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the honeypot field is filled out
    if (formData.honeypot) {
      console.log("Bot detected!");
      return;
    }

    // Prepare email data
    const templateParams = {
      name: formData.name,
      email: formData.email,
      project_type: selectedService || "Not selected",
    };

    emailjs
      .send(
        "service_ua2hbno", // Replace with your Email.js service ID
        "template_r0sd0zc", // Replace with your Email.js template ID
        templateParams,
        "p7oN8NqSYov4ZfxyP" // Replace with your Email.js user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <motion.div
      className="pop-up-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.5,
        }}
        className="pop-up-box"
      >
        <div className="x" onClick={handleClose}>
          x
        </div>

        <div className="pop-up-head">
          <h1>Wanna Work Together?</h1>
        </div>

        <div className="pop-up-body">
          <Services
            services={services}
            selectedService={selectedService}
            onServiceClick={handleServiceClick}
          />

          <h2>Pick a project type and drop me a line.</h2>

          <form className="pop-up-form" onSubmit={handleSubmit}>
            <input
              className="pop-up-form"
              type="text"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="pop-up-form"
              type="email"
              name="email"
              placeholder="And your email?"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* Honeypot field (invisible to users) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <button
              className={`pop-button ${isSent ? "button-disabled" : ""}`}
              type="submit"
              disabled={isSent}
            >
              Send it!
            </button>
          </form>

          {isSent && <p>Thank you! Your message has been sent.</p>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services({ services, selectedService, onServiceClick }) {
  return (
    <div className="pop-services">
      {services.map((service, index) => (
        <span
          key={index}
          className={`service-bubbles ${
            selectedService === service ? "selected" : ""
          }`}
          onClick={() => onServiceClick(service)}
        >
          {service}
        </span>
      ))}
    </div>
  );
}

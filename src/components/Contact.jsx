import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations once the card is in view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusts the parallax effect based on scroll
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);
  return (
    <div className="contact-container" ref={ref}>
      <motion.div
        className="contact-card"
        initial={{ y: 300 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="left-side">
          <div className="img-container">
            <motion.img
              src="contact.jpg"
              alt="Contact"
              className="contact-image"
              style={{ y }}
            />
          </div>
          <h1>Let's Get in Touch</h1>
        </div>
        <div className="divider"></div>
        <div className="right-side">
          <h2>Personal Information</h2>
          <div className="fields-container">
            <div className="name-fields">
              <input
                type="text"
                placeholder="First Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-field"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="address-field"
            />
            <input
              type="text"
              placeholder="Telephone"
              className="address-field"
            />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

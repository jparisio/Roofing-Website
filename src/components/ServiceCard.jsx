import { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import "./Services.css";

export default function ServiceCard({ service, y, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations once the card is in view

  return (
    <motion.div
      ref={ref}
      className="card-container"
      initial={{ y: 200, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.4 },
        duration: 1,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Parallax image */}
      <div className="image-display">
        <motion.img
          src={service.image}
          alt={service.name}
          className="card-image"
          style={{ y }}
        />
      </div>

      {/* Service name */}
      <p className="card-text">{service.name}</p>
    </motion.div>
  );
}

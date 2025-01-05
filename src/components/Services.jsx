import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./ServiceCard";
import "./Services.css";

export default function Services() {
  return (
    <motion.div className="services-container">
      <li class="service-item">
        <div class="stripe-animate"></div>
        <a href="" class="row">
          <div class="flex-col large-text">
            <h4>
              <span>RESIDENTIAL</span>
            </h4>
          </div>
          <div class="flex-col small-text">
            <p>Home &amp; Living</p>
          </div>
        </a>
        <div class="stripe-animate"></div>
      </li>
      <li class="service-item">
        <div class="stripe-animate"></div>
        <a href="" class="row">
          <div class="flex-col large-text">
            <h4>
              <span>COMMERCIAL</span>
            </h4>
          </div>
          <div class="flex-col small-text">
            <p>Construction &amp; Reno</p>
          </div>
        </a>
        <div class="stripe-animate"></div>
      </li>
      <li class="service-item">
        <div class="stripe-animate"></div>
        <a href="" class="row">
          <div class="flex-col large-text">
            <h4>
              <span>REPAIRS</span>
            </h4>
          </div>
          <div class="flex-col small-text">
            <p>Cleaning &amp; Maintenance</p>
          </div>
        </a>
        <div class="stripe-animate"></div>
      </li>
      <li class="service-item">
        <div class="stripe-animate"></div>
        <a href="" class="row">
          <div class="flex-col large-text">
            <h4>
              <span>WINDOWS</span>
            </h4>
          </div>
          <div class="flex-col small-text">
            <p>Install &amp; Replace</p>
          </div>
        </a>
        <div class="stripe-animate"></div>
      </li>
    </motion.div>
  );
}

// import { useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import ServiceCard from "./ServiceCard";
// import "./Services.css";

// export default function Services() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // Adjusts the parallax effect based on scroll
//   });

//   const services = [
//     { name: "RESIDENTIAL", image: "residential.jpg" },
//     { name: "COMMERCIAL", image: "commercial.jpg" },
//     { name: "REPAIRS", image: "repairs.jpg" },
//   ];

//   const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
//   return (
//     <motion.div className="services-container" ref={ref}>
//       <div className="cards-holder-container">
//         {services.map((item, key) => (
//           <ServiceCard service={item} key={key} y={y} index={key} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }
